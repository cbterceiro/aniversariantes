import { Component, OnInit } from '@angular/core';
import { AniversariantesFilter } from './aniversariantes-filter.model';

@Component({
  selector: 'app-aniversariantes',
  templateUrl: './aniversariantes.page.html',
  styleUrls: ['./aniversariantes.page.scss'],
})
export class AniversariantesPage implements OnInit {

  segments: { value: string, label: string }[];
  selectedSegment: string;

  aniversariantesFilter = new AniversariantesFilter();

  constructor() { }

  ngOnInit() {
    this.setupSegments();
    this.selectedSegment = 'aniversarios';
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

}
