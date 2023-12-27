import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { DeleteOutlineOutlined, ModeEditOutlineOutlined, VisibilityOutlined } from "@mui/icons-material";

export const DisplayCard = ()=>{
    return(
        <>
        <Card
            sx={{
                width:'370px',
                height:'400px'
            }}
        >
            <CardMedia
                component={'img'}
                height={'200px'}
                image="/Images/test pic 1.jpeg"
                alt="picture placeholder"
            />
            <CardContent>
                <Typography variant="h2" gutterBottom component={'div'}>
                    RoboFriends
                </Typography>
                <Typography variant="h3">
                    This text is a placeholder and will be changed when i get the DB working
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    mt:4
                }}
            >
                <Button
                    size="small"
                >
                    <Typography
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-around'
                        }}
                    >
                        <ModeEditOutlineOutlined/>
                        Edit
                    </Typography>
                </Button>
                <Button
                    size="small"
                >
                    <Typography
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-around'
                        }}
                    >
                        <DeleteOutlineOutlined/>
                        Delete
                    </Typography>
                </Button>
                <Button
                    size="small"
                >
                    <Typography
                        sx={{
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-around'
                        }}
                    >
                        <VisibilityOutlined/>
                        Hide
                    </Typography>
                </Button>
            </CardActions>
        </Card>
            
        </>
    )
}