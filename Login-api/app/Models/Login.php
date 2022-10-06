<?php

namespace App\Models;
use App\Models\Score;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    protected $table = "Logins";
    protected $fillable = [
        'userName',
        'password',
    ];
    public  $timestamps = false;
    public function scores() {
        return $this->hasMany(Score::class);
    }
}
