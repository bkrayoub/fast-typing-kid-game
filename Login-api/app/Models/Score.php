<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Login;

class Score extends Model
{
    use HasFactory;
    protected $table = "scores";
    protected $fillable = [
        'score',
        'userId',
    ];
    public function login() {
        return $this->belongsTo(Login::class, 'userId');
    }
}
