<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisteredAdminController extends Controller
{
            /**
     * Display the registration view.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\redirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'admin_email' => ['Required', 'string', 'email', 'max:255', 'unique:users'],
            'role' => ['Required'],
            'password' => ['Required', 'confirmed'],
        ]);

        $user = Users::create([
            'admin_email' => $request->admin_email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        auth()->login($user);

        return redirect("/admin/login");
    }
}
