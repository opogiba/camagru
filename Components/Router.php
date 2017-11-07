<?php
/**
 * Created by PhpStorm.
 * User: opogiba
 * Date: 10/2/17
 * Time: 6:22 PM
 */

class Router
{
    private $routes;

    public function __construct()
    {
        $routesPath = ROOT.'config/routes.php';
        $this->routes = include($routesPath);
    }
    private function getURI ()
    {
        if (!empty($_SERVER['REQUEST_URI']))
        {
            return (trim($_SERVER['REQUEST_URI'], '/'));
        }
    }

    public function run ()
    {
        $uri = $this->getURI();

        foreach ($this->routes as $uriPattern => $path) {
            if (preg_match("~uriPattern~", $uri))
            {
                $segments = explode('/', $path);
                $controllerName = array_shift($segments).'Controller';
                $controllerName = ucfirst($controllerName);
                $actionName = 'action'.ucfirst(array_shift($segments));

                $conrollerFile = ROOT.'/controllers/'.$controllerName.'.php';
                if (file_exists($conrollerFile))
                {
                    include_once ($conrollerFile);
                }
                $controllerObject = new $controllerName;
                $result = $controllerObject->$actionName();
                if ($result != null)
                {
                    break;
                }
            }
        }

    }

}