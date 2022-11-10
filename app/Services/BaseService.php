<?php
namespace App\Services;

abstract class BaseService
{
    public abstract function index($request);
    public abstract function create($request);
    public abstract function update($request);
    public abstract function delete($request);
}
?>