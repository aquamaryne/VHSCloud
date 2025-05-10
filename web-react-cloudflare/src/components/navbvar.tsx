import { AppBar, Toolbar, Typography, Box, Button, IconButton, styled } from '@mui/material';
import type { LinkProps } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import CloudIcon from "@mui/icons-material/Cloud"
import TranslateIcon from '@mui/icons-material/Translate';
import React from 'react';

const RetroAppBar = styled(AppBar)(({ theme }) => ({
    background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)',
    boxShadow: '0 4px 20px rgba(123, 31, 162, 0.5)',
    borderBottom: '1px solid #f0abfc',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #f0abfc, #818cf8, #38bdf8, #f0abfc)',
        backgroundSize: '200% 100%',
        animation: 'retroGradient 4s linear infinite',
    },
    '@keyframes retroGradient': {
        '0%': { backgroundPosition: '0% 0%' },
        '100%': { backgroundPosition: '200% 0%' },
    },
}));

const RetroToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem'
});

const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  });
  
const GlowingCloudIcon = styled(CloudIcon)({
    color: '#fda4af',
    filter: 'drop-shadow(0 0 8px #fb7185)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.1)',
        filter: 'drop-shadow(0 0 12px #fb7185)',
    },
});

const GlowingTranslateButton = styled(TranslateIcon)({
    color: '#fda4af',
    filter: 'drop-shadow(0 0 8px #fb7185)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.1)',
        filter: 'drop-shadow(0 0 12px #fb7185)',
    },
})

const RetroTypography = styled(Typography)({
    fontFamily: '"Chakra Petch", "Orbitron", sans-serif',
    fontWeight: 700,
    background: 'linear-gradient(90deg, #fb7185 0%, #fda4af 30%, #fef3c7 50%, #93c5fd 70%, #38bdf8 100%)',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 5px rgba(251, 113, 133, 0.6)',
    letterSpacing: '1px',
});

const NavButtonsContainer = styled(Box)({
    display: 'flex',
    gap: '0.5rem',
});

interface ButtonLinksProps extends LinkProps {
    children?: React.ReactNode;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinksProps>((props, ref) => (
    <RouterLink ref={ref} {...props} />
))

const RetroButton = styled(Button)<{ component?: React.ElementType; to?: string }>({
    color: '#f1f5f9',
    fontSize: '0.85rem',
    fontFamily: '"Chakra Petch", sans-serif',
    fontWeight: 600,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    borderRadius: '4px',
    padding: '4px 12px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #fda4af, transparent)',
        transform: 'translateX(-100%)',
        transition: 'transform 0.4s ease',
    },
    '&:hover': {
        backgroundColor: 'rgba(251, 113, 133, 0.1)',
        '&::after': {
        transform: 'translateX(100%)',
        },
    },
});

const LoginButton = styled(Button)<{ component?: React.ElementType; to?: string }>({
    color: '#1e293b',
    background: 'linear-gradient(90deg, #fb7185 0%, #38bdf8 100%)',
    fontFamily: '"Chakra Petch", sans-serif',
    fontWeight: 700,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    borderRadius: '4px',
    padding: '6px 16px',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 10px rgba(251, 113, 133, 0.5)',
    '&:hover': {
        background: 'linear-gradient(90deg, #f43f5e 0%, #0ea5e9 100%)',
        boxShadow: '0 0 15px rgba(251, 113, 133, 0.7)',
        transform: 'translateY(-2px)',
    },
});

const RetroStyles = () => (
    <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&family=Orbitron:wght@400;600;700&display=swap');
        `}
    </style>
);

export default function Navbar() {
    return (
        <>
            <RetroStyles />
            <RetroAppBar>
                <RetroToolBar>
                    <LogoContainer>
                        <IconButton edge='start' color='inherit' sx={{ p: 0 }}>
                            <GlowingCloudIcon fontSize='large' />
                        </IconButton>
                        <RetroTypography variant='h5'>
                            VHS Cloud
                        </RetroTypography>
                    </LogoContainer>
                    <NavButtonsContainer>
                        <RetroButton color='inherit' component={ButtonLink} to='/'>
                            Main
                        </RetroButton>
                        <RetroButton color='inherit' component={ButtonLink as React.ElementType} to='/plans'>
                            Plans
                        </RetroButton>
                        <RetroButton color='inherit' component={ButtonLink} to='/docs'>
                            Docs
                        </RetroButton>
                        <RetroButton color='inherit' component={ButtonLink} to='/dashboard'>
                            Dashboard
                        </RetroButton>
                        <RetroButton color='inherit' component={ButtonLink} to='/soft'>
                            DeadNET
                        </RetroButton>
                        <LoginButton color='inherit' component={ButtonLink} to='/login'>
                            Login
                        </LoginButton>
                        <IconButton>
                            <GlowingTranslateButton />
                        </IconButton>
                    </NavButtonsContainer>
                </RetroToolBar>
            </RetroAppBar>
        </>
    )
}