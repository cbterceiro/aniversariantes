import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of as observableOf } from 'rxjs';

import { AniversariosDataSource } from './aniversariantes.data-source';

import { AniversariantesFilter } from './model/aniversariantes-filter.model';
import { AniversariantesByDate } from './model/aniversariantes-by-date.model';
import { Aniversario } from './model/aniversario.model';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AniversariantesService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  getAniversariantes(filter: AniversariantesFilter): Observable<AniversariantesByDate[]> {
    // uma chamada ao backend poderia ser feita desta forma:
    // return this.httpClient.get('/aniversariantes');
    
    const aniversarios = this.filterAniversarios(AniversariosDataSource, filter);
    const aniversariantesByDate = this.sortAniversariantesByDate(this.groupAniversariosByDate(aniversarios));

    return observableOf(aniversariantesByDate);
  }

  // simulação de um método de filtragem do backend
  filterAniversarios(aniversarios: Aniversario[], filter: AniversariantesFilter) {
    if (filter.date) {
      const dateParts = filter.date.split('-');
      const year = Number(dateParts[0]);
      const month = Number(dateParts[1]) - 1;
      
      aniversarios = aniversarios.filter(a => a.data.month() === month);
    }

    if (filter.name) {
      aniversarios = aniversarios.filter(a => a.nomeAniversariante.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase()));
    }

    return aniversarios;
  }

  // simulação de um método de agrupamento por data do backend
  groupAniversariosByDate(aniversarios: Aniversario[]) {
    return aniversarios.reduce((aniversariantes, aniversario) => {
      let date = aniversariantes.find(a => a.date.format('MMDD') === aniversario.data.format('MMDD'));
      
      if (!date) {
        date = new AniversariantesByDate(aniversario.data);
        aniversariantes.push(date);
      }
      date.aniversariantes.push(aniversario.nomeAniversariante);
      
      return aniversariantes;
    }, [] as AniversariantesByDate[]);
  }

  sortAniversariantesByDate(aniversariantesByDate: AniversariantesByDate[]): AniversariantesByDate[] {
    return aniversariantesByDate.sort((a, b) => a.date.format('MMDD').localeCompare(b.date.format('MMDD')));
  }

}
