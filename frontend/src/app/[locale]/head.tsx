export default function Head() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){
						try{
						var theme = localStorage.getItem('theme');
						var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
						var isDark = theme === 'dark' || (theme === null && prefersDark);
						if(isDark) document.documentElement.classList.add('dark');
						else document.documentElement.classList.remove('dark');
						document.documentElement.setAttribute('data-theme-ready','true');
						}catch(e){}
					})();`,
        }}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
