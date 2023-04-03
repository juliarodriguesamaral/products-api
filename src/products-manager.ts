import { Product } from './products-interface';

export class ProductManager {
    private products: Product[] = [];
  
    getAllProducts(): Product[] {
      return this.products;
    }
  
    getProductById(id: number): Product | undefined {
      return this.products.find((product) => product.id === id);
    }
  
    addProduct(product: Product): void {
      this.products.push(product);
    }
  
    updateProduct(id: number, updatedProduct: Product): void {
      const index = this.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        this.products[index] = updatedProduct;
      }
    }
  
    deleteProduct(id: number): void {
      const index = this.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
  }