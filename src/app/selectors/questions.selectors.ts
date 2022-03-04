import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadQuestionsType } from '../actions/questions.actions';


import * as questionsReducer from '../reducers/index';


export const selectQuestionsState = createFeatureSelector<questionsReducer.QuestionsState>(
    LoadQuestionsType,
);

export const selectQuestions = createSelector(
    selectQuestionsState,
   (state: questionsReducer.QuestionsState) => state?.questions
);