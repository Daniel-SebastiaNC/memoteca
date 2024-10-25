import { Component } from '@angular/core';
import { Think } from '../thinking';
import { ThinkService } from '../think.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-think',
  templateUrl: './create-think.component.html',
  styleUrl: './create-think.component.css'
})
export class CreateThinkComponent {
  thinking: Think = {

    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: ThinkService,
    private router: Router
  ) {}

  criarPensamento() {
    this.service.create(this.thinking).subscribe(() => {
      this.router.navigate(['/mural'])
    })
  }
  cancelar() {
    this.router.navigate(['/mural'])
  }

}
