import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-primary',
  imports: [],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.css',
})
export class BtnPrimary {
  @Input() text: string = '';
}
