import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  formCadastro = new FormGroup({
    nome: new FormControl(''),
    data: new FormControl(''),
    prioridade: new FormControl(''),
    categoriaId: new FormControl(''),
  });


  cadastrarTarefa() {
    console.log(this.formCadastro.value);
  }
}


