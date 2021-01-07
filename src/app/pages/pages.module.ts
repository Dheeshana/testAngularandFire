import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestformComponent } from './testform/testform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    TestformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

   //material modules
   MatInputModule,
   MatButtonModule
  ],
  exports: [
    TestformComponent
  ]
})
export class PagesModule { }
