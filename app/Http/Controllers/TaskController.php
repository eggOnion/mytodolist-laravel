<?php

namespace App\Http\Controllers;

use App\Models\ToDoList;
use Illuminate\Http\Request;

class TaskController extends Controller
{   
    public function update(Request $request, ToDoList $task)
    {
        $request->validate([
            'task' => 'required|string|max:255',
        ]);

        $task->task = $request->task;
        $task->save();

        return response()->json($task);
    }
   
    public function destroy(ToDoList $task)
    {
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}
