class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if (
            product.title &&
            product.thumbnail &&
            product.price !== undefined &&
            product.code &&
            product.description &&
            product.stock !== undefined
        ) {
            const isCodeRepeated = this.products.some((p) => p.code === product.code);
            if (isCodeRepeated) {
                console.log("Ya existe un producto con este código");
            } else {
                const existingProduct = this.products.find((p) => p.id === product.id);
                if (existingProduct) {
                    console.log("Producto existente");
                } else {
                    this.products.push(product);
                }
            }
        } else {
            console.log("Campos requeridos faltantes en el producto");
        }
    }

    findProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            console.log("Not Found");
            return null;
        }
    }

    findProductByCode(code) {
        const product = this.products.find((p) => p.code === code);
        if (product) {
            return product;
        } else {
            console.log("Not Found");
            return null;
        }
    }

    getProducts() {
        console.log(this.products);
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
console.log(productManager.findProductByCode("BVCD15"));
console.log(productManager.findProductById(2));