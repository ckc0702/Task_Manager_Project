import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  message = 'Hi';
  name = '';
  welcomeMessageFromService : String | undefined; 
  errorMessage : String | undefined;

  constructor(private route:ActivatedRoute, 
    private service : WelcomeDataService
    ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage(){
    this.service.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorMsg(error)
    );
  }



  handleSuccessfulResponse(response: HelloWorldBean){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorMsg(error: { error: { message: String | undefined; }; }){
    console.log("",error);
    console.log("",error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}
