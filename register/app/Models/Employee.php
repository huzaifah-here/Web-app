<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
class Employee extends Model
{   
    use Notifiable;

    //public $timestamps = false;
    protected $fillable = ['name', 'email', 'password', 'age','gender','number','hobbies'];
    protected $cast = [
        'hobbies' => 'array'
    ];
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
}
 