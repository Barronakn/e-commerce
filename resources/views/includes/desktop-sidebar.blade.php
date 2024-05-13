<!-- Desktop sidebar -->
<aside class="z-20 hidden w-64 overflow-y-auto bg-black dark:bg-white md:block flex-shrink-0">
    <div class="py-4 text-gray-500 dark:text-gray-400">
        <div style="width: 100px; height:100px; display:flex; margin:0 auto;">
            <a class="ml-6 text-lg font-bold text-white dark:text-gray-200" href="{{ route('admin.home') }}">
                <img loading='lazy' className='pointer-events-none max-w-5xl w-48'
                    src="{{ asset('assets/logo.png') }}" alt="Casineuve Actions" />
            </a>
        </div>
        <ul class="mt-6">
            <li class="relative px-6 py-3">
                @if (request()->routeIs('admin.home'))
                    <span class="absolute inset-y-0 left-0 w-1 bg-white rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"></span>
                @endif

                <a class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 hover:text-white dark:hover:text-gray-200 dark:text-gray-100"
                    href="{{ route('admin.home') }}">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                        </path>
                    </svg>
                    <span class="ml-4">Modèles de CV</span>
                </a>
            </li>
        </ul>
        <ul>
            <li class="relative px-6 py-3">
                @if (request()->routeIs('admin.create'))
                <span class="absolute inset-y-0 left-0 w-1 bg-white rounded-tr-lg rounded-br-lg"
                aria-hidden="true"></span>
                @endif
                <a class="inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 hover:text-white dark:hover:text-gray-200 dark:text-gray-100"
                    href="{{ route('admin.create') }}">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                        </path>
                    </svg>
                    <span class="ml-4">Créer un nouveau modèle</span>
                </a>
            </li>
        </ul>
    </div>
</aside>
