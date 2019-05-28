import { Moment } from 'moment';

export class AniversariantesByDate {
  constructor(
    public date: Moment,
    public aniversariantes: string[] = [],
  ) { }
}