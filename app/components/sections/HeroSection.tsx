const navItems = ["How it works", "Features", "About", "Contact"];
export const HeroSection = () => {
  return (
    <header>
      <div className="mx-auto flex min-h-[150px] w-full max-w-[1440px] items-center justify-center px-4 sm:px-6 lg:px-[100px]">
        <div className="flex w-full max-w-[1240px] items-center justify-between gap-4 py-6">
          <a href="/" className="shrink-0" aria-label="Bar Huddle home">
            <img
              className="h-[72px] w-[73px] object-contain sm:h-[88px] sm:w-[89px] lg:h-[104px] lg:w-[105px]"
              alt="Bar huddle JPEG"
              src="/figmaAssets/bar-huddle---jpeg-1.png"
            />
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="mt-[-1.00px] block whitespace-nowrap [font-family:'Poppins',Helvetica] text-sm font-normal leading-[normal] tracking-[-0.18px] text-white transition-opacity hover:opacity-80 lg:text-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button

            className="h-auto shrink-0 rounded-full bg-[#b45ff2] cursor-pointer px-5 py-2.5 [font-family:'Poppins',Helvetica] text-sm font-medium leading-[normal] tracking-[-0.48px] text-white hover:bg-[#a44ae8] sm:px-8 sm:py-3 sm:text-base"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};
