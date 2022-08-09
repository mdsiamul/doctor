import React from 'react';
import treatement from '../../assets/images/treatment.png';

const Dental = () => {
    return (

        <div class="card lg:card-side bg-base-100 shadow-xl my-20">
            <figure><img className='h-80' src={treatement} alt="Album" /></figure>
            <div class="card-body text-center">
                <h2 class="card-title text-center block">Exceptional Dental Care, on Your Terms</h2>
                <p className='text-center'><small className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</small></p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Dental;