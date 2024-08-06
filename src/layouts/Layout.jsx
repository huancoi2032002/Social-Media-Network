import React, { useState, useEffect } from "react";
import Messenger from "../components/Messenger/Messenger";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import './customScrollbar.css';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleOpenSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="w-full h-full relative">
            <div className="fixed top-0 left-0 w-full h-16 border-b border-white border-opacity-20 bg-black z-10 p-1">
                <Navbar handleOpenSidebar={handleOpenSidebar} />
            </div>
            <div className="relative flex flex-col pt-16 px-4 min-h-screen bg-transparent">
                {isMobile && (
                    <div className={`sidebar styled-scrollbars ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                        <Sidebar />
                    </div>
                )}
                {!isMobile && (
                    <div className="relative w-64 h-full">
                        <div className="styled-scrollbars fixed w-64 h-full border-r border-white border-opacity-20 overflow-y-auto">
                            <Sidebar />
                        </div>
                    </div>
                )}
                {isMobile && sidebarOpen && <div className="overlay overlay-open" onClick={handleCloseSidebar}></div>}
                <div className={`flex-grow transition-all duration-300 ${isMobile && sidebarOpen ? 'ml-128' : 'ml-0'}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
