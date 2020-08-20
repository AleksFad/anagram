<?php

namespace ContainerXvex7Ug;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getSerializer_Mapping_Cache_SymfonyService extends App_KernelTestDebugContainer
{
    /**
     * Gets the private 'serializer.mapping.cache.symfony' shared service.
     *
     * @return \Psr\Cache\CacheItemPoolInterface
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/cache/Traits/ProxyTrait.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/cache/Adapter/PhpArrayAdapter.php';

        return $container->privates['serializer.mapping.cache.symfony'] = \Symfony\Component\Cache\Adapter\PhpArrayAdapter::create(($container->targetDir.''.'/serialization.php'), ($container->privates['cache.serializer'] ?? $container->getCache_SerializerService()));
    }
}
