//import reactDom from "react-dom";
import React from "react";
//import '.styles/grail.css'

function BaseMain() {
    return (
    <>
        <div id="header">
            header top section
        </div>
        <div id="contain">
            <div id="ctr" className="column">
                main center content
            </div>
            <div id="lft" className="column">
                left center or side half under main
            </div>
            <div id="rght" className="column">
                right center or side half under main
                <a className={utilStyles.listItem}>
                    <Link href={`/`}>
                        <p>Home</p>
                    </Link>
                </a>
                <a className='color-black'>
                    <Link href={`/home`}>
                    <p>{baseTitle}</p>
                    </Link>
                </a>
            </div>
        </div>
        <div id="ftr-wrapper">
            <div id='ftr'>
                footer section
            </div>
        </div>
    </>
    )
};

export default BaseMain;

const baseTitle = 'Dionysus Era Base'
/*
const BaseLay = () =>  {
    return (
        <div>

        </div>
    )
}
*/