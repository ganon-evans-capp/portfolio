import imgProfileNoBackground1 from "figma:asset/ceacac02eac9503fa527daf770c197f4def47f6b.png";
import imgImage4 from "figma:asset/1463bb304cb41b8b66de5c460d9ce9febd119d0f.png";
import imgImage5 from "figma:asset/475db08f3bc4dd7b3add11e4c2a88d00989c36ef.png";
import { Navigation } from "../components/Navigation";

export default function HomePage() {
  return (
    <div className="bg-[#f0ebd8] min-h-screen w-full pb-20" data-name="Home Page">
      <div className="absolute h-[638px] left-[204px] top-[232px] w-[539px]" data-name="profile no background 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProfileNoBackground1} />
      </div>
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[100px] leading-[normal] left-[917px] text-[#0d1321] text-[64px] top-[260px] w-[500px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Hey, I'm Ganon.
      </p>
      <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[500px] leading-[1.3] left-[917px] text-[#0d1321] text-[44px] top-[380px] w-[500px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`I'm a data scientist with a background in public policy. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>
          <span>{`This is a website for my `}</span>
          <span className="text-[#0d1321]">portfolio</span>
          <span>{`, `}</span>
          <span className="text-[#0d1321]">coding projects</span>
          <span>{`, and `}</span>
          <span className="text-[#0d1321]">other academic interests</span>.
        </p>
      </div>
      <Navigation />
      <a href="https://www.linkedin.com/in/ganon-evans-aa7ba31b2/" target="_blank" rel="noopener noreferrer" className="absolute left-[1101px] size-[88px] top-[782px] cursor-pointer hover:opacity-70 transition-opacity" data-name="image 4">
        <img alt="LinkedIn" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </a>
      <a href="https://github.com/ganonevan" target="_blank" rel="noopener noreferrer" className="absolute left-[917px] size-[88px] top-[782px] cursor-pointer hover:opacity-70 transition-opacity" data-name="image 5">
        <img alt="GitHub" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </a>
    </div>
  );
}