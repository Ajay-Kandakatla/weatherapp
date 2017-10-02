import React from 'react';
import clearSky from '../assets/clearsky.jpg';

class CityDetails extends React.Component{
    constructor(){
        super();
    }
 renderimage = (description)=>{
     let imgDom;
     switch(description){
         case 'clear sky':
         imgDom =  <img src={clearSky}/>;
        
         default:
         imgDom =  <img src={clearSky}/>;
     }
     return imgDom;

    }
    render(){
        console.log('Props Details',this.props.detailsData)
        const iconCode = this.props.detailsData && this.props.detailsData.list[0].weather[0].icon
                        ? this.props.detailsData.list[0].weather[0].icon : '';
        const imgSrc = `http://openweathermap.org/img/w/${iconCode}.png`;
        const temMin = this.props.detailsData ? this.props.detailsData.list[0].main.temp_min : '';
        const temMax = this.props.detailsData ? this.props.detailsData.list[0].main.temp_max : '';
        const farnheMinTemp = ((temMin-273.15)*1.8)+32;
        const farnheMaxTemp = ((temMax-273.15)*1.8)+32;
        
        
        return(
            <div key={'CityListContainer'} className='city-list-container'>
            <h2>Weather Report</h2>
            <h4>City : {this.props.detailsData && this.props.detailsData.city.name ? this.props.detailsData.city.name : ''}</h4>
            <h4>Todays weather : {this.props.detailsData && this.props.detailsData.list[0].weather[0].description ? this.props.detailsData.list[0].weather[0].description : ''}</h4>
            <p>Temparature Min: {farnheMinTemp} </p>
            <p>Temparature Max: {farnheMaxTemp} </p>
            {this.props.detailsData && this.props.detailsData.list[0].weather[0].icon ? <img src={imgSrc} /> : <img src={clearSky} />} 
           
            
            </div>);
    }
}
export default CityDetails;