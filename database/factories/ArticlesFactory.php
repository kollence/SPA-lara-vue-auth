<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Model;
use App\Article;
use Faker\Generator as Faker;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'title' => $faker->text(30),
        'body' => $faker->text(150)
    ];
});
