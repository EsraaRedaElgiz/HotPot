import { Button, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css"
import NorthIcon from '@mui/icons-material/North';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Fotter(props) {
    const { handleClick } = props

    return (
        <Grid container display="flex" flexDirection="row"   >
            <Grid item xs={3} display="flex" flexDirection="row" justifyContent="flex-end" ></Grid>
            <Grid item xs={6} display="flex" flexDirection="column" alignItems="center" sx={{ textAlign: "center" }} ><LocalFireDepartmentIcon sx={{ color: "#fff" }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#8B9A46", mb: 3 }}>HotPot</Typography>
                <Typography variant="body2" component="div" sx={{ flexGrow: 1, color: "#fff", mb: 2 }}>
                    <LocationOnIcon sx={{ color: "#fff", fontSize: "inherit" }} /> st.Primorskaya,27
                </Typography>
                <hr style={{ width: "100%" }}></hr>
                <div className={styles.iconsContainer}>
                    <Typography variant="body2" component="span" sx={{ mx: 1, my: 2 }}>
                        <WhatsAppIcon sx={{ color: "#8B9A46", fontSize: "large" }} />
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ color: "#fff", mx: 1, my: 2 }}>
                        <InstagramIcon sx={{ color: "#8B9A46", fontSize: "large" }} />
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ color: "#fff", mx: 1, my: 2 }}>
                        <YouTubeIcon sx={{ color: "#8B9A46", fontSize: "large" }} />
                    </Typography>
                </div>

                <Typography
                    variant="body2"
                    component="div"
                    sx={{ flexGrow: 1, color: "grey", textAlign: "center" }}
                >
                    *Pictures were taken from freepik.com and unsplash.com for educational purposes.
                </Typography>
                <Typography variant="body2" component="div" sx={{ flexGrow: 1, color: "grey", textAlign: "center", display: "flex", flexDirection: "row" }}>
                    *&#169; 2023 created by Zhanna Vasylieva. All rights reserved.
                </Typography>
            </Grid>
            <Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }} >
                <Button sx={{ width: "20%", height: "20%", borderRadius: "50%", border: "3px solid #f58840" }} onClick={handleClick}  >
                    <NorthIcon sx={{ color: "#f58840", fontSize: "inhert" }} />
                </Button>

            </Grid>
        </Grid>
    )
}
export default Fotter;