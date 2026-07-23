import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const nearbyCards = [
  {
    name: "Loungex",
    distance: "70m Away",
    image: "/figmaAssets/ellipse-9339-1.svg",
    wrapperClass: "top-0 left-[3.33%]",
  },
  {
    name: "Nexoria",
    distance: "10m Away",
    image: "/figmaAssets/ellipse-9339-2.svg",
    wrapperClass: "top-[76.10%] left-0",
  },
  {
    name: "Velveta",
    distance: "55m Away",
    image: "/figmaAssets/ellipse-9339.svg",
    wrapperClass: "top-[46.22%] left-[63.80%]",
  },
];

const stripeBlocks = [
  "#fdeee4",
  "#f4f4f44c",
  "#fdeee4",
  "#f4f4f44c",
  "#fdeee4",
  "#f4f4f44c",
  "#fdeee4",
  "#f4f4f44c",
  "#fdeee4",
  "#f4f4f44c",
  "#fdeee4",
  "#f4f4f44c",
  "#fdeee4",
  "#f4f4f44c",
  "#fdeee4",
  "#f4f4f44c",
  "#fdeee4",
  "#f4f4f44c",
];

const featureColumnsLeft = [
  {
    number: "01",
    title: "Live Venue Activity",
    description: "See which venues are trending in real time.",
  },
  { 
    number: "03",
    title: "Global Venue Discovery",
    description: "Explore nightlife venues worldwide with live insights, activity, and venue data.",
  },
];

const featureColumnsRight = [
  {
    number: "02",
    title: "Attendance Insights",
    description: "Know who's going before stepping out.",
  },
  {
    number: "04",
    title: "Find Your Crowd",
    description: "Add people you meet, grow your network, and keep in touch through secure chat.",
  },
];

const contactInfo = [
  {
    label: "Location",
    value: "123 Urban Street, Downtown, New York, NY 10001",
    icon: "/figmaAssets/frame-1597880409-2.svg",
    underline: true,
  },
  {
    label: "Phone",
    value: "+1 (555) 123-4567",
    icon: "/figmaAssets/frame-1597880409.svg",
    underline: false,
  },
  {
    label: "Email",
    value: "support@barhuddle.com",
    icon: "/figmaAssets/frame-1597880409-1.svg",
    underline: false,
  },
];

const storeButtons = [
  {
    eyebrow: "Available on the",
    label: "App Store",
    icon: "/figmaAssets/logos-apple-app-store.svg",
    iconClass: "w-[22px] h-[22px]",
  },
  {
    eyebrow: "Get it on",
    label: "Google Play",
    icon: "/figmaAssets/google-play-6124997-1-2.png",
    iconClass: "w-[22px] h-[22px] object-cover",
  },
];

const quickLinks = ["Home", "About", "Features", "Contact"];

const socialIcons = [
  "/figmaAssets/tik-tok.png",
  "/figmaAssets/twiter-icon.png",
  "/figmaAssets/insta-icon.png",
];

const glassCardClass =
  "rounded-3xl overflow-hidden border border-white/10 bg-[linear-gradient(175deg,rgba(132,36,187,0.9)_0%,rgba(180,95,242,0.5)_100%)] shadow-[inset_-10px_10px_20px_#ffffff40,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]  backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]";

