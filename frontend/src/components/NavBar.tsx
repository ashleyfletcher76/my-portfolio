import LanguageSwitch from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <div className='flex items-center p-4 gap-1'>
      <LanguageSwitch />
      <ThemeToggle />
    </div>
  );
}
