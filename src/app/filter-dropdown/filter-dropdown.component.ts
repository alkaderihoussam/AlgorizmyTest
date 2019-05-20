import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Animal} from '../domain/animal';

@Component({
  selector: 'filter-dropdown',
  template: `
    <div class="container">
      <div class="row mb-1">
        <div class="col-2"></div>
          <div class="col-4">
            <div class="dropdown">
              <button class="dropbtn">Dropdown</button>
              <div class="dropdown-content">
                <a *ngFor="let family of families" (click)="familySelected.emit(family)">{{family}}</a>
              </div>
            </div>
        </div>
        <div class="col-4">
          <button type="button" class="btn btn-secondary" (click)="familySelected.emit('')">Cancel filter</button>
        </div>
        <div class="col-2"></div>
      </div>
    </div>

    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" *ngFor="let family of families" (click)="familySelected.emit(family)">
          {{family}}
        </a>
      </div>
    </div>
  `,
  styles: [`/* Style The Dropdown Button */
  .dropbtn {
    background-color: #0d2faf;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 11;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #f1f1f1
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }`]
})

export class FilterDropdownComponent {
  @Input()
  families: string[];

  @Output()
  familySelected: EventEmitter<string> = new EventEmitter<string>();
}
