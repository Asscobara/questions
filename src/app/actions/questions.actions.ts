import { createAction, props } from '@ngrx/store';
import { IQuestions } from '../model/log.model';

export const LoadQuestionsType = '[Questions] Load Questionss';

export const loadQuestionss = createAction(
  LoadQuestionsType

);

export const loadQuestionssSuccess = createAction(
  '[Questions] Load Questionss Success',
  props<{ data: IQuestions }>()
);

export const loadQuestionssFailure = createAction(
  '[Questions] Load Questionss Failure',
  props<{ error: any }>()
);
