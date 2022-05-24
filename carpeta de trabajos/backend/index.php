<?php
    require_once 'vendor/autoload.php';
    // use src\controller\ListaController;
    use src\prueba;
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $uri = explode( '/', $uri );
    // tener de ejemplo para controlar que la url que nos pasen sea 
    // la que nos interesa 
    if ((isset($uri[2]) && $uri[2] != 'lista') ) {
        header("HTTP/1.1 404 Not Found");
        exit();
    }else{
        var_dump("algo");
        $lista = new prueba();
        $lista->holaMundo();
    }

    die;
?>
