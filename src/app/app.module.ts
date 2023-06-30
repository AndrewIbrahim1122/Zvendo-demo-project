import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomButtonComponent } from './reusable-components/custom-button/custom-button.component';
import { CustomInputTextComponent } from './reusable-components/custom-input-text/custom-input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElementsDashboardComponent } from './components/elements-dashboard/elements-dashboard.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    CustomInputTextComponent,
    ElementsDashboardComponent,
    MainScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
