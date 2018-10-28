import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as types from '../actions/calculator/types';
import { calculatorActions } from '../actions/calculator';
import { Calculator } from '../records/calculator';

export const calculatorReducer = reducerWithInitialState(new Calculator())
    .case(calculatorActions.inputNumber, (state: Calculator, payload: number): Calculator => {
        return state.inputNumber(payload);
    })
    .case(calculatorActions.plus, (state: Calculator, payload: never): Calculator => {
        return state.operation(types.PLUS);
    })
    .case(calculatorActions.minus, (state: Calculator, payload: never): Calculator => {
        return state.operation(types.MINUS);
    })
    .case(calculatorActions.multiple, (state: Calculator, payload: never): Calculator => {
        return state.operation(types.MULTIPLE);
    })
    .case(calculatorActions.equal, (state: Calculator, payload: never): Calculator => {
        return state.equal();
    })
    .case(calculatorActions.clear, (state: Calculator, payload: never): Calculator => {
        return state.clearAll();
    });