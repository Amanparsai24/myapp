import React from 'react';
import './Loader.css'
import * as animatedData from "../../assets/test.json";
import { ThreeDot } from 'react-loading-indicators';

interface PropData {
    show: boolean;
    style?: boolean
}

const Loader = (props: PropData) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animatedData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <>
            {
                props.show && <div className="resultLoading">
                    <div className='bg' style={{ backgroundColor: '#000000' }}></div>

                    <div className="resultLoading card-header page-content" style={{ textAlign: 'center', marginTop: '15%' }}>
                        {/* <Lottie options={defaultOptions} height={50} width={50} /> */}
                        <ThreeDot variant="bounce" color="#32cd32" size="medium" text="Loading" textColor="" />
                    </div>
                </div >
            }
        </>
    )
}

export default Loader;
