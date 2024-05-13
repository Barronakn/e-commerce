<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Avis extends Model
{
    use HasFactory;

    protected $fillable = [
        'cv_modeles',
        'client_username',
        'client_profession',
        'avislong',
        'aviscourt',
        'stars'
    ];
}
