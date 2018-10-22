import { actionCreatorFactory } from 'typescript-fsa';
import * as types from './types';

const actionCreator = actionCreatorFactory();

export const calculatorActions = {
    clear: actionCreator<void>(types.CLEAR),
    equal: actionCreator<void>(types.EQUAL),
    inputNumber: actionCreator<number>(types.INPUT_NUMBER),
    minus: actionCreator<void>(types.MINUS),
    multiple: actionCreator<void>(types.MULTIPLE),
    plus: actionCreator<void>(types.PLUS),
};