import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroModel } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css']
})
export class CadastroUpdateComponent implements OnInit {

  cadastro: CadastroModel;

  constructor(private cadastroService: CadastroService, 
              private router: Router, 
              private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.cadastroService.readById(id).subscribe(cadastro => {
      this.cadastro = cadastro
    }/*error => {
      console.log("mensagem de erro");

    }*/
    );
  }

  updateCadastro(): void{
     this.cadastroService.updateCadastro(this.cadastro).subscribe(() => {
       this.cadastroService.showMessege('O usuário foi atualizado');
       //this.router.navigate(["/cadastro/tabela"]);
       this.tabelasCadastro();
     });
  }

  cancelarCadastro(): void{
    this.router.navigate(['/cadastro'])

  }
  
  tabelasCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])

  }

}
