import imgHeadshot1 from "figma:asset/7550856304804045fd550b198f2102ef96ddc2ab.png";
import imgImage6 from "figma:asset/475db08f3bc4dd7b3add11e4c2a88d00989c36ef.png";
import imgImage7 from "figma:asset/1463bb304cb41b8b66de5c460d9ce9febd119d0f.png";
import { Navigation } from "../components/Navigation";

export default function AboutPage() {
  return (
    <div className="bg-[#f0ebd8] min-h-screen w-full pb-20" data-name="About Page">
      <Navigation />
      <p className="absolute font-['Open_Sans:Regular',sans-serif] font-normal h-[131px] leading-[normal] left-[670px] text-[#0d1321] text-[96px] top-[160px] w-[482px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I'm Ganon!
      </p>
      <div className="absolute h-[644px] left-[72px] top-[303px] w-[515px]" data-name="Headshot 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeadshot1} />
      </div>
      <div className="absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] left-[670px] text-[#0d1321] text-[48px] top-[330px] w-[707px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`I'm a Master's Student in the University of Chicago's Computational Analysis and Public Policy program. Previously, I've worked in state and local fiscal policy research in Iowa and Kansas. I learned coding so I could build tools and systems for civic tech organizations to more effectively help people. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>I'm interested in how innovative technology can help improve the lives disadvantaged people. Some of my research topics in the past have included rural energy and broadband development, regulatory reform, and the modernization of jail and prison systems.</p>
      </div>
      <a href="https://github.com/ganonevan" target="_blank" rel="noopener noreferrer" className="absolute left-[72px] size-[88px] top-[1026px] cursor-pointer hover:opacity-70 transition-opacity" data-name="image 6">
        <img alt="GitHub" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage6} />
      </a>
      <a href="https://www.linkedin.com/in/ganon-evans-aa7ba31b2/" target="_blank" rel="noopener noreferrer" className="absolute left-[72px] size-[88px] top-[1196px] cursor-pointer hover:opacity-70 transition-opacity" data-name="image 6">
        <img alt="LinkedIn" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </a>
    </div>
  );
}