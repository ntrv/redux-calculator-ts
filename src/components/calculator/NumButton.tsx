// tslint:disable:jsx-no-lambda
import Button from '@material-ui/core/Button';
import * as React from 'react';

interface NumButtonProps {
    n: number,
    onClick: (n: number) => void,
}

const numButton: React.SFC<NumButtonProps> = ({n, onClick}) => (
    <Button variant="outlined" onClick={() => onClick(n)}>{n}</Button>
);

export default numButton;