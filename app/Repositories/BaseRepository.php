<?php
namespace App\Repositories;
abstract class BaseRepository
{
    public abstract function getAll();
    public abstract function create($request);
    public abstract function update();
    public abstract function delete();
}
?>