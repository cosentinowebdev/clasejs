<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0774c4e35f48cf0f8ad8d63e80f0a31c
{
    public static $prefixLengthsPsr4 = array (
        'b' => 
        array (
            'base\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'base\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0774c4e35f48cf0f8ad8d63e80f0a31c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0774c4e35f48cf0f8ad8d63e80f0a31c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit0774c4e35f48cf0f8ad8d63e80f0a31c::$classMap;

        }, null, ClassLoader::class);
    }
}
