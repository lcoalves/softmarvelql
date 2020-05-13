/**
 * Action Types
 */
export const Types = {
  REQUEST: 'CHARACTER_REQUEST',
  SUCCESS: 'CHARACTER_SUCCESS',
  FAILURE: 'CHARACTER_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  error: false,
  characters: [],
};

export default function character(state = INITIAL_STATE, action) {
  switch (action.type) {
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
