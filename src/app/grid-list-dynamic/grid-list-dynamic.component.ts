import {Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'app-grid-list-dynamic',
  templateUrl: 'grid-list-dynamic.component.html',
  styleUrls: ['./grid-list-dynamic.component.css']
})
export class GridListDynamicComponent {
  tiles: Tile[] = [
    {text: 'Biografies', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Hisotry', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 2, color: '#DDBDF1'},
  ];
}