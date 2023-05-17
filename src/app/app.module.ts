// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULOS PERSONALES
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

// APP
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [GifsModule, SharedModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
