/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import fs from 'fs';
import { app, BrowserWindow, shell, ipcMain, dialog } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { resolveHtmlPath } from './util';
import ISettings from '../contracts/ISettings';
import Config from './config/Config';
import FileFabric from './file/FileFabric';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('select.folder', async (event) => {
  const data = await dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory'],
  });
  if (data.canceled) return;
  event.reply('select.folder', data.filePaths);
});

function readDirFiles(folderPath: string): string[] {
  if (!fs.lstatSync(folderPath).isDirectory()) {
    if (Array.isArray(folderPath)) return folderPath;
    return [folderPath];
  }
  const files = fs.readdirSync(folderPath);
  const data = [];
  for (const fileName of files) {
    data.push(...readDirFiles(`${folderPath}/${fileName}`));
  }
  return data;
}

let isCancel = false;

ipcMain.on('compress.cancel', () => {
  isCancel = true;
});

ipcMain.on('compress.start', async (event, data: ISettings) => {
  isCancel = false;

  const toCompress = readDirFiles(data.targetFolder);
  if (!toCompress.length) {
    event.reply('compress.exception', 'The Folder is Empty');
    return;
  }

  event.reply('found.files', toCompress.length);

  const config = new Config(data);

  for (const filePath of toCompress) {
    if (isCancel) {
      break;
    }
    const FileItem = FileFabric.getConstructor(path.extname(filePath));

    const file = new FileItem(filePath, config);
    event.reply('file.start', file.name);

    try {
      await file.handle(event.reply);
      if (file.config.shouldDeleteSource) file.deleteSrcFile();
      event.reply('compress.file');
    } catch (err) {
      event.reply('compress.error', filePath);
    }
  }

  event.reply('compress.completed');
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

ipcMain.on('app.init', async (event) => {
  const packages = require('../../package.json');

  event.reply('app.init', {
    title: `${packages.build.productName} ${packages.version}`,
    description: packages.description,
  });
});

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  new AppUpdater();
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
