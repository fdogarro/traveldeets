/* global Plotly:true */
import React, { Component } from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

export default (props) => {
	return (
		 <Plot data={props.data} layout={props.layout}/>
	)
}


