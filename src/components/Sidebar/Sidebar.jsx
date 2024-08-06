import React, { useState } from "react";
import { Home, All, Popular, ArrowDown, Add, Loved } from "../../assets/sidebarIcon";
import { Link } from "react-router-dom";
import Avatar from '../../assets/huan.jpg';

const DataPagePost = [
    { icon: <Home />, title: "Home", link: "/" },
    { icon: <All />, title: "All", link: "/all" },
    { icon: <Popular />, title: "Popular", link: "/popular" },
];

const DataCustomFeeds = [
    { image: <img src={Avatar} alt="" className="w-8 h-8 rounded-full object-cover " />, name: 'Nauh', love: <Loved /> },
    { image: <img src={Avatar} alt="" className="w-8 h-8 rounded-full object-cover " />, name: 'Nguyen', love: <Loved /> },
    { image: <img src={Avatar} alt="" className="w-8 h-8 rounded-full object-cover " />, name: 'Huu', love: <Loved /> },
    { image: <img src={Avatar} alt="" className="w-8 h-8 rounded-full object-cover " />, name: 'Huan', love: <Loved /> },
];

const SidebarSection = ({ title, items, isOpen, onToggle, renderItem }) => (
    <div className="py-4 flex flex-col gap-2 border-b border-white border-opacity-20">
        <div
            className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-backgroundButton text-colorTextSidebar"
            onClick={onToggle}
        >
            <div className="flex justify-between w-full items-center text-sz">
                <span>{title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} id="arrow">
                    <ArrowDown />
                </span>
            </div>
        </div>
        <div className={`flex flex-col gap-2 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
            {items.map((item, index) => renderItem(item, index))}
        </div>
    </div>
);

const Sidebar = () => {
    const [isCustomFeedsOpen, setIsCustomFeedsOpen] = useState(false);
    const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false);

    return (
        <div className="p-2 flex flex-col h-full">
            <div className="py-4 flex flex-col gap-2 border-b border-white border-opacity-20">
                {
                    DataPagePost.map((item, index) => (
                        <div key={index} className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-backgroundButton text-white text-[14px]">
                            <Link to={item.link} className="flex gap-5">
                                {item.icon}
                                <span className="text-white">{item.title}</span>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <SidebarSection
                title="CUSTOM FEEDS"
                items={[{ name: 'Create a custom feed', icon: <Add /> }, ...DataCustomFeeds]}
                isOpen={isCustomFeedsOpen}
                onToggle={() => setIsCustomFeedsOpen(!isCustomFeedsOpen)}
                renderItem={(item, index) => (
                    <div key={index} className="p-2.5 flex items-center justify-between rounded-md px-4 duration-300 cursor-pointer hover:bg-backgroundButton text-white text-[14px]">
                        <div className="flex items-center gap-5">
                            {item.image || item.icon}
                            <span>{item.name}</span>
                        </div>
                        {item.love && (
                            <div className="w-8 h-8 z-50 hover:bg-backgroundLoved p-2 rounded-full">
                                {item.love}
                            </div>
                        )}
                    </div>
                )}
            />
            <SidebarSection
                title="COMMUNITIES"
                items={[{ name: 'Create a community', icon: <Add /> }, ...DataCustomFeeds]}
                isOpen={isCommunitiesOpen}
                onToggle={() => setIsCommunitiesOpen(!isCommunitiesOpen)}
                renderItem={(item, index) => (
                    <div key={index} className="p-2.5 flex items-center justify-between rounded-md px-4 duration-300 cursor-pointer hover:bg-backgroundButton text-white text-[14px]">
                        <div className="flex items-center gap-5">
                            {item.image || item.icon}
                            <span>{item.name}</span>
                        </div>
                        {item.love && (
                            <div className="w-8 h-8 z-50 hover:bg-backgroundLoved p-2 rounded-full">
                                {item.love}
                            </div>
                        )}
                    </div>
                )}
            />
        </div>
    );
};

export default Sidebar;
