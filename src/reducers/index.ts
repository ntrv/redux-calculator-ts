import { combineReducers } from 'redux';
import { Record } from 'immutable';

import { calculatorReducer, CalculatorState } from './calculator';

export interface State {
    calculatorReducer: Record<CalculatorState>;
};

export default combineReducers({
    calculatorReducer,
});