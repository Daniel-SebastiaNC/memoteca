import { Component, OnInit } from '@angular/core';
import { Think } from '../thinking';
import { ThinkService } from '../think.service';

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrl: './list-thinking.component.css'
})
export class ListThinkingComponent implements OnInit {

  listThinking: Think[] = [];

  constructor(private service: ThinkService) { }

  ngOnInit() : void {
    this.service.list().subscribe((listThinking) => {
      this.listThinking = listThinking
    })
  }

}
