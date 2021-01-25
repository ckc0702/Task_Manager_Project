import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-manager',
  templateUrl: './error-manager.component.html',
  styleUrls: ['./error-manager.component.css']
})
export class ErrorManagerComponent implements OnInit {

  errorMessage = 'An Error Occur! Contact Support***';

  constructor() { }

  ngOnInit(): void {
  }

}
