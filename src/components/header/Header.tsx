import { useState } from 'react';
import MobileHeader from './MobileHeader';
import WebHeader from './WebHeader';
import Title from './Title';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // 모달창
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const closeModal = () => {
    setIsRegisterModalOpen(false);
  };
  const handleProductRegistrationClick = () => {
    toggleSidebar(); // Close the sidebar first
    setTimeout(() => {
      openRegisterModal(); // Then open the modal after the sidebar closes
    }, 300); // 300ms is the duration of the sidebar closing animation
  };
  return (
    <header className="bg-white w-full mt-20 sm:mt-0 sm:px-8 z-30 md:px-8 lg:px-6 h-16 sm:h-20 lg:h-36 xl:h-40 transition duration-200 ease-in-out border-b border-jnGray-300 fixed text-gray-700">
      <MobileHeader
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onProductRegistrationClick={handleProductRegistrationClick}
      />
      <Title />
      <WebHeader />
    </header>
  );
}

export default Header;
