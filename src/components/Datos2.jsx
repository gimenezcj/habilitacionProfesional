import React, { Component,useState , useEffect} from 'react';
import CanvasJSReact from './../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

const color=  ['rgb(2,171,2)','rgb(2,255,2)','rgb(255,255,2)','rgb(255,154,2)','rgb(255,2,2)']

function Datos2 (props) {

	const {estados}=props;
	let datos=[];

	const generar=()=>{
		let d=[];
		if(estados){
	 	 estados.forEach(x=>d.push({y:x.estadoNivelCaudal+1,color:color[x.estadoNivelCaudal]}))
	 	 datos=d;
	 	}
	}

	generar();

	const options = {
      height:200,
			backgroundColor: "#F5DEB3",
			data: [{
				type: "column",
				dataPoints: datos
			}]
		}

		return (
		<div >

			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}


export default Datos2;
