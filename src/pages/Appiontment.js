import React from 'react'
import AppiontmentHeader from '../components/Appiontment/AppiontmentHeader'
import AvailableAppointments from '../components/Appiontment/AvailableAppointments'
import Navbar from './shared/Navbar'

const Appiontment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navbar />
            <AppiontmentHeader date={date} setDate={setDate}/>
            <AvailableAppointments date={date} setDate={setDate}/>
        </div>
    )
}

export default Appiontment
