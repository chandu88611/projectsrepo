import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import {
  FaDraftingCompass,
  FaBuilding,
  FaPaintRoller,
  FaDoorOpen,
} from "react-icons/fa";
import {
  MdOutlineElectricalServices,
  MdOtherHouses,
  MdOutlineBathtub,
} from "react-icons/md";
// import BathtubIcon from '@mui/icons-material/Bathtub';
// import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import { TbHierarchy2 } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GrSquare } from "react-icons/gr";

// import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';

function Package({
  dd1,
  dd2,
  dd3,
  pack,
  ss1,
  ss2,
  ss3,
  ss4,
  ss5,
  ss6,
  kk1,
  kk2,
  kk3,
  kk4,
  bb1,
  bb2,
  bb3,
  bb4,
  ddo1,
  ddo2,
  ddo3,
  ddo4,
  pp1,
  pp2,
  ff1,
  ff2,
  ff3,
  ff4,
  ff5,
  ee1,
  ee2,
  mm1,
  mm2,
  mm3,
  mm4,
}) {
  const [state, setState] = useState(false);

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);
  const [state7, setState7] = useState(false);
  const [state8, setState8] = useState(false);
  const [state9, setState9] = useState(false);

  const [packu, setpacku] = useState("");

  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [d3, setD3] = useState("");
  const [s1, sets1] = useState("");
  const [s2, sets2] = useState("");
  const [s3, sets3] = useState("");
  const [s4, sets4] = useState("");
  const [s5, sets5] = useState("");
  const [s6, sets6] = useState("");

  const [k1, setk1] = useState("");
  const [k2, setk2] = useState("");
  const [k3, setk3] = useState("");
  const [k4, setk4] = useState("");
  const [b1, setb1] = useState("");
  const [b2, setb2] = useState("");
  const [b3, setb3] = useState("");
  const [b4, setb4] = useState("");
  const [do1, setdo1] = useState("");
  const [do2, setdo2] = useState("");
  const [do3, setdo3] = useState("");
  const [do4, setdo4] = useState("");
  const [p1, setp1] = useState("");
  const [p2, setp2] = useState("");
  const [f1, setf1] = useState("");
  const [f2, setf2] = useState("");
  const [f3, setf3] = useState("");
  const [f4, setf4] = useState("");
  const [f5, setf5] = useState("");
  const [e1, sete1] = useState("");
  const [e2, sete2] = useState("");
  const [m1, setm1] = useState("");
  const [m2, setm2] = useState("");

  const [m3, setm3] = useState("");
  const [m4, setm4] = useState("");

  useEffect(() => {
    setD1(dd1);
    setD2(dd2);
    setD3(dd3);
    sets1(ss1);
    sets2(ss2);

    sets3(ss3);
    setpacku(pack);
    sets4(ss4);
    sets6(ss6);
    sets5(ss5);
    setb1(bb1);
    setb2(bb2);
    setb3(bb3);
    setb4(bb4);
    setdo1(ddo1);
    setdo2(ddo2);
    setdo3(ddo3);
    setdo4(ddo4);
    setp1(pp1);
    setp2(pp2);
    setf1(ff1);
    setf2(ff2);
    setf3(ff3);
    setf4(ff4);
    setf5(ff5);
    setk1(kk1);
    setk2(kk2);
    setk3(kk3);
    setk4(kk4);
    sete1(ee1);
    sete2(ee2);
    setm1(mm1);
    setm2(mm2);

    setm3(mm3);
    setm4(mm4);
  }, []);

  const toggle = (stateToChange) => {
    switch (stateToChange) { 
      case "state":
        setState(true);
        setState1(false);

        setState2(false);
        setState3(false);
        setState5(false);
        setState6(false);
        setState7(false);
        setState8(false);
        setState9(false);
        if (state === true) {
          setState(false);
        }
        break;
      case "state1":
        setState(false);

        setState1(true);
        setState2(false);
        setState3(false);
        setState5(false);
        setState6(false);
        setState7(false);
        setState8(false);
        setState9(false);
        if (state1 === true) {
          setState1(false);
        }
        break;
      case "state2":
        setState1(false);
        setState(false);

        setState2(true);
        setState3(false);
        setState5(false);
        setState6(false);
        setState7(false);
        setState8(false);
        setState9(false);
        if (state2 === true) {
          setState2(false);
        }
        break;
      case "state3":
        setState1(false);
        setState(false);

        setState2(false);
        setState3(true);
        setState5(false);
        setState6(false);
        setState7(false);
        setState8(false);
        setState9(false);
        if (state3 === true) {
          setState3(false);
        }
        break;
      case "state5":
        setState1(false);
        setState(false);

        setState2(false);
        setState5(true);
        setState3(false);
        setState6(false);
        setState7(false);
        setState8(false);
        setState9(false);
        if (state5 === true) {
          setState5(false);
        }
        break;
      case "state6":
        setState1(false);
        setState(false);

        setState2(false);
        setState6(true);
        setState5(false);
        setState3(false);
        setState7(false);
        setState8(false);
        setState9(false);
        if (state6 === true) {
          setState6(false);
        }
        break;
      case "state7":
        setState1(false);
        setState(false);

        setState2(false);
        setState7(true);
        setState5(false);
        setState6(false);
        setState3(false);
        setState8(false);
        setState9(false);
        if (state7 === true) {
          setState7(false);
        }
        break;
      case "state8":
        setState1(false);
        setState(false);

        setState2(false);
        setState8(true);
        setState5(false);
        setState6(false);
        setState7(false);
        setState3(false);
        setState9(false);
        if (state8 === true) {
          setState8(false);
        }
        break;
      case "state9":
        setState1(false);
        setState(false);

        setState2(false);
        setState9(true);
        setState5(false);
        setState6(false);
        setState7(false);
        setState8(false);
        setState3(false);
        if (state9 === true) {
          setState9(false);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Box sx={{ background: "white", boxShadow: "1px 1px 5px gray" }}>
      <Box
        sx={{
          pt: 3,
          pb: 3,
          background: "rgb(216, 159, 13)",
          color: "white",
          textAlign: "center",
          fontSize: { md: "25px", sm: "23px", xs: "20px" },
        }}
      >
        <span>{packu}</span>
      </Box>
      <Box
        sx={{ borderBottom: "1px solid rgb(200,200,200,.5)" }}
        className="anme2"
        onClick={() => toggle("state")}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Box sx={{ fontSize: "18px", p: "6px" }}>
            <FaDraftingCompass color="rgb(216, 159, 13)" /> Design & Drawings
          </Box>{" "}
          <Box sx={{ fontWeight: "bold" }}>
            {state ? (
              <MdKeyboardArrowUp
                onClick={() => setState(false)}
                style={{ cursor: "pointer" }}
                size="35px"
              />
            ) : (
              <MdKeyboardArrowDown
                size="35px"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("state")}
              />
            )}
          </Box>
        </Box>
        {state ? (
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              pb: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
            }}
          >
            {d1} <br />
            {d2} <br />
            {d3} <br />
          </Box>
        ) : (
          ""
        )}
      </Box>

      <Box
        sx={{ borderBottom: "1px solid rgb(200,200,200,.5)" }}
        className="anme2"
        onClick={() => toggle("state3")}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Box sx={{ fontSize: "18px", p: "6px" }}>
            <TbHierarchy2 color="rgb(216, 159, 13)" /> Structure
          </Box>{" "}
          <Box sx={{ fontWeight: "bold" }}>
            {state3 ? (
              <MdKeyboardArrowUp
                onClick={() => setState3(false)}
                style={{ cursor: "pointer" }}
                size="35px"
              />
            ) : (
              <MdKeyboardArrowDown
                style={{ cursor: "pointer" }}
                size="35px"
                onClick={() => toggle("state3")}
              />
            )}
          </Box>
        </Box>
        {state3 ? (
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              pb: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
            }}
            className="anme"
          >
            {s1} <br />
            {s2} <br />
            {s3} <br />
            {s4} <br />
            {s5} <br />
            {s6} <br />
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{ borderBottom: "1px solid rgb(200,200,200,.5)" }}
        className="anme2"
        onClick={() => toggle("state1")}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Box sx={{ fontSize: "18px", p: "6px" }}>
            <GiForkKnifeSpoon color="rgb(216, 159, 13)" /> Kitchen
          </Box>{" "}
          <Box sx={{ fontWeight: "bold" }}>
            {state1 ? (
              <MdKeyboardArrowUp
                onClick={() => setState1(false)}
                style={{ cursor: "pointer" }}
                size="35px"
              />
            ) : (
              <MdKeyboardArrowDown
                size="35px"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("state1")}
              />
            )}
          </Box>
        </Box>
        {state1 ? (
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              pb: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
            }}
            className="anme"
          >
            {k1} <br />
            {k2} <br />
            {k3} <br />
            {k4} <br />
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{ borderBottom: "1px solid rgb(200,200,200,.5)" }}
        className="anme2"
        onClick={() => toggle("state2")}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Box sx={{ fontSize: "18px", p: "6px" }}>
            <MdOutlineBathtub color="rgb(216, 159, 13)" /> Bathroom
          </Box>{" "}
          <Box sx={{ fontWeight: "bold" }}>
            {state2 ? (
              <MdKeyboardArrowUp
                onClick={() => setState2(false)}
                style={{ cursor: "pointer" }}
                size="35px"
              />
            ) : (
              <MdKeyboardArrowDown
                size="35px"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("state2")}
              />
            )}
          </Box>
        </Box>
        {state2 ? (
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              pb: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
            }}
            className="anme"
          >
            {b1} <br />
            {b2} <br />
            {b3} <br />
            {b4} <br />
          </Box>
        ) : (
          ""
        )}
      </Box>

      <Box
        sx={{ borderBottom: "1px solid rgb(200,200,200,.5)" }}
        className="anme2"
        onClick={() => toggle("state5")}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Box sx={{ fontSize: "18px", p: "6px" }}>
            <FaDoorOpen color="rgb(216, 159, 13)" /> Doors & Windows
          </Box>{" "}
          <Box sx={{ fontWeight: "bold" }}>
            {state5 ? (
              <MdKeyboardArrowUp
                onClick={() => setState5(false)}
                style={{ cursor: "pointer" }}
                size="35px"
              />
            ) : (
              <MdKeyboardArrowDown
                size="35px"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("state5")}
              />
            )}
          </Box>
        </Box>
        {state5 ? (
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              pb: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
            }}
            className="anme"
          >
            {do1} <br />
            {do2} <br />
            {do3} <br />
            {do4} <br />
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{ borderBottom: "1px solid rgb(200,200,200,.5)" }}
        className="anme2"
        onClick={() => toggle("state6")}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Box sx={{ fontSize: "18px", p: "6px" }}>
            <FaPaintRoller color="rgb(216, 159, 13)" /> Paintings
          </Box>{" "}
          <Box sx={{ fontWeight: "bold" }}>
            {state6 ? (
              <MdKeyboardArrowUp
                onClick={() => setState6(false)}
                style={{ cursor: "pointer" }}
                size="35px"
              />
            ) : (
              <MdKeyboardArrowDown
                size="35px"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("state6")}
              />
            )}
          </Box>
        </Box>
        {state6 ? (
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              pb: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
            }}
            className="anme"
          >
            {p1} <br />
            {p2} <br />
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{ borderBottom: "1px solid rgb(200,200,200,.5)" }}
        className="anme2"
        onClick={() => toggle("state7")}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Box sx={{ fontSize: "18px", p: "6px" }}>
            <GrSquare color="rgb(216, 159, 13)" /> Flooring
          </Box>{" "}
          <Box sx={{ fontWeight: "bold" }}>
            {state7 ? (
              <MdKeyboardArrowUp
                onClick={() => setState7(false)}
                style={{ cursor: "pointer" }}
                size="35px"
              />
            ) : (
              <MdKeyboardArrowDown
                size="35px"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("state7")}
              />
            )}
          </Box>
        </Box>
        {state7 ? (
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              pb: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
            }}
            className="anme"
          >
            {f1} <br />
            {f2} <br />
            {f3} <br />
            {f4} <br />
            {f5} <br />
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{ borderBottom: "1px solid rgb(200,200,200,.5)" }}
        className="anme2"
        onClick={() => toggle("state8")}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Box sx={{ fontSize: "18px", p: "6px" }}>
            <MdOutlineElectricalServices color="rgb(216, 159, 13)" /> Electrical
          </Box>{" "}
          <Box sx={{ fontWeight: "bold" }}>
            {state8 ? (
              <MdKeyboardArrowUp
                onClick={() => setState8(false)}
                style={{ cursor: "pointer" }}
                size="35px"
              />
            ) : (
              <MdKeyboardArrowDown
                size="35px"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("state8")}
              />
            )}
          </Box>
        </Box>
        {state8 ? (
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              pb: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
            }}
            className="anme"
          >
            {e1} <br />
            {e2} <br />
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{ borderBottom: "1px solid rgb(200,200,200,.5)" }}
        className="anme2"
        onClick={() => toggle("state9")}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px" }}
        >
          <Box sx={{ fontSize: "18px", p: "6px" }}>
            <MdOtherHouses color="rgb(216, 159, 13)" /> Miscellaneous
          </Box>{" "}
          <Box sx={{ fontWeight: "bold" }}>
            {state9 ? (
              <MdKeyboardArrowUp
                onClick={() => setState9(false)}
                style={{ cursor: "pointer" }}
                size="35px"
              />
            ) : (
              <MdKeyboardArrowDown
                size="35px"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("state9")}
              />
            )}
          </Box>
        </Box>
        {state9 ? (
          <Box
            sx={{
              textAlign: "left",
              paddingLeft: "30px",
              pb: "10px",
              display: "flex",
              flexDirection: "column",
              lineHeight: "30px",
            }}
            className="anme"
          >
            {m1} <br />
            {m2} <br />
            {m3} <br />
            {m4} <br />
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default Package;
