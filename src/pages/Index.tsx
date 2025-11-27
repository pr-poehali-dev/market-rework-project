import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  specs: {
    [key: string]: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: 'Смартфон Premium X Pro',
    price: 89990,
    oldPrice: 99990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/f7dcdc4e-65c1-4de3-b611-824eaf0d8e12.jpg',
    rating: 4.8,
    reviews: 342,
    category: 'Смартфоны',
    specs: {
      'Диагональ экрана': '6.7"',
      'Процессор': 'Snapdragon 8 Gen 2',
      'ОЗУ': '12 ГБ',
      'Память': '256 ГБ',
      'Камера': '200 МП',
      'Батарея': '5000 мАч'
    }
  },
  {
    id: 2,
    name: 'Беспроводные наушники Elite',
    price: 24990,
    oldPrice: 29990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/716a8333-6801-423a-a43d-56a881d0eacd.jpg',
    rating: 4.9,
    reviews: 567,
    category: 'Наушники',
    specs: {
      'Тип': 'Накладные',
      'Подключение': 'Bluetooth 5.3',
      'Время работы': '40 часов',
      'Шумоподавление': 'Активное ANC',
      'Вес': '250 г',
      'Кодеки': 'aptX, LDAC'
    }
  },
  {
    id: 3,
    name: 'Ноутбук UltraBook Pro 15',
    price: 129990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/8028d942-1964-4ee5-947d-43ec09d47b64.jpg',
    rating: 4.7,
    reviews: 189,
    category: 'Ноутбуки',
    specs: {
      'Диагональ': '15.6"',
      'Процессор': 'Intel Core i7-13700H',
      'ОЗУ': '16 ГБ',
      'SSD': '512 ГБ',
      'Видеокарта': 'RTX 4060',
      'Вес': '1.8 кг'
    }
  },
  {
    id: 4,
    name: 'Смартфон Basic Plus',
    price: 34990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/f7dcdc4e-65c1-4de3-b611-824eaf0d8e12.jpg',
    rating: 4.5,
    reviews: 223,
    category: 'Смартфоны',
    specs: {
      'Диагональ экрана': '6.5"',
      'Процессор': 'Snapdragon 778G',
      'ОЗУ': '8 ГБ',
      'Память': '128 ГБ',
      'Камера': '108 МП',
      'Батарея': '4500 мАч'
    }
  },
  {
    id: 5,
    name: 'Смартфон Galaxy S24 Ultra',
    price: 119990,
    oldPrice: 134990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/f7dcdc4e-65c1-4de3-b611-824eaf0d8e12.jpg',
    rating: 4.9,
    reviews: 512,
    category: 'Смартфоны',
    specs: {
      'Диагональ экрана': '6.8"',
      'Процессор': 'Snapdragon 8 Gen 3',
      'ОЗУ': '16 ГБ',
      'Память': '512 ГБ',
      'Камера': '200 МП',
      'Батарея': '5500 мАч'
    }
  },
  {
    id: 6,
    name: 'iPhone 15 Pro Max',
    price: 149990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/f7dcdc4e-65c1-4de3-b611-824eaf0d8e12.jpg',
    rating: 4.8,
    reviews: 892,
    category: 'Смартфоны',
    specs: {
      'Диагональ экрана': '6.7"',
      'Процессор': 'A17 Pro',
      'ОЗУ': '8 ГБ',
      'Память': '256 ГБ',
      'Камера': '48 МП',
      'Батарея': '4441 мАч'
    }
  },
  {
    id: 7,
    name: 'Смартфон Xiaomi 14',
    price: 64990,
    oldPrice: 74990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/f7dcdc4e-65c1-4de3-b611-824eaf0d8e12.jpg',
    rating: 4.6,
    reviews: 287,
    category: 'Смартфоны',
    specs: {
      'Диагональ экрана': '6.36"',
      'Процессор': 'Snapdragon 8 Gen 3',
      'ОЗУ': '12 ГБ',
      'Память': '256 ГБ',
      'Камера': '50 МП',
      'Батарея': '4610 мАч'
    }
  },
  {
    id: 8,
    name: 'Наушники AirPods Pro 2',
    price: 27990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/716a8333-6801-423a-a43d-56a881d0eacd.jpg',
    rating: 4.8,
    reviews: 734,
    category: 'Наушники',
    specs: {
      'Тип': 'TWS вкладыши',
      'Подключение': 'Bluetooth 5.3',
      'Время работы': '6 часов',
      'Шумоподавление': 'Активное ANC',
      'Вес': '5.3 г',
      'Кодеки': 'AAC'
    }
  },
  {
    id: 9,
    name: 'Наушники Sony WH-1000XM5',
    price: 32990,
    oldPrice: 39990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/716a8333-6801-423a-a43d-56a881d0eacd.jpg',
    rating: 4.9,
    reviews: 621,
    category: 'Наушники',
    specs: {
      'Тип': 'Накладные',
      'Подключение': 'Bluetooth 5.2',
      'Время работы': '30 часов',
      'Шумоподавление': 'Активное ANC',
      'Вес': '250 г',
      'Кодеки': 'LDAC, AAC'
    }
  },
  {
    id: 10,
    name: 'Наушники JBL Tune 760NC',
    price: 9990,
    oldPrice: 12990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/716a8333-6801-423a-a43d-56a881d0eacd.jpg',
    rating: 4.4,
    reviews: 198,
    category: 'Наушники',
    specs: {
      'Тип': 'Накладные',
      'Подключение': 'Bluetooth 5.0',
      'Время работы': '35 часов',
      'Шумоподавление': 'Активное ANC',
      'Вес': '220 г',
      'Кодеки': 'SBC'
    }
  },
  {
    id: 11,
    name: 'MacBook Pro 16" M3 Max',
    price: 349990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/8028d942-1964-4ee5-947d-43ec09d47b64.jpg',
    rating: 4.9,
    reviews: 234,
    category: 'Ноутбуки',
    specs: {
      'Диагональ': '16.2"',
      'Процессор': 'Apple M3 Max',
      'ОЗУ': '36 ГБ',
      'SSD': '1 ТБ',
      'Видеокарта': 'M3 Max GPU',
      'Вес': '2.1 кг'
    }
  },
  {
    id: 12,
    name: 'Ноутбук ASUS ROG Strix G16',
    price: 159990,
    oldPrice: 179990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/8028d942-1964-4ee5-947d-43ec09d47b64.jpg',
    rating: 4.7,
    reviews: 312,
    category: 'Ноутбуки',
    specs: {
      'Диагональ': '16"',
      'Процессор': 'Intel Core i9-13980HX',
      'ОЗУ': '32 ГБ',
      'SSD': '1 ТБ',
      'Видеокарта': 'RTX 4070',
      'Вес': '2.5 кг'
    }
  },
  {
    id: 13,
    name: 'Ноутбук Lenovo ThinkPad X1',
    price: 189990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/8028d942-1964-4ee5-947d-43ec09d47b64.jpg',
    rating: 4.8,
    reviews: 156,
    category: 'Ноутбуки',
    specs: {
      'Диагональ': '14"',
      'Процессор': 'Intel Core i7-1365U',
      'ОЗУ': '16 ГБ',
      'SSD': '512 ГБ',
      'Видеокарта': 'Iris Xe',
      'Вес': '1.2 кг'
    }
  },
  {
    id: 14,
    name: 'Ноутбук HP Pavilion 15',
    price: 69990,
    oldPrice: 79990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/8028d942-1964-4ee5-947d-43ec09d47b64.jpg',
    rating: 4.3,
    reviews: 445,
    category: 'Ноутбуки',
    specs: {
      'Диагональ': '15.6"',
      'Процессор': 'AMD Ryzen 5 7535H',
      'ОЗУ': '16 ГБ',
      'SSD': '512 ГБ',
      'Видеокарта': 'Radeon Graphics',
      'Вес': '1.7 кг'
    }
  },
  {
    id: 15,
    name: 'Планшет iPad Pro 12.9"',
    price: 119990,
    oldPrice: 134990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/8028d942-1964-4ee5-947d-43ec09d47b64.jpg',
    rating: 4.9,
    reviews: 678,
    category: 'Планшеты',
    specs: {
      'Диагональ': '12.9"',
      'Процессор': 'Apple M2',
      'ОЗУ': '8 ГБ',
      'Память': '256 ГБ',
      'Камера': '12 МП',
      'Батарея': '10758 мАч'
    }
  },
  {
    id: 16,
    name: 'Планшет Samsung Galaxy Tab S9',
    price: 74990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/8028d942-1964-4ee5-947d-43ec09d47b64.jpg',
    rating: 4.7,
    reviews: 234,
    category: 'Планшеты',
    specs: {
      'Диагональ': '11"',
      'Процессор': 'Snapdragon 8 Gen 2',
      'ОЗУ': '12 ГБ',
      'Память': '256 ГБ',
      'Камера': '13 МП',
      'Батарея': '8400 мАч'
    }
  },
  {
    id: 17,
    name: 'Умные часы Apple Watch Series 9',
    price: 49990,
    oldPrice: 54990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/716a8333-6801-423a-a43d-56a881d0eacd.jpg',
    rating: 4.8,
    reviews: 892,
    category: 'Аксессуары',
    specs: {
      'Диагональ': '1.9"',
      'Процессор': 'S9 SiP',
      'ОЗУ': '1 ГБ',
      'Память': '64 ГБ',
      'Датчики': 'ЭКГ, SpO2',
      'Батарея': '18 часов'
    }
  },
  {
    id: 18,
    name: 'Умные часы Samsung Galaxy Watch 6',
    price: 29990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/716a8333-6801-423a-a43d-56a881d0eacd.jpg',
    rating: 4.6,
    reviews: 412,
    category: 'Аксессуары',
    specs: {
      'Диагональ': '1.5"',
      'Процессор': 'Exynos W930',
      'ОЗУ': '2 ГБ',
      'Память': '16 ГБ',
      'Датчики': 'ЭКГ, SpO2',
      'Батарея': '40 часов'
    }
  },
  {
    id: 19,
    name: 'Powerbank 20000 mAh Fast Charge',
    price: 3990,
    oldPrice: 4990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/716a8333-6801-423a-a43d-56a881d0eacd.jpg',
    rating: 4.5,
    reviews: 1234,
    category: 'Аксессуары',
    specs: {
      'Емкость': '20000 мАч',
      'Выход': '22.5 Вт',
      'Порты': '2x USB-A, 1x USB-C',
      'Быстрая зарядка': 'PD, QC 3.0',
      'Вес': '380 г',
      'Материал': 'Алюминий'
    }
  },
  {
    id: 20,
    name: 'Клавиатура механическая RGB',
    price: 8990,
    oldPrice: 11990,
    image: 'https://cdn.poehali.dev/projects/8c216d15-1714-4c66-b4bf-612bb0b3d277/files/716a8333-6801-423a-a43d-56a881d0eacd.jpg',
    rating: 4.7,
    reviews: 567,
    category: 'Аксессуары',
    specs: {
      'Тип': 'Механическая',
      'Переключатели': 'Cherry MX Red',
      'Подключение': 'USB-C, Bluetooth',
      'Подсветка': 'RGB',
      'Раскладка': 'TKL',
      'Вес': '820 г'
    }
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [cart, setCart] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState([0, 400000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCart = (id: number) => {
    setCart(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleCompare = (id: number) => {
    setCompareList(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const filteredProducts = products.filter(p => {
    const inPriceRange = p.price >= priceRange[0] && p.price <= priceRange[1];
    const inCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
    return inPriceRange && inCategory;
  });

  const cartProducts = products.filter(p => cart.includes(p.id));
  const compareProducts = products.filter(p => compareList.includes(p.id));
  const totalPrice = cartProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-heading font-bold gradient-purple bg-clip-text text-transparent">
              ShopHub
            </h1>
            
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Поиск товаров..." 
                  className="pl-10 rounded-full border-2 focus:border-primary"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover-lift"
                onClick={() => setActiveTab('favorites')}
              >
                <Icon name="Heart" size={22} />
                {favorites.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center gradient-purple">
                    {favorites.length}
                  </Badge>
                )}
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="relative hover-lift"
                onClick={() => setActiveTab('cart')}
              >
                <Icon name="ShoppingCart" size={22} />
                {cart.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center gradient-orange">
                    {cart.length}
                  </Badge>
                )}
              </Button>

              <Button 
                variant="ghost" 
                size="icon"
                className="hover-lift"
                onClick={() => setActiveTab('profile')}
              >
                <Icon name="User" size={22} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8 bg-white/80 backdrop-blur-sm p-1 rounded-2xl shadow-md">
            <TabsTrigger value="main" className="rounded-xl data-[state=active]:gradient-purple data-[state=active]:text-white">
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="catalog" className="rounded-xl data-[state=active]:gradient-purple data-[state=active]:text-white">
              <Icon name="Grid3x3" size={18} className="mr-2" />
              Каталог
            </TabsTrigger>
            <TabsTrigger value="compare" className="rounded-xl data-[state=active]:gradient-blue data-[state=active]:text-white">
              <Icon name="GitCompare" size={18} className="mr-2" />
              Сравнение
              {compareList.length > 0 && (
                <Badge className="ml-2 bg-white text-primary">{compareList.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="cart" className="rounded-xl data-[state=active]:gradient-orange data-[state=active]:text-white">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
              {cart.length > 0 && (
                <Badge className="ml-2 bg-white text-accent">{cart.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="profile" className="rounded-xl data-[state=active]:gradient-purple data-[state=active]:text-white">
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="animate-fade-in">
            <div className="mb-12">
              <div className="relative rounded-3xl overflow-hidden gradient-purple p-12 text-white shadow-2xl">
                <div className="relative z-10 max-w-2xl">
                  <Badge className="mb-4 bg-white/20 text-white border-0">
                    <Icon name="Zap" size={16} className="mr-1" />
                    Черная пятница
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    Скидки до 50%
                  </h2>
                  <p className="text-lg mb-6 text-white/90">
                    На смартфоны, ноутбуки и аксессуары. Предложение ограничено!
                  </p>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full">
                    Смотреть акции
                  </Button>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                  <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 right-32 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="TrendingUp" className="text-primary" size={28} />
                <h3 className="text-2xl font-heading font-bold">Популярные товары</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                  <Card 
                    key={product.id} 
                    className="overflow-hidden hover-lift border-2 hover:border-primary transition-all bg-white"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className={`absolute top-2 right-2 rounded-full ${favorites.includes(product.id) ? 'gradient-purple text-white' : 'bg-white/80'}`}
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Icon name="Heart" size={18} />
                      </Button>
                      {product.oldPrice && (
                        <Badge className="absolute top-2 left-2 gradient-orange border-0">
                          -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                        </Badge>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                      <h4 className="font-heading font-semibold mb-2 line-clamp-2">{product.name}</h4>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>

                      <div className="flex items-end gap-2 mb-4">
                        <span className="text-2xl font-heading font-bold">
                          {product.price.toLocaleString()} ₽
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-muted-foreground line-through mb-1">
                            {product.oldPrice.toLocaleString()} ₽
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 gradient-purple hover:opacity-90"
                          onClick={() => toggleCart(product.id)}
                        >
                          {cart.includes(product.id) ? 'В корзине' : 'В корзину'}
                        </Button>
                        <Button
                          size="icon"
                          variant="outline"
                          className={compareList.includes(product.id) ? 'border-primary bg-primary/10' : ''}
                          onClick={() => toggleCompare(product.id)}
                        >
                          <Icon name="GitCompare" size={18} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="catalog" className="animate-fade-in">
            <div className="grid lg:grid-cols-4 gap-6">
              <Card className="p-6 h-fit sticky top-24 bg-white">
                <h3 className="font-heading font-bold text-lg mb-6">Фильтры</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Категории</h4>
                    <div className="space-y-2">
                      {['Смартфоны', 'Наушники', 'Ноутбуки', 'Планшеты', 'Аксессуары'].map(cat => (
                        <div key={cat} className="flex items-center space-x-2">
                          <Checkbox 
                            id={cat}
                            checked={selectedCategories.includes(cat)}
                            onCheckedChange={() => toggleCategory(cat)}
                          />
                          <label htmlFor={cat} className="text-sm cursor-pointer">
                            {cat}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Цена</h4>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={400000}
                      step={1000}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{priceRange[0].toLocaleString()} ₽</span>
                      <span>{priceRange[1].toLocaleString()} ₽</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline" onClick={() => {
                    setPriceRange([0, 400000]);
                    setSelectedCategories([]);
                  }}>
                    Сбросить фильтры
                  </Button>
                </div>
              </Card>

              <div className="lg:col-span-3">
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold">
                    Каталог товаров
                  </h3>
                  <p className="text-muted-foreground">Найдено {filteredProducts.length} товаров</p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <Card 
                      key={product.id} 
                      className="overflow-hidden hover-lift border-2 hover:border-primary transition-all bg-white"
                    >
                      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          className={`absolute top-2 right-2 rounded-full ${favorites.includes(product.id) ? 'gradient-purple text-white' : 'bg-white/80'}`}
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Icon name="Heart" size={18} />
                        </Button>
                        {product.oldPrice && (
                          <Badge className="absolute top-2 left-2 gradient-orange border-0">
                            -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                          </Badge>
                        )}
                      </div>
                      
                      <div className="p-4">
                        <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                        <h4 className="font-heading font-semibold mb-2 line-clamp-2">{product.name}</h4>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-medium">{product.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">({product.reviews})</span>
                        </div>

                        <div className="flex items-end gap-2 mb-4">
                          <span className="text-2xl font-heading font-bold">
                            {product.price.toLocaleString()} ₽
                          </span>
                          {product.oldPrice && (
                            <span className="text-sm text-muted-foreground line-through mb-1">
                              {product.oldPrice.toLocaleString()} ₽
                            </span>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 gradient-purple hover:opacity-90"
                            onClick={() => toggleCart(product.id)}
                          >
                            {cart.includes(product.id) ? 'В корзине' : 'В корзину'}
                          </Button>
                          <Button
                            size="icon"
                            variant="outline"
                            className={compareList.includes(product.id) ? 'border-primary bg-primary/10' : ''}
                            onClick={() => toggleCompare(product.id)}
                          >
                            <Icon name="GitCompare" size={18} />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="compare" className="animate-fade-in">
            {compareProducts.length === 0 ? (
              <Card className="p-12 text-center bg-white">
                <Icon name="GitCompare" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-heading font-bold mb-2">Список сравнения пуст</h3>
                <p className="text-muted-foreground mb-6">
                  Добавьте товары для сравнения характеристик
                </p>
                <Button onClick={() => setActiveTab('catalog')} className="gradient-purple">
                  Перейти в каталог
                </Button>
              </Card>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">Сравнение товаров</h3>
                  <p className="text-muted-foreground">Сравните характеристики {compareProducts.length} товаров</p>
                </div>

                <div className="overflow-x-auto">
                  <Card className="p-6 bg-white min-w-max">
                    <div className="grid gap-6" style={{ gridTemplateColumns: `200px repeat(${compareProducts.length}, 280px)` }}>
                      <div className="space-y-4">
                        <div className="h-[280px]"></div>
                        <div className="font-semibold">Название</div>
                        <div className="font-semibold">Цена</div>
                        <div className="font-semibold">Рейтинг</div>
                        <div className="h-[60px]"></div>
                        
                        {compareProducts.length > 0 && Object.keys(compareProducts[0].specs).map(key => (
                          <div key={key} className="font-semibold py-2 border-t">{key}</div>
                        ))}
                      </div>

                      {compareProducts.map(product => (
                        <div key={product.id} className="space-y-4">
                          <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                            <Button
                              size="icon"
                              variant="destructive"
                              className="absolute top-2 right-2 rounded-full"
                              onClick={() => toggleCompare(product.id)}
                            >
                              <Icon name="X" size={18} />
                            </Button>
                          </div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-xl font-heading font-bold gradient-purple bg-clip-text text-transparent">
                            {product.price.toLocaleString()} ₽
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                            <span className="font-medium">{product.rating}</span>
                          </div>
                          <Button 
                            className="w-full gradient-purple"
                            onClick={() => toggleCart(product.id)}
                          >
                            {cart.includes(product.id) ? 'В корзине' : 'В корзину'}
                          </Button>
                          
                          {Object.values(product.specs).map((value, idx) => (
                            <div key={idx} className="py-2 border-t text-sm">{value}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="cart" className="animate-fade-in">
            {cartProducts.length === 0 ? (
              <Card className="p-12 text-center bg-white">
                <Icon name="ShoppingCart" size={64} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-2xl font-heading font-bold mb-2">Корзина пуста</h3>
                <p className="text-muted-foreground mb-6">
                  Добавьте товары в корзину для оформления заказа
                </p>
                <Button onClick={() => setActiveTab('catalog')} className="gradient-purple">
                  Перейти в каталог
                </Button>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  {cartProducts.map(product => (
                    <Card key={product.id} className="p-6 bg-white hover-lift">
                      <div className="flex gap-6">
                        <div className="w-32 h-32 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between gap-4 mb-2">
                            <div>
                              <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                              <h4 className="font-heading font-semibold text-lg mb-1">{product.name}</h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                                <span>{product.rating}</span>
                                <span>·</span>
                                <span>{product.reviews} отзывов</span>
                              </div>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => toggleCart(product.id)}
                            >
                              <Icon name="X" size={20} />
                            </Button>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-3">
                              <Button size="icon" variant="outline">
                                <Icon name="Minus" size={16} />
                              </Button>
                              <span className="font-semibold w-8 text-center">1</span>
                              <Button size="icon" variant="outline">
                                <Icon name="Plus" size={16} />
                              </Button>
                            </div>

                            <div className="text-right">
                              <div className="text-2xl font-heading font-bold gradient-purple bg-clip-text text-transparent">
                                {product.price.toLocaleString()} ₽
                              </div>
                              {product.oldPrice && (
                                <div className="text-sm text-muted-foreground line-through">
                                  {product.oldPrice.toLocaleString()} ₽
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 h-fit sticky top-24 bg-white">
                  <h3 className="font-heading font-bold text-xl mb-6">Итого</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Товары ({cartProducts.length})</span>
                      <span className="font-semibold">{totalPrice.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доставка</span>
                      <span className="font-semibold text-green-600">Бесплатно</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">К оплате</span>
                        <span className="font-heading font-bold text-2xl gradient-purple bg-clip-text text-transparent">
                          {totalPrice.toLocaleString()} ₽
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full gradient-purple text-lg py-6">
                    Оформить заказ
                  </Button>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Icon name="Truck" size={20} className="text-primary mt-0.5" />
                      <div className="text-sm">
                        <div className="font-semibold mb-1">Быстрая доставка</div>
                        <div className="text-muted-foreground">Доставим завтра или в удобное время</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="profile" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-white">
                <div className="w-24 h-24 rounded-full gradient-purple mx-auto mb-4 flex items-center justify-center text-white text-3xl font-heading font-bold">
                  АИ
                </div>
                <h3 className="font-heading font-bold text-xl mb-1">Алексей Иванов</h3>
                <p className="text-muted-foreground mb-4">alexey@example.com</p>
                <Button variant="outline" className="w-full">Редактировать профиль</Button>
              </Card>

              <Card className="p-6 bg-white md:col-span-2">
                <h3 className="font-heading font-bold text-xl mb-6">Мои заказы</h3>
                
                <div className="space-y-4">
                  {[
                    { id: '#12345', date: '25 ноября 2024', status: 'Доставлен', total: 89990 },
                    { id: '#12344', date: '18 ноября 2024', status: 'В пути', total: 24990 },
                    { id: '#12343', date: '10 ноября 2024', status: 'Доставлен', total: 129990 }
                  ].map(order => (
                    <Card key={order.id} className="p-4 hover-lift border-2">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-heading font-semibold mb-1">Заказ {order.id}</div>
                          <div className="text-sm text-muted-foreground">{order.date}</div>
                        </div>
                        <Badge className={order.status === 'Доставлен' ? 'bg-green-500' : 'gradient-blue border-0'}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <span className="font-heading font-bold gradient-purple bg-clip-text text-transparent">
                          {order.total.toLocaleString()} ₽
                        </span>
                        <Button variant="outline" size="sm">Подробнее</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-6 mt-6 bg-white">
              <h3 className="font-heading font-bold text-xl mb-6">Избранное</h3>
              
              {favorites.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Нет избранных товаров
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {products.filter(p => favorites.includes(p.id)).map(product => (
                    <Card key={product.id} className="overflow-hidden hover-lift border-2">
                      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <h4 className="font-semibold text-sm mb-2 line-clamp-1">{product.name}</h4>
                        <div className="flex justify-between items-center">
                          <span className="font-heading font-bold gradient-purple bg-clip-text text-transparent">
                            {product.price.toLocaleString()} ₽
                          </span>
                          <Button size="sm" onClick={() => toggleCart(product.id)}>
                            <Icon name="ShoppingCart" size={14} />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="mt-16 bg-white border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-heading font-bold text-xl mb-4 gradient-purple bg-clip-text text-transparent">
                ShopHub
              </h4>
              <p className="text-sm text-muted-foreground">
                Ваш современный маркетплейс с лучшими ценами и быстрой доставкой
              </p>
            </div>
            
            <div>
              <h5 className="font-heading font-semibold mb-4">Покупателям</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Доставка и оплата</li>
                <li>Возврат товара</li>
                <li>Гарантия</li>
                <li>Помощь</li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Вакансии</li>
                <li>Партнерам</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h5 className="font-heading font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>8 800 555-35-35</li>
                <li>info@shophub.ru</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            © 2024 ShopHub. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;