import { Button, Grid, Typography } from "@mui/material";
import { animated, useInView } from '@react-spring/web'
function GroupImages(props) {
    const { textForFirstItem, firstItemImg, secondImgInfirstColumn, firstImgInSecondColumn, leftImgInSecondColumn, textButonInrightPartInSecondColumn, imgInrightPartInSecondColumn } = props
    const [ref1, springs1] = useInView(() => ({
        from: { x: -100 }, to: { x: 0 },
    }))
    const [ref2, springs2] = useInView(() => ({
        from: { x: -100, },
        to: { x: 0 },
    }))
    const [ref3, springs3] = useInView(() => ({
        from: { x: -100, },
        to: { x: 0 },

    }))
    const [ref4, springs4] = useInView(() => ({
        from: { x: -100, },
        to: { x: 0 },
    }))
    const [ref5, springs5] = useInView(() => ({
        from: { x: -100, },
        to: { x: 0 },

    }))
    return (
        <Grid container spacing={2}  >
            <Grid item xs={12} sm={6} display="flex" flexDirection="column">
                <animated.div ref={ref1} style={{ ...springs1, marginBottom: "2%" }}>

                    {textForFirstItem ?
                        <Typography
                            variant="h6"
                            component="span"
                            sx={{ flexGrow: 1, color: "#383838", display: 'inline' }}
                        >
                            {textForFirstItem}
                        </Typography>
                        : firstItemImg ?
                            <img
                                
                                src={firstItemImg}
                                alt="Logo"
                                style={{ width: "100%", height: "150px", borderRadius: "20px" }} />
                            : null
                    }

                </animated.div>
                <animated.div ref={ref2} style={{ ...springs2 }}>
                    <img src={secondImgInfirstColumn}  alt="Logo" style={{ width: "100%", height: "400px", borderRadius: "20px" }} />
                </animated.div>
            </Grid>
            <Grid item xs={12} sm={6} display="flex" flexDirection="column" justifyContent="space-between"  >
                <Grid sx={{ display: { xs: "none", sm: "block" } }}>
                    <animated.div ref={ref3} style={{ ...springs3, marginBottom: "2%" }}>

                        <img src={firstImgInSecondColumn} alt="Logo"  style={{ width: "100%", height: "400px", borderRadius: "20px" }} />
                    </animated.div>
                </Grid>
                <Grid container display="flex" direction="row" spacing={2}>
                    <Grid item xs={6} sm={6} >
                        <animated.div ref={ref4} style={{ ...springs4, marginBottom: "2%" }}>
                            <img src={leftImgInSecondColumn}  alt="Logo" style={{ width: "100%", height: "150px", borderRadius: "20px" }} />
                        </animated.div>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <animated.div ref={ref5} style={{ ...springs5, width: "65%", height: "150px" }}>
                            {textButonInrightPartInSecondColumn ?
                                <Button sx={{ width: "100%", height: "100%", borderRadius: "50%", border: "1px solid #66BB55", color: "#383838" }} >
                                    {textButonInrightPartInSecondColumn}
                                </Button> :
                                imgInrightPartInSecondColumn ?
                                    <img  src={imgInrightPartInSecondColumn} style={{ width: "100%", height: "100%", borderRadius: "50%" }} /> :
                                    null
                            }

                        </animated.div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default GroupImages;