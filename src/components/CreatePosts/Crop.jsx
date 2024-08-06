import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie'; // Import js-cookie
import { ChevronLeft, ChevronRight, Dot, Media } from "../../assets/feedpostsicon";

const Crop = ({ onNextStep, onPrevStep }) => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const cookieImages = Cookies.get('uploadedImages');
        if (cookieImages) {
            const parsedImages = JSON.parse(cookieImages);
            if (Array.isArray(parsedImages) && parsedImages.length > 0) {
                setImages(parsedImages);
            } else {
                console.error("Invalid image data in cookies");
            }
        } else {
            console.error("No image data in cookies");
        }
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToImage = (imageIndex) => {
        setCurrentIndex(imageIndex);
    };

    return (
        <div>
            <div className="relative w-121 h-121">
                <div className="w-full h-full relative group overflow-hidden rounded-b-xl">
                    <div
                        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/20 text-white p-2 rounded-full cursor-pointer hidden group-hover:block"
                        onClick={handlePrev}
                    >
                        <ChevronLeft className="size-5" />
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        {images.length > 0 ? (
                            <img src={images[currentIndex]} alt={`image-${currentIndex}`} className="w-full h-full object-cover" />
                        ) : (
                            <p>No images to display</p>
                        )}
                    </div>
                    <div
                        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/20 text-white p-2 rounded-full cursor-pointer hidden group-hover:block"
                        onClick={handleNext}
                    >
                        <ChevronRight className="size-5" />
                    </div>
                    <div className="absolute w-full flex gap-1 justify-center py-2 text-white bottom-2">
                        {images.map((image, imageIndex) => (
                            <div
                                key={imageIndex}
                                onClick={() => goToImage(imageIndex)}
                                className="text-2xl cursor-pointer"
                            >
                                <Dot className={`size-1.5 ${currentIndex === imageIndex ? 'fill-white' : 'fill-black/30'}`} />
                            </div>
                        ))}
                    </div>
                    <div className="absolute flex items-center justify-center bottom-1 right-3 size-8 bg-black/60 rounded-full cursor-pointer">
                        <Media className="size-5 fill-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Crop;
