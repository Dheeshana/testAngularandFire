import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServicesModule } from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material module imports
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ServicesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    //material modules
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
