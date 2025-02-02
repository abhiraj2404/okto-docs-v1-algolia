import { Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex w-40 items-center gap-3">
            <Image
              src="/logo/okto-icon.png"
              alt="Okto Logo"
              width={50}
            />
            <div className="text-lg">
                Okto
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Wallet</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Lite SDK</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Points</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Developers</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Docs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Open Source</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Whitepaper</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Okto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
