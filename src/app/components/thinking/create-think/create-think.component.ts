import { Component } from '@angular/core';
import { Think } from '../thinking';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrl: './create-think.component.css'
})
export class CreateThinkComponent {
  thinking: Think = {
    id: 1,
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
