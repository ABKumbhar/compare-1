import {ENGLISH,FRENCH,JAPNESE,DUTCH,GERMAN} from './types'

export const eng = () => {
  return {
    type: ENGLISH,
    payload: 'en'
  }
};
export const ger = () => {
    return {
      type: GERMAN,
      payload: 'de'
    }
  };

  export const dut = () => {
    return {
      type: DUTCH,
      payload: 'nl'
    }
  };

  export const jap = () => {
    return {
      type: JAPNESE,
      payload: 'ja'
    }
  };

  export const fre = () => {
    return {
      type: FRENCH,
      payload: 'fr'
    }
  };
