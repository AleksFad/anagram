<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    'home' => [['reactRouting'], ['reactRouting' => null, '_controller' => 'App\\Controller\\AnagramController::index'], [], [['variable', '/', '[^/]++', 'reactRouting', true]], [], []],
    'fetch' => [[], ['_controller' => 'App\\Controller\\AnagramController::fetch'], [], [['text', '/api/fetch']], [], []],
    'anagram_result' => [[], ['_controller' => 'App\\Controller\\SearchController::search'], [], [['text', '/api/search']], [], []],
];
