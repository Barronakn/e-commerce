<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('avis', function (Blueprint $table) {
            $table->id();
            $table->string('cv_modeles');
            $table->string('client_username');
            $table->string('client_profession');
            $table->text('aviscourt');
            $table->text('avislong');
            $table->unsignedTinyInteger('stars');
            $table->timestamps();

            $table->index('cv_modeles');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avis');
    }
};
