import express, { Request, Response } from 'express';
import { Product } from './products-interface';
import { ProductManager } from './products-manager';

const app = express();
const productManager = new ProductManager();

app.use(express.json());

app.get('/api/products', (req: Request, res: Response) => {
  const products = productManager.getAllProducts();
  res.json(products);
});

app.get('/api/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const product = productManager.getProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.post('/api/products', (req: Request, res: Response) => {
  const product = req.body as Product;
  productManager.addProduct(product);
  res.status(201).json(product);
});

app.put('/api/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updatedProduct = req.body as Product;
  productManager.updateProduct(id, updatedProduct);
  res.sendStatus(204);
});

app.delete('/api/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  productManager.deleteProduct(id);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});