export default function About() {
  return (
    <section
      id="aboutus"
      className="py-4 md:py-12 bg-blue-50 rounded-xl bg-accent-dark text-white px-4 md:px-8 mb-5 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Who Are We?</h2>
            <p className="text-md md:text-lg mb-4">
              MediaCompressor is a team of passionate developers dedicated to
              making media management fast, efficient, and user-friendly. With a
              strong focus on quality and security, our mission is to simplify
              your workflow and save you time.
            </p>
            <p className="text-md md:text-lg">
              Since our launch in 2024, we’ve helped thousands of users
              streamline their media storage, and we’re just getting started!
            </p>
        </div>
      </div>
    </section>
  );
}
