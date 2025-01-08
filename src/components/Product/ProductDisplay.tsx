import { ProductDto } from '../../dto/response/productDto';
import ProductCard from './ProductCard';

interface ProductDisplayProps {
  products: ProductDto[];
}
function ProductDisplay({ products }: ProductDisplayProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:pt-1 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.productNumber} product={product} />
      ))}
    </div>
  );
}

export default ProductDisplay;
