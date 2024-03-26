import ImageWrapper from './ImageWrapper';

const Details = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <details key={product.title}>
            <summary>{product.title}</summary>
            <ImageWrapper images={product.images} alt={product.title} />
          </details>
        );
      })}
    </>
  );
};
export default Details;
