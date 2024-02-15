import { Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "../../assets/persion1.jpg"
import p2 from "../../assets/person2.jpg"
import p3 from "../../assets/person3.jpg"
import p4 from '../../assets/p4.jpg'

import ReviewCard from "../reviewCard/ReviewCard";
import styles from "./styles.module.css"
function ReviewSection() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            // partialVisibilityGutter
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,

        }
    };
    const arrayOfReviews = [{ img: p1, name: "Anna", review: "cool online store! You were advised by my friends, now i'm your regular customer:)" }
        , { img: p2, name: "Mark", review: "I have orderd many times here!Satisfied product quality :as always on top!" }
        , { img: p4, name: "vicky", review: "High quality spices,always big selection and fast delivery. i recommend!" },
    { img: p3, name: "John", review: "Satisfied product quality" }]
    return (
        <div>
            <Typography
                variant="h4"
                component="span"
                sx={{ flexGrow: 1, color: "#383838", display: 'block', mb: 1, textAlign: "center" }}
            >
                Your reviews
            </Typography>
            <Typography
                variant="h6"
                component="span"
                sx={{ flexGrow: 1, color: "#383838", display: 'block', textAlign: "center", mb: 1 }}
            >
                Satisfied customers are the main principle of our company!
            </Typography>
            <div className={styles.carouselContainer}>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={false}
                    infinite={true}
                    showDots={true}
                    dotListClass="custom-dot-list-style"
                    containerClass="container"
                    removeArrowOnDeviceType={["mobile"]}


                >
                    {arrayOfReviews.map((item, index) => {
                        return (
                            <div className={styles.eachReviewContainer} key={index}>
                                <ReviewCard img={item.img} name={item.name} review={item.review} />
                            </div>)
                    })}

                </Carousel>
            </div>

        </div>
    )
}
export default ReviewSection;
//removeArrowOnDeviceType={["tablet", "mobile"]}
// deviceType="ff"