import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3800";

export default function SocketClient({cambioEstado,idEstacion}) {
  const [response, setResponse] = useState(undefined);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT, {query:'idEstacion='+idEstacion});
    socket.on("FromAPI", data => {
//      console.log(data);
      cambioEstado(data);

//      setResponse(data);
    });
    return () => socket.disconnect();
  }, []);
  return (
    <></>
  );
}
