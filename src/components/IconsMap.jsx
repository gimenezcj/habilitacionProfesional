import { Icon } from "leaflet";
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const lista=[1,2,3,4,5,6];

const iconUrt=(i)=>{return "/images/iconos/marcador-"+i+".png"}

const IconsMap = lista.map((i)=>new Icon({
iconRetinaUrl,
  shadowUrl,
  iconUrl: iconUrt(i),
  iconSize: [25, 50],
  iconAnchor: [12, 41],
popupAnchor: [1, -34],
tooltipAnchor: [16, -28],
shadowSize: [41, 41],
}));

export default IconsMap;
