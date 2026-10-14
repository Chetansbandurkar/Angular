// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <h1>Counter: {{ count }}</h1>

//     <button (click)="increment()">
//       Increase
//     </button>

//     <button (click)="decrement()">
//       Decrease
//     </button>

//     <button (click)="reset()">
//       Reset
//     </button>
//   `
// })
// export class App {
//   count = 0;

//   increment() {
//     this.count++;
//   }

//   decrement() {
//     this.count--;
//   }

//   reset() {
//     this.count = 0;
//   }
// }



import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Employee Details</h1>

    <input [(ngModel)]="employeeName">

    <p>Your name: {{ employeeName }}</p>

    <button [disabled]="isSaving">
      Save
    </button>

    <p>Is saving: {{ isSaving }}</p>
  `
})
export class App {
  employeeName = 'Chetan';
  isSaving = false;
}
