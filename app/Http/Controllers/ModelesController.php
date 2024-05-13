<?php

namespace App\Http\Controllers;

use App\Models\CartItem;
use App\Models\Cv;
use App\Models\Variant;
use Inertia\Inertia;

class ModelesController extends Controller
{
    public function index()
    {

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

        $items = CartItem::all();
        return Inertia::render("AllModeles", [
            'products' => $products,
            'items' => $items
        ]);
    }
}
