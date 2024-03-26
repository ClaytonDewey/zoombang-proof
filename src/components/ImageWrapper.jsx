const ImageWrapper = ({ images, alt }) => {
  return (
    <div className='image-grid'>
      {images.map((image, index) => {
        return (
          <div key={index} className='image-wrapper'>
            <img src={image} alt={alt} />
          </div>
        );
      })}
    </div>
  );
};
export default ImageWrapper;
