import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories = ['action', 'historical', 'sci-fi'];

  onShowCategory(category:string){
    this.showCategory.emit(category);
  }
}
