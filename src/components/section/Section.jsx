import React from 'react';

const Section = ({title, items}) => {
  return (
    <section>
        <h3>{title}</h3>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </section>
  )
}

export default Section