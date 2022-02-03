<?php

//importante: habilitar la libreria curl en el archivo de configuracion de apache2

$postdata = [
        'estadoNivelCaudal' => '0',
        'estadoBateria' => '4',
        'estadoLLuvia' => '0',
        'mmLluvia' => '0',
        'mmNivel' => '2',
        'trBateria' => '90'
];

$url = "localhost:3800/estacion/agregarEstado/1";

$headers = array(
    "POST" ,
    "Content-type: application/json",
    "Content-length: ".strlen($xml_data),
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postdata));

$data = curl_exec($ch);

if (curl_errno($ch)) {
    print "Error: " . curl_error($ch);
} else {
    // Show me the result
    var_dump($data);
    curl_close($ch);
}

?>
