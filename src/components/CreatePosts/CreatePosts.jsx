import React, { useEffect, useRef, useState } from "react";
import TueNhi6 from '../../assets/tuenhi/tuenhicuanguyenhuuhuan.jpg';
import Crop from "./Crop";
import Post from "./Post";
import NavbarPost from "./NavbarPost";
import CreatePostLayer from "./CreatePostLayer";

const CreatePosts = () => {
    const [isOpenPost, setIsOpenPost] = useState(false);
    const postRef = useRef(null);
    const [step, setStep] = useState(1);
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleNextStep = (images) => {
        if (images) {
            setUploadedImages(images);
            setStep(2); // Automatically move to step 2 after images are uploaded
        } else {
            setStep(step + 1);
        }
    };

    const handlePrevStep = () => {
        setStep(step - 1);
    };

    const handleOpenPost = () => {
        setIsOpenPost(!isOpenPost);
    };

    const handleClickOutsidePosts = (event) => {
        if (postRef.current && !postRef.current.contains(event.target)) {
            setIsOpenPost(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsidePosts);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsidePosts);
        };
    }, []);

    return (
        <div className="relative">
            <div className="container mx-auto max-w-120 w-120 bg-backgroundPost rounded-xl my-3">
                <div className="max-w-120 w-120 box-border p-3">
                    <div className="flex items-center justify-between border-b pb-3 border-white border-opacity-20">
                        <div className="size-10 rounded-full">
                            <img src={TueNhi6} className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div>
                            <button className="w-96 h-10 bg-backgroundLoved rounded-l-3xl rounded-r-3xl text-gray-400" onClick={handleOpenPost}>
                                Huan, what are you thinking?
                            </button>
                        </div>
                    </div>
                    <div className="mt-3 text-center">
                        Let's share with everyone!
                    </div>
                </div>
            </div>
            {isOpenPost && (
                <div className="w-full h-full flex justify-center items-center post-open">
                    <div ref={postRef} className="max-w-150 max-h-123 bg-backgroundPost z-12 rounded-xl ">
                        <div className="relative w-auto flex flex-col">
                            {step === 1 && (
                                <>
                                    <NavbarPost title="Create new post" onNext={handleNextStep} />
                                    <CreatePostLayer onNextStep={handleNextStep} />
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    <NavbarPost title="Crop" onPrev={handlePrevStep} onNext={handleNextStep} />
                                    <Crop
                                        images={uploadedImages}
                                        onPrevStep={handlePrevStep}
                                        onNextStep={handleNextStep}
                                    />
                                </>
                            )}
                            {step === 3 && (
                                <>
                                    <NavbarPost title="Post" onPrev={handlePrevStep} />
                                    <Crop 
                                        images={uploadedImages}
                                    />
                                    <Post onPrevStep={handlePrevStep} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreatePosts;
