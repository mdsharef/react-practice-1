import React, { useEffect, useState } from 'react';
// import Button from '../components/button/Button';
import Layout from '../components/layout/Layout';

const data = [
  {
    name: 'Fatema',
    email: 'fatema@gmail.com'
  },
  {
    name: 'Fariha',
    email: 'fariha@gmail.com'
  },
  {
    name: 'Muaz',
    email: 'muaz@gmail.com'
  },
  {
    name: 'Rakib',
    email: 'rakib@gmail.com'
  },
  {
    name: 'Jahir',
    email: 'jahir@gmail.com'
  }
]

// const data = []

const Help = () => {
  let [state, setName] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setName({name: 'Muaz'});
      console.log('rendering...')
    }, 1000)
    console.log('useEffect rendering...')
  }, []);

  // setTimeout(() => {
  //   setName({name: 'Muaz'});
  //   console.log('rendering...')
  // }, 1000)

  return (
    <Layout>
        {/* <h2>Hello {name ? name : 'Guest'}, Welcome to our course!</h2> */}
        {/* {name && (<h2>Hello Muaz, Welcome to our course!</h2>)} */}
        {/* {!name && (<h2>Hello Guest, Welcome to our course!</h2>)} */}
        {state.name ? 
          (<h2>Hello {state.name}, Welcome to our course!</h2>) 
          : (<h2>Hello Guest, Welcome to our course!</h2>)
        }

        {/* <ul>
          <li>{data[0].name} - ({data[0].email})</li>
          <li>{data[1].name} - ({data[1].email})</li>
          <li>{data[2].name} - ({data[2].email})</li>
        </ul> */}

        {/* <ul>
          {data.map(item => (<li>{item.name} - ({item.email})</li>))}
        </ul> */}

        {/* <ul>
          {data.length > 0 && data.map(item => (<li>{item.name} - ({item.email})</li>))}
        </ul> */}

        {data.length > 0 ? (
          <ul>{data.map(item => (
              <li>
                {item.name} - ({item.email})
              </li>
            ))}
          </ul>
          ) : (
            <h5>There is no users!</h5>
          )
        }

    </Layout>
  )
}

export default Help;