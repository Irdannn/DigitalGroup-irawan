import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/models/barang';
import { ServiceBarangApi } from 'src/app/services/barangApi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-viewedit',
  templateUrl:'./viewedit.component.html',
  styleUrls: ['./viewedit.component.css']
})
export class ViewEditComponent implements OnInit {
  barang:Barang  = new Barang();
  public role! : string;

  constructor(
    private api: ServiceBarangApi,
    private route : ActivatedRoute,
    private router : Router,
    private toast : NgToastService
    ) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.api.getInventory(id)
          .subscribe({
            next: (response) => {
              this.barang = response;
            }
          })
        }
      }
    });
  }


  updateInventory(){
    console.log(this.barang);
    this.api.updateBarang(this.barang.id, this.barang)
    .subscribe({
      next: () => {
        this.router.navigate(['allinventory'])
        this.toast.success({detail: "BERHASIL", summary:"Barang berhasil dirubah", duration: 5000});
      },
      error:()=> {
        this.toast.error({detail: "Error", summary:"Gagal update barang", duration: 5000});
      }
    })
  }

  deleteInventory(id: number) {
    this.api.deleteBarang(id)
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
}