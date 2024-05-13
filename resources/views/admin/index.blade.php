@extends('layouts.admin')
@section('content')
    <div class="content container mx-auto grid">
        <h2 class="text-center mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Tous les modèles de CV
        </h2>

        <div>
            <section class="cvs mx-auto my-8">
                <div class="container mx-auto">
                    <table class="table-auto w-full border-collapse border">
                        <thead class="dark:text-gray-200">
                            <tr>
                                <th class="border p-3">Image & Doc</th>
                                <th class="border p-3">Type du CV</th>
                                <th class="border p-3">Nom du modèle</th>
                                <th class="border p-3">Couleur</th>
                                <th class="border p-3">Couleur hexa </th>
                                <th class="border p-3">À propos du Modèle</th>
                                <th class="border p-3">Le Modèle de CV pour vous ?</th>
                                <th class="border p-3">Ancien prix</th>
                                <th class="border p-3">Nouveau prix</th>
                                <th class="border p-3">Action</th>
                            </tr>
                        </thead>

                        <tbody class="dark:text-white">
                            @foreach ($products as $product)
                                <tr>
                                    <td class="border p-3 flex justify-center items-center">
                                        <img style="width:100px;"
                                        src={{ $product['variants']['image_path'] }}
                                            alt={{ $product['typedecv'] }} />
                                    </td>
                                    <td class="border p-3 text-center">{{ $product['typedecv'] }}</td>
                                    <td class="border p-3 text-center">{{ $product['modeles'] }}</td>
                                    <td class="border p-3 text-center">
                                        <div class="color">{{ $product['variants']['couleur'] }}</div>
                                    </td>
                                    <td class="border p-3 text-center">
                                        <div class="hexa">{{ $product['variants']['couleurhexa'] }}</div>
                                    </td>
                                    <td class="border text-center">
                                        <div class="text">{!! $product['variants']['about'] !!}</div>
                                    </td>
                                    <td class="border text-center">
                                        <div class="text">{!! $product['variants']['foryou'] !!}</div>
                                    </td>
                                    <td class="border text-center">
                                        <div class="price">{{ $product['newprice'] }}</div>
                                    </td>
                                    <td class="border text-center">
                                        <div class="price">{{ $product['oldprice'] }}</div>
                                    </td>
                                    <td class="border p-3">
                                        <div class="flex justify-center items-center">
                                            <a href="cv/admin/show/{{ $product['id'] }}" style="color: green"
                                                class="mr-2">View</a>
                                            <a href="cv/admin/edit/{{ $product['id'] }}" style="color: blue"
                                                class="mr-2">Edit</a>
                                            <form action="cv/admin/delete/{{ $product['id'] }}" style="color: red"
                                                method="POST" class="block">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class=""
                                                    onclick="return confirm('Voulez-vous vraiment supprimer ce cv ?')">Delete</button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

    </div>
@endsection
