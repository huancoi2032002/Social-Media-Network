import React, { useState } from "react";
import TueNhi1 from '../../assets/tuenhi/tuenhi1.jpg';
import TueNhi2 from '../../assets/tuenhi/tuenhi2.jpg';
import TueNhi3 from '../../assets/tuenhi/tuenhi3.jpg';
import TueNhi4 from '../../assets/tuenhi/tuenhicuahuan.jpg';
import { ChevronLeft, ChevronRight, Dot } from "../../assets/feedpostsicon";

const ImagePosts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const DataImage = [
        { image: <img src={TueNhi1} alt="" className="w-full h-full rounded-md object-cover" /> },
        { image: <img src={TueNhi2} alt="" className="w-full h-full rounded-md object-cover" /> },
        { image: <img src={TueNhi3} alt="" className="w-full h-full rounded-md object-cover" /> },
        { image: <img src={TueNhi4} alt="" className="w-full h-full rounded-md object-cover" /> },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? DataImage.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === DataImage.length - 1 ? 0 : prevIndex + 1));
    };

    const goToImage = (imageIndex) => {
        setCurrentIndex(imageIndex);
    };

    return (
        <div className="mb-4 max-w-120 w-120 rounded-lg box-border">
            <div className="w-full max-h-130 rounded-md relative group">
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                    onClick={handlePrev}
                >
                    <ChevronLeft className="size-5" />
                </div>
                <div className="w-full h-125 rounded-md">
                    {DataImage[currentIndex].image}
                </div>
                <div
                    className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
                    onClick={handleNext}
                >
                    <ChevronRight className="size-5" />
                </div>
                <div className="absolute w-full flex gap-1 justify-center py-2 text-white top-[96%]">
                    {DataImage.map((image, imageIndex) => (
                        <div
                            key={imageIndex}
                            onClick={() => goToImage(imageIndex)}
                            className="text-2xl cursor-pointer"
                        >
                            <Dot className={`size-1.5 ${currentIndex === imageIndex ? 'fill-white' : 'fill-black/30'}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImagePosts;
