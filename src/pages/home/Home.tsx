import { Box } from "@mui/material"
import homeStyles from "./Home.Styles"
import ResponsiveSidebar from "../../components/responsive_sidebar/ResponsiveSidebar"





const Home= () => {


    return(
        <Box sx={homeStyles.homeCont}>
            <ResponsiveSidebar/>
        </Box>
    )
}


export default Home