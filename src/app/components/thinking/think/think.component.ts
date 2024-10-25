import { Component, Input } from '@angular/core';
import { Think } from '../thinking';

@Component({
  selector: 'app-think',
  templateUrl: './think.component.html',
  styleUrl: './think.component.css'
})
export class ThinkComponent {
  @Input() think: Think = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  largeThinking() : string {
    if(this.think.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
