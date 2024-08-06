import React from "react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import ImagePosts from "../../components/ImagePosts/ImagePosts";
import RightContent from "../../components/RightContent/RightContent";
import CreatePosts from "../../components/CreatePosts/CreatePosts";

const HomePage = () => {
    return (
        <div className="container mx-auto text-white relative">
            <div className="flex justify-between gap-5">
                <div className="flex-grow md:pl-[-30px]  xl:pr-30">
                    <div>
                        <CreatePosts />
                    </div>
                    <div>
                        <FeedPosts />
                    </div>
                </div>
                <div className="w-80 hidden xl:block max-w-xs fixed right-10 xl:right-0">
                    <RightContent />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
