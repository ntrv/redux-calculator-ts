import {calculatorActions} from '../actions/calculator';
import * as types from '../actions/calculator/types';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

export interface CalculatorState {
    inputValue: number,
    resultValue: number,
    showValue: number,
    operator: string | null,
}

const initialAppState: CalculatorState = {
    inputValue: 0,
    resultValue: 0,
    showValue: 0,
    operator: null,
}

const doCalc = (state: CalculatorState, operator: string | null) => {
    switch(operator) {
        case types.PLUS:
            return state.resultValue + state.inputValue;
        case types.MINUS:
            return state.resultValue - state.inputValue;
        case types.MULTIPLE:
            return state.resultValue * state.inputValue;
        case types.EQUAL:
            return state.resultValue;
        default:
            return state.inputValue;
    }
}

export const calculatorReducer = reducerWithInitialState(initialAppState)
    .case(calculatorActions.inputNumber, (state, payload) => {
        const value = state.inputValue * 10 + payload;
        return {
            ...state,
            inputValue: value,
            showValue: value,
        };
    })
    .case(calculatorActions.plus, (state, payload) => {
        const value = state.resultValue + state.inputValue;
        return {
            ...state,
            inputValue: 0,
            resultValue: value,
            showValue: value,
            operator: types.PLUS,
        };
    })
    .case(calculatorActions.minus, (state, payload) => {
        const value = state.resultValue - state.inputValue;
        return {
            ...state,
            inputValue: 0,
            resultValue: value,
            showValue: value,
            operator: types.MINUS,
        };
    })
    .case(calculatorActions.multiple, (state, payload) => {
        state.resultValue = state.operator ? state.resultValue : 1;
        state.inputValue = state.operator === types.EQUAL ? 1 : state.inputValue;
        const value = state.resultValue * state.inputValue;
        return {
            ...state,
            inputValue: 0,
            resultValue: value,
            showValue: value,
            operator: types.MULTIPLE,
        };
    })
    .case(calculatorActions.equal, (state, payload) => {
        const value = state.resultValue;
        return {
            ...state,
            inputValue: 0,
            resultValue: value,
            showValue: value,
            operator: state.operator ? types.EQUAL : null,
        };
    })
    .case(calculatorActions.clear, (state, payload) => initialAppState);