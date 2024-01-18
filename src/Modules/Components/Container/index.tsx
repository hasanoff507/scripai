import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Define the props type if you need to accept other props besides children
type ContainerFullProps = {
    children?: React.ReactNode;
}

const ContainerFull: React.FC<ContainerFullProps> = ({ children }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" style={{maxWidth:"unset", paddingLeft:'20px !important', paddingRight:'20px !important'}}>
                {children} {/* Render the children here */}
            </Container>
        </React.Fragment>
    );
}

export default ContainerFull;
