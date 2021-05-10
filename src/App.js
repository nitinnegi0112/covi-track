import React,{useEffect,useState} from 'react';
import './App.css';
import Card from './components/Card/Card'
import Countrytable from './components/CountryTable/Countrytable'
function App() {
  const [total,setTotal] = useState({});
  const [countryData,setCountryData]=useState({});
  const [country,setCountry]= useState('');
  const [caseObj,setCaseObj] = useState([]);
    const getData = async ()=>{ 
      const response = await fetch('https://disease.sh/v3/covid-19/all');
      const data = await response.json();
  
      setTotal({  
        id:'total',
        cases:data.cases,
        today:data.todayCases,
      })
      setCaseObj([{
        id:'total',
        cases:data.cases,
        today:data.todayCases,
      },{
     id:'active',
     cases:data.active,
      },
    {
      id:'recovered',
      cases:data.recovered,
      today:data.todayRecovered,
    },{
      id:'death',
      cases:data.deaths,
      today:data.todayDeaths,
    }])
     
    }

    const searchCountry =async (country)=>{
      
      const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`);
      const data = await response.json();
      setCountryData(data);
      console.log(data);

    }
    const handleChange =(e)=>{
      setCountry(e.target.value);
    console.log(country);
   
    }
  useEffect(()=>{
      getData();
  },[])
  return (
    <div className='App'>
    <h1>covitrack</h1>
    
    <div className='card__wrapper'>
  {caseObj.map((item)=>{
   
    return <Card className='card' {...item} key={item.id}></Card>
  })}
    </div>
  <Countrytable></Countrytable>
    </div>
  );
}


export default App;
