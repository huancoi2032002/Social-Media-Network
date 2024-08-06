import React, { useState, useEffect, useRef } from "react";
import './Post.css';
import { Close } from '../../assets/contants';
import { Public, Lock, UserGroup, Emotion } from "../../assets/feedpostsicon";
import TueNhi from '../../assets/tuenhi/tuenhisayhi.jpg';

const Post = ({onPrevStep}) => {
    const [isContentPost, setIsContentPost] = useState('');
    const textareaRef = useRef(null);


    const handleInputContentChange = (e) => {
        setIsContentPost(e.target.value);
    };
    useEffect(() => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    }, [isContentPost]);

    return (
        <div className="w-150 h-123 bg-backgroundPost z-11 rounded-xl">
            <div className="w-full">
                <div className="relative flex justify-center items-center py-4 border-b border-white/20">
                    <div className="text-lg">
                        Create New Post
                    </div>
                    <div className="absolute right-5 text-blue-700 cursor-pointer" >
                        Share
                    </div>
                </div>
                <div className="flex">
                    <div className="flex items-center gap-2">
                        <div className="size-121">
                            <img src={TueNhi} className="size-121 object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="px-4 flex items-center gap-2 justify-between w-full">
                            <textarea
                                ref={textareaRef}
                                className="w-full border-none focus:ring-0 text-sm bg-transparent outline-none h-10 resize-none overflow-hidden"
                                placeholder="Huan, what are you thinking?"
                                value={isContentPost}
                                onChange={handleInputContentChange}
                                rows={1} // đặt số dòng ban đầu
                            />
                            <div className="mt-1">
                                <Emotion className="size-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
