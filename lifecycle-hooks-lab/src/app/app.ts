// ->> ngDestroy 


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
  showEmployee = true;

  changeName(): void {
    this.employeeName =
      this.employeeName === 'Chetan' ? 'Rahul' : 'Chetan';
  }

  toggleEmployee(): void {
    this.showEmployee = !this.showEmployee;
  }
}




// >>NgonChange 
// import { Component } from '@angular/core';
// import { EmployeeCard } from './employee-card/employee-card';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [EmployeeCard],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   employeeName = 'Chetan';

//   changeName(): void {
//     this.employeeName =
//       this.employeeName === 'Chetan' ? 'Rahul' : 'Chetan';
//   }
// }



// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `<h1>Lifecycle Demo</h1>`
// })
// export class App implements OnInit {

//   constructor() {
//     console.log('Constructor called');
//   }

//   ngOnInit(): void {
//     console.log('ngOnInit called');
//   }
// }