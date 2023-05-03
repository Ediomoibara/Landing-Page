import React from 'react';
import { IoIosStar } from 'react-icons/io';

const ServicesBox2 = (props) => {
    return (
        <div className="services-box-2">
            <div className="services-box-inner-2">
                <div className="profilepic">
                    <img src={props.profileImg} alt={props.alt} />
                </div>
                <h4> {props.name} </h4>
                <div className="ratings">
                    <IoIosStar id="star"/><IoIosStar id="star"/><IoIosStar id="star"/><IoIosStar id="star"/><IoIosStar id="star"/>
                </div>
                <p> {props.p} </p>
            </div>
        </div>
    )
}

export default ServicesBox2;