import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Moment from 'moment'; 

class List extends Component{
  renderChart(data){
    const cityName = data.city.name;
    const cityTemps = data.list.map(weather => weather.main.temp);
    const cityDate = data.list.map(weather => weather.dt_txt);
   
    const chartData = [{
      x: cityDate, 
      y: cityTemps,  
      fill: 'tozeroy',
      type: 'scatter'
    }]; 

    const chartLayout = {
      title:`${cityName} 5 Day Weather`
    }; 

    return(
      <li key={cityName}>
         <Chart data={chartData} layout={chartLayout}/>
      </li>
    );
  };
  render(){
    return(
      <ul>
        {this.props.weather.map(this.renderChart)}
      </ul> 
    );
  }
}

function mapStateToProps({ weather }){
  return{ weather };
}

export default connect(mapStateToProps)(List);
