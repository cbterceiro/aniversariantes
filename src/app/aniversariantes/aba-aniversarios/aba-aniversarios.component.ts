import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AniversariantesFilter } from '../model/aniversariantes-filter.model';
import { AniversariantesByDate } from '../model/aniversariantes-by-date.model';

@Component({
  selector: 'app-aba-aniversarios',
  templateUrl: './aba-aniversarios.component.html',
  styleUrls: ['./aba-aniversarios.component.scss'],
})
export class AbaAniversariosComponent {
  @Input() filter: AniversariantesFilter;
  @Input() aniversariantesByDate: AniversariantesByDate[];

  @Output() onFilter = new EventEmitter();
}