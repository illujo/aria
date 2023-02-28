import { Component, Input } from '@angular/core';
import { Station } from '../../models/station';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() station: Station | undefined;
}
