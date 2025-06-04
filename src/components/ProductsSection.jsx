import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from 'lucide-react';

const tileData = [
  { id: 'LR001', name: 'Lunar Rock (Arch)', size: '380x190 mm', weight: '6 kg', thickness: '60 mm', area: '0.5 sqft', coverage: '200 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/9e6ee46eac45285849411ab7c1cbf035.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/14d3557ccf8df02294faf2936d61db00.jpg' },
  { id: 'CS002', name: 'Cosmic', size: '280x140 mm', weight: '6.2 kg', thickness: '60 mm', area: '0.555 sqft', coverage: '180 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-cosmic-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-cosmic-detail.jpg' },
  { id: 'ZZ003', name: 'Zig Zag', size: '260x130 mm', weight: '4-5.3 kg', thickness: '60/80 mm', area: '0.357 sqft', coverage: '280 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-zigzag-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-zigzag-detail.jpg' },
  { id: 'DI004', name: 'Dumble (I)', size: '200x160 mm', weight: '3.75 kg', thickness: '60 mm', area: '0.333 sqft', coverage: '300 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-dumble-i-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-dumble-i-detail.jpg' },
  { id: 'B612005', name: 'Brick 6x12', size: '300x150 mm', weight: '5.75 kg', thickness: '60 mm', area: '0.5 sqft', coverage: '200 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-brick612-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-brick612-detail.jpg' },
  { id: 'B66006', name: 'Brick 6x6', size: '150x150 mm', weight: '2.8 kg', thickness: '60 mm', area: '0.25 sqft', coverage: '400 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-brick66-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-brick66-detail.jpg' },
  { id: 'B88007', name: 'Brick 8x8', size: '200x200 mm', weight: '5.25 kg', thickness: '60 mm', area: '0.444 sqft', coverage: '225 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-brick88-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-brick88-detail.jpg' },
  { id: 'GP008', name: 'Grass Paver', size: '250x250 mm', weight: '6.3 kg', thickness: '60 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-grasspaver-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-grasspaver-detail.jpg' },
  { id: 'KS009', name: 'Kerb Stone', size: '300x300 mm', weight: '18 kg', thickness: '100 mm', area: '1 sqft', coverage: '100 pcs/100 sqft', colors: [], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-kerbstone-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-kerbstone-detail.jpg' },
  { id: 'DIO010', name: 'Dumble (I) (Ordinary)', size: '200x170 mm', weight: '3.5 kg', thickness: '60 mm', area: '0.333 sqft', coverage: '300 pcs/100 sqft', colors: ['Red', 'Grey'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-dumble-io-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-dumble-io-detail.jpg' },
  { id: 'AQ1010011', name: 'Aqupressure 10x10 (Paver)', size: '250x250 mm', weight: '3 kg', thickness: '30 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-aqupressure1010p-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-aqupressure1010p-detail.jpg' },
  { id: 'BS1010012', name: 'Bobbystar 10x10', size: '250x250 mm', weight: '3 kg', thickness: '30 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-bobbystar1010-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-bobbystar1010-detail.jpg' },
  { id: 'PY1010013', name: 'Pyramid 10x10', size: '250x250 mm', weight: '3 kg', thickness: '30 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-pyramid1010-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-pyramid1010-detail.jpg' },
  { id: 'PY1616014', name: 'Pyramid 16x16', size: '400x400 mm', weight: '18 kg', thickness: '40 mm', area: '1.777 sqft', coverage: '57 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-pyramid1616-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-pyramid1616-detail.jpg' },
  { id: 'PL1010015', name: 'Plane 10x10', size: '250x250 mm', weight: '2.3 kg', thickness: '17 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-plane1010-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-plane1010-detail.jpg' },
  { id: 'NK1212016', name: 'Nilkamal 12x12', size: '300x300 mm', weight: '5 kg', thickness: '30 mm', area: '1 sqft', coverage: '100 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-nilkamal1212-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-nilkamal1212-detail.jpg' },
  { id: 'BT1212017', name: 'Button 12x12', size: '300x300 mm', weight: '5 kg', thickness: '30 mm', area: '1 sqft', coverage: '100 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-button1212-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-button1212-detail.jpg' },
  { id: 'ST1212018', name: 'Step (12x12)', size: '300x300 mm', weight: '5 kg', thickness: '30 mm', area: '1 sqft', coverage: '100 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-step1212-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-step1212-detail.jpg' },
  { id: 'RZ612019', name: 'Rizer (6x12)', size: '300x150 mm', weight: '2.5 kg', thickness: '30 mm', area: '0.5 sqft', coverage: '200 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-rizer612-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-rizer612-detail.jpg' },
  { id: 'DT1010020', name: 'Dana Tile 10x10', size: '250x250 mm', weight: '2.6 kg', thickness: '20 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Yellow', 'Grey', 'Black'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-danatile1010-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-danatile1010-detail.jpg' },
  { id: 'HR1010021', name: 'Half Round 10x10', size: '250x250 mm', weight: '2.5 kg', thickness: '20 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Grey'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-halfround1010-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-halfround1010-detail.jpg' },
  { id: 'BC1010022', name: 'Bobby (Coin) 10x10', size: '250x250 mm', weight: '2.5 kg', thickness: '20 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Grey'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-bobbycoin1010-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-bobbycoin1010-detail.jpg' },
  { id: 'AQ1010023', name: 'Aqupressure 10x10 (Chequered)', size: '250x250 mm', weight: '2.3 kg', thickness: '20 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Grey'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-aqupressure1010c-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-aqupressure1010c-detail.jpg' },
  { id: 'C25B1010024', name: 'Cadbury (25 Box) 10x10', size: '250x250 mm', weight: '2.3 kg', thickness: '20 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Grey'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-cadbury25-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-cadbury25-detail.jpg' },
  { id: 'C100B1010025', name: 'Cadbury (100 Box) 10x10', size: '250x250 mm', weight: '2.3 kg', thickness: '20 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Grey'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-cadbury100-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-cadbury100-detail.jpg' },
  { id: 'DM1010026', name: 'Dumru 10x10', size: '250x250 mm', weight: '2.3 kg', thickness: '17 mm', area: '0.694 sqft', coverage: '144 pcs/100 sqft', colors: ['Red', 'Grey'], applications: 'Porch, Parking, Driveway, Pathway, Ramp, Commercial Place', img: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-dumru1010-main.jpg', imgDetail: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/3f3a14de-1cb1-49c2-855a-11f785e4ffbf/placeholder-dumru1010-detail.jpg' },
];

const ProductsSection = ({ scrollToSection }) => {
  const [selectedTile, setSelectedTile] = useState(null);
  const [selectedImage, setSelectedImage] = useState('main');

  const openModal = (tile) => {
    setSelectedTile(tile);
    setSelectedImage('main');
  };

  const closeModal = () => {
    setSelectedTile(null);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-red-600">Tile Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our premium tiles and pavers for every application
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tileData.map((tile, index) => (
            <motion.div
              key={tile.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => openModal(tile)}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={tile.img} 
                  alt={tile.name} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tile.name}</h3>
                <p className="text-sm text-gray-600 mb-1">Size: {tile.size}</p>
                <p className="text-sm text-gray-600">Thickness: {tile.thickness}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {tile.colors && tile.colors.length > 0 ? 
                    tile.colors.slice(0,3).map(color => (
                      <span key={color} className="px-2 py-1 text-xs rounded-full border" style={{borderColor: color.toLowerCase(), color: color.toLowerCase()}}>{color}</span>
                    ))
                    : <span className="px-2 py-1 text-xs rounded-full border text-gray-500">N/A</span>
                  }
                  {tile.colors && tile.colors.length > 3 && <span className="px-2 py-1 text-xs rounded-full border text-gray-500">+{tile.colors.length -3} more</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            onClick={() => scrollToSection('contact')}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {selectedTile && (
          <Dialog open={!!selectedTile} onOpenChange={closeModal}>
            <DialogContent className="sm:max-w-[800px] glass-effect border-gray-300">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-800">{selectedTile.name}</DialogTitle>
                <DialogDescription className="text-gray-600">
                  Detailed specifications and information
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                <div className="space-y-4">
                  <motion.div 
                    className="relative rounded-lg overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <img 
                      src={selectedImage === 'main' ? selectedTile.img : selectedTile.imgDetail} 
                      alt={selectedTile.name} 
                      className="w-full h-auto rounded-lg object-cover aspect-square"
                    />
                    <div className="absolute bottom-4 right-4 space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage('main');
                        }}
                        className={selectedImage === 'main' ? 'bg-white' : 'bg-white/50'}
                      >
                        View 1
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage('detail');
                        }}
                        className={selectedImage === 'detail' ? 'bg-white' : 'bg-white/50'}
                      >
                        View 2
                      </Button>
                    </div>
                  </motion.div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold mb-4">Specifications</h4>
                    <div className="space-y-2">
                      <p><strong>Size:</strong> {selectedTile.size}</p>
                      <p><strong>Weight:</strong> {selectedTile.weight}</p>
                      <p><strong>Thickness:</strong> {selectedTile.thickness}</p>
                      <p><strong>Area/pc:</strong> {selectedTile.area}</p>
                      <p><strong>Coverage:</strong> {selectedTile.coverage}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold mb-4">Available Colors</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTile.colors && selectedTile.colors.length > 0 ? 
                        selectedTile.colors.map(color => (
                          <span 
                            key={color}
                            className="px-3 py-1 rounded-full text-sm border-2"
                            style={{
                              borderColor: color.toLowerCase(),
                              color: color.toLowerCase(),
                              backgroundColor: `${color.toLowerCase()}10`
                            }}
                          >
                            {color}
                          </span>
                        ))
                        : <p className="text-gray-700">Not Applicable</p>
                      }
                    </div>
                  </div>
                  
                  <div className="bg-white/80 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold mb-4">Applications</h4>
                    <p className="text-gray-700">{selectedTile.applications}</p>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={closeModal}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsSection;