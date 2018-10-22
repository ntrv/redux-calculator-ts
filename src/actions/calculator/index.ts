import * as types from './types';
import { createActions } from 'redux-actions';

export default createActions(
    {
        [types.INPUT_NUMBER]: number => number,
    },
    types.PLUS,
    types.MINUS,
    types.MULTIPLE,
    types.EQUAL,
    types.CLEAR,
)