import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule {

 //private list: AngularFireList<any>;
  title = '';
  //dataSet = [];
  dataSet: any[] = [];


  constructor(public db: AngularFirestore){
    //this.list = this.db.list('letters');
    const snapshot = db.collection('users').get();
    snapshot.forEach((doc) => {
      console.log(doc.docs);
    })
  }

  createUser(value: any[]){
     //console.log(value[0]);
     this.db.collection('users').doc().set({
       firstname: value[0],
       lastname: value[1],
       age : value[2],
       email : value[3]
     }).then(res => {
       console.log('User submitted successfully!');
     }).catch(err => {
       console.log(err);
     })
  }
 }
