import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Animal} from '../domain/animal';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class AnimalsService {

  constructor(private httpClient: HttpClient) {}

  // getAnimalsPerFamily(family: string) {
  //   return this.httpClient.get<any>(' http://localhost:3000/animals')
  //     .pipe((filter((res: Animal) => res.family === family)));
  // }

  getAnimals() {
    return this.httpClient.get<any>(' http://localhost:3000/animals')
      .pipe((map((res: Animal[]) => res)));
    // return this.httpClient.get<any>(' http://localhost:3000/animals')
    //   .toPromise()
    //   .then(res => <Animal[]> res)
    //   .then(data => { return data});
  }
}
