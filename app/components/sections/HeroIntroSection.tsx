import { JSX } from "react/jsx-runtime";
import { Button } from "../ui/button";

const storeButtons = [
  {
    alt: "Logos apple app",
    src: "/figmaAssets/logos-apple-app-store.svg",
    topLabel: "Available on the",
    bottomLabel: "App Store",
    imageClassName: "h-[22px] w-[22px]",
  },
  {
    alt: "Google play",
    src: "/figmaAssets/google-play-6124997-1-2.png",
    topLabel: "Get it on",
    bottomLabel: "Google Play",
    imageClassName: "h-[22px] w-[22px] object-cover",
  },
];

export const HeroIntroSection = () => {
  return (
    <section className="relative w-full px-4 pt-[100px] sm:pt-[140px] lg:pt-[188px] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[819px] flex-col items-center gap-6 text-center">
        <header className="flex w-full flex-col items-center gap-6">
          <h1 className="w-full [font-family:'Manrope',Helvetica] capitalize text-[40px] font-semibold leading-[1.05] tracking-[-1.2px] text-transparent sm:text-[52px] sm:tracking-[-1.6px] md:text-[62px] md:tracking-[-1.9px] lg:text-[70px] lg:leading-[75px] lg:tracking-[-2.1px]">
            <span className="text-[#fdf88f]">Discover</span>
            <span className="text-[#b45ff2]">
              {" "}
              the Nightlife Around You in{" "}
            </span>
            <span className="text-[#fdf88f]">Real Time</span>
          </h1>
          <p className="max-w-[659px] [font-family:'Manrope',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#e7c7ff] sm:text-lg sm:leading-7 md:text-2xl">
            See where the energy is before you arrive. Explore nearby bars,
            lounges, and clubs in real time through live stories, crowd
            activity, and venue vibes.
          </p>
        </header>
        <nav
          aria-label="Download app"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {storeButtons.map((button) => (
            <button
              key={button.bottomLabel}
              className="relative h-auto min-h-[50px] w-full overflow-hidden rounded-[364.1px] border-0 bg-[linear-gradient(90deg,rgba(122,27,180,1)_0%,rgba(238,227,113,1)_100%)] px-5 py-3 text-left shadow-none before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[364.1px] before:bg-[linear-gradient(90deg,rgba(132,36,187,1)_0%,rgba(253,248,143,1)_100%)] before:p-px before:[-webkit-mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude] sm:w-[179.82px]"
            >
              <a
                href="#"
                className="relative z-[2] flex w-full items-center justify-center gap-2.5"
              >
                <img
                  className={button.imageClassName}
                  alt={button.alt}
                  src={button.src}
                />
                <span className="inline-flex flex-col items-start justify-center gap-px">
                  <span className="[font-family:'Manrope',Helvetica] text-xs font-medium leading-[13px] tracking-[-0.24px] whitespace-nowrap text-white">
                    {button.topLabel}
                  </span>
                  <span className="[font-family:'Manrope',Helvetica] text-sm font-bold leading-[13px] tracking-[-0.24px] whitespace-nowrap text-white">
                    {button.bottomLabel}
                  </span>
                </span>
              </a>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};
