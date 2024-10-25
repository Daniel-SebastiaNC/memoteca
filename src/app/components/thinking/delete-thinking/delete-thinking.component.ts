import { Component, OnInit } from '@angular/core';
import { ThinkService } from '../think.service';
import { Think } from '../thinking';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thinking',
  templateUrl: './delete-thinking.component.html',
  styleUrl: './delete-thinking.component.css'
})
export class DeleteThinkingComponent implements OnInit {

  think: Think = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service : ThinkService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((think) => {
        this.think = think
    })
  }

  excluirPensamento() {
    if(this.think.id) {
        this.service.excluir(this.think.id).subscribe(() => {
            this.router.navigate(['/mural'])
        })
    }
  }

  cancelar() {
    this.router.navigate(['/mural'])
  }

}
