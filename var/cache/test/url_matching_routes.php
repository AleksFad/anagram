<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/api/fetch' => [[['_route' => 'fetch', '_controller' => 'App\\Controller\\AnagramController::fetch'], null, null, null, false, false, null]],
        '/api/search' => [[['_route' => 'anagram_result', '_controller' => 'App\\Controller\\SearchController::search'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/([^/]++)?(*:17)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        17 => [
            [['_route' => 'home', 'reactRouting' => null, '_controller' => 'App\\Controller\\AnagramController::index'], ['reactRouting'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
