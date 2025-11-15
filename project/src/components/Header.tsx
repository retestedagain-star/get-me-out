import { LifeBuoy, Search, ShoppingBag } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-8">
            <LifeBuoy className="h-6 w-6" />
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">Submit</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">Problems</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">Support</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
