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
    public function user() {
        return $this->belongsTo(User::class, 'userId');
    }
}
