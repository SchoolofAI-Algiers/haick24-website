import React from "react";
import FlipCard from "./flip_card";

const HaickEditionContainer = ({logo , isLeft,images}) => {
    
    return (
        <div className="relative">
            <div className="bg-white rounded-[20px] border-4 border-white overflow-hidden cursor-pointer">
                <FlipCard images={images} />
            </div>
            <div
                className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'}
                    transform -translate-y-1/2 ${ isLeft ? 'translate-x-1/4' : '-translate-x-1/4'}
                    bg-white rounded-lg h-[50px] w-[150px] flex justify-center items-center`}>
                        <img src={logo} className="w-[75%]" />
            </div>
        </div>
        
    );
}


export default HaickEditionContainer