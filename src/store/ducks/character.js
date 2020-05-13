/**
 * Action Types
 */
export const Types = {
  LETTER_REQUEST: 'LETTER_REQUEST',
  LETTER_SUCCESS: 'LETTER_SUCCESS',
  LETTER_FAILURE: 'LETTER_FAILURE',

  REQUEST: 'CHARACTER_REQUEST',
  SUCCESS: 'CHARACTER_SUCCESS',
  FAILURE: 'CHARACTER_FAILURE',
};

/**
 * Reducers
 */
export const INITIAL_STATE = {
  loading: false,
  error: false,
  letter: 'A',
  characters: [],
};

export default function character(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LETTER_REQUEST:
      return { ...state, loading: true };
    case Types.LETTER_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        letter: action.payload.newLetter,
      };
    case Types.LETTER_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        characters: action.payload.characters,
      };
    case Types.FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */
export const Creators = {
  letterRequest: (newLetter) => ({
    type: Types.LETTER_REQUEST,
    payload: {
      newLetter,
    },
  }),
  letterSuccess: (newLetter) => ({
    type: Types.LETTER_SUCCESS,
    payload: {
      newLetter,
    },
  }),
  letterFailure: () => ({
    type: Types.LETTER_FAILURE,
  }),

  characterRequest: (letter) => ({
    type: Types.REQUEST,
    payload: {
      letter,
    },
  }),
  characterSuccess: (characters) => ({
    type: Types.SUCCESS,
    payload: {
      characters,
    },
  }),
  characterFailure: () => ({
    type: Types.FAILURE,
  }),
};
