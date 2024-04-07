import React from "react";
import './style.css';
import HaickEditionContainer from "./edition_container/haick_edition_container";
import { haick23Logo, haick23Edition, haick22Logo, haick22Edition } from "./data/images";
import LeftCurve from './assets/ui/left_curve.png';
import RightCurve from './assets/ui/right_curve.png';
import MidCurve from './assets/ui/mid_curve.png';
import BellowLeftCurve from './assets/ui/bellow_left_curve.png';
import AboveRightCurve from './assets/ui/above_right_curve.png';

const PreviousEdition = () => {
    return (
        <div className="font-IPM min-h-screen bg-skyBlueColor">
            <h2 className="text-white font-bold text-[25px] text-center">Previous editions</h2>
            <div className="w-full flex flex-col relative">
                <div className="haick-23-head">
                    <img src={AboveRightCurve} className="haick-23-right-curve" />
                    <div className="haick-23-container">
                        <img src={LeftCurve} className="haick-23-curve"/>
                        <HaickEditionContainer isLeft={true} logo={haick23Logo} images={haick23Edition} />
                    </div>
                </div>
                <div className="haick-22-head">
                    <img src={BellowLeftCurve} className="haick-22-left-curve-2" />
                    <div className="haick-22-container">
                        <img src={RightCurve} className="haick-22-curve"/>
                        <img src={BellowLeftCurve} className="haick-22-left-curve" />
                        <HaickEditionContainer isLeft={false} logo={haick22Logo} images={haick22Edition} />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PreviousEdition