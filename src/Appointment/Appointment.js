import React, { useState } from 'react';
import Footer from '../Pages/Shared/Footer';
import Appointmentbanner from './Appointmentbanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Appointmentbanner date={date} setDate={setDate}></Appointmentbanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;