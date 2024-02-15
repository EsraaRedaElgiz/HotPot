import { Button, Typography } from "@mui/material";
import styles from "./styles.module.css"
import { LazyLoadImage } from "react-lazy-load-image-component";
function ShopCard(props) {
const {img,name,price}=props

    return (
        <div  className={styles.cardStyle}>
            <LazyLoadImage src={img} alt="Logo"  className={`${styles.imgStyle} ${styles.img}`} />
            <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, display: "block", color: "#8B9A46",mt:1,fontSize:{xs:"15px",sm:"18px"},textAlign:"center" ,fontWeight:"bold"}}
            >
                {name}
            </Typography>
            <Typography
                variant="body1"
                component="div"
                sx={{ flexGrow: 1, display: "block", color: "#fff",mb:2,fontSize:{xs:"15px",sm:"18px"},textAlign:"center" }}
            >
                {price}
            </Typography>
            <Button  sx={{ backgroundColor: "#f58840", width: "70%" ,color:"#383838",fontWeight:"bold",textTransform:"none",":hover":{backgroundColor:"grey"}}}>Order</Button>
        </div>
    )
}
export default ShopCard;