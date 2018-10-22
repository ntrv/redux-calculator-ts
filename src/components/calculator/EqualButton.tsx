import Button from '@material-ui/core/Button';
import * as React from 'react';

interface EqualButtonProps {
    onClick: () => void,
}

const equalButton: React.SFC<EqualButtonProps> = ({onClick}) => (
    <Button variant="outlined" onClick={onClick}>=</Button>
);

export default equalButton;