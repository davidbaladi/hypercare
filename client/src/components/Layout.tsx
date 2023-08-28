import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';

interface LayoutProps {
    children: [ReactNode, ReactNode];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Grid container gap={2} sx={{ height: "75%", overflow: 'hidden', border: '3px solid black', borderRadius: '4px', margin: "0 auto" }} flexDirection="row" columns={2}>
            <Grid item flex={1} sx={{ height: "100%", overflow: 'hidden', overflowY: "auto" }}>
                {children[0]}
            </Grid>
            <Grid item flex={1}  >
                {children[1]}
            </Grid>
        </Grid >
    )
}

export default Layout