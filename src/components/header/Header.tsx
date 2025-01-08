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
    <div className="w-full">
      <div className="lg:hidden">
        <MobileHeader
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onProductRegistrationClick={handleProductRegistrationClick}
        />
      </div>
      <div className="hidden lg:block">
        <WebHeader />
      </div>
    </div>
  );
}

export default Header;
