import React from 'react';

interface MenuButtonProps {
  toggleSidebar: () => void;
}

const MobileMenuButton = ({ toggleSidebar }: MenuButtonProps) => {
  return (
    <button
      onClick={toggleSidebar}
      className="flex flex-col items-center justify-center flex-shrink-0 outline-none start-0 focus:outline-none lg:hidden basis-[24px] w-[24px] h-[24px]"
    >
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <path
          d="M5 18H19"
          stroke="#141313"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5 12H19"
          stroke="#141313"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5 6L19 6"
          stroke="#141313"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  );
};

export default MobileMenuButton;
