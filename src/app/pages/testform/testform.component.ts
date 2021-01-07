import { Component, OnInit } from '@angular/core';
import { ServicesModule } from 'src/app/services/services.module';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.css']
})
export class TestformComponent implements OnInit {

  fname ='';
  lname ='';
  age = '';
  email = '';

  dataSet: any[] = [];
   
  constructor(public firebaseService : ServicesModule) { 

  }

  onSubmit(firstname:string, lastname: string, age: number, email: any){
    this.dataSet.push(firstname);
    this.dataSet.push(lastname);
    this.dataSet.push(age);
    this.dataSet.push(email);
    
    console.log(this.dataSet[0] + " " + this.dataSet[1] + " and age : " + this.dataSet[2] + " email address : " +this.dataSet[3]);
    this.firebaseService.createUser(this.dataSet);

    this.fname= '';
    this.lname = '';
    this.age = '';
    this.email = '';
  }

  ngOnInit(): void {
  }

}
