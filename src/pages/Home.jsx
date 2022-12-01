import React from 'react'
// import Button from '../components/button/Button'
import Layout from '../components/layout/Layout';
import Section from '../components/section/Section';

const experiences = [
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, distinctio?`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, distinctio?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, facilis deserunt exercitationem odit quis rem.`
]

const educations = [
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, at?`,
    `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eaque inventore error velit tenetur commodi.`,
    `Lorem ipsum dolor sit amet.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora repellendus doloribus optio accusantium illo inventore, debitis eius earum eveniet?`
]

const Home = () => {
  return (
    <Layout>
        <Section title='Experiences' items={experiences} />
        <Section title='Education' items={educations} /> 
    </Layout>
  )
}

export default Home