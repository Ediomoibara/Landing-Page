import React from 'react';

const PageBox1 = (props) => {
    return (
        <div className="page-box-1 padd-15">
            <div>
                <div className="page-box-1-inner">
                    <div className="icon-img-1">
                        <img src={props.image} alt="" />
                    </div>
                    <h4> {props.heading} </h4>
                    <p> {props.p} </p>
                    <ul>
                        <li><i className="fa-solid fa-circle-check"></i>Product Development</li>
                        <li><i className="fa-solid fa-circle-check"></i>Product Development</li>
                        <li><i className="fa-solid fa-circle-check"></i>Product Development</li>
                    </ul>
                </div>
            </div>
            <div className="eclipse"></div>
        </div>
    )
}

export default PageBox1;