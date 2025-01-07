import React, { useState } from 'react';
import UserButton from '../button/ActionButton';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { GoPerson } from 'react-icons/go';

const ActionMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="hidden lg:flex relative w-[300px]">
        <ul className="flex w-full text-sm font-medium list-none text-jnGray-900 break-keep">
          <UserButton Icon={IoChatbubbleEllipsesOutline} label="문의하기" />
          <UserButton
            Icon={AiOutlineAppstoreAdd}
            label="상품 등록"
            onClick={openModal}
          />
          <UserButton Icon={GoPerson} label="마이페이지" />
        </ul>
      </div>
      {/* <ProductRegistrationModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
};

export default ActionMenu;
