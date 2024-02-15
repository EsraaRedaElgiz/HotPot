import { Grid, Typography } from "@mui/material"
import e from '../../assets/e.jpg'
import t from '../../assets/t.jpg'
import indian from '../../assets/2.jpg'
import chines from '../../assets/3.jpg'
import u from '../../assets/4.jpg'
import v from '../../assets/5.jpg'
import ShopCard from "../shopCard/OurShopCard"
import styles from "./styles.module.css"
const catogires = [
    { img: t, name: "Turkish Spices", price: "$30/100g" },
    { img: indian, name: "Indian Spices", price: "$15/100g" },
    { img: chines, name: "Chinese Spices", price: "$20/100g" },
    { img: u, name: "Ukrainian Spices", price: "$15/100g" },
    { img: e, name: "Egyptian Spices", price: "$20/100g" },
    { img: v, name: "Vietnamese Spices", price: "$25/100g" }

]
function Cards() {
    return (
        <>
            <div className={styles.cardsContainer}>
                <Typography variant="h3"
                    component="div"
                    sx={{ flexGrow: 1, color: "#66BB55", display: { xs: "block" }, mb: 1 }}>
                    Our Shop
                </Typography>
                <Typography variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, color: "#fff", display: { xs: "block" }, mb: 4 }}>
                    choose the spices blend that suits you
                </Typography>
            </div>
            <Grid container spacing={1}  >
                {catogires.map((item,index) => {
                    return (
                        <Grid item xs={12} sm={4} key={index}>
                            <Grid item xs={12} sm={11}>
                                <ShopCard img={item.img} name={item.name} price={item.price} />
                            </Grid>
                        </Grid>)
                })}

            </Grid>
        </>
    )
}
export default Cards;