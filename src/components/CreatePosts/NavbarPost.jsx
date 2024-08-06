import React from "react";
import { ArrowLeft, ArrowRight } from "../../assets/feedpostsicon";

const NavbarPost = ({ title, onPrev, onNext }) => {
    return (
        <div className="relative flex justify-between items-center border-b border-white/20 text-center p-1">
            <div className="cursor-pointer" onClick={onPrev}><ArrowLeft className="size-5 fill-white" /></div>
            <div className="text-lg">{title}</div>
            <div className="cursor-pointer" onClick={onNext}><ArrowRight className="size-5 fill-white" /></div>
        </div>
    );
}

export default NavbarPost;
