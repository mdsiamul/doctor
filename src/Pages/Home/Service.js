import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            </div>
        </div>
    );
};

export default Service;