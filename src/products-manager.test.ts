import { ProductManager } from './products-manager';

describe('ProductManager', () => {
  let productManager;
  let product1;
  let product2;

  beforeEach(() => {
    productManager = new ProductManager();
    product1 = { id: 1, name: 'Product 1', description: "description 1", price: 10 };
    product2 = { id: 2, name: 'Product 2', description: "description 2", price: 20 };
  });

  it('should add a product', () => {
    productManager.addProduct(product1);
    expect(productManager.getAllProducts()).toContain(product1);
  });

  it('should update a product', () => {
    productManager.addProduct(product1);
    productManager.updateProduct(1, { id: 1, name: 'Product 1 updated', description: "description 1 updated", price: 15 });
    expect(productManager.getProductById(1)).toEqual({ id: 1, name: 'Product 1 updated', description: "description 1 updated", price: 15 });
  });

  it('should delete a product', () => {
    productManager.addProduct(product1);
    productManager.addProduct(product2);
    productManager.deleteProduct(1);
    expect(productManager.getAllProducts()).toEqual([product2]);
  });

  it('should return undefined if product is not found by id', () => {
    expect(productManager.getProductById(1)).toBeUndefined();
  });
});
