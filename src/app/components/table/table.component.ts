import { Component, OnInit, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TableEntity } from '../../model/tableEntity';

/*
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
*/
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  _dataSource: TableEntity[];

  _testArray: string[];

  @Input() set dataSource(dataSource: TableEntity[]) {
    this._dataSource = dataSource;
    console.log('Set', this._dataSource)
  }
  get dataSource(): TableEntity[] {
    console.log('Get', this._dataSource)
    return this._dataSource;
  }

  @Input() set testArray(testArray: string[]){
    console.log(this.testArray)
    this._testArray = testArray;
  }
  get testArray(): string[]{
    return this._testArray;
  }

  // @Input() dataRecieved: TableEntity[];

  displayedColumns: string[] = ['Codigo', 'Nombre', 'CodPadre', 'DescPadre'];
  //console.log(dataRecieved);
}
/*
export class TableComponent implements OnInit {

  constructor() { }

  @Input() dataRecievedFromDada: [];

  ngOnInit() {
    console.log(this.dataRecievedFromDada)
  }



}*/
