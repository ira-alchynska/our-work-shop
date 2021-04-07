import ProductsList from '../components/ProductsList';

const products = [
  {
    id: 1,
    name: 'phone',
    price: 5000,
    quantity: 10,
  },
  {
    id: 2,
    name: 'phone',
    price: 15000,
    quantity: 8,
  },
  {
    id: 3,
    name: 'phone',
    price: 7000,
    quantity: 0,
  },
  {
    id: 4,
    name: 'notebook',
    price: 27000,
    quantity: 6,
  },
];

const Products = () => {
  return (
    <div className="products">
      <ProductsList products={products} />
    </div>
  );
};
export default Products;
