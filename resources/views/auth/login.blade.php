@extends('layouts.auth')
@section('content')
    <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div class="flex flex-col overflow-y-auto md:flex-row">
            <div class="h-32 md:h-auto md:w-1/2">
                <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" src="../assets/img/login-office.jpeg"
                    alt="Office" />
                <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block"
                    src="../assets/img/login-office-dark.jpeg" alt="Office" />
            </div>
            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div class="w-full">
                    <!-- Session Status -->
                    <x-auth-session-status class="mb-4" :status="session('status')" />

                    <!-- Validation Errors -->
                    <x-auth-validation-errors class="mb-4" :errors="$errors" />

                    <h2 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                        Se connecter
                    </h2>
                    <form method="POST" action="{{ route('login_post') }}">
                        @csrf
                        <label class="block text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Email</span>
                            <input
                                required
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-white focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="Jane Doe" type="email" name="admin_email"
                                value="{{ old('admin_email', 'admin@test.com') }}" Required autofocus />
                        </label>
                        <label class="block mt-4 text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Password</span>
                            <input
                                required
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-white focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                placeholder="password" type="password" name="password" Required
                                autocomplete="current-password" />
                        </label>

                        <!-- You should use a button here, as the anchor is only used for the example  -->
                        <button
                            class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-black border border-transparent rounded-lg active:bg-black hover:bg-blue-700 focus:outline-none focus:shadow-outline-purple"
                            type="submit">
                            Se connecter
                        </button>
                    </form>

                    <p class="mt-1">
                        <a class="text-sm font-medium text-black dark:text-white hover:underline"
                            href="{{ route('register') }}">
                            Créer un compte
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
@endsection
