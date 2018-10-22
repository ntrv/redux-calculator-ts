import actionCreatorFactory from 'typescript-fsa';
import * as types from './types';

const actionCreator = actionCreatorFactory();

export const calculatorActions = {
    inputNumber: actionCreator<number>(types.INPUT_NUMBER),
    plus: actionCreator<void>(types.PLUS),
    minus: actionCreator<void>(types.MINUS),
    multiple: actionCreator<void>(types.MULTIPLE),
    equal: actionCreator<void>(types.EQUAL),
    clear: actionCreator<void>(types.CLEAR),
};