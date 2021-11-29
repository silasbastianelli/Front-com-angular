import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CadastroModel } from './cadastro.model';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3001/login";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { 
  }
  showMessege(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration:6000,
      verticalPosition: "top",
      panelClass: isError ? ['errorMsg'] : ['successMsg'] //if ternário
    });
  }

  create(cadastro: CadastroModel): Observable<CadastroModel>{
    return this.http.post<CadastroModel>(this.baseUrl, cadastro).pipe(
      map((obj) => obj),
      catchError(e => this.errorMsg(e))
    )
  }

  errorMsg(e: any): Observable<any>{
    console.log(e);
    this.showMessege('Deu Erro!!', true);
    return EMPTY
  }

  // nao precisa pois 
  /*
  successMsg(e: any): Observable<any>{
    console.log(e);
    this.showMessege('Deu certo maroto!', false);
    return EMPTY
  }*/

  read(): Observable<CadastroModel[]>{
    return this.http.get<CadastroModel[]>(this.baseUrl);
  }

  readById(id: number): Observable<CadastroModel>{
    //const url ='${this.baseUrl}/${id}';
    const url = this.baseUrl + "/" + id;
    return this.http.get<CadastroModel>(url);
  }

  updateCadastro(cadastro: CadastroModel): Observable<CadastroModel>{
    const url = `${this.baseUrl}/${cadastro.id}`; // tem que ser crase
    //const url = this.baseUrl + "/" + cadastro.id;
    alert("Tentou Atualizar?"); // teste >> chamou
    return this.http.put<CadastroModel>(url, cadastro);


  }

  deleteCadastro(id: number): Observable<CadastroModel>{

    alert("Tentou deletar?");// teste>>  NÃO chamou

    //const url = '${this.baseUrl}/${id}'; 
    const url = this.baseUrl + "/" + id; 
    return this.http.delete<CadastroModel>(url);
  }

}
