import { Box, Typography } from "@mui/material"
import respSidebarStyles from "./ResponsiveSidebar.Styles"
import { MdDashboard } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiUser } from "react-icons/ci";






const ResponsiveSidebar = () => {


    return (

        <Box sx={respSidebarStyles.sidebarCont}>
            <Box sx={respSidebarStyles.headerCont}>
                <Box sx={respSidebarStyles.userImgCont}>
                    <Box component="img" alt="user-img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s"} />
                </Box>
                <Box sx={respSidebarStyles.userDetailsCont}>
                    <Typography sx={respSidebarStyles.title}>web developer</Typography>
                    <Typography sx={respSidebarStyles.name}>Bharath</Typography>
                </Box>
            </Box>
            <Box>
                <Box sx={respSidebarStyles.navCont}>
                    <Box sx={respSidebarStyles.menuCont}>
                        <Typography component="p">Main</Typography>
                        <Box component="ul">
                            <Box component={"li"} className="active">
                                <MdDashboard/>
                                <Box component="span">
                                        Dashboard
                                </Box>
                            </Box>


                            <Box component={"li"} className="drop-down-li">
                                <Box className="drop-down">
                                <CiUser/>
                                <Box component="span" className="text">
                                        Users
                                </Box>
                                <MdKeyboardArrowDown className="arrowIcon"/>
                                </Box>
                            </Box>


                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}



export default ResponsiveSidebar