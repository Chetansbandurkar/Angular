
import { Component } from '@angular/core';
import { EmployeeCard } from './employee-card/employee-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  employeeName = 'Chetan';
  employeeRole = 'Software Developer';
}
