import * as React from 'react';
import Button from '@material-ui/core/Button';

interface MultipleButtonProps {
    onClick: () => void,
}

const MultipleButton: React.SFC<MultipleButtonProps> = ({onClick}) => (
    <Button variant="outlined" color="primary" onClick={onClick}>×</Button>
);

export default MultipleButton;