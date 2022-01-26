
<?php

include'conexion.php';

  



if ($con) {
    echo "Conexion con base de datos exitosa! ";
    
    if(isset($_POST['nivel'])) {
        $niv = $_POST['nivel'];
        echo "Los datos a guardar en BD son --> ";
        echo " Nivel : ".$niv;
    }
    
    if(isset($_POST['precipita'])) {
        $prec = $_POST['precipita'];
        echo " Precipitacion : ".$prec;
    }
    
    if(isset($_POST['EstNro'])) {
        $enro = $_POST['EstNro'];
        echo " Estacion Nro : ".$enro;
    }
    
    if(isset($_POST['Locacion'])) {
        $ubic = $_POST['Locacion'];
        echo " Locacion : ".$ubic;
    }
 
    if(isset($_POST['bateria'])) { 
        $bat = $_POST['bateria'];
        echo " Bateria : ".$bat;
        
        
        date_default_timezone_set('America/Argentina/Buenos_Aires');
        $fecha_actual = date("Y-m-d H:i:s");
        
        
        $consulta = "INSERT INTO medicion (EstacionNro, Ubicacion, NivelAgua, TensionBateria, PrecipitacionAcum, FechaHora) VALUES ('$enro', '$ubic', '$niv', '$bat', '$prec','$fecha_actual' ) ";  
        
   $resultado = mysqli_query($con, $consulta);
        if ($resultado){
            echo " Registo en base de datos OK! ";
        } else {
            echo " Falla! Registro BD";
        }
    }
    
    
} else {
    echo "Falla! conexion con Base de datos ";   
}


?>