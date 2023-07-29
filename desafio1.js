class ProductManager {
    constructor() {
        this.products = {};
    }

    addProduct(product) {
        if (this.products[product.id]) {
            console.log("Producto existente");
        } else {
            this.products[product.id] = product;
        }
    }

    findProductById(id) {
        const product = this.products[id];
        if (product) {
            console.log(product);
        } else {
            console.log("Not Found");
        }
    }

    findProductByCode(code) {
        const product = Object.values(this.products).find((prod) => prod.code === code);
        if (product) {
            console.log(product);
        } else {
            console.log("Not Found");
        }
    }

    getProducts() {
        console.log(Object.values(this.products));
    }
}

class Product {
    constructor(title, thumbnail, price, code, description, stock) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.price = price;
        this.code = code;
        this.description = description;
        this.stock = stock;
        this.id = Product.idGenerate();
    }

    static idGenerate() {
        if (!this.idIncrement) {

            this.idIncrement = 1;
        } else {

            this.idIncrement++;

        }
        return this.idIncrement;
    }
}

const prod1 = new Product("Leche", [], 250, "ASDF12", "descremada", 115);
const prod2 = new Product("Cafe", [], 1500, "BVCD15", "torrado", 120);
const prod3 = new Product("Té", [], 160, "BVSB16", "de hierbas", 100);

const productManager = new ProductManager();

productManager.addProduct(prod1);
productManager.addProduct(prod2);
productManager.addProduct(prod3);

productManager.getProducts();
productManager.findProductByCode("BVCD15");
productManager.findProductById(2);