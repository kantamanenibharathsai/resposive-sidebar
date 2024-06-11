const respSidebarStyles = {
    sidebarCont: {
        width: "256px",
        height: "100vh",
        display: "flex",
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: "24px",
        borderRadius: '30px',
        gap: "20px"
        
    },

    headerCont: {
        display: "flex",
        gap:'20px',
        pb: "20px",
        borderBottom: '1px solid #f6f6f6'
    },

    userImgCont: {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        overflow: 'hidden',
        "& img": {
            width: "100%",
            objectFit: "cover"
        }
    },

    userDetailsCont: {

    },

    title: {
        fontSize:'10px',
        fontWeight: '500',
        color: '#757575',
        textTransform: 'uppercase',
        marginBottom: "10px"
    },

    name: {
        fontSize:'14px',
        fontWeight: '500',
    },

    navCont: {

    },


    menuCont: {
        "& p": {
            fontSize:'10px',
            fontWeight: '500',
            color: '#757575',
            textTransform: 'uppercase',
            marginBottom: "10px",
            // border: "2px solid red"
        },
        "& ul li:not(.drop-down)": {
            listStyle: "none",
            marginBottom: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#757575',
            padding: '12px 8px',
            borderRadius: "8px",
            // border: "2px solid red",
            transition: "all 0.3s ease",
            cursor: 'pointer'
        },
        // "& ul li:hover": {
        //   color: "#000",
        //   backgroundColor: '#f6f6f6'
        // },
        "& ul li.drop-down-li": {
            listStyle: "none",
            marginBottom: '5px',
            transition: "all 0.3s ease",
            cursor: 'pointer'
        },
        "& ul li .drop-down": {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#757575',
            width: "100%",
            // border: "1px solid red"
        },
        "& ul li:hover.active": {
            color: "#000",
            backgroundColor: '#f6f6f6'
          },
          "& ul li svg": {
            fontSize: '20px'
          },
          "& .text": {
            flex: 1,
          },
          "& ul li .drop-down .arrowIcon": {
            fontSize: '14px'
          }
    }
}

export default respSidebarStyles