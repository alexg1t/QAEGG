// products.js
class Product {
    constructor(id, title, description, price, discount, image, taxPolicy,colors) {
      this.id = id;                   // Identificador único del producto
      this.title = title;             // Título del producto
      this.description = description; // Descripción breve del producto
      this.price = price;             // Precio del producto
      this.discount = discount;       // Descuento aplicado al producto
      this.image = image;             // URL de la imagen del producto
      this.taxPolicy = taxPolicy;     // Información sobre impuestos y políticas
      this.colors=colors;
    }
  }
  const product1 = new Product(
    1,
    "iPad Pro 12.9",
    "Silver",
    900000,
    "50% Off",
    "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    "Incluye impuesto País y percepción AFIP",
    ["azul","rojo"]
  );
  
  const product2 = new Product(
    2,
    "MacBook Air M2",
    "Midnight",
    1400000,
    "30% Off",
    "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    "Incluye impuesto País y percepción AFIP",
    ["azul","rojo"]
  );
  
  const product3 = new Product(
    3,
    "iPhone 14 Pro Max",
    "Deep Purple",
    1200000,
    "20% Off",
    "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    "Incluye impuesto País y percepción AFIP",
    ["azul","rojo"]
  );
  
  const product4 = new Product(
    4,
    "Apple Watch Series 8",
    "Starlight",
    400000,
    "15% Off",
    "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    "Incluye impuesto País y percepción AFIP",
    ["azul","rnegro"]
  );
  
  const product5 = new Product(
    5,
    "AirPods Pro (2nd Gen)",
    "White",
    300000,
    "25% Off",
    "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    "Incluye impuesto País y percepción AFIP",
    ["azul","rojo"]
  );
  
  const product6 = new Product(
    6,
    "Apple TV 4K",
    "Black",
    250000,
    "10% Off",
    "https://i.postimg.cc/kX8PKZpq/ipad2.jpg",
    "Incluye impuesto País y percepción AFIP",
    ["azul","rojo"]
  );
  

const products = [product1, product2, product3, product4, product5, product6];