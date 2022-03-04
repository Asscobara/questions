
// src/app/store/photo.effects.ts

import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { APIService } from '../services/api.service';
import { loadQuestionss, loadQuestionssFailure, loadQuestionssSuccess } from '../actions/questions.actions';

@Injectable()
export class QuestionsEffects {
  questions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestionss),
      switchMap(() => this.apiService.getQuestions().pipe(
        map(data => loadQuestionssSuccess( {data} )),
        catchError((e) => of(loadQuestionssFailure(e)))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: APIService
  ) {}
}