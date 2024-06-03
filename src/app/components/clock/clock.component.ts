import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `
    <div>
      <h1>{{ horas }}:{{ minutos }}:{{ segundos }}</h1>
    </div>
  `
})
export class ClockComponent {
  @Input() horas: number;
  @Input() minutos: number;
  @Input() segundos: number;
}
