import {  Typography } from "@mui/material";
import about1 from '../../assets/about1.jpg'
import about2 from '../../assets/about2.jpg'
import a5 from "../../assets/a5.jpg"
import GroupImages from "../groupImages/GropImages";
import styles from "./styles.module.css"

function AboutUs() {
   
    return (
        <div className={styles.containerItems} >
            <Typography variant="h3"
                component="div"
                sx={{ flexGrow: 1, color: "#383838", display: { xs: "block" }, mb: 2 }}>
                About Us
            </Typography>

            <GroupImages textForFirstItem="Our online store is not just marketplace withgoods. We know every condiment features of its use, remember the entire range.Our goods are of guaranteed high quality and always Fresh. Welcome to our exquisite collection of authentic spices!"
                secondImgInfirstColumn={about1}
                firstImgInSecondColumn={about2}
                leftImgInSecondColumn={a5}
                textButonInrightPartInSecondColumn="More"
            />

        </div>
    )
}
export default AboutUs;