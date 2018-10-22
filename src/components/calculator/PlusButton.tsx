import * as React from 'react';
import Button from '@material-ui/core/Button';

interface PlusButtonProps {
    onClick: () => void,
}

const PlusButton: React.SFC<PlusButtonProps> = ({onClick}) => (
    <Button variant="outlined" color="primary" onClick={onClick}>+</Button>
);

export default PlusButton;