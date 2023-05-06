import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';
import *as XLSX from 'xlsx';
import { Barang } from 'src/app/models/barang';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-inventory',
  templateUrl: './all-inventory.component.html',
  styleUrls: ['./all-inventory.component.css']
})

export class AllInventoryComponent implements OnInit {
  listBarang: any[] = [];

  barang: any;
  searchText!: string;
  fileName='Inventory.xlsx';

  constructor(
    private api : ServiceBarangApi,
    private toast : NgToastService,
    private router : Router
    ) {
    }

    ngOnInit() {
    this.api.getAllInventory()
    .subscribe(res => {
      this.listBarang = res;
    });
    }

  exportedexcel(): void{
    const element = document.getElementById('product');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element)
  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet');
    XLSX.writeFile(wb, this.fileName);
  }

  deleteInventory(id_barang: number) {
    this.api.deleteBarang(id_barang)
    .subscribe({
      next: () => {
        this.router.navigate(['allinventory']);
        this.toast.success({detail: "BERHASIL", summary:"Barang berhasil dihapus", duration: 5000});
      },
      error:()=> {
        this.toast.error({detail: "Error", summary:"Gagal menghapus", duration: 5000});
      }
    })
  }
  
  key ='id_barang';
  reverse=false;
  sort(key:string){
    this.key=key;
    this.reverse=!this.reverse;
  }
}