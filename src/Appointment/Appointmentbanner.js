
import chair from '../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Appointmentbanner = ({ date, setDate }) => {

    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='h-60' alt='dentish chair' src={chair} />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    {/* <p>You have selected: {format(date, 'PP')}.</p>; */}
                </div>
            </div>
        </div>
    );
};

export default Appointmentbanner;