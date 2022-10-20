<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>		
	<!-- Necesario para enviar archivos, si no no funcionara -->
    <form action="index.php" method="POST" enctype="multipart/form-data">
        <label for="">Nombre: </label>
        <input type="text" name="nombre">
        <br><br>
		<label for="">Provincia: </label>
		<input type="text" name="provincia">
        <br><br>
		<label for="">C.V</label>
		<input type="file" name="archivo">
        <br><br>
		<input type="submit">
		<br><br>

	</form>

    <?php
		$archivo = $_FILES['archivo']['type'];
		
		if(strpos($archivo, 'pdf') || strpos($archivo, 'doc')){
			print "valido";
		}else{
			print "Documento no válido";
		}

	?>

</body>
</html>

