import { OtherOptions } from "../../assets/feedpostsicon";

const PostHeader = ({ username, avatar }) => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 ">
                <div className="size-10">
                    <img src={avatar} alt="user profile pic" className="size-10 rounded-full" />
                </div>
                <div className="flex items-center gap-2 max-w-80 w-80 h-12 text-sm text-sz">
                    <div className="">{username}</div>
                    <span className="size-1 bg-iconPublic rounded-full mt-1"></span>
                    <div className="text-iconPublic ">1d</div>
                </div>
            </div>
            <div className="cursor-pointer">
                <span
                    className="text-sm font-bold text-blue-500 hover:text-white transition duration-200 ease-in-out"
                >
                    <OtherOptions />
                </span>
            </div>
        </div>
    );
};

export default PostHeader;
