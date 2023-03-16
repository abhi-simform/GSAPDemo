import PropTypes from 'prop-types';
import './PageDescription.scss';

function PageDescription(props) {
  const { description, docLink } = props;
  return (
    <div className='description'>
      <p>{description}</p>
      {docLink && (
        <a href={docLink} target='_blank' rel='noreferrer'>
          Documentation Link
        </a>
      )}
    </div>
  );
}

export default PageDescription;

PageDescription.propTypes = {
  description: PropTypes.string,
  docLink: PropTypes.string,
};
