import React,{useEffect,useState} from 'react'
import '../CountryTable/Countrytable.css'
// https://disease.sh/v3/covid-19/countries
const Countrytable = () => {
    
    const [topCountries,setTopCountries]= useState([]);
    const getCountriesData = async () =>{
    const response = await fetch('https://disease.sh/v3/covid-19/countries?sort=cases');
    const data = await response.json();
    setTopCountries(data.splice(0,20));
        
    }
  
    useEffect(()=>{
        getCountriesData();
    },[])
    console.log(topCountries)
    return (
        <div className='countrytable'>
            <h1>Countrywise coronavirus cases</h1>
            {topCountries.map((cont)=>{
                const {country, cases,countryInfo}= cont;
                return <div key={countryInfo._id} className='countrytable__row' >
                    <div className='countrytable__row__heading'> 
                    <img src={`${countryInfo.flag}`} alt="country-flag" className='countrytable__flag'/>
                    <h1 className='countrytable__name'>{country}</h1>
                        </div>   
                  
                    <h2 className='countrytable__cases'>{cases.toLocaleString()}</h2>
                </div>
            })}
        </div>
    )
}

export default Countrytable
