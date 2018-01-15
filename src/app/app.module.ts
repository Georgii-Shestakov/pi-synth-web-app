import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { SelectSynthComponent } from './select-synth/select-synth.component';
import { ZynAddSubFxComponent } from './zyn-add-sub-fx/zyn-add-sub-fx.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectSynthComponent,
    ZynAddSubFxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US"
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
