import { Component, Input } from '@angular/core';
import { AniversariantesFilter } from '../aniversariantes-filter.model';

@Component({
  selector: 'app-aba-aniversarios',
  templateUrl: './aba-aniversarios.component.html',
  styleUrls: ['./aba-aniversarios.component.scss'],
})
export class AbaAniversariosComponent {
  @Input() filter: AniversariantesFilter;
}