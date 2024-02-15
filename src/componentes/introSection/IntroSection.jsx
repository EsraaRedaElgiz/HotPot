import { Button, Grid, Typography } from '@mui/material';

function IntroSection() {
    return (
        < >

            <Typography
                variant="h2"
                component="div"
                sx={{ flexGrow: 1, color: "#fff", display: 'block', mb: 1 }}
            >
                High Quality Spices
                <Typography variant="h2"
                    component="div"
                    sx={{ flexGrow: 1, color: "#fff", display: { xs: "none", sm: 'block' }, mb: 1 }}>
                    For Our Dish
                </Typography>
            </Typography>
            <Grid container spacing={2} alignItems="center" >
                <Grid item xs={12} sm={6}>
                    <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ flexGrow: 1, color: "#fff", display: 'inline', mb: 1 }}
                    >
                        only the Highst quality varites are collected from <br></br>the best plantation in the world
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} sx={{
                    direction: "row",
                    display: "flex",
                    justifyContent: { xs: "flex-end", sm: "flex-start" },
                }} >
                    <Button sx={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#66BB55", color: "#fff" }} >
                        shop
                    </Button>
                </Grid>
            </Grid>

        </>
    )
}
export default IntroSection;