import Button from './Button';

const ButtonContainer = ({ type, links }) => {
  return (
    <div className='btn-container'>
      {links.map((link, index) => {
        return (
          <Button key={index} type={type} link={link.src} text={link.type} />
        );
      })}
    </div>
  );
};
export default ButtonContainer;
