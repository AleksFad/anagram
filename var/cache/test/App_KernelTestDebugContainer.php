<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerXvex7Ug\App_KernelTestDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerXvex7Ug/App_KernelTestDebugContainer.php') {
    touch(__DIR__.'/ContainerXvex7Ug.legacy');

    return;
}

if (!\class_exists(App_KernelTestDebugContainer::class, false)) {
    \class_alias(\ContainerXvex7Ug\App_KernelTestDebugContainer::class, App_KernelTestDebugContainer::class, false);
}

return new \ContainerXvex7Ug\App_KernelTestDebugContainer([
    'container.build_hash' => 'Xvex7Ug',
    'container.build_id' => '1985d4c0',
    'container.build_time' => 1597942814,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerXvex7Ug');
