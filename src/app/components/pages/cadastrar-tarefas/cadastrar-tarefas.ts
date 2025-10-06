import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefas',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './cadastrar-tarefas.html',
  styleUrl: './cadastrar-tarefas.css'
})
export class CadastrarTarefas {

    private http = inject(HttpClient);

    ngOnInit() {
      this.http.get('http://localhost:8081/api/v1/categorias')
        .subscribe((response) => {
          console.table(response);
        });
  }


  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    data: new FormControl('', [Validators.required]), 
    prioridade: new FormControl('', [Validators.required]), 
    categoriaId: new FormControl('', [Validators.required]), 
  });





  cadastrarTarefa() {
    console.log(this.formCadastro.value);
  }
}


