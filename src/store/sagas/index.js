import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '../../services/api';

import {
  Creators as CharacterActions,
  Types as CharacterTypes,
} from '../ducks/character';

function* changeLetter(action) {
  try {
    const { newLetter } = action.payload;

    yield put(CharacterActions.letterSuccess(newLetter));
  } catch (err) {
    yield put(CharacterActions.letterFailure());
  }
}

function* characters(action) {
  try {
    const { letter } = action.payload;

    const response = yield call(api.get, '/characters', {
      params: {
        offset: 0,
        limit: 50,
        nameStartsWith: letter,
      },
    });

    const { results } = response.data.data;

    yield put(CharacterActions.characterSuccess(results));
  } catch (err) {
    yield put(CharacterActions.characterFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(CharacterTypes.REQUEST, characters)]);
  yield all([takeLatest(CharacterTypes.LETTER_REQUEST, changeLetter)]);
}
