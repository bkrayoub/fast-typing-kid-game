<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Login;

class ScoreController extends Controller
{
    //
    function index()  {

        $userId = Auth::id();
        $get = Score::where('userId', $userId)->get();
            return $get ;
    }
}
