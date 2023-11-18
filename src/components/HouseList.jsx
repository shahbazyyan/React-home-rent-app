import React, { useContext } from 'react';
import {ImSpinner3} from 'react-icons/im'
import { HouseContext } from './HouseContext';
import { Link } from 'react-router-dom';
import House from './House'

function HouseList() {
  const {houses, loading} = useContext(HouseContext);

  console.log(houses);
  return (
    <section className='mb-20'>
      <div className="container mx-auto">
          <div>
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