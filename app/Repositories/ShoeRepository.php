<?php

namespace App\Repositories;

use App\Models\Shoe;

class ShoeRepository extends BaseRepository
{
    protected $shoe;
    public function __construct(Shoe $shoe)
    {
        $this->query = Shoe::query();
        $this->shoe = $shoe;
    }

    public function getAll()
    {
        return $this->query->get();
    }

    public function create($request)
    {
        $dataCreate = $request->all();
        $shoe = new Shoe($dataCreate);
        return response()->json([
            'message' => 'Create successfully'
        ], 201);
            return $shoe->id;
    }

    public function update()
    {
        ///TO DO:  Implement update() method
    }

    public function delete()
    {
        ///TO DO:  Implement delete() method
    }
}
