import React from 'react';

const Contacthome = () => {
    return (
        <div className='my-20 ' >
            <div>
                <h2 className='text-primary'>Contact Us</h2>
                <h1 className='text-3xl mb-5'>Stay connected with us</h1>
            </div>

            <div>
                <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs " />
                <br />
                <input type="text" placeholder="Type here" class="input input-bordered input-md w-full max-w-xs my-5" />
                <br />
                <input type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs" />
                <br />
                <button class="btn btn-primary mt-5">Get Started</button>
            </div>
        </div>
    );
};

export default Contacthome;