import Button from '@material-ui/core/Button';
import * as React from 'react';

interface PlusButtonProps {
    onClick: () => void,
}

const PlusButton: React.SFC<PlusButtonProps> = ({onClick}) => (
    <Button variant="outlined" color="primary" onClick={onClick}>+</Button>
);

export default PlusButton;