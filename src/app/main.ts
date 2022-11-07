import { addProduct } from './products/product.service';

addProduct({
  createdAt: new Date(),
  id: 1,
  stock: 12,
  title: 'algo',
  size: 'M',
});
