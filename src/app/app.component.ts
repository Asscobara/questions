import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadQuestionss } from './actions/questions.actions';
import { IQuestionItem, IQuestions } from './model/log.model';
import { questionsReducer } from './reducers';
import { selectQuestions } from './selectors/questions.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Questionnaire';

    questions$: Observable<IQuestionItem[]>;
    private _questions: IQuestionItem[] = [];

    constructor(private store: Store) {
      this.questions$ = this.store.pipe(select(selectQuestions));
    }

    ngOnInit(): void {
      this.store.dispatch(loadQuestionss());

      this.questions$.subscribe(q => this._questions = (q as any).questions )
    }

    public get questions() : IQuestionItem[] {
      return this._questions;
    }

    
}
