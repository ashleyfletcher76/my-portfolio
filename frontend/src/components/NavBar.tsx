import LanguageSwitch from "./LanguageToggle";

export default function NavBar() {
  return (
    <div className='flex justify-between items-center p-4'>
      <LanguageSwitch />
    </div>
  );
}
