import { Component, OnInit,Pipe, PipeTransform, Input, Output, EventEmitter } from '@angular/core';

@Pipe({
    name: 'filter'
  })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
   
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
          return it.task.toLowerCase().includes(searchText);
        });
   }
}

@Component({
  selector: 'filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  @Output() changed = new EventEmitter<string>()
  searchText : string;
  constructor() { }

  ngOnInit() {

  }

  addSearchText() {
    this.changed.emit(this.searchText)
  }

  

}
