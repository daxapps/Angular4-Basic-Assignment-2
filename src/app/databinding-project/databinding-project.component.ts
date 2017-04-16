import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-project',
  templateUrl: './databinding-project.component.html',
  styleUrls: ['./databinding-project.component.css']
})
export class DatabindingProjectComponent implements OnInit {
	username = "";

  constructor() { }

  ngOnInit() {
  }

  // onClearBtn() {
  // 	this.username = "";
  // }

  onUpdateUsername(event: any) {
  	this.username = (<HTMLInputElement>event.target).value;
  }

}
