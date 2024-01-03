import { Button, Paper, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"


export const ForgotPass = ({onClose})=>{
    return(
        <>
            <Paper
                elevation={0}
                sx={{
                    width:'30rem',
                    height:'15rem',
                    p:'2.5rem'
                }}
            >
                <Typography
                    variant="h1"
                    align="center"
                >
                    Forgot your credentials?
                </Typography>
                <Typography
                    variant="h3"
                    align="center"
                    mt={3}
                >
                    Try using
                </Typography>
                <Typography
                    variant="h3"
                    align="center"
                    mt={1}
                >
                    Email: veziv@veziv.com
                </Typography>
                <Typography
                    variant="h3"
                    align="center"
                    mt={0.5}
                >
                    Password: veziv123
                </Typography>
                <Stack
                    direction={'row'}
                    justifyContent={'center'}
                    spacing={15}
                    mt={8}
                >
                    <Button
                        onClick={onClose}
                        variant="outlined"
                        sx={{
                            width:'9rem',
                            height:'2rem'
                        }}
                    >
                        <Typography>
                            Cancel
                        </Typography>
                    </Button>
                    <Link to={'/profile'}>
                        <Button
                            variant="contained"
                            sx={{
                                width:'9rem',
                                height:'2rem'
                            }}
                        >
                            <Typography>
                                Confirm
                            </Typography>
                        </Button>
                    </Link>
                </Stack>
            </Paper>
        </>
    )
}