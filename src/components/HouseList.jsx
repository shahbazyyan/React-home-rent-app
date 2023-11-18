import React, { useContext } from 'react';
import {ImSpinner3} from 'react-icons/im'
import { HouseContext } from './HouseContext';
import { Link } from 'react-router-dom';
import House from './House'

function HouseList() {
  const {houses, loading} = useContext(HouseContext);

  if(loading) {
    return (<ImSpinner3
      className='mx-auto animate-spin text-violet-700 mt-[150px]'
      style={{ fontSize: '6rem'}}
    />
    )
  };

  if (houses.length < 1) {
    return <div className='text-center text-3xl text-gray-400 mt-48'>Sorry, nothing found!</div>
  }

  return (
    <section className='mb-20'>
      <div className="container mx-auto">
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
            {houses.map((house,i) => {
              return (
                <Link to={`property/${house.id}`} key={i}>
                  <House house={house}/>
                </Link>
              )
            })}
          </div>
      </div>
    </section>
  )
}

export default HouseList