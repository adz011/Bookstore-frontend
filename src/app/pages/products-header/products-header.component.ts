import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'descending';
  itemsShowCount = 12;

  onSortUpdated(sort: string): void{
    this.sort = sort;
  }

  onItemsUpdated(count : number):void{
    this.itemsShowCount = count;
  }

  onColumnsUpdated(colsNum:number) : void{
    this.columnsCountChange.emit(colsNum);
  }
}
