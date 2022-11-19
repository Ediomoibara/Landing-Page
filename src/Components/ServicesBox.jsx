import React from 'react';

const ServicesBox = (props) => {
    let polygon = props.num;
    return (
        <div className="services-box padd-15">
            {polygon === 1 ? <div className="polygon" style={{ backgroundColor: "#0087A5" }}></div> : <div className="polygon" style={{ backgroundColor: "#000000" }}></div>}
            <div className="services-box-inner">
                <h3> {props.text} </h3>
                <span>
                   <sup>$</sup> <h4> {props.price} </h4> <i></i> <h5>mo</h5>
                </span>
                <ul>
                    <li><i className="fa-solid fa-circle-check"></i>10 Keywords Optimized</li>
                    <li><i className="fa-solid fa-circle-check"></i>10 Keywords Optimized</li>
                    <li><i className="fa-solid fa-circle-check"></i>10 Keywords Optimized</li>
                    <li><i className="fa-solid fa-circle-check"></i>10 Keywords Optimized</li>
                    <li><i className="fa-solid fa-circle-check"></i>10 Keywords Optimized</li>
                </ul>
                <a href="#" className="btn">Choose Plan</a>
            </div>
            <div className="eclipse"></div>
        </div>
    )
}

export default ServicesBox;