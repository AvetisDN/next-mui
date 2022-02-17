import { Box, Button, Container, Paper } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Head>
                <title>MUI5 Next App</title>
            </Head>

            <Container sx={{ my: 2 }}>
                <Paper>
                    <Box
                        padding={2}
                        display="flex"
                        flexDirection={"row"}
                        gap={2}
                    >
                        <Button variant="contained" color="primary">
                            primary
                        </Button>
                        <Button variant="contained" color="secondary">
                            secondary
                        </Button>
                        <Button variant="contained" color="error">
                            error
                        </Button>
                        <Button variant="contained" color="warning">
                            warning
                        </Button>
                        <Button variant="contained" color="info">
                            info
                        </Button>
                        <Button variant="contained" color="success">
                            success
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}
