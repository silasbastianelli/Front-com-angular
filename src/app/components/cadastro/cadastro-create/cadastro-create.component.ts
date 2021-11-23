import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroModel } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: CadastroModel ={
    usuario: '',
    senha: ' '
  }

   constructor(private cadastroService: CadastroService, private router: Router ) { }

  ngOnInit(): void {
  }
 

}
