import React from 'react';

const MobileSearchButton = () => {
  return (
    <button className="flex items-center justify-center flex-shrink-0 ga4_main_top_search end-0 focus:outline-none lg:hidden basis-[24px] w-[24px] h-[24px]">
      <svg
        className="h-8 w-8 text-black"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {' '}
        <circle cx="11" cy="11" r="8" />{' '}
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  );
};

export default MobileSearchButton;
