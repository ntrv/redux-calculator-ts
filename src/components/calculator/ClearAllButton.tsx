import Button from '@material-ui/core/Button';
import * as React from 'react';

interface ClearAllButtonProps {
    onClick: () => void,
}

const ClearAllButton: React.SFC<ClearAllButtonProps> = ({onClick}) => (
    <Button variant="outlined" onClick={onClick}>AC</Button>
);

export default ClearAllButton;