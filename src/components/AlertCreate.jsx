import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function AlertCreate({ onHandleClose, message = '' }) {
    return (
        <Stack
            sx={{ width: '100%' }}
            spacing={2}
            style={{
                position: 'fixed',
                zIndex: '10000',
                top: '80px',
                padding: '20px 100px',
            }}
        >
            <Alert onClose={onHandleClose} style={{ fontSize: '20px' }}>
                {message}
            </Alert>
        </Stack>
    );
}

export default AlertCreate;
