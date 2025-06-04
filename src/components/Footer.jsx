import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/fcd34e7662c3fb554147ad464c053e6e.jpg" 
                alt="Bhawani Tiles Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Bhawani Tiles</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium quality tiles and pavers for contemporary, modern, and stylish spaces. 
              Excellence in every tile.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Paver Blocks</li>
              <li>Chequered Tiles</li>
              <li>Mosaic Tiles</li>
              <li>Kerb Stone</li>
              <li>Step & Rizer</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Applications</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Projects</li>
              <li>Commercial Spaces</li>
              <li>Parking Areas</li>
              <li>Drive Ways</li>
              <li>Pathways & Ramps</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Bhawani Tiles Industries. All rights reserved. | Quality, Innovation, Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;