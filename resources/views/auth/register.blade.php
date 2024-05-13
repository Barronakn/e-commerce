@extends('layouts.auth')
@section('content')
    <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div class="flex flex-col overflow-y-auto md:flex-row">
            <div class="h-32 md:h-auto md:w-1/2">
                <img aria-hidden="true" class="object-cover w-full h-full dark:hidden"
                    src="../assets/img/create-account-office.jpeg" alt="Office" />
                <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block"
                    src="../assets/img/create-account-office-dark.jpeg" alt="Office" />
            </div>
            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div class="w-full">
                    <!-- Validation Errors -->
                    <x-auth-validation-errors class="mb-4" :errors="$errors" />

                    <h2 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                        Créer un compte
                    </h2>
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <label class="block text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Name</span>
                            <input required
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-white focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Jane Doe" type="text" id="name" name="name"
                                value="{{ old('name') }}" Required autofocus />
                        </label>
                        <label class="block mt-4 text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Email</span>
                            <input required type="email" name="admin_email" id="admin_email" value="{{ old('admin_email') }}"
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-white focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Jane@test.com" Required />
                        </label>


                        <label class="block text-sm">
                            <span class="text-gray-700 dark:text-gray-400">rôle</span>
                            <input required
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-white focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="admin" type="text" name="role" value="admin" Required />
                        </label>

                        <label class="block mt-4 text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Password</span>
                            <input required name="password"
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-white focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="***************" type="password" Required />
                        </label>
                        <label class="block mt-4 text-sm">
                            <span class="text-gray-700 dark:text-gray-400">
                                Confirm password
                            </span>
                            <input required
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-white focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="***************" type="password" name="password_confirmation" Required />
                        </label>


                        <button
                            class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-black border border-transparent rounded-lg active:bg-black hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                            type="submit">
                            Créer un compte
                        </button>

                    </form>

                    <p class="mt-4">
                        <a class="text-sm font-medium text-black dark:text-white hover:underline"
                            href="{{ route('login') }}">
                            {{ __("Se connecter") }}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
@endsection
