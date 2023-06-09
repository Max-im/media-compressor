import fs from 'fs';
import path from 'path';
import ISettings from '../../contracts/ISettings';

export default class Config {
  srcPath: string;
  srcDir: string;
  outPath: string;
  shouldDeleteSource: boolean;
  ignoreNonMediaFiles: boolean;

  constructor(data: ISettings) {
    const { targetFolder } = data;

    console.log(data);
    this.ignoreNonMediaFiles = data.ignoreNonMediaFiles;
    this.shouldDeleteSource = data.deleteSourceFiles;
    this.srcPath = path.dirname(targetFolder);
    this.srcDir = path.basename(targetFolder);

    let outPath;
    if (data.outputDirectory === 'near') {
      outPath = path.join(this.srcPath, `${this.srcDir}_compressed`);
    } else {
      outPath = path.join(targetFolder, `${this.srcDir}_compressed`);
    }
    this.outPath = outPath;

    if (!fs.existsSync(this.outPath)) {
      fs.mkdirSync(this.outPath);
    }
  }
}
