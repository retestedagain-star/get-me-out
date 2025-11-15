export function InfoSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          We're Here to Help
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Every problem has a solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition">
            Learn More
          </button>
          <button className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-full text-lg font-medium transition">
            View Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
