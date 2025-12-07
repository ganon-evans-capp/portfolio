import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navigation() {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  let portfolioTimer: NodeJS.Timeout | null = null;
  let projectsTimer: NodeJS.Timeout | null = null;

  const handlePortfolioEnter = () => {
    if (portfolioTimer) clearTimeout(portfolioTimer);
    setPortfolioOpen(true);
  };

  const handlePortfolioLeave = () => {
    portfolioTimer = setTimeout(() => {
      setPortfolioOpen(false);
    }, 200);
  };

  const handleProjectsEnter = () => {
    if (projectsTimer) clearTimeout(projectsTimer);
    setProjectsOpen(true);
  };

  const handleProjectsLeave = () => {
    projectsTimer = setTimeout(() => {
      setProjectsOpen(false);
    }, 200);
  };

  return (
    <div className="absolute h-[105px] left-0 top-[31px] w-[1440px] z-40" data-name="Top Bar">
      <Link to="/" className="absolute inset-[7.62%_77.78%_44.76%_5%] z-50">
        <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] text-[#0d1321] text-[40px] cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
          Ganon Evans
        </p>
      </Link>
      
      <div className="absolute contents font-['Open_Sans:Regular',sans-serif] font-normal inset-[18.1%_1.18%_32.38%_64.72%] leading-[normal] text-[#0d1321] text-[30px]" data-name="Top Text">
        <Link to="/about">
          <p className="absolute inset-[18.1%_28.96%_56.19%_64.72%] cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
            About
          </p>
        </Link>
        
        <div 
          className="absolute inset-[18.1%_14.58%_56.19%_76.11%]"
          onMouseEnter={handlePortfolioEnter}
          onMouseLeave={handlePortfolioLeave}
        >
          <p className="cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
            Portfolio
          </p>
          {portfolioOpen && (
            <div 
              className="absolute top-full left-0 mt-1 bg-[#f0ebd8] border-2 border-[#0d1321] rounded-lg shadow-xl py-2 min-w-[150px] z-50"
              onMouseEnter={handlePortfolioEnter}
              onMouseLeave={handlePortfolioLeave}
            >
              <Link to="/resume" onClick={() => setPortfolioOpen(false)}>
                <p className="px-4 py-2 hover:bg-[#9db7d9] cursor-pointer transition-colors text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Resume
                </p>
              </Link>
              <Link to="/media" onClick={() => setPortfolioOpen(false)}>
                <p className="px-4 py-2 hover:bg-[#9db7d9] cursor-pointer transition-colors text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Media
                </p>
              </Link>
            </div>
          )}
        </div>
        
        <div 
          className="absolute inset-[18.1%_1.18%_32.38%_90.49%]"
          onMouseEnter={handleProjectsEnter}
          onMouseLeave={handleProjectsLeave}
        >
          <p className="cursor-pointer hover:opacity-70 transition-opacity" style={{ fontVariationSettings: "'wdth' 100" }}>
            Projects
          </p>
          {projectsOpen && (
            <div 
              className="absolute top-full left-0 mt-1 bg-[#f0ebd8] border-2 border-[#0d1321] rounded-lg shadow-xl py-2 min-w-[200px] z-50"
              onMouseEnter={handleProjectsEnter}
              onMouseLeave={handleProjectsLeave}
            >
              <Link to="/capp" onClick={() => setProjectsOpen(false)}>
                <p className="px-4 py-2 hover:bg-[#9db7d9] cursor-pointer transition-colors text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  CAPP
                </p>
              </Link>
              <Link to="/data-journalism" onClick={() => setProjectsOpen(false)}>
                <p className="px-4 py-2 hover:bg-[#9db7d9] cursor-pointer transition-colors text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Data Journalism
                </p>
              </Link>
              <Link to="/quizbowl" onClick={() => setProjectsOpen(false)}>
                <p className="px-4 py-2 hover:bg-[#9db7d9] cursor-pointer transition-colors text-[28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Quizbowl
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute border border-[#0d1321] border-solid bottom-[33.33%] left-[3.96%] right-[76.81%] top-0" />
      <div className="absolute bottom-0 left-0 right-0 top-[99.05%]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}