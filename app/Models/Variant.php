<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variant extends Model
{
    use HasFactory;

    protected $fillable =['cv_id', 'about', 'foryou', 'couleur', 'couleurhexa', 'image_path', 'doc_path'];
}
