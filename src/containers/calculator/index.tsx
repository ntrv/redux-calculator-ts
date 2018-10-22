import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import actionCreators from '../../actions/calculator';

import NumButton from '../../components/calculator/NumButton';
import PlusButton from '../../components/calculator/PlusButton';
import MinusButton from '../../components/calculator/MinusButton';
import MultipleButton from '../../components/calculator/MultipleButton';
import EqualButton from '../../components/calculator/EqualButton';
import ClearAllButton from '../../components/calculator/ClearAllButton';
import Display from '../../components/calculator/Display';

interface CalcProps {
    readonly display: number,
    readonly actions: any
}

interface CalcState {}

class CalculatorContainer extends React.Component<CalcProps, CalcState> {
    public render(): JSX.Element {
        const { display, actions } = this.props;
        return (
            <div>
                <div>
                    <Display value={display} />
                </div>
                <div>
                    <PlusButton onClick={actions.plus} />
                    <MinusButton onClick={actions.minus} />
                    <MultipleButton onClick={actions.multiple} />
                </div>
                <div>
                    <NumButton n={7} onClick={actions.inputNumber} />
                    <NumButton n={8} onClick={actions.inputNumber} />
                    <NumButton n={9} onClick={actions.inputNumber} />
                </div>
                <div>
                    <NumButton n={4} onClick={actions.inputNumber} />
                    <NumButton n={5} onClick={actions.inputNumber} />
                    <NumButton n={6} onClick={actions.inputNumber} />
                </div>
                <div>
                    <NumButton n={1} onClick={actions.inputNumber} />
                    <NumButton n={2} onClick={actions.inputNumber} />
                    <NumButton n={3} onClick={actions.inputNumber} />   
                </div>
                <div>
                    <NumButton n={0} onClick={actions.inputNumber} />
                </div>
                <div>
                    <ClearAllButton onClick={actions.clear} />
                    <EqualButton onClick={actions.equal} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    display: state.calculator.showValue,
});

const mapDispatchToProps = (dispatch: any, props: any) => ({
    actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer);