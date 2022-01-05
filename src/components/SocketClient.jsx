import React, { useEffect} from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3800";

export default function SocketClient({cambioEstado,idEstacion}) {

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {query:'idEstacion='+idEstacion});
    socket.on("FromAPI", data => {
      cambioEstado(data);
    });
    return () => socket.disconnect();
  }, []);
  return (
    <></>
  );
}
