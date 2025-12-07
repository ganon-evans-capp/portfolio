import imgRectangle5 from "figma:asset/c316c89fb9e04b587a4234bc2a74e679661742d6.png";
import imgRectangle7 from "figma:asset/698f06b9d4671a65dc5c77a8289083904712279d.png";
import { Navigation } from "../components/Navigation";

export default function DataJournalism() {
  return (
    <div className="bg-[#f0ebd8] min-h-screen w-full pb-20" data-name="Data Journalism">
      <Navigation />
      <div className="absolute bg-[#9db7d9] h-[859px] left-[101px] rounded-[40px] top-[467px] w-[528px]" />
      <div className="absolute bg-[#9db7d9] h-[859px] left-[474px] rounded-[40px] top-[1428px] w-[528px]" />
      <div className="absolute bg-[#9db7d9] h-[859px] left-[810px] rounded-[40px] top-[466px] w-[528px]" />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[86px] leading-[normal] left-[1073.5px] text-[#1d2d44] text-[48px] text-center top-[846px] translate-x-[-50%] w-[375px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        No Country for Old Men
      </p>
      <a className="absolute block font-['Open_Sans:Regular',sans-serif] font-normal h-[65px] leading-[0] left-[163px] text-[#1d2d44] text-[48px] top-[846px] w-[430px]" href="https://github.com/mansueto-institute/jail-events" target="_blank" rel="noopener noreferrer" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[normal] underline">Illinois Jail Reports</p>
      </a>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[77px] leading-[normal] left-[563px] text-[#1d2d44] text-[48px] top-[1831px] w-[377px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        California Labor
      </p>
      <div className="absolute h-[356px] left-[163px] top-[490px] w-[404px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle5} />
      </div>
      <div className="absolute bg-[#d9d9d9] h-[356px] left-[536px] top-[1454px] w-[404px]" />
      <div className="absolute h-[356px] left-[872px] top-[490px] w-[404px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle7} />
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[284px] leading-[normal] left-[110px] text-[#0d1321] text-[48px] top-[159px] w-[1256px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I love storytelling and using data to find the truth or reveal new perspectives on different problems. I completed the Illinois Jails project with the Mansueto Institute, but have several other freelance projects.
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[423px] leading-[normal] left-[373px] text-[#0d1321] text-[36px] text-center top-[911px] translate-x-[-50%] w-[424px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I built a text extraction program that worked within a pipeline to analyze scans of written reports of unusual occurrences in Illinois jails, like fights, restraint usage, and deaths.
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[423px] leading-[normal] left-[1071px] text-[#0d1321] text-[36px] text-center top-[968px] translate-x-[-50%] w-[424px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I reported on people age 50 or older in Texas's prison system given ongoing policy debate about nonfunctional AC systems across the state's facilities.
      </p>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[406px] leading-[normal] left-[738px] text-[#0d1321] text-[36px] text-center top-[1895px] translate-x-[-50%] w-[424px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        This "scrollytelling" article takes a look at wages for California inmates working industry jobs and how it compares to other states.
      </p>
    </div>
  );
}