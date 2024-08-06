import React, { useState } from 'react';
import { OtherOptions } from '../../assets/feedpostsicon';
import TueNhi1 from '../../assets/tuenhi/tuenhi1.jpg';
import TueNhi2 from '../../assets/tuenhi/tuenhi2.jpg';
import TueNhi3 from '../../assets/tuenhi/tuenhi3.jpg';
import TueNhi4 from '../../assets/tuenhi/tuenhicuahuan.jpg';
import TueNhi5 from '../../assets/tuenhi/tuenhicuahuuhuan.jpg';
import TueNhi6 from '../../assets/tuenhi/tuenhicuanguyenhuuhuan.jpg';
import TueNhi7 from '../../assets/tuenhi/tuenhicuahoa.jpg';

const ImagePosts = () => {
    const DataImage = [
        { image: <img src={TueNhi1} alt="tnq_tuni" className="w-full h-full rounded-full object-cover" />, name: "tnq_tuni" },
        { image: <img src={TueNhi2} alt="tnq_tuni" className="w-full h-full rounded-full object-cover" />, name: "tnq_tuni" },
        { image: <img src={TueNhi3} alt="tnq_tuni" className="w-full h-full rounded-full object-cover" />, name: "tnq_tuni" },
        { image: <img src={TueNhi4} alt="tnq_tuni" className="w-full h-full rounded-full object-cover" />, name: "tnq_tuni" },
        { image: <img src={TueNhi5} alt="tnq_tuni" className="w-full h-full rounded-full object-cover" />, name: "tnq_tuni" },
        { image: <img src={TueNhi6} alt="tnq_tuni" className="w-full h-full rounded-full object-cover" />, name: "tnq_tuni" },
        { image: <img src={TueNhi7} alt="tnq_tuni" className="w-full h-full rounded-full object-cover" />, name: "tnq_tuni" },
    ];

    const [followStates, setFollowStates] = useState(Array(DataImage.length).fill(false));

    const handleFollow = (index) => {
        setFollowStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <div className="pr-8 styled-scrollbars h-140 overflow-y-auto">
            <div className="">
                <div className="flex justify-between py-3 text-sm">
                    <div>
                        Suggested for you
                    </div>
                    <div className="text-sx cursor-pointer hover:text-gray-400">
                        See All
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    {DataImage.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="size-10 rounded-full">
                                    {item.image}
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold text-sm">{item.name}</div>
                                    <div className="text-gray-400 text-sx">Suggested for you</div>
                                </div>
                            </div>
                            <div
                                className="text-sx text-blue-700 cursor-pointer hover:text-white"
                                onClick={() => handleFollow(index)}
                            >
                                {followStates[index] ? 'Unfollow' : 'Follow'}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-2">
                <div className="flex justify-between py-3 text-sm">
                    <div>
                        Contact Person
                    </div>
                    <div className="text-sx cursor-pointer hover:text-gray-400">
                        <OtherOptions className="text-sm font-bold text-blue-500 hover:text-white transition duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="flex flex-col">
                    {DataImage.map((item, index) => (
                        <div key={index} className="flex justify-between items-center cursor-pointer hover:bg-backgroundPost p-1 rounded-lg">
                            <div className="flex items-center gap-2">
                                <div className="size-10 rounded-full">
                                    {item.image}
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold text-sm">{item.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImagePosts;
