import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'core-page',
  styleUrl: 'core-page.css',
  shadow: true
})
export class CorePage {
  @Prop() noNavigation = false;
  @Prop() title = '';

  render() {
    <div class="header" *ngIf="!noNavigation">
    <h1>{{title}}</h1>

    <ol>
      <ng-template ngFor [ngForOf]="sections$ | async" let-section>
        <li
          [class.active]="(activeSection$ | async) === section"
          (click)="selectSection(section)"
        >{{section.title}}</li>
      </ng-template>
    </ol>
  </div>

  <div class="content"
    [docsAnchorContainer]="(activeSection$ | async).title"
    [docsAnchor]="firstSectionTitle$ | async">
    <ng-template ngFor [ngForOf]="sections$ | async" let-section let-first="first">
      <h2
        *ngIf="(!first || noNavigation) && section.title"
        [docsAnchor]="section.title"
      >{{section.title}}</h2>

      <ng-container [ngTemplateOutlet]="section.template"></ng-container>
    </ng-template>
  </div>


  }
}