
//Modelo
import { Produto } from './produto.model';
import { Component, OnInit } from '@angular/core';

//Provider
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html'
})

export class ProdutoComponent implements OnInit {

  produtos: Produto[]

  constructor(private _produtoService: ProdutoService) { }

  ngOnInit() {
    this._produtoService.listar()
    .subscribe(dados => this.produtos = dados)
  }

}
