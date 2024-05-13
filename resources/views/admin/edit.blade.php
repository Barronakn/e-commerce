@extends('layouts.admin')
@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Editer CV
        </h2>

        <div class="container">
            <form action="{{ route('admin.cv.update', $product->id) }}" enctype="multipart/form-data" method="POST">
                @csrf
                @method('PUT')
                <div class="mb-4">
                    <label for="typedecv" class="block font-medium dark:text-gray-200">Type du cv:</label>
                    <input required type="text" id="typedecv" value="{{ $product->typedecv }}" name="typedecv"
                        class="border border-gray-400 p-2 w-full" />
                </div>
                <div class="mb-4">
                    <label for="modeles" class="block font-medium dark:text-gray-200">Nom du modèle:</label>
                    <input required type="text" id="modeles" name="modeles" value="{{ $product->modeles }}"
                        class="border border-gray-400 p-2 w-full" />
                </div>
                <div class="mb-4">
                    <label htmlFor="description" class="block font-medium dark:text-gray-200">Couleur:</label><input
                        required type="text" id="couleur" name="couleur" value="{{ $variant->couleur }}"
                        class="border border-gray-400 p-2 w-full" />
                </div>
                <div class="mb-4">
                    <label for="couleurhexa" class="block font-medium  dark:text-gray-200">Couleur hexa :</label>
                    <input required type="text" id="couleurhexa" name="couleurhexa" value="{{ $variant->couleurhexa }}"
                        class="border border-gray-400 p-2 w-full" />
                </div>
                <div class="mb-4 dark:text-gray-200">
                    <label for="about" class="block font-medium">À propos du Modèle</label>
                    <textarea required class="resize-none" name="about" id="about" cols="30" rows="10">{{ $variant->about }}</textarea>
                </div>
                <div class="mb-4 dark:text-gray-200">
                    <label for="foryou" class="block font-medium">Le Modèle de CV pour vous ?</label>
                    <textarea required class="resize-none" name="foryou" id="foryou" cols="30" rows="10">{{ $variant->foryou }}</textarea>

                </div>
                <div class="mb-4 dark:text-gray-200">
                    <label for="oldprice" class="block font-medium">Ancien prix</label>
                    <input required type="text" name="oldprice" value={{ $product->oldprice }}
                        class="border border-gray-400 p-2 w-full" id="oldprice">
                </div>
                <div class="mb-4 dark:text-gray-200">
                    <label for="newprice" class="block font-medium">Nouveau prix:</label>
                    <input required type="text" name="newprice" value={{ $product->newprice }}
                        class="border border-gray-400 p-2 w-full" id="newprice">
                </div>
                <div class="mb-4 dark:text-gray-200">
                    <label for="image" class="block font-medium">Image:</label>
                    <input type="file" id="image" name="image" class="border border-gray-400 p-2 w-full" />
                </div>
                <div class="mb-4 dark:text-gray-200">
                    <label for="image" class="block font-medium">Document à télécharger:</label>
                    <input type="file" id="doc" name="doc" class="border border-gray-400 p-2 w-full" />
                </div>
                <button type="submit"
                    class="bg-black text-white dark:text-black dark:bg-white font-bold py-2 px-4 rounded">Mise à
                    jour</button>

            </form>
        </div>
    </div>
@endsection
