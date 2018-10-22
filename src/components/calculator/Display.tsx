import * as React from 'react';
import TextField from '@material-ui/core/TextField';

interface DisplayProps {
    value: number,
}

const Display: React.SFC<DisplayProps> = ({ value }) => (
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

export default Display;