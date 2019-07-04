import { Component, OnInit } from '@angular/core';
// import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  file: any;
  fileString;

  fileChanged(e) {
    this.file = e.target.files[0];    
    this.uploadDocument(this.file);
  }

  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      this.fileString = fileReader.result;
      let list1: Object[] = [];
      let list2: Object[] = [];
      let list3: Object[] = [];
      let toArray = this.fileString.split("\"");
      toArray.forEach(obj => {
        if (obj.length > 3) {
          let lineArray = obj.split("/");
          if (lineArray[1].length < 3 && lineArray[2].length < 3) {
            list1.push(lineArray[0]);
            console.log(lineArray[0].match(/\d+/g).map(Number));
          } else if (lineArray[1].length > 3 && lineArray[2].length < 3) {
            let fil: Object[] = [];
            fil[0] = lineArray[1];
            fil[1] = lineArray[0];
            list2.push(fil);
          } else {
            let fil: Object[] = [];
            fil[0] = lineArray[2];
            fil[1] = lineArray[1];
            list3.push(fil);
          }
        }        
      });

      console.log(list1);
      console.log(list2);
      console.log(list3);
    }
    fileReader.readAsText(this.file);
  }

  constructor() { }

  ngOnInit() {
  }

}
