import React from 'react';
import clockicon from '../../assets/icons/clock.svg';
import visiticon from '../../assets/icons/marker.svg';
import contacticon from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div class='flex m-0 grid grid-cols-1 lg:grid-cols-3 gap-1 items-center'>
            <div class="card bg-primary  m-5  grid grid-cols-2 gap-1 flex  items-center p-3">
                <div>
                    <img src={clockicon} alt="" />
                </div>
                <div class="card-body p-0 items-center ">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>We are using cookies for no reason.</p>

                </div>
            </div>
            <div class="card  bg-neutral text-neutral-content m-5  grid grid-cols-2 gap-0 flex  items-center p-3">
                <div>
                    <img src={visiticon} alt="" />
                </div>
                <div class="card-body p-0 items-center ">
                    <h2 class="card-title">Hours</h2>
                    <p>We are using cookies for no reason.</p>

                </div>
            </div>
            <div class="card  bg-primary  m-5  grid grid-cols-2 gap-0 flex  items-center p-3">
                <div>
                    <img src={contacticon} alt="" />
                </div>
                <div class="card-body p-0 items-center ">
                    <h2 class="card-title">Opening Hours</h2>
                    <p>We are using cookies for no reason.</p>

                </div>
            </div>
        </div>
    );
};

export default Info;