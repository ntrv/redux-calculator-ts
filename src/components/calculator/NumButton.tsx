import * as React from 'react';
import Button from '@material-ui/core/Button';

interface NumButtonProps {
    n: number,
    onClick: (n: number) => void,
}

const NumButton: React.SFC<NumButtonProps> = ({n, onClick}) => (
    <Button variant="outlined" onClick={() => onClick(n)}>{n}</Button>
);

export default NumButton;