import { Component, OnInit } from '@angular/core';
import { Think } from '../thinking';
import { ThinkService } from '../think.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-think',
  templateUrl: './edit-think.component.html',
  styleUrl: './edit-think.component.css'
})
export class EditThinkComponent implements OnInit {

  thinking: Think = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: ThinkService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  editarPensamento() {
    this.service.editar(this.thinking).subscribe(() => {
        this.router.navigate(['/mural'])
    })
  }

  cancelar() {
    this.router.navigate(['/mural'])
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((think) => {
        this.thinking = think
    })
  }

}
