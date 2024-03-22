import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Supplier } from '../interfaces/data.interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent implements OnInit {
  currentSuppliers: Supplier[] = [];
  suppliers: Supplier[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((suppliers) => {
      this.suppliers = suppliers;
      this.setCurrentSupliers();
      this.totalPages = Array(Math.ceil(this.suppliers.length / this.pageSize))
        .fill(0)
        .map((_, i) => i);
    });
  }

  setCurrentSupliers() {
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    this.currentSuppliers = this.suppliers.slice(startIndex, endIndex);
  }

  nextPage() {
    this.currentPage++;
    this.setCurrentSupliers();
  }

  editSupplier() {}

  deleteSupplier() {}

  previousPage() {
    this.currentPage--;
    this.setCurrentSupliers();
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.setCurrentSupliers();
  }
}
