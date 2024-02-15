import { Grid, Typography } from "@mui/material";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import onion from '../../assets/onion.png'
function LoveSection() {
    return (
        <Grid container  display="flex" flexDirection="row" alignItems="center"  >
            <Grid item xs={2} display="flex" flexDirection="row" justifyContent="flex-end" >
                <FilterVintageIcon  sx={{fontSize:"150px",color:"gray",width:"100%"}}  />
            </Grid>
            <Grid item xs={8} display="flex" flexDirection="column"  >

                <Typography
                    variant="h4"
                    component="span"
                    sx={{ flexGrow: 1, color: "#383838", display: 'inline', mb: 1 ,textAlign:"center"}}
                >
                    it's love at the first grain!
                </Typography>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{ flexGrow: 1, color: "#383838", display: 'inline', textAlign:"center" }}
                >
                    with our spices your dishes will take on a completly new look,hints of impeccable taste.
                </Typography>
            </Grid>
            <Grid item xs={2} >
            <img src={onion} alt="Logo" style={{ width: "100%",height:"150px" }} />

            </Grid>
        </Grid>
    )
}
export default LoveSection;