import PropType from 'prop-types';

const MobileToggle = ({ children }) => {
  const onClickToggle = () => {
    if (document.body.classList.contains('is-mobile-open')) {
      document.body.classList.remove('is-mobile-open');
    } else {
      document.body.classList.add('is-mobile-open');
    }
  };

  document.addEventListener('click', (e) => {
    const closest = e.target.closest('.mobile-toggle');
    const toggle = e.target.closest('.mobile-toggle2');
    const closeToggle = e.target.closest('.mobile-item-remove');

    if (!closest && document.body.classList.contains('is-mobile-open') && !toggle && !closeToggle) {
      document.body.classList.remove('is-mobile-open');
    }
  });

  return children({ onClickToggle });
};

MobileToggle.propTypes = {
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.func,
    PropType.node
  ])
};

export default MobileToggle;
