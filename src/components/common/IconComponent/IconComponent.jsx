const Icon = ({ id, width, height, color }) => (
  <svg width={`${width}`} height={`${height}`} style={{ fill: color }}>
    <use href={`/public/symbol-defs.svg#${id}`} />
  </svg>
);

export default Icon;
