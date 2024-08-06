import { useEffect, useState } from "react";
import FeedPost from "./FeedPost";
import avatar from '../../assets/huan.jpg';
import { fetchUsers, fetchPosts, fetchImages, fetchComments } from "../../data/DataFeedPost/apiPost";

const FeedPosts = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [images, setImages] = useState([]);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [postsData, usersData, imagesData, commentsData] = await Promise.all([
                    fetchPosts(),
                    fetchUsers(),
                    fetchImages(),
                    fetchComments()
                ]);

                console.log("Posts Data:", postsData);
                console.log("Users Data:", usersData);
                console.log("Images Data:", imagesData);
                console.log("Comments Data:", commentsData);

                // Ensure data is in array format
                setPosts(Array.isArray(postsData) ? postsData : []);
                setUsers(Array.isArray(usersData) ? usersData : []);
                setImages(Array.isArray(imagesData) ? imagesData : []);
                setComments(Array.isArray(commentsData) ? commentsData : []);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="container mx-auto py-3 max-w-120">
            {isLoading ? (
                [0, 1, 2, 3].map((_, i) => (
                    <div key={i} className="mb-10 space-y-4">
                        <div className="flex gap-2">
                            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                            <div className="space-y-2">
                                <div className="h-2.5 w-48 bg-gray-200 animate-pulse"></div>
                                <div className="h-2.5 w-48 bg-gray-200 animate-pulse"></div>
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 animate-pulse">
                            <div className="h-64 bg-gray-200">Content</div>
                        </div>
                    </div>
                ))
            ) : (
                posts.map((post) => {
                    // Find the user associated with the post
                    const user = users.find(user => user.id === post.userId) || {};
                    const image = images.find(image => image.id === user.id) || {};
                    const postComments = comments.filter(comment => comment.postId === post.id);
                    return (
                        <FeedPost
                            key={post.id}
                            img={avatar} // Placeholder image, consider using real images if available
                            username={user.username || "Unknown User"}
                            avatar={image.url} // Placeholder avatar
                            content={post.body} // Content from the API
                        />
                    );
                })
            )}
        </div>
    );
};

export default FeedPosts;
