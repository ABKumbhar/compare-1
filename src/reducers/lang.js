import { ENGLISH,FRENCH,DUTCH,JAPNESE,GERMAN } from '../actions/types'

const initialState = {
  language_select: 'en'
};

const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENGLISH: return {
      ...state,
      language_select: action.payload
    }

    case GERMAN: return {
        ...state,
        language_select: action.payload
    }
    
    case DUTCH: return {
        ...state,
        language_select: action.payload
    }
    
    case FRENCH: return {
            ...state,
            language_select: action.payload 
    }

    case JAPNESE: return {
            ...state,
            language_select: action.payload
    }
    default: return state
  }
};

export default langReducer
