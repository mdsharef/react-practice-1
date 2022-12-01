import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import DisplayCount from '../components/display-count/DisplayCount';
import Buttons from '../components/buttons/Buttons';
import UpdateIncrementDecrement from '../components/input-inc/UpdateIncrementDecrement';

const About = () => {
  let [count, setCount] = useState(0);
  let [incrementValue, setIncrementValue] = useState(1);
  let [decrementValue, setDecrementValue] = useState(1);
  const increment = () => {
    setCount(count + incrementValue);
  }
  const decrement = () => {
    setCount(count - decrementValue);
  }

  const handleIncrementValue = (e) => {
    setIncrementValue(parseInt(e.target.value));
  }

  const handleDecrementValue = (e) => {
    setDecrementValue(parseInt(e.target.value));
  }

  return (
    <Layout>
      <DisplayCount count={count} />
      <UpdateIncrementDecrement incrementValue={incrementValue} decrementValue={decrementValue} handleIncrementValue={handleIncrementValue} handleDecrementValue={handleDecrementValue}  />
      <Buttons increment={increment} decrement={decrement} />
      <br />
      <br />
      <address>
        <h3>Iraki Mad</h3>
        <p>122, Anjuman Manjil</p>
        <p>Azimpur, Dhaka</p>
        <p>Mobile - 01627587352</p>
      </address>
    </Layout>
  )
}

export default About