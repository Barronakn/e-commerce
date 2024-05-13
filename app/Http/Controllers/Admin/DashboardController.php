<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Cv;
use App\Models\Variant;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $cvs = Cv::all();
        $variants = Variant::all();

        // Combine CV et variant data dans un seul array products
        $products = [];
        foreach ($cvs as $key => $cvItem) {
            $products[$key] = array_merge(
                $cvItem->toArray(), // Extrait attributes du model CV
                [
                    'variants' => isset($variants[$key]) ? $variants[$key]->toArray() : [], // Ajout de l'array variant s'il existe
                ]
            );
        }

        return view("admin.index", [
            "products" => $products
        ]);
    }


    public function show($id)
    {
        $product = Cv::findOrFail($id);
        $variant = Variant::findOrFail($id);


        return view("admin.view", compact('product', 'variant'));
    }

    public function create()
    {
        return view("admin.create");
    }

    public function store(Request $request)
    {
        $data = $request->only(['typedecv', 'modeles', 'couleur', 'couleurhexa', 'about', 'foryou', 'newprice', 'oldprice']);

        $request->validate([
            'doc' => 'required|mimes:zip'
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file("image");

            $imageName = $imagePath->getClientOriginalName();

            $imagePath->storeAs("public/images/cv/", $imageName);

            $data["image_path"] = "storage/images/cv/" . $imageName;
        }


        if ($request->hasFile('doc') && $request->file('doc')->isValid()) {
            $docPath = $request->file("doc");

            $docName = $docPath->getClientOriginalName();

            $docPath->storeAs("public/docs/cv/", $docName);

            $data["doc_path"] = "storage/docs/cv/" . $docName;
        }

        Cv::create($data);
        Variant::create($data);

        return redirect()->route("admin.home")->with('flash_message', 'Cv ajouté !');
    }


    public function edit($id)
    {
        $product = Cv::findOrFail($id);
        $variant = Variant::findOrFail($id);
        return view("admin.edit", compact('product', 'variant'));
    }

    public function update(Request $request, $id)
    {

        $product = Cv::findOrFail($id);
        $variant = Variant::findOrFail($id);

        if (!$product and !$variant) {
            return redirect()->route("admin.home")->with('flash_message', 'Cv modifié !');
        }


        if ($request->hasFile('image')) {
            $imagePath = $request->file("image");

            $imageName = $imagePath->getClientOriginalName();

            $imagePath->move("public/images/cv/", $imageName);

            $variant->image_path = "public/images/cv/".$imageName;

        }


        if ($request->hasFile('doc')) {
            $docPath = $request->file("doc");

            $docName = $docPath->getClientOriginalName();

            $docPath->move("public/docs/cv/", $docName);

            $variant->doc_path = "public/docs/cv/".$docName;

        }

        $input = $request->all();
        $product->update($input);
        $variant->update($input);

        return redirect()->route("admin.home")->with('flash_message', 'Cv modifié !');
    }


    public function destroy($id)
    {
        Cv::destroy($id);
        Variant::destroy($id);
        return redirect()->route("admin.home")->with('success', 'Produit supprimé');
    }
}
