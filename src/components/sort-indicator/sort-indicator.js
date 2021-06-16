import './sort-indicator.css';

const SortIndicator = ({ state }) => {
  if (state === `default`) {
    return null;
  }
  const indicator = state ? <span>↑</span> : <span>↓</span>;
  return indicator;
};

export default SortIndicator;
