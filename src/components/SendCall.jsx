import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { SvgIcon } from "@mui/material";
import CallEndIcon from '@mui/icons-material/CallEnd';
import CallMadeIcon from '@mui/icons-material/CallMade';

export default function SendCall({open, declineCall, callInProsess, call}) {
    return (
        <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
            <Alert
            action={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {!callInProsess &&
                    <IconButton aria-label="next">
                        <SvgIcon component={CallMadeIcon} inheritViewBox color="green" />
                    </IconButton>
                    }
                    <IconButton aria-label="play/pause" onClick={declineCall}>
                        <SvgIcon component={CallEndIcon} inheritViewBox />
                    </IconButton>
                </Box>
            }
            sx={{ mb: 2 }}
            >
                {callInProsess ? 'En llamada con ' : 'Llamando a '} { call?.name }
            </Alert>
        </Collapse>
        </Box>
    );
}
