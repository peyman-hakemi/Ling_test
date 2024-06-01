import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../store';
import {RootState} from '../reducers';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
