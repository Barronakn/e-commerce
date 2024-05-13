@extends('layouts.admin')
@section('content')
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Créer un nouveau modèle
        </h2>
        <form action="{{ route('admin.create') }}" method="POST" enctype="multipart/form-data"
            class="max-w-md overflow-auto text-gray-700">
            @csrf
            <div class="mb-4">
                <label for="typedecv" class="block font-medium dark:text-gray-200">Type du cv:</label>
                <input type="text" id="typedecv" required name="typedecv" class="border border-gray-400 p-2 w-full"  />
            </div>
            <div class="mb-4">
                <label for="modeles" class="block font-medium dark:text-gray-200">Nom du modèle:</label>
                <input type="text" id="modeles" name="modeles" class="border border-gray-400 p-2 w-full"  />
            </div>
            <div class="mb-4">
                <label for="couleur" class="block font-medium  dark:text-gray-200">Couleur:</label>
                <input type="text" id="couleur" name="couleur" class="border border-gray-400 p-2 w-full"  />
            </div>
            <div class="mb-4">
                <label for="couleurhexa" class="block font-medium  dark:text-gray-200">Couleur hexa :</label>
                <input type="text" id="couleurhexa" name="couleurhexa" class="border border-gray-400 p-2 w-full"  />
            </div>
            <div class="mb-4 dark:text-gray-200">
                <label for="about" class="block font-medium">À propos du Modèle</label>
                <textarea class="resize-none border border-gray-400 p-2 w-full" name="about" placeholder="À propos du Modèle" id="about" cols="30" rows="10"></textarea>
            </div>
            <div class="mb-4 dark:text-gray-200">
                <label for="foryou" class="block font-medium">Le Modèle de CV pour vous ?</label>
                <textarea class="resize-none border border-gray-400 p-2 w-full" name="foryou" placeholder="Le Modèle de CV pour vous ?" id="foryou" cols="30" rows="10"></textarea>
            </div>
            <div class="mb-4 dark:text-gray-200">
                <label for="oldprice" class="block font-medium">Ancien prix:</label>
                <input type="text" name="oldprice" class="border border-gray-400 p-2 w-full" id="oldprice">
            </div>
            <div class="mb-4 dark:text-gray-200">
                <label for="newprice" class="block font-medium">Nouveau prix:</label>
                <input type="text" name="newprice" class="border border-gray-400 p-2 w-full" id="newprice">
            </div>
            <div class="mb-4 dark:text-gray-200">
                <label for="image" class="block font-medium">Image:</label>
                <input type="file" id="image" name="image" class="border border-gray-400 p-2 w-full" />
            </div>
            <div class="mb-4 dark:text-gray-200">
                <label for="doc" class="block font-medium">Document à télécharger:</label>
                <input type="file" id="doc" name="doc" class="border border-gray-400 p-2 w-full" />
            </div>
            <button type="submit"
                class="bg-black text-white dark:text-black dark:bg-white font-bold py-2 px-4 mb-5 rounded">Créer</button>
        </form>
    </div>
@endsection
