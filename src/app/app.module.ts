// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// MODULOS PERSONALES
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

// APP
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [GifsModule, SharedModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
