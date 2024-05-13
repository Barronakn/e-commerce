<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $table = 'cart_items';

    protected $fillable = [
        'cv_id',
        'variant_id',
    ];

    public function cv()
    {
        return $this->belongsTo(Cv::class);
    }

    public function variant()
    {
        return $this->belongsTo(Variant::class);
    }
}
