<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shoe', function (Blueprint $table) {
            // $table->integer('id', true, true);
            $table->bigIncrements('id');
            $table->string('image')->nullable();
            $table->longText('name');
            $table->longText('description')->nullable();
            $table->decimal('price', 5, 2, true);
            $table->string('color')->nullable();
            // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shoe');
    }
};
