import * as React from 'react';
import Button from '@material-ui/core/Button';

interface ClearAllButtonProps {
    onClick: () => void,
}

const ClearAllButton: React.SFC<ClearAllButtonProps> = ({onClick}) => (
    <Button variant="outlined" onClick={onClick}>AC</Button>
);

export default ClearAllButton;