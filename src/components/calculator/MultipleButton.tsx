import Button from '@material-ui/core/Button';
import * as React from 'react';

interface MultipleButtonProps {
    onClick: () => void,
}

const MultipleButton: React.SFC<MultipleButtonProps> = ({onClick}) => (
    <Button variant="outlined" color="primary" onClick={onClick}>×</Button>
);

export default MultipleButton;