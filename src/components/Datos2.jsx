import React from 'react';
import CanvasJSReact from './../assets/canvasjs.react';
import Moment from 'moment';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const color=  ['rgb(2,171,2)','rgb(2,255,2)','rgb(255,255,2)','rgb(255,154,2)','rgb(255,2,2)']

function Datos2 (props) {

	const {estados,seleccionNivel,seleccionValor}=props;
	let datos=[];

	const generar=()=>{
		let d=[];
		if(estados){
	 	 estados.forEach(x=>d.push({y:x[seleccionValor],color:color[x[seleccionNivel]],label:Moment(x.fechaDatos).format('hh.mm:ss')}))
	 	 datos=d;
		 console.log(d);
	 	}
	}

	generar();

	const options = {
      height:200,
			backgroundColor: "#F5DEB3",
			data: [{
				type: "column",
				dataPoints: datos
			}],
			axisX:{
 				title:"Horas",
				labelAngle: 45,
			},
			axisY:{
				title:"mm",
			}
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
