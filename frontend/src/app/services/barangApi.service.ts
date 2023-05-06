import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Barang } from '../models/barang';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBarangApi {

  private baseurl = "http://localhost:8000/api/inventory/";
  constructor(private http : HttpClient) { 
    
  }

  getAllInventory(){
    return this.http.get<any>(`${this.baseurl}`);
  }

  addProduct(inventoryObj:any){
    return this.http.post<any>(`${this.baseurl}`, inventoryObj)
  }

  getInventory(id: string): Observable<Barang> {
    return this.http.get<Barang>(`${this.baseurl}`+ id);
  }

  updateBarang(id: number, barang: Barang): Observable<Barang>{
    return this.http.put<Barang>(`${this.baseurl}`+ id, barang);
  }
  
  deleteBarang(id: number): Observable<Barang> {
    return this.http.delete<Barang>(`${this.baseurl}`+ id);
  }

}