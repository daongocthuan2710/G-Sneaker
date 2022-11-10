<?php
namespace App\Services;

use App\Repositories\ShoeRepository;

class ShoeService extends BaseService
{
    private ShoeRepository $_ShoeRepository;

    public function __construct(ShoeRepository $ShoeRepository){
        $this->_ShoeRepository = $ShoeRepository;
    }

    public function index($request){
        return $this->_ShoeRepository->getAll();
    }
    
    public function create($request)
    {
        return $this->_ShoeRepository->create($request);
    }

    public function update($request){
        //
    }

    public function delete($request){
        //
    }
}

?>