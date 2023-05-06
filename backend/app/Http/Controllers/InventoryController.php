<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $inventory = Inventory::all()->toArray();

        return $inventory;
        
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $inventory = Inventory::create([
            'merk' => $request->merk,
            'jenis' => $request->jenis,
            'jumlah' => $request->jumlah,
            'harga' => $request->harga,
            'keterangan' => $request->keterangan
        ]);
        return $inventory;
    }

    /**
     * Display the specified resource.
     */
    public function show(Inventory $inventory)
    {
        return $inventory;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Inventory $inventory)
    {
        $inventory->merk = $request->merk;
        $inventory->jenis =  $request->jenis;
        $inventory->jumlah = $request->jumlah;
        $inventory->harga = $request->harga;
        $inventory->keterangan = $request->keterangan;
        $inventory->save();
        
        return $inventory;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Inventory $inventory)
    {
        $inventory->delete();
        return response()->json([
            'message' => 'Inventory Dihapus'
        ],  204);
    }
}
