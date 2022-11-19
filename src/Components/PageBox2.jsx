import React from 'react';

const PageBox1 = (props) => {
    return (
        <div className="page-box-2 padd-15">
            <div>
                <div className="page-box-2-inner">
                    <div className="last-icon-img">
                        <img src={props.image} alt="" />
                    </div>
                    <h4> {props.heading} </h4>
                    <p> {props.p} </p>
                </div>
            </div>
            <div className="eclipse"></div>
        </div>
    )
}

export default PageBox1;