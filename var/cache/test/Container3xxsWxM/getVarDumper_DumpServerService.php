<?php

namespace Container3xxsWxM;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getVarDumper_DumpServerService extends App_KernelTestDebugContainer
{
    /**
     * Gets the private 'var_dumper.dump_server' shared service.
     *
     * @return \Symfony\Component\VarDumper\Server\DumpServer
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/var-dumper/Server/DumpServer.php';

        return $container->privates['var_dumper.dump_server'] = new \Symfony\Component\VarDumper\Server\DumpServer('', ($container->privates['monolog.logger.debug'] ?? $container->load('getMonolog_Logger_DebugService')));
    }
}
