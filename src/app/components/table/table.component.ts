import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  @Input() displayedColumns: any[]=[];
  @Input('data') data :MyDataSource;
  dataSubject = new BehaviorSubject<any[]>([]);
  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = this.data;
  constructor() { }
  ngOnInit() {
    // this.dataSource =  new MyDataSource(this.dataSubject);
    // this.apiService.getData(this.path).subscribe({
    //   next: value => this.dataSubject.next([value])
    // });
  }

}

export class MyDataSource extends DataSource<any[]> {
  constructor(private subject: BehaviorSubject<any[]>) {
    super ();
  }
  connect (): Observable<any[]> {
    return this.subject.asObservable();
  }
  disconnect (): void {}
}
