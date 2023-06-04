import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathDisplayComponent } from './math-display/math-display.component';
import { HttpClientModule } from '@angular/common/http';
import { WatermarkComponent } from './watermark/watermark.component';


@NgModule({
  declarations: [
    AppComponent,
    MathDisplayComponent,
    WatermarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
