import './Container.scss';

function Container(props) {
  const { fluid = false, className, ...rest } = props;
  const containerType = fluid ? 'container container--fluid' : 'container';
  const containerClass = className ? `${containerType} ${className}` : containerType;

  return <div className={containerClass} {...rest} />;
}

export default Container;
