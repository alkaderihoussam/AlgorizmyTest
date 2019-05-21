import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Animal} from '../domain/animal';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class AnimalsService {

  constructor(private httpClient: HttpClient) {}

  getAnimals() {
    return this.httpClient.get<any>(' http://localhost:3000/animals')
      .pipe((map((res: Animal[]) => res)));
  }
}
