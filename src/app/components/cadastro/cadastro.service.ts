import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { CadastroModel } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3001/login"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { 
  }
  showMessege(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration:6000,
      verticalPosition: "bottom"
    });
  }

  create(cadastro: CadastroModel): Observable<CadastroModel>{
    return this.http.post<CadastroModel>(this.baseUrl, cadastro)
  }

  read(): Observable<CadastroModel[]>{
    return this.http.get<CadastroModel[]>(this.baseUrl)
  }

  readById(id:number): Observable<CadastroModel>{
    const url ='${this.baseUrl}/${id}'
    return this.http.get<CadastroModel>(url)
  }

}
