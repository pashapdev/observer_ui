import * as React from 'react';
import { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { teal } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import {Objects} from './screens/Objects';
import {Actions} from './screens/Actions';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import { useRecoilValue } from 'recoil';
import { history } from './_helpers'

export default function App() {
    return (
        <Container maxWidth="xl">
            <AppBar sx={{ bgcolor: teal[500] }}>
                <Toolbar>
                    <img src="/signature.png" style={{  position: 'absolute', left: 'calc(100% - 80px)' }} alt="signature" />
                    <Typography variant="h4" component="div">Observer</Typography>
                </Toolbar>
            </AppBar>
            {/* <Objects/> */}
            <Actions/>
        </Container>
    );
}
