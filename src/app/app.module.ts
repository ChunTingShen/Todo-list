import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/store';
// import { signal } from '@angular/core';
import { interval } from 'rxjs';
// import { counterReducer } from './todo.reducer';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot({count: counterReducer}, {}),

  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
