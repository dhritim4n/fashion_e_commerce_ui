export default function Footer() {
  return (
    <footer className="w-full  mb-0 mt-10 bottom-0 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-lg font-semibold">TR3NDZ</h2>

          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Products</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-6"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TR3NDZ. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
