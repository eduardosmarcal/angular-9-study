import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator';
import { TasksModule } from './tasks';
import { TicTacToeModule } from './tic-tac-toe';
import { ConverterModule } from './converter';
import { DashboardModule } from './dashboard';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CalculatorModule,
    TasksModule,
    TicTacToeModule,
    ConverterModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
