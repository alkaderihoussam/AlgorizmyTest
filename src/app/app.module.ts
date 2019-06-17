import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnimalsService} from './animals-service';
import {FilterDropdownComponent} from "./filter-dropdown/filter-dropdown.component";
import {CardComponent} from "./card/card.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {createCustomElement, NgElementConfig} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    FilterDropdownComponent,
    CardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [AnimalsService],
  // bootstrap:[AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){
  }

  ngDoBootstrap() {
    const config: NgElementConfig = {injector: this.injector};
    const customComponent = createCustomElement(AppComponent, config);
    customElements.define('animals-wiki', customComponent);
  }
}
