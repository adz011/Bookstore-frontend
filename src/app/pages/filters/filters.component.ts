import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories : string[] | undefined;
  
  categorySubscription : Subscription | undefined;
  
  constructor(private storeService: StoreService){

  }
  onShowCategory(category:any){
    console.log("filter on show category");
    this.showCategory.emit(category);
  }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
      this.categorySubscription= this.storeService.getBooksCategories().subscribe((_categories) =>{
      this.categories = _categories;
    });
  }
}
