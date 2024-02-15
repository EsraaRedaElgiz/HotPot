import GroupImages from "../groupImages/GropImages";
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from "../../assets/5.jpg"
import { Typography } from "@mui/material";

function SpicesVibe() {
    return (
        <>
            <Typography variant="h3"
                component="div"
                sx={{ flexGrow: 1, color: "#383838", display: { xs: "block" }, mb: 2 }}>
                Spices Vibe
            </Typography>
            <GroupImages firstItemImg={img1} secondImgInfirstColumn={img2} firstImgInSecondColumn={img3} leftImgInSecondColumn={img4} imgInrightPartInSecondColumn={img5} />

        </>
    )
}
export default SpicesVibe;