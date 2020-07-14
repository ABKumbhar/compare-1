import {ENGLISH,FRENCH,JAPNESE,DUTCH,GERMAN} from './types'
import i18n from '../i18next';

export const eng = () => {
  i18n.changeLanguage('en');
  return {
    type: ENGLISH,
    payload: 'en'
  }
};
export const ger = () => {
  i18n.changeLanguage('de');

  return {
      type: GERMAN,
      payload: 'de'
    }
  };

  export const dut = () => {
    i18n.changeLanguage('nl');

    return {
      type: DUTCH,
      payload: 'nl'
    }
  };

  export const jap = () => {
    i18n.changeLanguage('ja');

    return {
      type: JAPNESE,
      payload: 'ja'
    }
  };

  export const fre = () => {
    i18n.changeLanguage('fr');

    return {
      type: FRENCH,
      payload: 'fr'
    }
  };
