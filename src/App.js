import './App.css';
import { useState, useEffect, useLayoutEffect } from "react";
import * as React from 'react';
import io from "socket.io-client";
import PhoneCard from "./components/PhoneCard";
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import CallScreen from './components/Call';
import CallAlert from './components/CallAlert';
import AgoraRTC from "agora-rtc-sdk-ng";
import LeaveAlert from './components/LeaveAlert'
import SendCall from './components/SendCall';

const socket = io.connect('http://localhost:3001/');

function App() {
    const [call, setCall] = useState()
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('')
    const [rtc, setRTC] = useState({ localAudioTrack: null, client: null });
    const [callInProsess, setCallInProsess] = useState(false);
    const [leaveCallName, setLeaveCall] = useState();
    const [usersInCall, setUsersInCall] = useState([]);
    const [sendCall, setSendCall] = useState();
    const options = {
        appId: "0c962528da524ac1a646aa034f8b5385",
        channel: "test",
    };

    useLayoutEffect(() => {
        const startBasicCall = async () => {
            const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

            client.on("user-published", async (user, mediaType) => {
                console.log(user, mediaType);
                await client.subscribe(user, mediaType);
                if (mediaType === "audio") {
                    const remoteAudioTrack = user.audioTrack;
                    remoteAudioTrack.play();
                }
                
                client.on("user-unpublished", async (user) => {
                    await client.unsubscribe(user);
                });
            });

            setRTC((rtc) => ({...rtc, client}))
        }
        startBasicCall()
    }, []);

    const changeStatusToActive = () => {
        socket.emit('create_user', { name })
    }
    
    const createCall = (token, id, nameUser) => {
        console.log('CALL TO ', nameUser);
        setCallInProsess(true);
        setSendCall({name: nameUser, nameEmit: name, id, token, room: `${id}${socket.id}`})
        socket.emit('create_call', {nameEmit: name, name: nameUser, id, token, room: `${id}${socket.id}`})
    }

    const joinCall = async () => {
        await rtc.client.join(options.appId, call.id, call.token, options.uid);
        rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();

        socket.emit('answer_call', {
            id: call.id,
            idEmit: call.idEmit,
            room: call.room
        })
        
        setCallInProsess(true)
    }
    
    const leaveCall = async () => {
        setCallInProsess(false)
        if(rtc.localAudioTrack) {
            rtc.localAudioTrack.close();
            await rtc.client.leave();
        }

        if(call) {
            socket.emit('leave_call', {
                name,
                id: call.id,
                token: call.token,
                room: call.room,
                idEmit: call.idEmit
            })
        }
        
        if(sendCall) {
            socket.emit('leave_call', {
                name,
                id: socket.id,
                token: sendCall.token,
                room: sendCall.room,
                idEmit: sendCall.idEmit
            })
        }

        setCall(undefined)
        setSendCall(undefined)
    }

    const cancelCall = () => {
        socket.emit('cancel_call', {
            name,
            id: sendCall.id,
            token: sendCall.token,
            room: sendCall.room,
            idEmit: sendCall.idEmit
        })
        leaveCall()
    }

    useEffect(() => {
        socket.on('new_active', (data) => {
            console.log(data);
            const usersFilter = data.filter((user) => !users.some((u) => u.id === user.id) && user.id !== socket.id)
            setUsers([...usersFilter]);
        });
        socket.on('recive_call', (data) => {
            console.log(data);
            setCall(data);
        });
        socket.on('leave', (data) => {
            console.log(data);
            setLeaveCall(data)
        });
        socket.on('users_in_call', (data) => {
            console.log(data, sendCall?.id);
            if(data.some((id) => id === sendCall?.id || id === call?.id)) {
                setCallInProsess(true)
            } else {
                setCallInProsess(false)
            }
            setUsersInCall(data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [call?.id, sendCall?.id]);
    return (
        <div className="App">
            <SendCall
                open={sendCall !== undefined && !leaveCallName}
                call={sendCall}
                callInProsess={usersInCall.some((id) => id === sendCall?.id)}
                declineCall={cancelCall}
            />
            <CallAlert open={call !== undefined && !leaveCallName} declineCall={() => leaveCall()} reciveCall={() => joinCall()} callInProsess={callInProsess} call={call} />
            <LeaveAlert open={leaveCallName !== undefined} onClose={() => {leaveCall(); setLeaveCall(undefined)}} name={leaveCallName?.name} />
            <Container>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Box sx={{display: 'flex', margin: '2rem auto', width: '300px', gap: '1rem', flexDirection: 'column'}}>
                                {users.map((user) =>
                                    <PhoneCard
                                        user={user}
                                        initCall={(token, id, name) => createCall(token, id, name)}
                                        rtc={rtc}
                                        callInProsess={callInProsess}
                                        userInCall={usersInCall}
                                    />
                                )}
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{margin: '2rem auto', width: '300px'}}>
                                <TextField onChange={(event) => setName(event.target.value)} variant='standard' label='Ingresa tu nombre' />
                            </Box>
                            <Box sx={{margin: '0 auto', width: '300px'}}>
                                <Button variant="outlined" size='small' onClick={() => changeStatusToActive()}>Unirte</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
}

export default App;
