import React, { createContext, useEffect, useState } from 'react';
import { housesData } from '../data';


export const HouseContext = createContext();

function HouseContextProvider({children}) {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   const allCountries = houses.map((item) => {
    return item.country
   });
   const uniqueCountries = ['location', ... new Set(allCountries)];

   setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((item) => {
     return item.type
    });
    const uniqueProperties = ['location', ... new Set(allProperties)];
 
    setProperties(uniqueProperties);
   }, []);

   function handleClick () {
    console.log('ok');
   }

  return (
   <HouseContext.Provider value={{country,
     setCountry,
     countries,
     property,
     setProperty,
     properties,
     price,
     setPrice,
     houses,
     loading,
     handleClick
   }}>
    {children}
   </HouseContext.Provider>
  )
}

export default HouseContextProvider