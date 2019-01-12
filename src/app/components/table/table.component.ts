import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  @Input() displayedColumns: any[]=[];
  @Input('data') data :any;
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = this.data;
  constructor() { }
  ngOnInit() {
  }

}
