import { Action, ActionReducerMap, MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IQuestionItem } from '../model/log.model';
import { LoadQuestionsType, loadQuestionss, loadQuestionssSuccess } from '../actions/questions.actions';

export interface QuestionsState {
  questions: IQuestionItem[];
}

const initialQuestionsState: QuestionsState = {
  questions: []
};

export interface AppState {
  questions: QuestionsState;
}

export function reducer(state: QuestionsState , action: Action): QuestionsState {
  return questionsReducer(state, action);
}

export const questionsReducer = createReducer(

  initialQuestionsState,

  on(loadQuestionssSuccess,
    (state: QuestionsState, {data} ) =>
      ({...state,
        questions: [...state.questions , ...(data.patientQuestions || [])]
      }))

);

export const reducers: ActionReducerMap<AppState> = {
  questions: questionsReducer,
};


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];