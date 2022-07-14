import { atom } from 'recoil';

export const isLoadingState = atom({
    key: 'isLoadingState',
    default: false
});

export const tokenState = atom({
    key: 'tokenState',
    default: localStorage.getItem('token') || ''
});
