import * as React from 'react';
import Button from '@material-ui/core/Button';

interface MinusButtonProps {
    onClick: () => void,
}

const MinusButton: React.SFC<MinusButtonProps> = ({onClick}) => (
    <Button variant="outlined" color="secondary" onClick={onClick}>-</Button>
);

export default MinusButton;