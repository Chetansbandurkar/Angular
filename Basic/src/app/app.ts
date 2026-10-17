// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   template: `
// //     <h1>Counter: {{ count }}</h1>

// //     <button (click)="increment()">
// //       Increase
// //     </button>

// //     <button (click)="decrement()">
// //       Decrease
// //     </button>

// //     <button (click)="reset()">
// //       Reset
// //     </button>
// //   `
// // })
// // export class App {
// //   count = 0;

// //   increment() {
// //     this.count++;
// //   }

// //   decrement() {
// //     this.count--;
// //   }

// //   reset() {
// //     this.count = 0;
// //   }
// // }



// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule],
//   template: `
//     <h1>Employee Details</h1>

//     <input [(ngModel)]="employeeName">

//     <p>Your name: {{ employeeName }}</p>

//     <button [disabled]="isSaving">
//       Save
//     </button>

//     <p>Is saving: {{ isSaving }}</p>
//   `
// })
// export class App {
//   employeeName = 'Chetan';
//   isSaving = false;
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Employee Management</h1>

    @if (isLoading) {
      <p>Loading employees...</p>
    } @else {
      <ul>
        @for (employee of employees; track employees) {
          <li> Employee {{employee}}</li>
        } @empty {
          <li>No employees found.</li>
        }
      </ul>
    }
  `
})
export class App {
  isLoading = false;

  // employees = [
  //   { id: 101, name: 'Amit', salary: 500000 },
  //   { id: 102, name: 'Priya', salary: 650000 },
  //   { id: 103, name: 'Rahul', salary: 600000 }
  // ];

  employees = []
}
