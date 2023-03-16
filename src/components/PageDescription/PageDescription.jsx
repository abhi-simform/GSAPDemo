import './PageDescription.scss';

function PageDescription(props) {
  const { description, docLink } = props;
  return (
    <div className='description'>
      <p>{description}</p>
      {docLink && <a href={docLink}>Documentation Link</a>}
    </div>
  );
}

export default PageDescription;
