import React from 'react';
import MobileTopHeader from './mobile/MobileTopHeader';
import MobileMenuButton from './mobile/MobileMenuButton';
import MobileSearchButton from './mobile/MobileSearchButton';
import Title from './Title';

interface MobileHeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  onProductRegistrationClick: () => void;
}

const MobileHeader = ({
  isSidebarOpen,
  toggleSidebar,
  onProductRegistrationClick,
}: MobileHeaderProps) => {
  return (
    <div className="bg-white h-full 2xl:px-8 lg:h-20 xl:h-[95px] px-0 lg:px-8 max-w-[1024px] flex items-center mx-auto box-content justify-between relative">
      <MobileTopHeader />
      <MobileMenuButton toggleSidebar={toggleSidebar} />
      <MobileSearchButton />
    </div>
  );
};

export default MobileHeader;
