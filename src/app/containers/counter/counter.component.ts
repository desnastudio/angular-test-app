import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootStoreState} from '../../root-store';
import {Observable, timer} from 'rxjs';
import {CounterSelectors} from '../../root-store/counter-store';
import {ChangeAction} from '../../root-store/counter-store/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counterFirst$: Observable<number>;
  counterSecond$: Observable<number>;

  constructor(private store: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.counterFirst$ = this.store.pipe(select(CounterSelectors.selectCounterFirst));
    this.counterSecond$ = this.store.pipe(select(CounterSelectors.selectCounterSecond));
  }

  startCounting() {
    // Here, timer should be refactored as another ngrx component with start/stop/reset actions,
    // but for now we omit this for simplicity
    const secondsInterval = timer(1000, 1000);
    secondsInterval.subscribe(_ => {
      this.store.dispatch(new ChangeAction());
    });
  }
}
