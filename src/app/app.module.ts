import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import {AnimalsService} from './animals-service';
import {HttpClientModule} from '@angular/common/http';
import {createCustomElement, NgElementConfig} from '@angular/elements';
import {FilterDropdownComponent} from './filter-dropdown/filter-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterDropdownComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AnimalsService],
  // bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const config: NgElementConfig = {injector: this.injector};
    const customComponent = createCustomElement(AppComponent, config);
    customElements.define('animals-wiki', customComponent);
  }
}
