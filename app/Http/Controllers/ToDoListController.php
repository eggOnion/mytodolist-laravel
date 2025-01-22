<?php

namespace App\Http\Controllers;

use App\Models\ToDoList;
use Illuminate\Http\Request;


class ToDoListController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'task' => 'required|string|max:255',
        ]);

        $textInput = ToDoList::create($validated);

        return response()->json([
            'message' => 'Text input saved successfully!',
            'data' => $textInput,
        ], 201);
    }
}

