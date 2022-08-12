import React, { useState } from 'react';
import chair from '../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns/esm';

const Appointmentbanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero  bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img className='h-60' alt='dentish chair' src={chair} />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You have selected: {format(date, 'PP')}.</p>;
                </div>
            </div>
        </div>
    );
};

export default Appointmentbanner;