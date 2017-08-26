import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class ProdutoService {
  constructor(private _http: Http) { }

  listar(){
    return this._http.get('http://localhost:3000/produtos').map(x => x.json())
  }

}
