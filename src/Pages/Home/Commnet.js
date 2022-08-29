import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people from '../../assets/images/people1.png';

const Commnet = () => {
    return (
        <div>
            <div className='flex justify-between mt-40'>
                <div >
                    <h4 className='text-primary'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>

                </div>
                <div >
                    <img className='w-40' src={quote} alt="" />
                </div>
            </div>

            <div className='flex my-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">

                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex justify-center align-center p-4'>
                        <div><img src={people} alt="" /></div>
                        <div><p>
                            Winson Herry
                        </p>
                            <p>california</p></div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">

                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex justify-center align-center p-4'>
                        <div><img src={people} alt="" /></div>
                        <div><p>
                            Winson Herry
                        </p>
                            <p>california</p></div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">

                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>
                    <div className='flex justify-center align-center p-4'>
                        <div><img src={people} alt="" /></div>
                        <div><p>
                            Winson Herry
                        </p>
                            <p>california</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Commnet;