import { getLocalStorage } from './localstorage';

export const getPrincipal = () => getLocalStorage('principal');
