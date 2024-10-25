import { Component } from '@angular/core';
import { Think } from '../thinking';

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrl: './list-thinking.component.css'
})
export class ListThinkingComponent {

  listThinking: Think[] = [];



}
