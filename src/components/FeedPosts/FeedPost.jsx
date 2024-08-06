import React, { useState } from 'react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import { CommentLogo, NotificationsLogo, UnlikeLogo, Save, RemoveSave } from "../../assets/feedpostsicon";
import ImagePosts from '../ImagePosts/ImagePosts';

const FeedPost = ({ img, username, avatar, content }) => {
    const imgUrl = typeof img === 'string' ? img : img.url;
    const avatarUrl = typeof avatar === 'string' ? avatar : avatar.url;
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);
    const [saved, setSaved] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    };
    const handleSaved = () => {
        if (saved) {
            setSaved(false)
        } else {
            setSaved(true)
        }
    };
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="mb-4 max-w-120 w-120  rounded-lg box-border">
            <PostHeader username={username} avatar={avatarUrl} />
            <div className="my-2 rounded overflow-hidde border-opacity-5">
                <ImagePosts  />
            </div>
            <div>
                <div className="flex justify-between mt-2 mb-2">
                    <div className="flex items-center gap-4 w-full">
                        <div onClick={handleLike} className="cursor-pointer text-lg">
                            {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
                        </div>

                        <div className="cursor-pointer text-lg">
                            <CommentLogo />
                        </div>
                    </div>
                    <div className="cursor-pointer text-lg" onClick={handleSaved}>
                        {!saved ? <Save /> : <RemoveSave />}
                    </div>
                </div>
                <p className="text-sm font-semibold">{likes} likes</p>
            </div>
            <div className="h-full">
                <div className={`overflow-hidden ${isExpanded ? 'max-h-full' : 'max-h-11'}`}>
                    <p className="text-sm text-gray-200">
                        {username}
                    </p>
                    <p className="text-sm text-gray-300">
                        {content}
                    </p>
                </div>
                <div className="cursor-pointer text-gray-500 text-sm" onClick={toggleExpand}>
                    {isExpanded ? '...See less' : '...See more'}
                </div>
            </div>
            <PostFooter username={username} content={content} />
        </div>
    );
};

export default FeedPost;
