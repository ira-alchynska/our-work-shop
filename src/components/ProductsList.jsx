import ProductItem from './ProductItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 10, /// [0, 10, 10, 10] якщо треба задати різні параметри  - масив
  },
});

const ProductsList = ({ products }) => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      {products.map(product =>
        product.quantity > 0 ? (
          <ProductItem key={product.id} product={product} />
        ) : null,
      )}
    </ul>
  );
};
export default ProductsList;
