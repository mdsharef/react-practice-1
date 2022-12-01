import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import * as DateFns from 'date-fns';

function getTimes(date) {
    const { getHours, getMinutes, getSeconds } = DateFns;

    const time = {
        hours: getHours(date),
        minutes: getMinutes(date),
        seconds: getSeconds(date),
    }
    return time;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

const ClockPage = () => {
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        setTimeout(() => {
            setDate(new Date());
        }, 1000)
    }, [date])

    const {hours, minutes, seconds} = getTimes(date);

  return (
    <Layout>
        <h1>Clock</h1>
        <h1>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</h1>
    </Layout>
  )
}

export default ClockPage