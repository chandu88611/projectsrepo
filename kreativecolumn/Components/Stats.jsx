import { Box } from "@mui/material";
import {
  BsPeopleFill,
  BsFillBuildingsFill,
  BsHouseCheckFill,
  BsCalendar4,
} from "react-icons/bs";

function Stats() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          md: "20% 20% 20% 20%",
          sm: "40% 40%",
          xs: "50% 50%",
        },
        p: "20px",
        justifyContent: "center",
        gap: "20px",
        textAlign: "center",
        position: "relative",
        backgroundImage: `url(/Aboutus.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          p: { md: "20px", xs: "5px" },
          color: "white",
          zIndex: 2,
          fontSize: { md: "23px", xs: "18px" },
        }}
      >
        <BsPeopleFill size="40px" style={{ color: "orange" }} />

        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Workforce</span>
        <br />
        <br />
        <span style={{}}>400+</span>
      </Box>

      <Box
        sx={{
          p: { md: "20px", xs: "5px" },
          color: "white",
          zIndex: 2,
          fontSize: { md: "23px", xs: "18px" },
        }}
      >
        <BsCalendar4 size="40px" style={{ color: "orange" }} />
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Experience</span>
        <br />
        <br />
        <span>15+</span>
      </Box>

      <Box
        sx={{
          p: { md: "20px", xs: "5px" },
          color: "white",
          zIndex: 2,
          fontSize: { md: "23px", xs: "18px" },
        }}
      >
        <BsFillBuildingsFill size="40px" style={{ color: "orange" }} />
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Built up area</span>
        <br />
        <br />
        <span>3,00,000+</span>
      </Box>
      <Box
        sx={{
          p: { md: "20px", xs: "5px" },
          color: "white",
          zIndex: 2,
          fontSize: { md: "23px", xs: "18px" },
        }}
      >
        <BsHouseCheckFill size="40px" style={{ color: "orange" }} />
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>Projects delivered </span>
        <br />
        <br />
        <span>15+</span>
      </Box>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          background: "rgb(0,0,0,.5)",
          width: "100%",
        }}
      ></Box>
    </Box>
  );
}

export default Stats;
