class Product {
  constructor(id, title, price, stock, images, onsale,supplier ){
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.supplier=supplier;
  }
  get getSupplier() {
    return this._supplier;
    }
  set setSupplier(newName) {
    this._supplier = newName;
    }
  
  	sellUnits(units) {
      if(units >this.stock){
        console.log("no se puede")
      }
      else{
      this.stock = this.stock - units
      }
    }
}

const prod1 = new Product();
const prod2 = new Product(1,"tv",23);
const prod3 = new Product(2,"cocina",250,2,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",1);
const prod4 =  new Product(3,"antena",244,25,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",1);
prod4.setSupplier="importado123";
const prod5 =  new Product(4,"cafetera",244,12,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp",1);
prod5.sellUnits(10)
prod5.sellUnits(3)

console.log(prod1)
console.log(prod2)
console.log(prod3)
console.log(prod4.getSupplier)