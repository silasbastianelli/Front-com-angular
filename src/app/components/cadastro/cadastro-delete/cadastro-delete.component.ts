import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroModel } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';
 

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {

  cadastro: CadastroModel;

  constructor(private cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cadastroService.readById(id).subscribe((cadastro) => {
      this.cadastro = cadastro;
    })
  }

  deleteCadastro(): void{
    this.cadastroService.deleteCadastro(this.cadastro.id).subscribe(() =>{
      this.cadastroService.showMessege('Cadastro deletado')
      
    });
  }

  cancelarCadastro(): void {
    this.router.navigate([''])
  }

  tabelasCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])

  }

}
