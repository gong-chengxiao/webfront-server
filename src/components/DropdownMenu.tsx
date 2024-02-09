"use client";

import { useState } from 'react';

interface DropdownMenuProps {
    menuWidth: string;  // the dropdown menu width
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
    menuWidth,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                className="text-gray-800 font-semibold py-2 px-4 border border-gray-800 rounded hover:bg-gray-800 hover:text-white focus:outline-none focus:bg-gray-800 focus:text-white transition duration-300 ease-in-out"
                onClick={toggleMenu}
            >
                菜单
            </button>
            {isOpen && (
                <div className={`absolute right-0 mt-2 w-[${menuWidth}] bg-white shadow-lg rounded-lg overflow-hidden z-10`}>
                    <ul>
                        <li>
                            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
                                选项一
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
                                选项二
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-200">
                                选项三
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
