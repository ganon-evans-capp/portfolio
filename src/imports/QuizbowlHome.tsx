import imgImage6 from "figma:asset/b29c66d3496a3f42210a2cc7510d4d47745953fe.png";
import { Navigation } from "../components/Navigation";
import { Link } from "react-router-dom";

export default function QuizbowlHome() {
  return (
    <div className="bg-[#f0ebd8] min-h-screen w-full pb-20" data-name="Quizbowl Home">
      <Navigation />
      <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[285px] leading-[normal] left-[142px] text-[#0d1321] text-[40px] top-[186px] w-[1156px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Quizbowl is a form of academic tournaments for high school and college students. I played in high school and college. Since then, I've helped write, edit, and run tournaments across the country. I like teaching and sharing information I find cool, so quizbowl has been a longlasting hobby for me.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[71px] leading-[normal] left-[464px] text-[32px] text-black top-[953px] w-[690px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Me with the 2021-2022 ACF Board!
      </p>
      <Link to="/quizbowl/resume" className="absolute left-[20px] top-[616px]">
        <div className="bg-[#9db7d9] h-[170px] rounded-[40px] w-[351px] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center" />
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[69px] leading-[normal] left-[48px] text-[#0d1321] text-[40px] top-[26px] w-[291px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Writing and Editing History
        </p>
      </Link>
      <Link to="/quizbowl/questions" className="absolute left-[1068px] top-[616px]">
        <div className="bg-[#9db7d9] h-[170px] rounded-[40px] w-[351px] cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center" />
        <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[69px] leading-[normal] left-[48px] text-[#0d1321] text-[40px] top-[26px] w-[291px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          My Favorite Questions
        </p>
      </Link>
      <div className="absolute h-[401px] left-[419px] top-[521px] w-[601px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}