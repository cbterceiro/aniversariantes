import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of as observableOf } from 'rxjs';

import { AniversariosDataSource } from './aniversariantes.data-source';

import { AniversariantesFilter } from './model/aniversariantes-filter.model';
import { AniversariantesPorData } from './model/aniversariantes-por-data.model';
import { Aniversario } from './model/aniversario.model';

@Injectable({
  providedIn: 'root',
})
export class AniversariantesService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  getAniversariantes(filter: AniversariantesFilter): Observable<AniversariantesPorData[]> {
    // uma chamada ao backend poderia ser feita desta forma:
    // return this.httpClient.get('/aniversariantes');
    
    const aniversarios = this.filterAniversarios(AniversariosDataSource, filter);
    //const aniversarios = AniversariosDataSource;
    const aniversariantesPorData = this.groupAniversariosByDate(aniversarios);

    return observableOf(aniversariantesPorData);
  }

  // simulação de um método de filtragem do backend
  filterAniversarios(aniversarios: Aniversario[], filter: AniversariantesFilter) {
    if (filter.date) {
      const dateParts = filter.date.split('-');
      const year = Number(dateParts[0]);
      const month = Number(dateParts[1]);

      aniversarios = aniversarios.filter(a => a.mes === month);
    }

    if (filter.name) {
      aniversarios = aniversarios.filter(a => a.nomeAniversariante.toLocaleLowerCase().includes(filter.name.toLocaleLowerCase()));
    }

    return aniversarios;
  }

  // simulação de um método de agrupamento por data do backend
  groupAniversariosByDate(aniversarios: Aniversario[]) {
    return aniversarios.reduce((aniversariantes, aniversario) => {
      let date = aniversariantes.find(a => a.dia === aniversario.dia && a.mes === aniversario.mes);
      
      if (!date) {
        date = new AniversariantesPorData(aniversario.dia, aniversario.mes);
        aniversariantes.push(date);
      }
      date.aniversariantes.push(aniversario.nomeAniversariante);
      
      return aniversariantes;
    }, [] as AniversariantesPorData[]);
  }

}
