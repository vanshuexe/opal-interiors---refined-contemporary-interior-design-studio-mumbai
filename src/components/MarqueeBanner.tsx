import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const items = ['interior architecture', 'spatial planning', 'bespoke detailing', 'site supervision', 'material curation', 'custom furniture'];

  return (
    <div className="bg-[#FAF8F2] py-8 border-y border-[#C99933]/20 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-4xl md:text-7xl lg:text-[6.5rem] font-sans font-normal uppercase tracking-wider text-[#C99933]/30 hover:text-[#C99933]/70 transition-colors">
              {item}
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#C99933]/40 inline-block"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
