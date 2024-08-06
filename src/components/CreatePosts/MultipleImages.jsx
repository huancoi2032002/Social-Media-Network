import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { Plus } from "../../assets/feedpostsicon";

const MultipleImages = ({ images = [] }) => {
    const formListRef = useRef(null);

    const scroll = (direction) => {
        if (formListRef.current) {
            const firstItem = formListRef.current.querySelector('.item');
            if (firstItem) {
                const widthItem = firstItem.offsetWidth;
                formListRef.current.scrollLeft += widthItem * direction;
            }
        }
    };

    return (
        <div className="w-full h-30 px-4">
            <div className="relative w-full h-full bg-white/10 rounded-xl px-4 flex items-center justify-between">
                <div id="formList" className="flex overflow-auto snap-x snap-mandatory w-full max-w-full mx-auto my-24 hide-scrollbar" ref={formListRef} style={{ scrollBehavior: 'smooth' }}>
                    <div id="list" className="flex">
                        {images.length > 0 ? (
                            images.map((image, index) => (
                                <div key={index} className="item flex-shrink-0 w-[94px] h-[94px] rounded-xl bg-gradient-to-t from-[#AEC0CE] to-[#ECECF2] overflow-hidden m-2 snap-start transition-transform duration-500">
                                    <img
                                        src={image}
                                        alt={`image-${index}`}
                                        className="w-full h-full object-cover cursor-pointer rounded-lg"
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No images available</p>
                        )}
                    </div>
                </div>
                <div className="absolute flex justify-between w-[78%] top-[36%]">
                    <button
                        onClick={() => scroll(-1)}
                        className="size-7 bg-white bg-opacity-20 rounded-full border-none text-xl font-bold hover:bg-white transition duration-500"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={() => scroll(1)}
                        className="size-7 bg-white bg-opacity-20 rounded-full border-none text-xl font-bold hover:bg-white transition duration-500"
                    >
                        &gt;
                    </button>
                </div>
                <div className="cursor-pointer w-12 flex justify-center">
                    <Plus className="text-colorSearch" />
                </div>
            </div>
        </div>
    );
}

MultipleImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
};

export default MultipleImages;
