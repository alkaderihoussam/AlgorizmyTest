import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Animal} from '../domain/animal';
import {AnimalsService} from './animals-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AnimalsService],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  constructor(private animalService: AnimalsService) {
  }
  title = 'Animals wiki';
  animals: Animal[];
  animalFamilies: string[];
  filteredAnimals: Animal[];

  ngOnInit() {
  }
}
