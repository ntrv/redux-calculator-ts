import Button from '@material-ui/core/Button';
import * as React from 'react';

interface MinusButtonProps {
    onClick: () => void,
}

const minusButton: React.SFC<MinusButtonProps> = ({onClick}) => (
    <Button variant="outlined" color="secondary" onClick={onClick}>-</Button>
);

export default minusButton;