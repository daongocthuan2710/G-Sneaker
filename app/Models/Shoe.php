<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shoe extends Model
{
    protected $filltable = [
        "id",
        "image",
        "name",
        "description",
        "price",
        "color"
    ];
    public $timestamps =false;
    protected $table = 'shoe';
    use HasFactory;
}
