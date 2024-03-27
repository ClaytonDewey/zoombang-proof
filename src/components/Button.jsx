const Button = ({ type, link, text }) => {
  return (
    <a href={link} className='btn btn-primary' title={`Download ${text}`}>
      Download {type} {text}s
    </a>
  );
};
export default Button;
