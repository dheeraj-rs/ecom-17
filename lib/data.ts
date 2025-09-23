export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  slug: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  inStock: boolean;
  stockCount?: number;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Living Room',
    slug: 'living-room',
    description: 'Comfortable and stylish furniture for your living space',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    productCount: 124
  },
  {
    id: '2',
    name: 'Bedroom',
    slug: 'bedroom',
    description: 'Create your perfect sanctuary with our bedroom collection',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    productCount: 89
  },
  {
    id: '3',
    name: 'Dining Room',
    slug: 'dining-room',
    description: 'Elegant dining furniture for memorable gatherings',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    productCount: 67
  },
  {
    id: '4',
    name: 'Office',
    slug: 'office',
    description: 'Professional and comfortable workspace solutions',
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    productCount: 45
  },
  {
    id: '5',
    name: 'Storage',
    slug: 'storage',
    description: 'Smart storage solutions for every room',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    productCount: 76
  },
  {
    id: '6',
    name: 'Outdoor',
    slug: 'outdoor',
    description: 'Weather-resistant furniture for your outdoor spaces',
    image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    productCount: 34
  }
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Royal Executive Desk',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Office',
    rating: 4.8,
    reviewCount: 156,
    slug: 'royal-executive-desk',
    description: 'A masterpiece of craftsmanship, this executive desk combines traditional elegance with modern functionality. Handcrafted from premium solid wood with intricate detailing.',
    features: [
      'Handcrafted from premium solid wood',
      'Multiple storage compartments',
      'Wire management system',
      'Scratch-resistant finish',
      '25-year warranty'
    ],
    specifications: {
      'Dimensions': '72" W x 36" D x 30" H',
      'Material': 'Solid Mahogany Wood',
      'Finish': 'Rich Walnut Stain',
      'Weight': '180 lbs',
      'Assembly': 'Professional Assembly Included'
    },
    inStock: true,
    stockCount: 12,
    tags: ['luxury', 'executive', 'handcrafted', 'premium']
  },
  {
    id: '2',
    name: 'Luxury Velvet Sofa',
    price: 3299,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Living Room',
    rating: 4.9,
    reviewCount: 203,
    slug: 'luxury-velvet-sofa',
    description: 'Experience ultimate comfort with our luxury velvet sofa. Features premium upholstery, solid wood frame, and exceptional attention to detail.',
    features: [
      'Premium velvet upholstery',
      'Solid hardwood frame',
      'High-density foam cushions',
      'Removable cushion covers',
      'Stain-resistant treatment'
    ],
    specifications: {
      'Dimensions': '84" W x 36" D x 32" H',
      'Seating Capacity': '3 People',
      'Frame Material': 'Solid Oak',
      'Upholstery': 'Premium Velvet',
      'Weight Capacity': '750 lbs'
    },
    inStock: true,
    stockCount: 8,
    tags: ['luxury', 'velvet', 'comfortable', 'living-room']
  },
  {
    id: '3',
    name: 'Grand Dining Table',
    price: 1899,
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Dining Room',
    rating: 4.7,
    reviewCount: 89,
    slug: 'grand-dining-table',
    description: 'A stunning centerpiece for your dining room. This grand dining table accommodates up to 8 people comfortably and features a beautiful wood grain finish.',
    features: [
      'Seats up to 8 people',
      'Solid wood construction',
      'Hand-finished surface',
      'Expandable design',
      'Matching chairs available'
    ],
    specifications: {
      'Dimensions': '96" L x 42" W x 30" H',
      'Material': 'Solid Walnut',
      'Finish': 'Natural Oil',
      'Seating': '8 People',
      'Shape': 'Rectangular'
    },
    inStock: true,
    stockCount: 15,
    tags: ['dining', 'family', 'expandable', 'walnut']
  },
  {
    id: '4',
    name: 'Premium Bed Frame',
    price: 1599,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Bedroom',
    rating: 4.6,
    reviewCount: 124,
    slug: 'premium-bed-frame',
    description: 'Transform your bedroom with this elegant premium bed frame. Features upholstered headboard and solid wood construction for lasting durability.',
    features: [
      'Upholstered headboard',
      'Solid wood construction',
      'Under-bed storage space',
      'Easy assembly',
      'Multiple size options'
    ],
    specifications: {
      'Size': 'Queen (60" x 80")',
      'Headboard Height': '48"',
      'Material': 'Solid Pine + Fabric',
      'Color': 'Natural Wood + Gray Fabric',
      'Assembly Time': '45 minutes'
    },
    inStock: true,
    stockCount: 22,
    tags: ['bedroom', 'upholstered', 'storage', 'queen']
  },
  {
    id: '5',
    name: 'Ergonomic Office Chair',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Office',
    rating: 4.8,
    reviewCount: 267,
    slug: 'ergonomic-office-chair',
    description: 'Experience all-day comfort with our ergonomic office chair. Features lumbar support, adjustable height, and premium materials.',
    features: [
      'Lumbar support system',
      'Height adjustable',
      'Premium leather upholstery',
      '360-degree swivel',
      '5-year warranty'
    ],
    specifications: {
      'Seat Height': '17" - 21" (adjustable)',
      'Weight Capacity': '300 lbs',
      'Material': 'Genuine Leather + Steel',
      'Base': '5-Star Aluminum Base',
      'Wheels': 'Smooth Rolling Casters'
    },
    inStock: true,
    stockCount: 35,
    tags: ['ergonomic', 'office', 'adjustable', 'leather']
  },
  {
    id: '6',
    name: 'Modern Coffee Table',
    price: 699,
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Living Room',
    rating: 4.5,
    reviewCount: 78,
    slug: 'modern-coffee-table',
    description: 'A sleek and modern coffee table that combines style with functionality. Perfect centerpiece for any contemporary living room.',
    features: [
      'Tempered glass top',
      'Solid wood base',
      'Storage shelf',
      'Modern design',
      'Easy to clean'
    ],
    specifications: {
      'Dimensions': '48" L x 24" W x 16" H',
      'Top Material': 'Tempered Glass',
      'Base Material': 'Solid Oak',
      'Weight': '75 lbs',
      'Style': 'Contemporary Modern'
    },
    inStock: true,
    stockCount: 18,
    tags: ['modern', 'glass', 'contemporary', 'storage']
  },
  {
    id: '7',
    name: 'Luxury Bookshelf',
    price: 1299,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/159807/bookcase-book-reading-159807.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Storage',
    rating: 4.7,
    reviewCount: 134,
    slug: 'luxury-bookshelf',
    description: 'Showcase your book collection with this elegant luxury bookshelf. Features multiple shelves and premium wood construction.',
    features: [
      '6 adjustable shelves',
      'Premium wood construction',
      'Anti-tip safety feature',
      'Easy assembly',
      'Classic design'
    ],
    specifications: {
      'Dimensions': '36" W x 12" D x 84" H',
      'Shelf Count': '6 Adjustable',
      'Material': 'Solid Cherry Wood',
      'Weight Capacity': '40 lbs per shelf',
      'Finish': 'Rich Cherry Stain'
    },
    inStock: true,
    stockCount: 11,
    tags: ['storage', 'books', 'cherry', 'adjustable']
  },
  {
    id: '8',
    name: 'Outdoor Dining Set',
    price: 1799,
    originalPrice: 2199,
    image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Outdoor',
    rating: 4.4,
    reviewCount: 92,
    slug: 'outdoor-dining-set',
    description: 'Create the perfect outdoor dining experience with this weather-resistant dining set. Includes table and 6 matching chairs.',
    features: [
      'Weather-resistant materials',
      'UV-protected finish',
      'Includes 6 chairs',
      'Easy maintenance',
      '2-year outdoor warranty'
    ],
    specifications: {
      'Set Includes': 'Table + 6 Chairs',
      'Table Size': '72" L x 36" W x 29" H',
      'Material': 'Teak Wood + Aluminum',
      'Finish': 'Natural Teak Oil',
      'Weather Rating': 'All-Weather Resistant'
    },
    inStock: true,
    stockCount: 7,
    tags: ['outdoor', 'dining', 'weather-resistant', 'teak']
  },
  // Additional products for pagination and filtering
  {
    id: '9',
    name: 'Executive Leather Chair',
    price: 1599,
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Office',
    rating: 4.9,
    reviewCount: 78,
    slug: 'executive-leather-chair',
    description: 'Premium executive chair with genuine leather upholstery and advanced ergonomic features.',
    features: [
      'Genuine leather upholstery',
      'Advanced lumbar support',
      'Memory foam cushioning',
      'Chrome-finished base',
      'Lifetime warranty on mechanism'
    ],
    specifications: {
      'Material': 'Top-grain Leather',
      'Weight Capacity': '350 lbs',
      'Adjustments': 'Height, Tilt, Lumbar',
      'Base': 'Polished Chrome',
      'Cushioning': 'Memory Foam'
    },
    inStock: true,
    stockCount: 14,
    tags: ['executive', 'leather', 'memory-foam', 'chrome']
  },
  {
    id: '10',
    name: 'Minimalist Nightstand',
    price: 399,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    category: 'Bedroom',
    rating: 4.3,
    reviewCount: 56,
    slug: 'minimalist-nightstand',
    description: 'Clean lines and functional design make this nightstand perfect for modern bedrooms.',
    features: [
      'Single drawer with soft-close',
      'Open shelf storage',
      'Minimalist design',
      'Solid wood construction',
      'Multiple finish options'
    ],
    specifications: {
      'Dimensions': '20" W x 16" D x 24" H',
      'Material': 'Solid Maple',
      'Drawer': 'Soft-close Mechanism',
      'Finish': 'Natural Maple',
      'Assembly': 'Minimal Assembly Required'
    },
    inStock: true,
    stockCount: 28,
    tags: ['minimalist', 'nightstand', 'maple', 'soft-close']
  }
];

export const allProducts = [...featuredProducts];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(product => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  
  return allProducts.filter(product => 
    product.category.toLowerCase() === category.name.toLowerCase()
  );
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return [];
  
  return allProducts
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}