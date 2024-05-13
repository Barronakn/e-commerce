<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\Avis;
use App\Models\CartItem;
use App\Models\Cv;
use App\Models\Variant;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function showCv($id)
    {
        $product = Cv::findOrFail($id);
        $variant = Variant::findOrFail($id);

        $cvs = Cv::all();
        $variants = Variant::all();

        $products = [];
        foreach ($cvs as $key => $cvItem) {
            $products[$key] = array_merge(
                $cvItem->toArray(), // Extrait attributes du model CV
                [
                    'variants' => isset($variants[$key]) ? $variants[$key]->toArray() : [], // Ajout de l'array variant s'il existe
                ]
            );
        }
        $testimonials = Avis::all();
        $product = Cv::findOrFail($id);

        $items = CartItem::all();
        return Inertia::render('Details', [
            'product' => $product,
            'variant' => $variant,
            'products' => $products,
            'testimonials' => $testimonials,
            'items' => $items
        ]);
    }
}
