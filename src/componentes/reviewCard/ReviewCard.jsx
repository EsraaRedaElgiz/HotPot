import { Typography } from "@mui/material";
import styles from "./styles.module.css"
import globalImg from "../shopCard/styles.module.css"
import { LazyLoadImage } from "react-lazy-load-image-component";

function ReviewCard(props) {
const {img,name,review}=props
    return (
        <div  className={styles.reviewCardContainer}>
            <LazyLoadImage src={img} className={globalImg.img} alt="Logo" style={{ width: "80%",height:"200px", borderRadius: "50%" }} />
            <Typography
                variant="h5"
                fontWeight="bold"
                component="div"
                sx={{ flexGrow: 1, display: "block", color: "#383838",mt:1,fontSize:{xs:"15px",sm:"18px"} ,textAlign:"center"}}
            >
                {name}
            </Typography>
            <Typography
                variant="body1"
                component="div"
                sx={{ flexGrow: 1, display: "block", color: "#383838",fontSize:{xs:"15px",sm:"18px"}  ,textAlign:"center"}}
            >
                {review}
            </Typography>
            
        </div>
    )
}
export default ReviewCard;