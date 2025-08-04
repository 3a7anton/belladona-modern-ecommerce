import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ShopNavbar from './ShopNavbar';
import { useCart } from '../context/CartContext';
import './ShopPage.css';

const ShopPage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(3);
  const [activeCategory, setActiveCategory] = useState('handbags');
  const sliderRef = useRef<HTMLDivElement>(null);
  const mobileTabsRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const categories = [
    { id: 'handbags', name: 'Luxury Handbags' },
    { id: 'jewelry', name: 'Fine Jewelry' },
    { id: 'earrings', name: 'Elegant Earrings' },
    { id: 'normal-purse', name: 'Normal Purse' },
    { id: 'clothing', name: 'Designer Clothing' }
  ];

  // Duplicate categories for infinite scroll effect (mobile only)
  const infiniteCategories = [...categories, ...categories, ...categories];

  const handbags = [
    {
      id: 1,
      name: "Premium Leather Handbag",
      description: "Luxury handcrafted leather bag with elegant design and premium finish. Perfect for sophisticated women who appreciate quality craftsmanship.",
      price: "$299",
      image: "/img/premium purse/473079038_461559643672596_4187805008091011511_n.jpg"
    },
    {
      id: 2,
      name: "Designer Clutch",
      description: "Exclusive designer clutch featuring unique patterns and premium materials. A statement piece for special occasions and evening events.",
      price: "$199",
      image: "/img/premium purse/476128949_478758638619363_1814056878435439930_n.jpg"
    },
    {
      id: 3,
      name: "Luxury Tote Bag",
      description: "Spacious luxury tote bag with multiple compartments and elegant styling. Ideal for both professional and casual settings.",
      price: "$349",
      image: "/img/premium purse/476142867_479436568551570_2701375361109301213_n.jpg"
    },
    {
      id: 4,
      name: "Premium Crossbody",
      description: "Versatile crossbody bag with adjustable strap and secure closure. Perfect for hands-free convenience without compromising style.",
      price: "$249",
      image: "/img/premium purse/476273298_479436925218201_352966168158977334_n.jpg"
    },
    {
      id: 5,
      name: "Evening Clutch",
      description: "Elegant evening clutch with metallic accents and sophisticated design. The perfect accessory for formal events and special occasions.",
      price: "$179",
      image: "/img/premium purse/476229468_479436585218235_6742779253107824424_n.jpg"
    },
    {
      id: 6,
      name: "Designer Shoulder Bag",
      description: "Timeless shoulder bag with classic silhouette and premium hardware. A versatile piece that complements any outfit.",
      price: "$279",
      image: "/img/premium purse/476211247_479415401887020_2184385406340683444_n.jpg"
    },
    {
      id: 7,
      name: "Luxury Backpack",
      description: "Stylish luxury backpack with leather accents and modern design. Perfect for the contemporary woman on the go.",
      price: "$399",
      image: "/img/premium purse/476775877_479436578551569_803466659404546501_n.jpg"
    },
    {
      id: 8,
      name: "Premium Satchel",
      description: "Sophisticated satchel with structured design and premium materials. A professional choice for the modern businesswoman.",
      price: "$329",
      image: "/img/premium purse/475864346_479436928551534_9020700481615132394_n.jpg"
    },
    {
      id: 9,
      name: "Designer Hobo Bag",
      description: "Relaxed hobo bag with soft leather and comfortable shoulder strap. Effortless style for everyday elegance.",
      price: "$259",
      image: "/img/premium purse/476100522_479436918551535_7185766723834174035_n.jpg"
    }
  ];

  const jewelry = [
    {
      id: 1,
      name: "Diamond Pendant Necklace",
      description: "Exquisite diamond pendant necklace with 18k gold setting. A timeless piece that adds elegance to any ensemble.",
      price: "$899",
      image: "/img/jewellry/472849920_461536917008202_880367910907139364_n.jpg"
    },
    {
      id: 2,
      name: "Pearl Strand Necklace",
      description: "Classic pearl strand necklace with freshwater pearls and sterling silver clasp. Perfect for formal occasions.",
      price: "$299",
      image: "/img/jewellry/473080822_461537067008187_5124661546939402170_n.jpg"
    },
    {
      id: 3,
      name: "Gold Chain Bracelet",
      description: "Delicate gold chain bracelet with adjustable length. A versatile accessory for everyday wear.",
      price: "$199",
      image: "/img/jewellry/472849920_461536917008202_880367910907139364_n.jpg"
    },
    {
      id: 4,
      name: "Gemstone Ring",
      description: "Stunning gemstone ring featuring precious stones in an elegant setting. A statement piece for special occasions.",
      price: "$599",
      image: "/img/jewellry/473080822_461537067008187_5124661546939402170_n.jpg"
    },
    {
      id: 5,
      name: "Luxury Watch",
      description: "Premium luxury watch with leather strap and elegant dial design. Perfect for the sophisticated woman.",
      price: "$1,299",
      image: "/img/jewellry/472849920_461536917008202_880367910907139364_n.jpg"
    }
  ];

  const earrings = [
    {
      id: 1,
      name: "Crystal Drop Earrings",
      description: "Elegant crystal drop earrings with sterling silver setting. Perfect for evening events and special occasions.",
      price: "$149",
      image: "/img/Earings/473079562_461559570339270_7826771486580445992_n.jpg"
    },
    {
      id: 2,
      name: "Pearl Stud Earrings",
      description: "Classic pearl stud earrings with freshwater pearls. A timeless accessory for everyday elegance.",
      price: "$89",
      image: "/img/Earings/473081398_461559587005935_2018370767646221354_n.jpg"
    },
    {
      id: 3,
      name: "Gold Hoop Earrings",
      description: "Versatile gold hoop earrings with adjustable size. Perfect for both casual and formal settings.",
      price: "$129",
      image: "/img/Earings/473188115_461559663672594_7068565126843831458_n.jpg"
    },
    {
      id: 4,
      name: "Diamond Stud Earrings",
      description: "Luxurious diamond stud earrings with 14k gold setting. A sophisticated choice for special occasions.",
      price: "$799",
      image: "/img/Earings/473189333_461560987005795_21540708161048938_n.jpg"
    },
    {
      id: 5,
      name: "Chandelier Earrings",
      description: "Dramatic chandelier earrings with crystal and metal accents. A statement piece for formal events.",
      price: "$199",
      image: "/img/Earings/473189760_461559320339295_8553151534430367376_n.jpg"
    },
    {
      id: 6,
      name: "Minimalist Studs",
      description: "Simple and elegant minimalist stud earrings. Perfect for everyday wear and professional settings.",
      price: "$69",
      image: "/img/Earings/473189804_461560843672476_342938211042366432_n.jpg"
    }
  ];

  const normalPurse = [
    {
      id: 1,
      name: "Classic Shoulder Bag",
      description: "Timeless shoulder bag with practical design and comfortable strap. Perfect for everyday use and casual outings.",
      price: "$89",
      image: "/img/normal purse/475835610_478756268619600_3792130607991971262_n.jpg"
    },
    {
      id: 2,
      name: "Casual Tote Bag",
      description: "Spacious casual tote bag with multiple pockets. Ideal for shopping trips and daily errands.",
      price: "$79",
      image: "/img/normal purse/475908838_478756625286231_3625079175728313602_n.jpg"
    },
    {
      id: 3,
      name: "Weekend Bag",
      description: "Versatile weekend bag with durable construction. Perfect for short trips and weekend getaways.",
      price: "$99",
      image: "/img/normal purse/476106848_478756711952889_2396912573479066154_n.jpg"
    },
    {
      id: 4,
      name: "Crossbody Messenger",
      description: "Practical crossbody messenger bag with adjustable strap. Great for hands-free convenience.",
      price: "$69",
      image: "/img/normal purse/476250749_478756691952891_153744837997913124_n.jpg"
    },
    {
      id: 5,
      name: "Everyday Clutch",
      description: "Simple and functional everyday clutch. Perfect for quick errands and casual events.",
      price: "$59",
      image: "/img/normal purse/475835610_478756268619600_3792130607991971262_n.jpg"
    }
  ];

  const clothing = [
    {
      id: 1,
      name: "Evening Gown",
      description: "Stunning evening gown with elegant silhouette and premium fabric. Perfect for formal events and special occasions.",
      price: "$899",
      image: "/img/normal purse/475835610_478756268619600_3792130607991971262_n.jpg"
    },
    {
      id: 2,
      name: "Designer Blouse",
      description: "Sophisticated designer blouse with unique detailing and premium materials. Ideal for professional settings.",
      price: "$299",
      image: "/img/normal purse/475908838_478756625286231_3625079175728313602_n.jpg"
    },
    {
      id: 3,
      name: "Luxury Dress",
      description: "Elegant luxury dress with flattering cut and high-quality fabric. Perfect for cocktail parties and events.",
      price: "$599",
      image: "/img/normal purse/476106848_478756711952889_2396912573479066154_n.jpg"
    },
    {
      id: 4,
      name: "Premium Skirt",
      description: "Versatile premium skirt with elegant design and comfortable fit. Suitable for various occasions.",
      price: "$249",
      image: "/img/normal purse/476250749_478756691952891_153744837997913124_n.jpg"
    },
    {
      id: 5,
      name: "Designer Jacket",
      description: "Stylish designer jacket with premium materials and sophisticated design. Perfect for layering and style.",
      price: "$449",
      image: "/img/normal purse/475835610_478756268619600_3792130607991971262_n.jpg"
    }
  ];

  const getCurrentProducts = () => {
    switch (activeCategory) {
      case 'handbags':
        return handbags;
      case 'jewelry':
        return jewelry;
      case 'earrings':
        return earrings;
      case 'normal-purse':
        return normalPurse;
      case 'clothing':
        return clothing;
      default:
        return handbags;
    }
  };

  const getCurrentCategoryName = () => {
    return categories.find(cat => cat.id === activeCategory)?.name || 'Luxury Handbags';
  };

  const loadShow = () => {
    const items = sliderRef.current?.querySelectorAll('.product-item');
    if (!items) return;

    // Active item
    const activeItem = items[activeSlide] as HTMLElement;
    if (activeItem) {
      activeItem.style.transform = 'none';
      activeItem.style.zIndex = '1';
      activeItem.style.filter = 'none';
      activeItem.style.opacity = '1';
    }

    // Items after active
    let stt = 0;
    for (let i = activeSlide + 1; i < items.length; i++) {
      stt++;
      const item = items[i] as HTMLElement;
      if (item) {
        item.style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        item.style.zIndex = (-stt).toString();
        item.style.filter = 'blur(5px)';
        item.style.opacity = stt > 2 ? '0' : '0.6';
      }
    }

    // Items before active
    stt = 0;
    for (let i = activeSlide - 1; i >= 0; i--) {
      stt++;
      const item = items[i] as HTMLElement;
      if (item) {
        item.style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        item.style.zIndex = (-stt).toString();
        item.style.filter = 'blur(5px)';
        item.style.opacity = stt > 2 ? '0' : '0.6';
      }
    }
  };

  useEffect(() => {
    setActiveSlide(3); // Reset to middle slide when category changes
  }, [activeCategory]);

  useEffect(() => {
    loadShow();
  }, [activeSlide, activeCategory]);

  const handleNext = () => {
    const currentProducts = getCurrentProducts();
    setActiveSlide(prev => prev + 1 < currentProducts.length ? prev + 1 : prev);
  };

  const handlePrev = () => {
    setActiveSlide(prev => prev - 1 >= 0 ? prev - 1 : prev);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: getCurrentCategoryName()
    });
  };

  const currentProducts = getCurrentProducts();

  return (
    <div className="shop-page">
      <ShopNavbar />
      <div className="shop-container">
        <motion.div
          className="shop-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="shop-title">Our Collection</h1>
          <p className="shop-subtitle">Discover luxury fashion and accessories</p>
        </motion.div>

        <div className="product-slider-container">
          {/* Category Tabs - Desktop View */}
          <div className="category-tabs desktop-tabs">
            <div className="category-tabs-container">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Category Tabs - Mobile View (with infinite scroll) */}
          <div className="category-tabs mobile-tabs" ref={mobileTabsRef}>
            <div className="category-tabs-container">
              {infiniteCategories.map((category, index) => (
                <motion.button
                  key={`${category.id}-${index}`}
                  className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          <motion.h2 
            className="category-title"
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {getCurrentCategoryName()}
          </motion.h2>
          
          <div className="slider" ref={sliderRef}>
            {currentProducts.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <div className="product-content">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                  </div>
                  <div className="product-actions">
                    <div className="product-price">{product.price}</div>
                    <motion.button 
                      className="product-button"
                      onClick={() => handleAddToCart(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </div>
            ))}
            <button className="slider-btn next" onClick={handleNext}>
              &gt;
            </button>
            <button className="slider-btn prev" onClick={handlePrev}>
              &lt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage; 