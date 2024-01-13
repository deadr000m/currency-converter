import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch } from '../redux/store';

export let useAppDispatch: () => AppDispatch;
useAppDispatch = useDispatch;
export let useAppSelector: TypedUseSelectorHook<RootState>;
useAppSelector = useSelector;
