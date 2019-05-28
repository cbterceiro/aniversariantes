import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AniversariantesFilter } from '../model/aniversariantes-filter.model';
import { AniversariantesPorData } from '../model/aniversariantes-por-data.model';

@Component({
  selector: 'app-aba-aniversarios',
  templateUrl: './aba-aniversarios.component.html',
  styleUrls: ['./aba-aniversarios.component.scss'],
})
export class AbaAniversariosComponent {
  @Input() filter: AniversariantesFilter;
  @Input() aniversariantesPorData: AniversariantesPorData[];

  @Output() onFilter = new EventEmitter();
}