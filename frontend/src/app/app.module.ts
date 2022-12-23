import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditBuddyComponent } from './components/editbuddy/editbuddy.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditBuddyComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
