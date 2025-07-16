export default function CircleIcon({ filled = false, size = 24, color = '#333' }) {
  return (
    <span
      style={{
        fontSize: size,
        color,
        display: 'inline-block',
        lineHeight: 1,
        verticalAlign: 'middle',
      }}
      aria-label={filled ? 'Filled circle' : 'Empty circle'}
    >
      {filled ? '\u25CF' : '\u25CB'}
    </span>
  );
} 