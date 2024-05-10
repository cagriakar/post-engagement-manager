import { useTheme } from '@/contexts/ThemeProvider';
import { MoonIcon, SunIcon } from './icons';

export default function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();

  return (
    <label className='swap swap-rotate btn btn-circle btn-ghost hidden md:inline-grid'>
      <input type='checkbox' onChange={toggleTheme} />
      <MoonIcon />
      <SunIcon />
    </label>
  );
}
