<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('inventoryMobil', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('merk')->nullable();
            $table->string('jenis')->nullable();
            $table->integer('jumlah')->nullable();
            $table->string('harga')->nullable();
            $table->string('keterangan')->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('inventoryMobil');
    }
};
