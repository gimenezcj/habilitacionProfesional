import React from "react";
import { RiCheckFill } from "react-icons/ri";


function Datos1 (props) {
  const {nivel}=props;
  const color=  ['rgb(2,171,2)','rgb(2,255,2)','rgb(255,255,2)','rgb(255,154,2)','rgb(255,2,2)']

  return (
    <>
      <tr>
        <td rowSpan="5" style={{"background-color":color[nivel],"width":"10%","vertical-align": "middle","text-align": "center","font-size":"10vh"}}><RiCheckFill width="80px" height="80px"/></td>
        <td style={{"background-color":"rgb(255,2,2)","width":"5%","text-align": "center","padding":"10px"}}>81 a 100%</td></tr>
      <tr><td style={{"background-color":"rgb(255,154,2)","text-align": "center","padding":"10px"}}>61 a 80%</td></tr>
      <tr><td style={{"background-color":"rgb(255,255,2)","text-align": "center","padding":"10px"}}>41 a 60%</td></tr>
      <tr><td style={{"background-color":"rgb(2,255,2)","text-align": "center","padding":"10px"}}>21 a 40%</td></tr>
      <tr><td style={{"background-color":"rgb(2,171,2)","text-align": "center","padding":"10px"}}>0 a 20%</td></tr>
    </>
  )
}

export default Datos1;
