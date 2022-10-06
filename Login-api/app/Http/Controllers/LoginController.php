<?php

namespace App\Http\Controllers;

use App\Models\Login;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    function index()  {

        $get = Login::all();
            return $get ;
    }
    function post(Request $request){
        $user = new Login();

        $user->userName = $request->userName;
        $user->password = $request->password;
        $user->save();
        
    }
}
