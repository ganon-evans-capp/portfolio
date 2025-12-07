import imgRectangle4 from "figma:asset/67b66eeb0ebae57cdf8d54b0e02cabea5149ed94.png";
import imgRectangle3 from "figma:asset/8e8575ab6802192c6f47f714257af6d1f4cf19e2.png";
import { Navigation } from "../components/Navigation";

export default function CappProjects() {
  return (
    <div className="bg-[#f0ebd8] min-h-screen w-full pb-20" data-name="CAPP Projects">
      <Navigation />
      <div className="absolute bg-[#9db7d9] h-[749px] left-[87px] rounded-[40px] top-[452px] w-[528px]" />
      <div className="absolute bg-[#9db7d9] h-[749px] left-[805px] rounded-[40px] top-[452px] w-[528px]" />
      <div className="absolute bg-[#9db7d9] h-[749px] left-[456px] rounded-[40px] top-[1253px] w-[528px]" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[171px] leading-[normal] left-[92px] text-[#0d1321] text-[48px] top-[159px] w-[1256px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Here's some of the projects I've completed while part of the CAPP program at the University of Chicago. Some of the projects are hosted as webpages on this site, while others can be found on my GitHub with write-ups.
      </p>
      <a className="absolute block font-['Open_Sans:Regular',sans-serif] font-normal h-[86px] leading-[0] left-[894px] text-[#1d2d44] text-[48px] top-[853px] w-[350px]" href="https://github.com/uchicago-capp30254-spr-25/project-herd_immunity" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline">Herd Immunity</p>
      </a>
      <a className="absolute block font-['Open_Sans:Regular',sans-serif] font-normal h-[88px] leading-[0] left-[221px] text-[#1d2d44] text-[48px] top-[853px] w-[278px]" href="https://github.com/cesarnunezh/OpenPeru" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline">Open Peru</p>
      </a>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[245px] leading-[normal] left-[359px] text-[#0d1321] text-[36px] text-center top-[939px] translate-x-[-50%] w-[424px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I contributed to the text extraction of voting records from the Peruvian legislature for an accessible database.
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[245px] leading-[normal] left-[1064px] text-[#0d1321] text-[36px] text-center top-[928px] translate-x-[-50%] w-[424px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        We use machine learning tools to predict the risk of a measles outbreak in public and private Texas schools.
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[245px] leading-[normal] left-[711px] text-[#0d1321] text-[36px] text-center top-[1725px] translate-x-[-50%] w-[424px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        We created a graphic comparing the adoption of renewable energy to power outages across the United States.
      </p>
      <a className="absolute block font-['Open_Sans:Regular',sans-serif] font-normal h-[77px] leading-[0] left-[658px] text-[#1d2d44] text-[48px] top-[1654px] w-[137px]" href="https://github.com/uchicago-2025-capp30122/30122-project-flavortown" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline">GridX</p>
      </a>
      <div className="absolute bg-[#d9d9d9] h-[356px] left-[158px] top-[497px] w-[404px]" />
      <div className="absolute h-[356px] left-[525px] top-[1287px] w-[404px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle4} />
      </div>
      <div className="absolute h-[356px] left-[867px] top-[497px] w-[404px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
    </div>
  );
}