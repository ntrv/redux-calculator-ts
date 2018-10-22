import TextField from '@material-ui/core/TextField';
import * as React from 'react';

interface DisplayProps {
    value: number,
}

const display: React.SFC<DisplayProps> = ({ value }) => (
    <div>
        <TextField
            id="standard-read-only-input"
            label="Result"
            margin="normal"
            error={false}
            value={value}
            InputProps={{
                readOnly: true,
            }}
        />
    </div>
);

export default display;