import { Icon } from "leaflet";

const lista=[1,2,3,4,5];

const IconsMap = lista.map((i)=>new Icon({
  iconUrl: "/images/iconos/marcador-"+i+".png",
  iconSize: [25, 50]
}));

export default IconsMap;
