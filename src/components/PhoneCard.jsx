import AgoraRTC from "agora-rtc-sdk-ng";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CallEndIcon from '@mui/icons-material/CallEnd';
import { SvgIcon } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {RtcTokenBuilder, RtcRole} from 'agora-access-token';
import { useState } from 'react'
import { useEffect } from "react";

const PhoneCard = ({user, initCall, rtc, callInProsess, userInCall}) => {
    const [users, setUsers] = useState(userInCall);
    const appID = '0c962528da524ac1a646aa034f8b5385';
    const appCertificate = '88d7864ddaf34842813b3b9237670158';
    const channelName = user.id;
    const role = RtcRole.PUBLISHER;
    
    const expirationTimeInSeconds = 3600
    
    const currentTimestamp = Math.floor(Date.now() / 1000)
    
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
    const options = {
        appId: "0c962528da524ac1a646aa034f8b5385",
        channel: user.id,
    };
    
    const createCall = async () => {
        const token = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, 0, role, privilegeExpiredTs);
        initCall(token, user.id, user.name)
        await rtc.client.join(options.appId, options.channel, token, options.uid);
        rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        await rtc.client.publish([rtc.localAudioTrack])
    }

    const leaveCall = async () => {
        rtc.localAudioTrack.close();
        await rtc.client.leave();
    }

    const getAvatar = (name) => {
        const separate = name.split(' ');
        return `${separate[0][0].toUpperCase()}${separate[1] ? separate[1][0].toUpperCase(): ''}`
    }
    
    const capitalize = (name) => {
        const separate = name.split(' ');
        return `${separate[0].charAt(0).toUpperCase()}${separate[0].slice(1)} ${separate[1] ? separate[1].charAt(0).toUpperCase(): ''}${separate[1] ? separate[1].slice(1): ''}`
    }

    useEffect(() => {
        setUsers(userInCall)
    }, [userInCall])

    return (
        <Card sx={{ display: 'flex', width: '300px', height: '70px', alignItems: 'center', padding: '10px'}}>
            <Stack direction="row" spacing={2}>
                <Avatar>{ getAvatar(user.name) }</Avatar>
            </Stack>
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h6" gutterBottom component="div">
                        { capitalize(user.name) }
                    </Typography>
                </Box>
                {!users?.some((id) => id === user.id) && !callInProsess  ?
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton aria-label="next" onClick={createCall}>
                            <SvgIcon component={AddIcCallIcon} inheritViewBox color="green" />
                        </IconButton>
                        <IconButton aria-label="play/pause" onClick={leaveCall}>
                            <SvgIcon component={CallEndIcon} inheritViewBox />
                        </IconButton>
                    </Box>
                    : null
                }
            </Box>
        </Card>
    );
}

export default PhoneCard;