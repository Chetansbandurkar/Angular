

import {
  Component,
  DestroyRef,
  inject,
  input
} from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  template: `
    <h3>{{ name() }}</h3>
    <p>Timer: {{ seconds }} seconds</p>
  `
})
export class EmployeeCard {
  name = input<string>('');

  seconds = 0;

  private destroyRef = inject(DestroyRef);

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        this.seconds = value + 1;
        console.log('Observable timer:', this.seconds);
      });
  }
}


// Destroyref 


// import {
//   Component,
//   DestroyRef,
//   inject,
//   input
// } from '@angular/core';

// @Component({
//   selector: 'app-employee-card',
//   standalone: true,
//   template: `
//     <h3>{{ name() }}</h3>
//     <p>Timer: {{ seconds }} seconds</p>
//   `
// })
// export class EmployeeCard {
//   name = input<string>('');

//   seconds = 0;

//   private destroyRef = inject(DestroyRef);

//   constructor() {
//     const timerId = setInterval(() => {
//       this.seconds++;
//       console.log('Timer:', this.seconds);
//     }, 1000);

//     this.destroyRef.onDestroy(() => {
//       clearInterval(timerId);
//       console.log('EmployeeCard timer cleaned up');
//     });
//   }
// }





// ->> NgOnDestroy 
// import {
//   Component,
//   input,
//   OnChanges,
//   OnDestroy,
//   SimpleChanges
// } from '@angular/core';

// @Component({
//   selector: 'app-employee-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './employee-card.html',
//   styleUrl: './employee-card.css'
// })
// export class EmployeeCard implements OnChanges, OnDestroy {
//   name = input<string>('');

//   constructor() {
//     console.log('EmployeeCard: constructor');
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     const nameChange = changes['name'];

//     if (nameChange) {
//       console.log('Previous:', nameChange.previousValue);
//       console.log('Current:', nameChange.currentValue);
//     }
//   }

//   ngOnDestroy(): void {
//     console.log('EmployeeCard destroyed');
//   }
// }


// -->>>  OnChnages 
// import {
//   Component,
//   input,
//   OnChanges,
//   SimpleChanges
// } from '@angular/core';

// @Component({
//   selector: 'app-employee-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './employee-card.html',
//   styleUrl: './employee-card.css'
// })
// export class EmployeeCard implements OnChanges {
//   name = input<string>('');

//   ngOnChanges(changes: SimpleChanges): void {
//     const nameChange = changes['name'];

//     if (nameChange) {
//       console.log('Previous name:', nameChange.previousValue);
//       console.log('Current name:', nameChange.currentValue);
//       console.log('First change:', nameChange.firstChange);
//     }
//   }
// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employee-card',
//   imports: [],
//   templateUrl: './employee-card.html',
//   styleUrl: './employee-card.css',
// })
// export class EmployeeCard {}
