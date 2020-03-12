import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<smart [isVisible]="true" [array]="['Elem1', 'Elem2']"></smart>`,
})
export class AppComponent {
  title = 'MyApp';
}
