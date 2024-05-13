<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cv extends Model
{
    use HasFactory;

    protected $fillable = ['typedecv', 'modeles', 'newprice', 'oldprice'];

    public function variants(): HasMany {
        return $this->hasMany(Variant::class);
    }

    public function users(): HasMany {
        return $this->hasMany(Avis::class);
    }

}
