import React from 'react';

const Service = ({ service }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={service.img} />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{service.name}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            </div>
        </div>
    );
};

export default Service;