export const AppPreviewSection = () => {
  return (
    <section className="relative w-full overflow-hidden ">
      <div id="how-it-works" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-[-520px] h-[1492px] w-[1492px] -translate-x-1/2 rounded-full bg-[#b45ff2] opacity-40 blur-[150px]" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-24 pt-[90px] sm:px-8 lg:px-[100px]">
          <header className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col items-start gap-2">
              <h2 className="relative w-fit [font-family:'Manrope',Helvetica] text-[44px] font-normal leading-[48px] tracking-[0.88px] text-transparent sm:text-[56px] sm:leading-[60px] lg:text-[70px] lg:leading-[75px]">
                <span className="font-semibold tracking-[0.98px] text-[#b45ff2]">
                  How It{" "}
                </span>
                <span className="font-semibold tracking-[0.98px] text-white">
                  works
                </span>
              </h2>
              <div className="inline-flex items-center gap-[9.74px]">
                <img
                  className="h-[42px] w-[84px]"
                  alt="Frame"
                  src="/figmaAssets/frame-1597880379.svg"
                />
                <img
                  className="h-[42px] w-[84px]"
                  alt="Frame"
                  src="/figmaAssets/frame-1597880381.svg"
                />
              </div>
            </div>
            <div className="inline-flex items-start gap-4 self-start lg:pt-4">
              <img
                className="h-[83px] w-1 shrink-0"
                alt="Line"
                src="/figmaAssets/line-19.svg"
              />
              <p className="max-w-[492px] [font-family:'Manrope',Helvetica] text-lg font-normal leading-6 tracking-[0] text-[#fdf88f]">
                Explore trending nightlife spots, discover who’s attending, and
                meet new people as the night unfolds.
              </p>
            </div>
          </header>
          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[583px_1fr]">
            <Card className={`${glassCardClass} h-full`}>
              <CardContent className="relative min-h-[420px] p-0">
                <div className="absolute left-1/2 top-[-50px] h-[61px] w-[373px] -translate-x-1/2 rounded-[186.5px/30.5px] bg-white blur-[7px]" />
                <div className="absolute left-[25px] top-[151px] h-[251px] w-[360px]">
                  {nearbyCards.map((item) => (
                    <div
                      key={item.name}
                      className={`absolute flex h-[23.90%] w-[36.20%] ${item.wrapperClass}`}
                    >
                      <div className="relative z-50 flex h-[60px] w-[130.5px] flex-1 flex-col items-start gap-[7.5px] rounded-[75px] bg-[#e7c7ff] px-3 py-[9px] shadow-[0px_3px_22.5px_#83838340]">
                        <div className="relative mb-[-2.25px] inline-flex items-center gap-1.5">
                          <img
                            className="relative h-[44.25px] w-[44.25px] object-cover"
                            alt={item.name}
                            src={item.image}
                          />
                          <div className="inline-flex flex-col items-start justify-center">
                            <div className="relative mt-[-0.75px] w-fit [font-family:'Poppins',Helvetica] text-[13.5px] font-bold leading-[normal] tracking-[-0.68px] text-[#8424bb]">
                              {item.name}
                            </div>
                            <div className="inline-flex items-center gap-[3.54px]">
                              <div className="h-[5.31px] w-[5.31px] rounded-[2.66px] bg-[#ff8331]" />
                              <div className="relative mt-[-0.44px] w-fit whitespace-nowrap [font-family:'Poppins',Helvetica] text-[7.5px] font-normal leading-[19.9px] tracking-[-0.38px] text-black">
                                {item.distance}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute capitalize left-[24px] top-[32px] max-w-[518px] [font-family:'Manrope',Helvetica] text-[32px] font-normal leading-9 tracking-[0] text-transparent">
                  <span className="font-semibold text-white">
                    Find bars, clubs, and lounges&nbsp;
                  </span>
                  <span className="font-bold text-[#fdf88f]">
                    near you instantly
                  </span>
                </div>
                <img
                  className="absolute left-[18px] top-[135px] h-[300px] w-[350px]"
                  alt="Group"
                  src="/figmaAssets/group-1000010470.png"
                />
                <img
                  className="absolute left-[314px] top-[129px]  w-[245px] object-cover"
                  alt="Front view blank"
                  src="/figmaAssets/front-view-blank-smartphone-psd-mockup-1.png"
                />
              </CardContent>
            </Card>
            <Card className={`${glassCardClass} h-full`}>
              <CardContent className="relative min-h-[420px] p-0">
                <div className="absolute left-1/2 top-[-50px] h-[61px] w-[373px] -translate-x-1/2 rounded-[186.5px/30.5px] bg-white blur-[7px]" />
                <div className=" ">
                  <Image
                    fill
                    alt="Frame"
                    src="/figmaAssets/frame-design.png"
                    className=" w-full"
                  />
                </div>
                <div className="absolute capitalize left-[24px] top-[32px] max-w-[525px] [font-family:'Manrope',Helvetica] text-[32px] font-semibold leading-9 tracking-[0] text-white">
                  Check live attendee activity and discover where the crowd is
                  heading.
                </div>
                <div className="absolute left-1/2 top-[35%] h-[219px] w-[429px] -translate-x-1/2 -translate-y-[-10px]">
                  <div className="absolute left-[77px] top-[9px] h-[87px] w-[350px] rotate-[-3.03deg] rounded-[29.13px] bg-[#e7c7ff] shadow-[0px_4px_30px_#83838340]" />
                  <div className="absolute left-[98px] top-[21px] flex h-[62px] w-[293px] rotate-[-3.03deg]">
                    <div className="relative flex h-[62.34px] w-[293.35px] items-center justify-between">
                      <img
                        className="relative mb-[-1.60px] ml-[-1.61px] mt-[-1.61px] h-[65.55px] w-[65.55px] rotate-[3.03deg]"
                        alt="Group"
                        src="/figmaAssets/group-1000010460.png"
                      />
                      <div className="relative flex w-[217px] flex-col items-start gap-[5px]">
                        <div className="relative mt-[-1.00px] self-stretch [font-family:'Poppins',Helvetica] text-sm font-normal leading-[normal] tracking-[-0.70px] text-[#b45ff2]">
                          Check who&apos;s already at the venue.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[7px] left-0.5 h-[86px] w-[350px] rotate-[-2.47deg] rounded-[29.13px] bg-[#e7c7ff] shadow-[0px_4px_30px_#83838340]" />
                  <div className="absolute left-[25px] top-[140px] flex h-[58px] w-[287px] rotate-[-2.47deg]">
                    <div className="relative flex h-[58.26px] w-[287.32px] items-center justify-between">
                      <div className="relative h-[58.26px] w-[58.26px] rounded-[29.13px] bg-[#e7c7ff] shadow-[inset_-2px_2px_4px_#ffffff80]">
                        <img
                          className="absolute left-[12.98%] top-[calc(50.00%_-_15px)] h-[30px] w-[73.22%]"
                          alt="Vector"
                          src="/figmaAssets/vector.svg"
                        />
                      </div>
                      <div className="relative flex w-[214px] flex-col items-start gap-[5px]">
                        <div className="relative mt-[-1.00px] self-stretch [font-family:'Manrope',Helvetica] text-[18.6px] font-bold leading-[normal] tracking-[-0.93px] text-[#8424bb]">
                          Trending Right Now
                        </div>
                        <div className="relative mr-[-1.00px] w-fit [font-family:'Poppins',Helvetica] text-sm font-normal leading-[normal] tracking-[-0.70px] text-[#b45ff2]">
                          Discover the hottest spots nearby.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[632px_584px]">
            <Card className={`${glassCardClass} h-full`}>
              <CardContent className="relative min-h-[361px] p-0">
                <div className="absolute left-1/2 top-[-50px] h-[61px] w-[373px] -translate-x-1/2 rounded-[186.5px/30.5px] bg-white blur-[7px]" />
                <div className="absolute capitalize left-[24px] top-[32px] max-w-[584px] [font-family:'Manrope',Helvetica] text-[32px] font-normal leading-9 tracking-[0] text-transparent">
                  <span className="font-bold text-[#fdf88f]">
                    Make connections
                  </span>
                  <span className="font-semibold text-white">
                    {" "}
                    with people you meet
                  </span>
                </div>
                <div className="flex items-center justify-center p-4">
                  <Image
                    src="/figmaAssets/list-attend.png"
                    width={250}
                    height={250}
                    className="object-cover absolute bottom-0 z-10"
                    alt="Frame"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="h-full border-0 overflow-hidden">
              <CardContent className="relative min-h-[361px] p-0">
                <div className="absolute z-10 left-[24px] capitalize top-[32px] max-w-[584px] [font-family:'Manrope',Helvetica] text-[32px] font-normal leading-9 tracking-[0] text-transparent">
                  <span className="font-semibold text-white"> Find The</span>
                  <span className="font-bold text-[#fdf88f]"> Perfect Spot</span>
                  <span className="font-semibold text-white">
                    {" "}
                    For Your <br /> Night
                  </span>
                </div>
                <div className="flex items-center justify-center p-4">
                  <Image
                    width={280}
                    height={200}
                    alt="Frame"
                    src="/figmaAssets/front_view_blank_smartphone_psd_mockup_3 1.png"
                    className="object-cover absolute bottom-0 z-10"
                  />
                </div>
                <Image
                  fill
                  alt="Frame"
                  src="/figmaAssets/test-fram-1.png"
                  className="object-cover absolute z-8!"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <section id="features" className="w-full bg-[#b45ff2]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-[90px] pt-[90px] sm:px-8 lg:px-[100px]">
          <header className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="inline-flex flex-col items-start justify-center gap-2">
              <h2 className="self-stretch [font-family:'Manrope',Helvetica] text-[42px] font-semibold leading-[48px] tracking-[-0.84px] text-transparent sm:text-[52px] sm:leading-[60px] lg:text-[65px] lg:leading-[75px]">
                <span className="tracking-[-0.84px] text-white">
                  Built for Modern
                  <br />
                  Nightlife{" "}
                </span>
                <span className="tracking-[-0.84px] text-[#fdf88f]">
                  Discovery
                </span>
              </h2>
            </div>
            <div className="inline-flex items-start gap-4 self-start lg:pt-4">
              <img
                className="h-[83px] w-1 shrink-0"
                alt="Line"
                src="/figmaAssets/line-19.svg"
              />
              <p className="max-w-[492px] [font-family:'Manrope',Helvetica] text-lg font-normal leading-6 tracking-[0] text-white">
                Bar Huddle is your guide to finding the spot for you. Find what
                you're looking for, check in, and connect.
              </p>
            </div>
          </header>
          <Card className={`${glassCardClass} mt-16`}>
            <CardContent className="relative p-8 sm:p-10 lg:p-[60px]">
              <img
                className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[13px] -translate-x-1/2 -translate-y-1/2"
                alt="Line"
                src="/figmaAssets/line-20.svg"
              />
              <img
                className="pointer-events-none absolute left-1/2 top-1/2 h-[13px] w-[92%] -translate-x-1/2 -translate-y-1/2"
                alt="Line"
                src="/figmaAssets/line-21.svg"
              />
              <div className="relative grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-[142px]">
                <div className="flex flex-col gap-14">
                  {featureColumnsLeft.map((item) => (
                    <div
                      key={item.number}
                      className="flex flex-col items-end text-right"
                    >
                      <div className="[font-family:'Manrope',Helvetica] text-[65.6px] font-semibold leading-[82px] tracking-[1.31px] text-[#FDF88F]">
                        {item.number}
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="[font-family:'Manrope',Helvetica] text-[32px] font-semibold leading-10 tracking-[-0.64px] text-[#fdf88f]">
                          {item.title}
                        </div>
                        <div className="[font-family:'Manrope',Helvetica] text-2xl font-normal leading-6 tracking-[0.48px] text-white">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-14">
                  {featureColumnsRight.map((item) => (
                    <div
                      key={item.number}
                      className="flex flex-col items-start text-left"
                    >
                      <div className="[font-family:'Manrope',Helvetica] text-[65.6px] font-semibold leading-[82px] tracking-[1.31px] text-[#FDF88F]">
                        {item.number}
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="[font-family:'Manrope',Helvetica] text-[32px] font-semibold leading-10 tracking-[-0.64px] text-[#fdf88f]">
                          {item.title}
                        </div>
                        <div className="[font-family:'Manrope',Helvetica] text-2xl font-normal leading-6 tracking-[0.48px] text-white">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section id="contact" className="relative w-full  bg-[#08083f]">
        <img
          className="pointer-events-none absolute -right-44 top-0 hidden  lg:block"
          alt="Group"
          src="/figmaAssets/group-4829.png"
        />
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-24 pt-[90px] sm:px-8 lg:px-[100px]">
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[600px_624px] lg:justify-between">
            <div className="flex flex-col items-start gap-16">
              <div className="flex flex-col items-start gap-6 self-stretch">
                <h2 className="self-stretch capitalize [font-family:'Manrope',Helvetica] text-[44px] font-normal leading-[48px] tracking-[-0.88px] text-transparent sm:text-[54px] sm:leading-[58px] lg:text-[65px] lg:leading-[65px]">
                  <span className="font-bold tracking-[-0.84px] leading-[70px] text-[#b45ff2]">
                    Let us take the guess work out of your{" "}
                  </span>
                  <span className="font-bold capitalize tracking-[-0.84px] leading-[70px] text-[#fdf88f]">
                    Night out.
                  </span>
                </h2>
                <p className="max-w-[483px] [font-family:'Manrope',Helvetica] text-lg font-normal leading-6 tracking-[0] text-[#e7c7ff]">
                  Know before you go. Bar Huddle is your ultimate tool to let
                  you focus on the right things. Find the best spot before you
                  step out the door.
                </p>
              </div>
              <div className="flex w-full max-w-[538px] flex-col gap-[15px]">
                {contactInfo.map((item) => (
                  <Card
                    key={item.label}
                    className="rounded-[10px] border-0 bg-[#b45ff233]! shadow-[0px_4px_12px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]"
                  >
                    <CardContent className="flex min-h-[84px] items-center justify-center gap-4 px-3.5 py-[5px]">
                      <img
                        className="h-[60px] w-[60px]"
                        alt={item.label}
                        src={item.icon}
                      />
                      <div className="flex flex-1 flex-col items-start gap-[3px]">
                        <div className="mt-[-1.00px] w-fit whitespace-nowrap [font-family:'Manrope',Helvetica] text-base font-semibold leading-5 tracking-[0] text-[#b45ff2]">
                          {item.label}
                        </div>
                        <div
                          className={`relative [font-family:'Manrope',Helvetica] text-lg font-normal leading-6 tracking-[0] text-white break-words ${item.underline ? "underline" : ""
                            }`}
                        >
                          {item.value}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="rounded-[10px] border-0 bg-[#B45FF2]/20! shadow-lg backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]">
              <CardContent className="relative flex min-h-[643px] items-center justify-center overflow-hidden px-8.5 py-[5px]">
                {/* <div className="absolute inset-y-0 right-[-70px] w-[260px] rounded-full bg-[#8424bb]/40 blur-0" /> */}
                <div className="relative w-full inline-flex flex-col items-start gap-4">
                  <div className="flex w-full max-w-[560px] flex-col items-start gap-3">
                    <h3 className="w-fit  [font-family:'Manrope',Helvetica] text-[45px] font-bold leading-[55px] tracking-[-0.90px] text-[#b45ff2]">
                      Get In Touch
                    </h3>
                    <p className="self-stretch [font-family:'Manrope',Helvetica] text-lg font-normal leading-6 tracking-[0] text-white">
                      Have questions or feedback? Reach out anytime.
                    </p>
                  </div>
                  <form className="flex w-full flex-col items-start gap-4">
                    <Input
                      defaultValue=""
                      aria-label="Full name"
                      placeholder="Full name"
                      className="h-[65px] rounded-2xl border-0 bg-[#e7c7ff]! px-6 [font-family:'Manrope',Helvetica] text-base font-medium leading-5 tracking-[0] text-[#8424bb] placeholder:text-[#8424bb] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Input
                      defaultValue=""
                      aria-label="Email"
                      placeholder="Email"
                      className="h-[65px] rounded-2xl border-0 bg-[#e7c7ff]! px-6 [font-family:'Manrope',Helvetica] text-base font-medium leading-5 tracking-[0] text-[#8424bb] placeholder:text-[#8424bb] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Textarea
                      defaultValue=""
                      aria-label="Message"
                      placeholder="Message"
                      className="min-h-[120px] resize-none rounded-2xl border-0 bg-[#e7c7ff]! px-6 py-[23px] [font-family:'Manrope',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#8424bb] placeholder:text-[#8424bb] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <button
                      type="button"
                      className="relative ml-0 cursor-pointer h-[82px]! w-[231px] overflow-hidden rounded-[50px] border-0 bg-[linear-gradient(90deg,rgba(122,27,180,1)_0%,rgba(238,227,113,1)_100%)] px-6 py-0 before:pointer-events-none before:absolute before:inset-0 before:rounded-[50px] before:p-px before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[background:linear-gradient(270deg,rgba(132,36,187,1)_0%,rgba(253,248,143,1)_100%)] before:[mask-composite:exclude] before:z-[1] h-auto"
                    >
                      <span className="relative z-[2] flex items-center justify-center gap-2.5">
                        <img
                          className="h-6 w-6"
                          alt="Streamline send"
                          src="/figmaAssets/streamline-send-email-solid.svg"
                        />
                        <span className="[font-family:'Manrope',Helvetica] text-lg font-semibold leading-6 tracking-[0] text-white">
                          Send Message
                        </span>
                      </span>
                    </button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="about" className="relative flex w-full flex-col">
        <div className="relative w-full overflow-hidden bg-[#b45ff24c]">
          <img
            className="pointer-events-none absolute left-0 top-1/2 h-[892px] w-[922px] -translate-y-1/2"
            alt="Vector"
            src="/figmaAssets/vector-7776.svg"
          />
          <img
            className="pointer-events-none absolute right-[-120px] top-1/2 h-[892px] w-[1246px] -translate-y-1/2"
            alt="Vector"
            src="/figmaAssets/vector-7775.svg"
          />
          <img
            className="pointer-events-none absolute left-[79.81%] top-[50.70%] h-[121.99%] w-[68.89%]"
            alt="Group"
            src="/figmaAssets/group.png"
          />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-[173px] sm:px-8 lg:px-[100px]">
            <Card className="rounded-[10px] border-0 bg-[#b45ff233] shadow-[0px_4px_12px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2px)_brightness(110%)]">
              <CardContent className="flex flex-col items-center justify-between gap-8 px-6 py-8 lg:flex-row lg:px-[60px] lg:py-[5px]">
                <div className="inline-flex flex-col items-start justify-center gap-[21px]">
                  <h2 className="max-w-[580px] font-['Manrope',Helvetica] text-[32px] font-semibold leading-[38px] tracking-[0.64px] text-transparent sm:text-[40px] sm:leading-[45px]">
                    <span className="tracking-[0.32px]  text-white">
                      Download The
                    </span>
                    <span className="tracking-[0.32px] text-[#fdf88f]">
                      {" "}
                      App Now!
                    </span>
                  </h2>
                  <p className="max-w-[616px] font-['Manrope',Helvetica]  text-base font-light leading-6 tracking-[-0.80px] text-white">
                    Discover nearby venues in real time, find where people are
                    gathering, and connect once you step inside. No unnecessary
                    swipes. No algorithms.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    {storeButtons.map((button) => (
                      <button
                        key={button.label}
                        className="h-auto w-[180px] rounded-[364.1px] cursor-pointer border border-solid border-[#e7c7ff] bg-[#8424bb] px-4 py-2 shadow-[0px_0px_8px_2px_#b45ff2]"
                      >
                        <span className="flex items-center justify-center gap-2.5">
                          <img
                            className={button.iconClass}
                            alt={button.label}
                            src={button.icon}
                          />
                          <span className="inline-flex flex-col items-start justify-center gap-px">
                            <span className="[font-family:'Manrope',Helvetica] text-xs font-medium leading-[13px] tracking-[-0.24px] text-white">
                              {button.eyebrow}
                            </span>
                            <span className="[font-family:'Manrope',Helvetica] text-sm font-bold leading-[13px] tracking-[-0.24px] text-white">
                              {button.label}
                            </span>
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <img
                  className="h-auto w-full max-w-[520px] lg:-ml-4 lg:my-[-59px]"
                  alt="Group"
                  src="/figmaAssets/group-1000010474.png"
                />
              </CardContent>
            </Card>
          </div>
        </div>
        <footer
          className="relative rounded-t-[100px] -mt-[79px] w-full overflow-hidden backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]"
          style={{
            background: "linear-gradient(238.16deg, #B45FF2 19.57%, #8424BB 82.32%)",
          }}
        >
          <img
            className="absolute left-[29px] top-[5px] hidden h-[561px] w-[568px] lg:block"
            alt="Bar huddle JPEG"
            src="/figmaAssets/bar-huddle---jpeg-2.png"
          />
          <img
            className="absolute left-[170px] top-[84px] hidden h-[162px] w-[164px] lg:block"
            alt="Bar huddle JPEG"
            src="/figmaAssets/bar-huddle---jpeg-1-1.png"
          />
          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-10 pt-[120px] sm:px-8 lg:px-[86px] lg:pb-[60px] lg:pt-[153px]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[360px_133px_206px_336px] lg:justify-center">
              <div className="flex flex-col  items-start gap-5 lg:pt-28">
                <h3 className="text-left [font-family:'Montserrat',Helvetica] text-[22px] font-semibold leading-[normal] tracking-[0] text-white">
                  Social Links
                </h3>
                <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                  {socialIcons.map((src, index) => (
                    <img
                      key={`${src}-${index}`}
                      className="h-[35px] w-[63px] sm:h-[42px] sm:w-[76px] lg:h-[50px] lg:w-[50px]"
                      alt="Frame"
                      src={src}
                    />
                  ))}
                </div>
              </div>
              <nav className="flex flex-col items-start gap-5">
                <div className="[font-family:'Montserrat',Helvetica] text-[22px] font-semibold leading-[normal] tracking-[0] text-white">
                  Quick Links
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  {quickLinks.map((link) => (
                    <button
                      key={link}
                      type="button"
                      className="text-left [font-family:'Montserrat',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </nav>
              <address className="flex flex-col items-start gap-5 not-italic">
                <div className="[font-family:'Montserrat',Helvetica] text-[22px] font-semibold leading-[normal] tracking-[0] text-white">
                  Contact
                </div>
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  <div className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white">
                    support@barapp.com
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white">
                    +1 (123) 456-7890
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white">
                    123 Bar Huddle Lane, Suite 100, City, State, Zip
                  </div>
                </div>
              </address>
              <div className="flex flex-col items-start gap-5">
                <div className="[font-family:'Montserrat',Helvetica] text-[22px] font-semibold leading-[normal] tracking-[0] text-white">
                  App Coming Soon
                </div>
                <p className="self-stretch [font-family:'Montserrat',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white">
                  Get Bar Huddle on your device today for easy Connection,
                  Stories, and much more!
                </p>
                <div className="inline-flex flex-col items-start justify-center gap-4">
                  {storeButtons.map((button) => (
                    <button
                      key={`footer-${button.label}`}
                      className="h-auto w-[179.82px] rounded-[364.1px] border border-solid border-[#e7c7ff] bg-[#8424bb] px-4 py-2 shadow-[0px_0px_8px_2px_#b45ff2]"
                    >
                      <span className="flex items-center justify-center gap-2.5">
                        <img
                          className={button.iconClass}
                          alt={button.label}
                          src={button.icon}
                        />
                        <span className="inline-flex flex-col items-start justify-center gap-px">
                          <span className="[font-family:'Manrope',Helvetica] text-xs font-medium leading-[13px] tracking-[-0.24px] text-white">
                            {button.eyebrow}
                          </span>
                          <span className="[font-family:'Manrope',Helvetica] text-sm font-bold leading-[13px] tracking-[-0.24px] text-white">
                            {button.label}
                          </span>
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <img
                className="h-px w-full"
                alt="Vector"
                src="/figmaAssets/vector-2446.svg"
              />
              <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="[font-family:'Montserrat',Helvetica] text-base font-medium leading-[normal] tracking-[0] text-white">
                  © 2026 Bar Huddle App. All Rights Reserved.
                </div>
                <div className="flex items-center gap-8">
                  <a
                    href="/privacy-policy"
                    className="[font-family:'Montserrat',Helvetica] text-base font-medium leading-[normal] tracking-[0] text-white hover:text-[#fdf88f] transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms-and-conditions"
                    className="[font-family:'Montserrat',Helvetica] text-base font-medium leading-[normal] tracking-[0] text-white hover:text-[#fdf88f] transition-colors cursor-pointer"
                  >
                    Terms &amp; Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </section>
  );
};
