import { useEffect, useRef, useState } from "react";
import { Emotion } from "../../assets/feedpostsicon";

const PostFooter = ({ username }) => {
    const [comment, setComment] = useState('');
    const textareaRef = useRef(null);



    const handleInputChange = (e) => {
        setComment(e.target.value);
    };
    useEffect(() => {
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
    },[comment]);
    return (
        <div className="mb-10">
            <p className="text-sm text-gray-500 cursor-pointer mb-1">
                View all 1,000 comments
            </p>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 justify-between w-full">
                    <div className="flex gap-1 w-full">
                        <textarea
                            ref={textareaRef}
                            className="w-full border-none focus:ring-0 text-sm bg-transparent outline-none h-10 resize-none overflow-hidden"
                            placeholder="Add a comment..."
                            value={comment}
                            onChange={handleInputChange}
                            rows={1} // đặt số dòng ban đầu
                        />
                        {
                            comment && (
                                <button
                                    className="text-sm text-blue-500 font-semibold cursor-pointer hover:text-white transition duration-200 ease-in-out bg-transparent"
                                >
                                    Post
                                </button>
                            )
                        }

                    </div>
                </div>
                <div className="mt-1">
                    <Emotion />
                </div>
            </div>
        </div>
    );
};

export default PostFooter;
