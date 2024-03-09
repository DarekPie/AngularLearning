import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';

import { map, filter } from 'rxjs/operators';
import { count } from 'rxjs-compat/operator/count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private firstObsSubscrition: Subscription;
  constructor() {}

  ngOnInit() {
    // this.firstObsSubscrition = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000);
    });

    // customIntervalObservable.pipe(
    //   map((data: number) => {
    //     return 'Round: ' + (data + 1);
    //   })
    // );

    this.firstObsSubscrition = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          // console.log('Round: ' + (data + 1));   - robimy to przez pike wyzej

          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );

    // customIntervalObservable.subscribe(
    //   (data) => {
    //     console.log(data);
    //   }

    // );
  }

  ngOnDestroy() {
    this.firstObsSubscrition.unsubscribe();
  }
}
