<?php

namespace App\Http\Controllers;

use App\Models\ToDoList;
use App\Models\User;

class DataController extends Controller
{
    public function fetchAllData()
    {        
        $tasks = ToDoList::all();
        $users = User::all();
        
        return response()->json([
            'tasks' => $tasks,
            'users' => $users,
        ]);
    }
}
