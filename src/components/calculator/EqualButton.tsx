import * as React from 'react';
import Button from '@material-ui/core/Button';

interface EqualButtonProps {
    onClick: () => void,
}

const EqualButton: React.SFC<EqualButtonProps> = ({onClick}) => (
    <Button variant="outlined" onClick={onClick}>=</Button>
);

export default EqualButton;