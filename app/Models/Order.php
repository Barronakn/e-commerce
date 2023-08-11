<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_number',
        'amount',
    ];

    // Relation avec le modèle User
    public function user()
    {
        return $this->belongsTo(Users::class);
    }

    // Relation avec le modèle Product
    public function products()
    {
        return $this->belongsToMany(Products::class)->withPivot('quantity');
    }
}
