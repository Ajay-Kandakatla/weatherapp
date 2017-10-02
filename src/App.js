import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import SearchBar from './Components/SearchBar';
import CityList from './Components/CityList';
import CityDetails from './Components/CityDetails';

import MdNotifications from 'react-icons/lib/md/notifications';



class App extends Component {
  constructor(props){
    super(props);
    this.state={

    }

  }
  query = ()=>{
    const {inputValue} = this.state;
    const API_KEY = '33e2fce0934d52b7f3636f245fc47513';
    const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.inputValue},us,&appid=${API_KEY}`
    fetch(URL)  
      .then((response)=> {  
          if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  
              response.status);  
            return;  
          }

          // Examine the text in the response  
          response.json().then((data)=> { 
            console.log('Response data',data);
            this.setState({detailsData:data})
          });  
        }  
      )  
      .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
      });
  }
  render() {
    const cities = [
                    {name:'Boston',
                     temparatue:87,
                     weather:'Cloudy'
                    },
                     {name:'Newyork',
                     temparatue:87,
                     weather:'Sunny'
                     
                    },
                     {name:'Cali',
                     temparatue:87,
                     weather:'Showers'
                    }
                   ]
    return (
      <div className="App" >
      <div className="header">
      
         <ul className="navigation">
         <h2> Weather Application with open weather API.</h2>
              <div style={{display:'flex'}}><li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Products</a></li>
              <li><MdNotifications className='notifications-icon'/></li>
              </div>
          </ul>
      </div>
      <div className='layout'>
        <div className='city-list'>
                <SearchBar inputHandler={(value)=>{this.setState({inputValue: value},this.query)}}/>
                <CityList cities={cities}/>
          </div>
          <div className='city-details'>
            <CityDetails detailsData={this.state.detailsData}/>
          </div>   
      </div>
         

      
      </div>
      
    );
  }
}

export default App;
