import { Component, OnInit } from '@angular/core';
import {TableEntity} from '../../model/tableEntity';
// import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  file: any;
  fileString;
  listDepartment: TableEntity[] = [];
  listProvince: TableEntity[] = [];
  listDistrict: TableEntity[] = [];
  ourFile: string;

  listDepartmentM: TableEntity[] = []

  testArray: string[] = []
  
  dataSentToChild: String[];

  constructor() { }

  ngOnInit() {
    //this.generateDataSentToChild();
  }

  fileChanged(e) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file);
  }

  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      this.fileString = fileReader.result;
      let toArray = this.fileString.split("\"");
      toArray.forEach(obj => {
        if (obj.length > 3) {
          let lineArray = obj.split("/");
          if (lineArray[1].length < 3 && lineArray[2].length < 3) {
            let fil: TableEntity = new TableEntity();
            fil.code = lineArray[0].match(/\d+/g).map(Number)[0];
            fil.name = lineArray[0].replace(lineArray[0].match(/\d+/g).map(Number)[0],"").replace("0","");
            fil.codeParent = "-";
            fil.descriptionParent = "-";
            this.listDepartment.push(fil);
          } else if (lineArray[1].length > 3 && lineArray[2].length < 3) {
            let fil: TableEntity = new TableEntity();
            fil.code = lineArray[1].match(/\d+/g).map(Number)[0];
            fil.name = lineArray[1].replace(lineArray[1].match(/\d+/g).map(Number)[0],"");
            fil.codeParent = lineArray[0].match(/\d+/g).map(Number)[0];
            fil.descriptionParent = lineArray[0].replace(lineArray[0].match(/\d+/g).map(Number)[0],"");
            this.listProvince.push(fil);
          } else {
            let fil: TableEntity = new TableEntity();
            fil.code = lineArray[2].match(/\d+/g).map(Number)[0];
            fil.name = lineArray[2].replace(lineArray[2].match(/\d+/g).map(Number)[0],"");
            fil.codeParent = lineArray[1].match(/\d+/g).map(Number)[0];
            fil.descriptionParent = lineArray[1].replace(lineArray[1].match(/\d+/g).map(Number)[0],"");
            this.listDistrict.push(fil);
          }
        }
      });

      console.log(this.listDepartment);
      console.log(this.listProvince);
      console.log(this.listDistrict);
      console.log(this.listDepartment.length);
    }
    fileReader.readAsText(this.file);
  }

  assingMachetazo(){
    this.listDepartmentM = this.listDepartment
  }

}
