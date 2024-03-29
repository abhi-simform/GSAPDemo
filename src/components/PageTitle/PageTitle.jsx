import PropTypes from 'prop-types';
import './PageTitle.scss';

function PageTitle(props) {
  const { title } = props;
  return (
    <h1 className='title'>
      <span>{title}</span>
    </h1>
  );
}

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string,
};
