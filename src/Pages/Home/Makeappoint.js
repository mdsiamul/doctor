import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
const Makeappoint = () => {
    return (

        <section style={{
            background: `url(${appointment})`
        }}

            className='flex my-20 justify-center items-center'>
            <div className='flex-1 hidden lg:block' >
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white m-5'>Make and Appointment Today</h2>
                <p className='text-white m-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </section>

    );
};

export default Makeappoint;