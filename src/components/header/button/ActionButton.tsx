import React from 'react';
import { IconType } from 'react-icons';

interface UserButtonProps {
  Icon: IconType;
  label: string;
  onClick?: () => void;
}

const UserButton = ({ Icon, label, onClick }: UserButtonProps) => (
  <li className="flex items-center justify-center px-3 relative hover:bg-gray-100 transition-colors duration-300 rounded-full p-2">
    <button
      className="group flex items-center justify-center whitespace-nowrap"
      onClick={onClick}
    >
      <div className="relative cursor-pointer group-hover:scale-105 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <p className="ml-1 group-hover:scale-105 transition-transform duration-300">
        {label}
      </p>
    </button>
    <div className="absolute inset-y-1/2 -right-[1px] h-4 w-[1px] bg-gray-300 transform -translate-y-1/2" />
  </li>
);

export default UserButton;
