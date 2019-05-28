import { Component, OnInit } from '@angular/core';
import { AniversariantesFilter } from './model/aniversariantes-filter.model';
import { AniversariantesService } from './aniversariantes.service';
import { AniversariantesPorData } from './model/aniversariantes-por-data.model';

@Component({
  selector: 'app-aniversariantes',
  templateUrl: './aniversariantes.page.html',
  styleUrls: ['./aniversariantes.page.scss'],
})
export class AniversariantesPage implements OnInit {

  segments: { value: string, label: string }[];
  selectedSegment: string;

  aniversariantesPorData: AniversariantesPorData[] = [];
  aniversariantesFilter = new AniversariantesFilter();

  constructor(
    private aniversariantesService: AniversariantesService,
  ) { }

  ngOnInit() {
    this.setupFilter();
    this.setupSegments();
  }

  setupFilter() {
    this.aniversariantesFilter = new AniversariantesFilter();
    this.aniversariantesFilter.date = '2019-05';

    this.onFilter();
  }

  setupSegments() {
    this.segments = [
      { value: 'aniversarios', label: 'Aniversários' },
      { value: 'unimed', label: 'Unimed' },
    ];
    this.selectedSegment = 'aniversarios';
  }

  segmentChanged(event: CustomEvent) {
    const segmentValue = event.detail.value;
    this.selectedSegment = segmentValue;
  }

  onFilter() {
    this.aniversariantesService.getAniversariantes(this.aniversariantesFilter).subscribe(aniversariantes => {
      this.aniversariantesPorData = aniversariantes;
    });
  }
}
