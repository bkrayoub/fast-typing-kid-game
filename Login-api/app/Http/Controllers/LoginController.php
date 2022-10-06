<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        $credentials = array(
            'userName' => $request->get('userName'),
            'password' => $request->get('password')
        );

        if (Auth::attempt($credentials)) 
        {
            $request->session()->regenerate();
        }
        
    }
}
