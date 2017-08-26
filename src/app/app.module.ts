import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';

import { HttpModule } from '@angular/http';
import { ProdutoService} from './produto/produto.service'

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ProdutoService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
