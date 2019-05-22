import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnimalsService} from './animals-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [AnimalsService]
})
export class AppModule {
}
