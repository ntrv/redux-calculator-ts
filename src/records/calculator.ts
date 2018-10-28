import { Record } from 'immutable';
import * as types from '../actions/calculator/types';

export interface CalculatorState {
    inputValue: number,
    resultValue: number,
    showValue: number,
    operator: string | null,
};

const initialState: CalculatorState = {
    inputValue: 0,
    resultValue: 0,
    showValue: 0,
    operator: null, 
};

// tslint:disable-next-line
const CalculatorRecord = Record<CalculatorState>(initialState, 'CalculatorRecord');

export class Calculator extends CalculatorRecord {
    constructor(){
        super();
    }

    private doCalc(operator: string | null): number {
        switch(operator) {
            case types.PLUS:
                return this.resultValue + this.inputValue;
            case types.MINUS:
                return this.resultValue - this.inputValue;
            case types.MULTIPLE:
                return this.resultValue * this.inputValue;
            case types.EQUAL:
                return this.resultValue;
            default:
                return this.inputValue;
        } 
    }

    inputNumber(num: number): Calculator {
        const value = this.inputValue * 10 + num;
        return this.set('inputValue', value)
            .set('showValue', value);
    }

    operation(operator: string): Calculator {
        let value: number;

        if(types.MULTIPLE) {
            value = (this.operator ? this.resultValue : 1) *
                (this.operator === types.EQUAL ? 1 : this.inputValue);
        } else {
            value = this.doCalc(operator);
        }

        return this.set('operator', operator)
            .set('inputValue', 0)
            .set('resultValue', value)
            .set('showValue', value);
    }

    equal(): Calculator {
        const value = this.doCalc(this.operator);
        return this.set('operator', this.operator ? types.EQUAL : null)
            .set('inputValue', 0)
            .set('resultValue', value)
            .set('showValue', value);
    }

    clearAll(): Calculator {
        return this.mergeDeep(initialState);
    }
};