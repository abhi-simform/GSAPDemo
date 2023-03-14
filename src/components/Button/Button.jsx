import './Button.scss';

const Button = (props) => {
  const { variant = 'primary', size = 'regular', className, ...rest } = props;
  const btnClass = className ? `btn btn--${variant} btn--${size} ${className}` : `btn btn--${variant} btn--${size}`;

  return <button className={btnClass} {...rest} />;
};

export default Button;
