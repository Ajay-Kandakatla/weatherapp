import React from 'react';

class CityList extends React.Component{
    renderCityList(cities){
      return  cities.map((city)=>{
            return <div className='city-tile' key={city.name}>
                     <h3>{city.name}</h3>
                     <div>{city.temparatue}</div>
                     <div>{city.weather}</div>
                    </div>;
        });
        
    }
    render(){
        return(
            <div key={'CityListContainer'} className='city-list-container'>
                 {this.renderCityList(this.props.cities)}
            </div>);
    }
}
export default CityList;