import { Component, OnInit } from '@angular/core';

interface Supplier{
  name: string,
  address: string,
  email: string,
  phone: string
}


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent  implements OnInit{




  suppliers: Array<Supplier> = [
    {name: 'Supplier 1', address: 'Adress 1', phone: '0123456789', email: "supplier1@mail.com"},
    {name: 'Supplier 2', address: 'Adress 2', phone: '0123456789', email: "supplier2@mail.com"},
    {name: 'Supplier 3', address: 'Adress 3', phone: '0123456789', email: "supplier3@mail.com"},
    {name: 'Supplier 4', address: 'Adress 4', phone: '0123456789', email: "supplier4@mail.com"},
    {name: 'Supplier 5', address: 'Adress 5', phone: '0123456789', email: "supplier5@mail.com"},
    {name: 'Supplier 6', address: 'Adress 6', phone: '0123456789', email: "supplier6@mail.com"},
    {name: 'Supplier 7', address: 'Adress 7', phone: '0123456789', email: "supplier7@mail.com"},
    {name: 'Supplier 8', address: 'Adress 8', phone: '0123456789', email: "supplier8@mail.com"},
    {name: 'Supplier 9', address: 'Adress 9', phone: '0123456789', email: "supplier9@mail.com"},
    {name: 'Supplier 10', address: 'Adress 10', phone: '0123456789', email: "supplie10@mail.com"},
    {name: 'Supplier 11', address: 'Adress 11', phone: '0123456789', email: "supplier11@mail.com"},
    {name: 'Supplier 12', address: 'Adress 12', phone: '0123456789', email: "supplier12@mail.com"},
    {name: 'Supplier 13', address: 'Adress 13', phone: '0123456789', email: "supplier13@mail.com"},
    {name: 'Supplier 14', address: 'Adress 14', phone: '0123456789', email: "supplier14@mail.com"},
    {name: 'Supplier 15', address: 'Adress 15', phone: '0123456789', email: "supplier15@mail.com"},
    {name: 'Supplier 16', address: 'Adress 16', phone: '0123456789', email: "supplier16@mail.com"},
    {name: 'Supplier 17', address: 'Adress 17', phone: '0123456789', email: "supplier17@mail.com"},
    {name: 'Supplier 18', address: 'Adress 18', phone: '0123456789', email: "supplier18@mail.com"},
    {name: 'Supplier 19', address: 'Adress 19', phone: '0123456789', email: "supplier19@mail.com"},
    {name: 'Supplier 20', address: 'Adress 20', phone: '0123456789', email: "supplier20@mail.com"},
    {name: 'Supplier 21', address: 'Adress 21', phone: '0123456789', email: "supplier21@mail.com"},

  ]

  currentPage: number = 1;
  pageSize: number = 5;
  

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.visiblaeData();
  }

  visiblaeData(){
    let startIndex = (this.currentPage -1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
  
    return this.suppliers.slice(startIndex, endIndex);
    
    
  }
//Pagination
  nextPage(){
    this.currentPage++;
    this.visiblaeData();
  }

  previousPage(){
    this.currentPage--;
    this.visiblaeData();
  }

  pageNumbers(){
    let totalPages = Math.ceil(this.suppliers.length / this.pageSize); //Math.Ceil ogarnia niepodzielne wartosci
    let pageNumArray = new Array(totalPages);
    return pageNumArray;
  }

  changePage(pageNumber:number){
    this.currentPage = pageNumber;
    this.visiblaeData();

  }

}
