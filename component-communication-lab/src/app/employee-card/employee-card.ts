
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css'
})
export class EmployeeCard {
  name = input<string>('');
  role = input<string>('');
}
