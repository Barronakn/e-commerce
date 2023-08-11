<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{

    public function indexUser()
    {
        $products = Products::all();
        return Inertia::render('Users/Shops', [
            'products' => $products,
        ]);
    }

    public function showUser($id)
    {
        $product = Products::findOrFail($id);
        return Inertia::render('Users/Shop', compact('product'));
    }

    public function index()
    {
        $products = Products::all();
        return view("admin.index", [
            "products" => $products
        ]);
    }


    public function show($id)
    {
        $product = Products::findOrFail($id);
        return view("admin.view", compact('product'));
    }

    public function create()
    {
        return view("admin.create");
    }

    public function store(Request $request)
    {

        $data = $request->only([
            'name',
            'description',
            'price',
        ]);


        if($request->hasFile("image")){
            $imagePath = $request->file("image");

            $imageName = $imagePath->getClientOriginalName();

            $imagePath->storeAs("images/products/", $imageName, "public");

            $data["image_path"] = asset("images/products/" . $imageName);
        }

        Products::create($data);

        return redirect()->route("admin.home")->with('flash_message', 'Produit ajouté !');

    }

    public function update(Request $request, $id)
    {

        $product = Products::find($id);

        if(!$product) {
            return redirect()->route("admin.home")->with('flash_message', 'Produit modifié !');
        }

        $input = $request->all();
        $product->update($input);
        return redirect()->route("admin.home")->with('flash_message', 'Produit modifié !');
    }


    public function edit($id)
    {
        $product = Products::findOrFail($id);
        return view("admin.edit", compact('product'));
    }

    public function destroy($id)
    {
        Products::destroy($id);
        return redirect()->route("admin.home")->with('success', 'Product deleted successfully');
    }
}
