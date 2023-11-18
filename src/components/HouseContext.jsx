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
   const uniqueCountries = ['Location (any)', ... new Set(allCountries)];

   setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((item) => {
     return item.type
    });
    const uniqueProperties = ['Type (any)', ... new Set(allProperties)];
 
    setProperties(uniqueProperties);
   }, []);

   function handleClick () {
    setLoading(true);
    const isDeafult = (str) => {
      return str.split(" ").includes('(any)');
    };
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);
    
    const filtredHouses = housesData.filter((item) => {
      const housePrice = parseInt(item.price);

      if (
        item.country === country &&
        item.type === property && 
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return item;
      };

      if(isDeafult(country) && isDeafult(property) && isDeafult(price)) {
        return item;
      };

      if(!isDeafult(country) && isDeafult(property) && isDeafult(price)) {
        return item.country === country;
      };

      if(!isDeafult(property) && isDeafult(country) && isDeafult(price)) {
        return item.type === property;
      };

      if(isDeafult(property) && isDeafult(country) && !isDeafult(price)) {
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return item;
        };
      };

      if(!isDeafult(property) && isDeafult(country) && isDeafult(price)) {
        return item.type === property;
      };

      if(!isDeafult(property) && !isDeafult(country) && isDeafult(price)) {
        return item.type === property && item.country === country;
      };

      if(isDeafult(property) && !isDeafult(country) && !isDeafult(price)) {
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return item.country === country;
        };
      };

      if(!isDeafult(property) && isDeafult(country) && !isDeafult(price)) {
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return item.type === property;
        };
      };
    });

    setTimeout(() => {
      return filtredHouses.length < 1 ? setHouses([]) : setHouses(filtredHouses),
      setLoading(false);
    }, 1000);

   };

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