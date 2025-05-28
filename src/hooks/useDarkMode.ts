// src/hooks/useDarkMode.ts
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

function useDarkMode(): [Theme, (theme: Theme) => void] {
  // Lấy trạng thái từ localStorage hoặc mặc định là 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as Theme;
    }
    // Phát hiện chế độ tối ưu của hệ điều hành
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');

    // Lưu trạng thái vào localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setMode = (mode: Theme) => {
    setTheme(mode);
  };

  return [theme, setMode];
}

export default useDarkMode;