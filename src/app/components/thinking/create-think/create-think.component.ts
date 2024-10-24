import { Component } from '@angular/core';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrl: './create-think.component.css'
})
export class CreateThinkComponent {
  thinking = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }
  cancelar() {

  }

}
