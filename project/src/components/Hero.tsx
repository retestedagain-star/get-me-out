import { LifeBuoy } from 'lucide-react';

interface HeroProps {
  onSubmitClick: () => void;
}

export function Hero({ onSubmitClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-14">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-400 via-orange-300 to-orange-500 rounded-full opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <LifeBuoy className="w-32 h-32 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
          Get me out.
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Share your problem and we'll help you find a way out.
        </p>

        <button
          onClick={onSubmitClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105"
        >
          Submit a Problem
        </button>
      </div>
    </section>
  );
}
