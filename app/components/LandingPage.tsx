import { AppPreviewSection } from "./sections/AppPreviewSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { HeroSection } from "./sections/HeroSection";
import { JSX } from "react/jsx-runtime";
import { Card, CardContent } from "./ui/card";

const stars = [
  {
    className: "top-[135px] left-[281px] w-[85px] h-[82px]",
  },
  {
    className: "top-[168px] left-[1136px] w-[41px] h-[39px]",
  },
  {
    className: "top-[397px] left-[358px] w-9 h-[35px]",
  },
  {
    className: "top-[533px] left-[1022px] w-[85px] h-[82px]",
  },
  {
    className: "top-[639px] left-[118px] w-[51px] h-[49px]",
  },
  {
    className: "top-[1066px] left-[344px] w-[41px] h-[39px]",
  },
];

const backgroundShapes = [
  {
    src: "/figmaAssets/vector-1.svg",
    alt: "Vector",
    className:
      "absolute top-[calc(50.00%_-_4348px)] left-[calc(50.00%_-_875px)] w-[1753px] h-[3285px] max-w-none pointer-events-none select-none",
  },
  {
    src: "/figmaAssets/rectangle-23469.svg",
    alt: "Rectangle",
    className:
      "absolute top-[-763px] left-[645px] w-[1259px] h-[1321px] max-w-none pointer-events-none select-none",
  },
  {
    src: "/figmaAssets/rectangle-23463.svg",
    alt: "Rectangle",
    className:
      "absolute top-[-1034px] left-[971px] w-[1408px] h-[1478px] max-w-none pointer-events-none select-none",
  },
  {
    src: "/figmaAssets/rectangle-23465.svg",
    alt: "Rectangle",
    className:
      "absolute top-[-596px] left-[874px] w-[1371px] h-[1440px] max-w-none pointer-events-none select-none",
  },
];

export const LandingPage = () => {
  return (
    <main className="relative w-full overflow-hidden bg-[#000842] text-white">
      <div className="relative mx-auto min-h-screen w-full">
        {backgroundShapes.map((shape, index) => (
          <img
            key={`bg-shape-${index}`}
            className={shape.className}
            alt={shape.alt}
            src={shape.src}
          />
        ))}

        <div className="absolute left-[-304px] top-[-45px] h-[90px] w-[609px] -rotate-90 rounded-[304.5px/45px] bg-[#b45ff2] opacity-40 blur-[50px]" />
        {stars.map((star, index) => (
          <img
            key={`star-${index}`}
            className={`absolute ${star.className} pointer-events-none select-none`}
            alt="Star"
            src="/figmaAssets/star-12.svg"
          />
        ))}

        <section className="relative z-50! w-full">
          <HeroSection />
        </section>
        <section className="absolute left-1/2 top-[48px] z-20 w-full -translate-x-1/2">
          <HeroIntroSection />
        </section>
        <section className="relative z-10 w-full">
          <div className="relative mx-auto h-[700px] sm:h-[900px] lg:h-[1200px] w-full max-w-[1440px]">
            <img
              className="absolute top-[400px] sm:top-[400px] lg:top-[582px] left-1/2 h-auto w-[280px] sm:w-[380px] lg:w-[608px] lg:h-[615px] -translate-x-1/2 object-cover pointer-events-none select-none"
              alt="Element"
              src="/figmaAssets/413467941-1d8c4441-f695-4631-ab7f-05e1efafd78e--1--2.png"
            />
            <Card className="hidden lg:block absolute left-[900px] top-[717px] w-[354px] border-0 bg-transparent shadow-none">
              <CardContent className="relative h-[113px] p-0">               
                <img
                  className=""
                  alt="Star"
                  src="/figmaAssets/hero-right-image.png"
                />
              </CardContent>
            </Card>
          
            <Card className="hidden lg:block absolute left-46 top-[780px] w-90 border-0 bg-transparent shadow-none">
               <CardContent className="relative h-35.75 w-90 p-0">               
                <img
                  className=""
                  alt="Star"
                  src="/figmaAssets/hero-left-image.png"
                />
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="relative z-10 w-full">
          <AppPreviewSection />
        </section>
      </div>
    </main>
  );
};
