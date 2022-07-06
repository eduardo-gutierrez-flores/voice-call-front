import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { SvgIcon } from "@mui/material";
import CallEndIcon from '@mui/icons-material/CallEnd';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

export default function CallAlert({open, reciveCall, declineCall, callInProsess, call}) {
    return (
        <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
            <Alert
            action={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {!callInProsess &&
                    <IconButton aria-label="next" onClick={reciveCall}>
                        <SvgIcon component={PhoneCallbackIcon} inheritViewBox color="green" />
                    </IconButton>
                    }
                    <IconButton aria-label="play/pause" onClick={declineCall}>
                        <SvgIcon component={CallEndIcon} inheritViewBox />
                    </IconButton>
                </Box>
            }
            sx={{ mb: 2 }}
            >
                {callInProsess ? 'En llamada con' : 'Llamada entrante de'} { call?.nameEmit }
            </Alert>
        </Collapse>
        </Box>
    );
}
