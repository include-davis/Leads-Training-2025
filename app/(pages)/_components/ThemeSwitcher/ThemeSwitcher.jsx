'use client';

import { useTheme } from '../../_context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: '1px solid var(--text-primary)',
        borderRadius: '6px',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        color: 'var(--text-primary)',
      }}
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
