import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Logo, Messenger, Bell, Bars } from "../../assets/contants";
import SearchBar from "../Search/SearchBar/SearchBar";
import Avatar from '../../assets/huan.jpg';
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({handleOpenSidebar}) => {
    const [results, setResults] = useState([]);
    const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);
    const profileMenu = useRef(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openProfileMenu = () => {
        setIsOpenProfileMenu(!isOpenProfileMenu);
    };

    const handleClickOutside = (event) => {
        if (profileMenu.current && !profileMenu.current.contains(event.target)) {
            setIsOpenProfileMenu(false);
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='flex justify-between items-center py-2 px-4 bg-transparent text-white'>
            <div className="navbar-left flex items-center gap-4">
                <div className="block lg:hidden cursor-pointer" onClick={handleOpenSidebar}>
                    <Bars className="size-5 fill-white" />
                </div>
                <Link to="/">
                    <div className="flex items-center">
                        <Logo className="h-8 w-8 rounded-lg fill-colorSearch" />
                    </div>
                </Link>
            </div>
            <div className="navbar-middle flex-grow mx-4 flex justify-center">
                <div className="relative">
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results} />}
                </div>
            </div>
            <ul className="flex space-x-4">
                <li className="flex items-center rounded-full p-2 hover:bg-white hover:bg-opacity-25 transition-colors duration-300 cursor-pointer">
                    <Messenger className="h-6 w-6 fill-white" />
                </li>
                <li className="flex items-center rounded-full p-2 hover:bg-white hover:bg-opacity-25 transition-colors duration-300 cursor-pointer">
                    <Bell className="h-6 w-6 fill-white" />
                </li>
                <li className="flex items-center rounded-full p-1 hover:bg-white hover:bg-opacity-25 transition-colors duration-300 cursor-pointer" onClick={openProfileMenu} ref={profileMenu}>
                    <div className="flex items-center space-x-2">
                        <img src={Avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover relative" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 absolute mt-4 right-5"></div>
                    </div>
                    {isOpenProfileMenu && (
                        <div className="w-64 h-auto right-4 top-15 bg-backgroundProfileMenu absolute">
                            <ul className="flex flex-col">
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                                <li>1</li>
                            </ul>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
