import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaRupeeSign } from "react-icons/fa";

// slider Component
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function Calculator() {
  const [BUC, setBUC] = useState();
  const [BCPC, setBCPC] = useState();
  const [BBUC, setBBUC] = useState();
  const [BTC, setBTC] = useState();

  const [AUC, setAUC] = useState();
  const [ACPC, setACPC] = useState();
  const [ABUC, setABUC] = useState();
  const [ATC, setATC] = useState();

  const [PUC, setPUC] = useState();
  const [PCPC, setPCPC] = useState();
  const [PBUC, setPBUC] = useState();
  const [PTC, setPTC] = useState();

  const [TUC, setTUC] = useState();
  const [TCPC, setTCPC] = useState();
  const [TBUC, setTBUC] = useState();
  const [TTC, setTTC] = useState();
  const [Effect, setEffect] = useState();

  const [area, setaArea] = useState(1000);
  const [car, setCar] = useState(1);

  const [Balcony, setBalcony] = useState(50);
  const [err, setErr] = useState(false);
  // const [steelCost,setSteelCost]=useState(null)
  const [estimations, setEstimations] = useState(false);
  const numberWithCommas = (number) => {
    if (typeof number !== "number"){
      return parseFloat(number)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  //   if (typeof number !== "number") {
  //     number = parseFloat(number);
  //   }
  //   let str = number.toString();
  //   let decimal = "";
  //   if (str.indexOf(".") !== -1) {
  //     decimal = str.substr(str.indexOf("."));
  //     str = str.substr(0, str.indexOf("."));
  //   }
  //   let output = "";
  //   let count = 0;
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     count++;
  //     output = str[i] + output;
  //     if (count === 3 && i !== 0) {
  //       output = "," + output;
  //       count = 0;
  //     } else if (count === 2 && i === 0) {
  //       output = "," + output;
  //     }
  //   }
  //   return output + decimal;
  // };

  // const calculateValues = () => {
  //   if ( area && car && Balcony) {
  //    let eff=area-(car * 130 + UB);
  //     setEffect(eff)
  //     setBUC(Effect*1580)
  //     setBCPC(130*car*948)
  //     setBBUC(948*UB)
  //     setAUC(Effect*1720)
  //     setACPC(130*car*1032)
  //     setABUC(1032*UB)
  //     setPUC(Effect*1830)
  //     setPCPC(130*car*1098)
  //     setPBUC(1098*UB)

  //       setBTC(BUC+BCPC+BBUC)
  //       setATC(AUC+ACPC+ABUC)
  //       setPTC(PUC+PCPC+PBUC)
  // }
  // };

  const calculateValues = (area, car, UB) => {
    return new Promise((resolve, reject) => {
      if (area === undefined || car === undefined || UB === undefined) {
        reject(new Error("area, car, or UB is undefined"));
      } else {
        const eff = area - (car * 130 + UB);
        if (eff <= 0) {
          setErr(true);
        }
        if ((area > 100 && car > 0 && Balcony > 10, eff > 0)) {
          let BUC = eff * 1550;
          let BCPC = 135 * car * 1240;
          let BBUC = 1240 * UB;
          let AUC = eff * 1650;
          let ACPC = 135 * car * 1320;
          let ABUC = 1320 * UB;
          let PUC = eff * 1750;
          let PCPC = 135 * car * 1400;
          let PBUC = 1400 * UB;

          let TUC = eff * 2250;
          let TCPC = 135 * car * 1800;
          let TBUC = 1800 * UB;
          let BTC = BUC + BCPC + BBUC;
          let ATC = AUC + ACPC + ABUC;
          let PTC = PUC + PCPC + PBUC;
          let TTC = TUC + TCPC + TBUC;

          resolve({
            eff,
            BUC,
            BCPC,
            BBUC,
            AUC,
            ACPC,
            ABUC,
            PUC,
            PCPC,
            PBUC,
            BTC,
            ATC,
            PTC,
          });
          resolve(
            setEffect(eff),
            setBUC(BUC),
            setBCPC(BCPC),
            setBBUC(BBUC),
            setAUC(AUC),
            setACPC(ACPC),
            setABUC(ABUC),
            setPUC(PUC),
            setPCPC(PCPC),
            setPBUC(PBUC),

            setBTC(BTC),
            setATC(ATC),
            setPTC(PTC),

            setTUC(TUC),
            setTBUC(TBUC),
            setTCPC(TCPC),
            setTTC(TTC),
            setEstimations(true)
          );
        }
      }
    });
  };

  const calculate = async () => {
    if (area > 100 && car > 0 && Balcony > 10) {
      await calculateValues(area, car, Balcony)
        .then(async (values) => {
          console.log(
            values,
            BUC,
            BCPC,
            BBUC,
            AUC,
            ACPC,
            ABUC,
            PUC,
            PCPC,
            PBUC,
            BTC,
            ATC,
            PTC
          );
        })
        .catch((error) => {
          console.error(error);
        });
    }
    if (
      BUC &&
      BCPC &&
      BBUC &&
      AUC &&
      ACPC &&
      ABUC &&
      PUC &&
      PCPC &&
      PBUC &&
      BTC &&
      ATC &&
      PTC
    ) {
      setEstimations(true);
    }

    window.scrollTo({
      top: window.innerWidth >= 768 ? 400 : 800,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        gap: "10px",
        pl: { md: "15px", sm: "10px", xs: "3px" },
        pr: { md: "15px", sm: "10px", xs: "3px" },
        width: { md: "80%", sm: "80%", xs: "99%" },
        margin: "auto",
        background: "rgb(201,201,201,.2)",
        pt: "20px",
        mt: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{ gap: "20px", textAlign: "center", color: "rgb(216, 159, 13)" }}
        >
          <div className="section-head col-sm-12" id="packages">
            <Box sx={{ fontSize: { md: "30px", xs: "20px" } }}>
              <h4>
                <span>Cost Estimator of </span> Kreative Kolumn
              </h4>
            </Box>
            <p>
              {" "}
              Our calculator will give you the approximate estimate(values).
              Just drag the inputs provided below.
            </p>
          </div>
        </Box>
        <Box
          sx={{
            background: "white",
            border: "1px solid gray",
            p: "40px",
            m: "auto",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ width: { md: "30vw", xs: "50vw" }, m: "auto" }}>
            <Box id="non-linear-slider">
              Super Built Up Area :{" "}
              <input
                type="number"
                value={area}
                style={{
                  height: "30px",
                  width: "100px",
                  borderRadius: "7px",
                  background: "#fff5e0",
                  color: "#ffb61b",
                  fontSize: "20px",
                  border: "none",
                  padding: "4px",
                }}
                onChange={(e) => {
                  setaArea(parseInt(e.target.value, 10));
                  console.log(area, Balcony, car);
                  setErr(false);
                  setEstimations(false);
                }}
                className="input2"
              />
              <span> (sq.ft)</span>
            </Box>
            <Slider
              value={area}
              min={200}
              step={1}
              max={100000}
              sx={{ color: "#ffb61b" }}
              // scale={"calculateValues"}
              // getAriaValueText={"valueLabelFormat"}
              // valueLabelFormat={"valueLabelFormat"}
              onChange={(e) => {
                setaArea(e.target.value);
                console.log(area);
              }}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
          </Box>
          <Box sx={{ width: { md: "30vw", xs: "50vw" }, m: "auto" }}>
            <Box id="non-linear-slider">
              Balcony & Utility Area:{" "}
              <input
                type="number"
                value={Balcony}
                style={{
                  height: "30px",
                  width: "100px",
                  background: "#fff5e0",
                  color: "#ffb61b",
                  fontSize: "20px",
                  border: "none",
                  padding: "4px",
                  borderRadius: "7px",
                }}
                onChange={(e) => {
                  setBalcony(parseInt(e.target.value, 10));
                  console.log(area, Balcony, car);
                  setErr(false);
                  setEstimations(false);
                }}
              />{" "}
              <span> (sq.ft)</span>
            </Box>
            <Slider
              value={Balcony}
              min={200}
              step={1}
              max={10000}
              sx={{ color: "#ffb61b" }}
              // scale={"calculateValues"}
              // getAriaValueText={"valueLabelFormat"}
              // valueLabelFormat={"valueLabelFormat"}
              onChange={(e) => {
                setBalcony(parseInt(e.target.value, 10));
                console.log(area);
              }}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
          </Box>

          <Box sx={{ width: { md: "30vw", xs: "50vw" }, m: "auto" }}>
            <Typography id="non-linear-slider">
              No Of Car Parking (135 sq.ft/unit)
            </Typography>
            <Slider
              aria-label="Temperature"
              sx={{ color: "red" }}
              // getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              onChange={(e) => {
                setCar(parseInt(e.target.value, 10));
                console.log(area, Balcony, car);
                setErr(false);
                setEstimations(false);
              }}
              step={1}
              marks
              min={1}
              max={4}
            />
          </Box>
        </Box>

        {/* <Box sx={{ m: "auto" }}>
          <Box sx={{ gap: "5px", display: "flex", flexDirection: "column" }}>
            <label style={{ fontSize: "13px", fontWeight: 500, color: "grey" }}>
              {"Super Built Up Area (sq.ft) "}
            </label>
            <TextField
              variant="standard"
              type="number"
              style={{ height: "30px", width: "200px" }}
              onChange={(e) => {
                setaArea(parseInt(e.target.value, 10));
                console.log(area, Balcony, car);
                setErr(false);
                setEstimations(false);
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",

              justifyContent: "center",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Box sx={{ pt: "10px", mt: "10px" }}>
              <FormControl
                variant="standard"
                sx={{ width: "200px", marginRight: "100px" }}
              >
                <InputLabel id="demo-simple-select-standard-label">
                  No Of Car Parking (130 sq.ft/unit)*
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={car}
                  onChange={(e) => {
                    setCar(parseInt(e.target.value, 10));
                    setErr(false);
                    setEstimations(false);
                  }}
                  label="No Of Car Parking (130 sq.ft/unit)*
          "
                >
                  <MenuItem value="0">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>01 </MenuItem>
                  <MenuItem value={2}>02 </MenuItem>
                  <MenuItem value={3}>03</MenuItem>
                  <MenuItem value={4}>04</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mt: "10px", display: "flex", flexDirection: "column" }}>
              <label
                style={{ fontSize: "13px", fontWeight: 500, color: "grey" }}
              >
                Balcony & Utility Area (sq.ft)*
              </label>

              <TextField
                variant="standard"
                type="number"
                style={{ height: "30px" }}
                onChange={(e) => {
                  setBalcony(parseInt(e.target.value, 10));
                  console.log(area, Balcony, car);
                  setErr(false);
                  setEstimations(false);
                }}
              />
            </Box>
          </Box>
        </Box> */}

        {err ? (
          <Box sx={{ color: "red", textAlign: "center", p: "10px" }}>
            *Sum of Car parking and Balcony & Utility area cannot exceed Super
            built up area
          </Box>
        ) : (
          ""
        )}

        <Box
          sx={{
            gap: "20px",
            mt: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" onClick={() => calculate()}>
            {" "}
            Calculate
          </Button>
          <Button
            variant="contained"
            sx={{ background: "red" }}
            onClick={() => {
              setEstimations(false);
              setaArea(null);
              setCar(null);
              setBalcony(null);
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: "20px" }}>
        <p style={{ textAlign: "center" }}>
          Disclaimer: Please note that the costs provided are only approximate
          costs for each resource, and the actual cost estimates may vary
          depending on your city. 
          contractor.
          <br /> To obtain a custom cost estimate tailored to
          your specific requirements, we recommend that you check with your
          <br /> Additionally, it's important to keep in mind that the amount
          provided is only an estimate for the construction area and does not
          include the compound wall area.
        </p>
      </Box>

      {estimations ? (
        <Box>
          <Box
            sx={{
              mt: "40px",
              mb: "30px",
              p: "20px",
              display: "grid",
              gridTemplateColumns: {
                md: "24vw 24vw 24vw",
                sm: "40vw 40vw",
                xs: "80vw",
              },
              gridRowGap: "25px",
              gridColumnGap: "15px",
              justifyContent: "center",
            }}
          >
            <Box className="packm1">
              <Box
                sx={{
                  p: "15px",

                  color: "white",
                  borderBottom: "3px solid white",

                  background: "rgb(216, 159, 13)",
                }}
              >
                {" "}
                <span>Thorium Package-₹2,250/sq.ft* </span>{" "}
              </Box>

              <Box sx={{ p: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "4px",
                    borderBottom: "3px solid white",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Built Up Cost <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      <FaRupeeSign /> {numberWithCommas(Effect)} sq.ft *
                      ₹2,250/sq.ft
                    </label>
                  </Box>
                  <Box>
                    {" "}
                    <FaRupeeSign /> {numberWithCommas(TUC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "4px",
                    borderBottom: "3px solid white",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Car Parking Cost
                    <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      {car} * 135 sq.ft * ₹1800/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(TCPC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "6px",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Balcony & Utility Cost
                    <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      <FaRupeeSign /> {numberWithCommas(Balcony)} sq.ft *
                      ₹1800/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(TBUC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "10px",
                    borderTop: "1px solid gray",
                    alignItems: "center",
                    color: "rgb(216, 159, 13)",
                  }}
                >
                  <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Total Cost <br />
                  </Box>
                  <Box sx={{ fontSize: "20px", fontWeight: "bold", color: "" }}>
                    <FaRupeeSign /> {numberWithCommas(TTC)}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="packm1">
              <Box
                sx={{
                  p: "15px",

                  color: "white",
                  borderBottom: "3px solid white",

                  background: "rgb(216, 159, 13)",
                }}
              >
                {" "}
                <span>Iridium Package-₹1,750/sq.ft*</span>{" "}
              </Box>

              <Box sx={{ p: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "4px",
                    borderBottom: "3px solid white",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Built Up Cost <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      <FaRupeeSign /> {numberWithCommas(Effect)} sq.ft *
                      ₹1,750/sq.ft
                    </label>
                  </Box>
                  <Box>
                    {" "}
                    <FaRupeeSign /> {numberWithCommas(PUC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "4px",
                    borderBottom: "3px solid white",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Car Parking Cost
                    <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      {car} * 135 sq.ft * ₹1400/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(PCPC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "6px",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Balcony & Utility Cost
                    <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      <FaRupeeSign /> {numberWithCommas(Balcony)} sq.ft *
                      ₹1400/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(PBUC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "10px",
                    borderTop: "1px solid gray",
                    alignItems: "center",
                    color: "rgb(216, 159, 13)",
                  }}
                >
                  <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Total Cost <br />
                  </Box>
                  <Box sx={{ fontSize: "20px", fontWeight: "bold", color: "" }}>
                    <FaRupeeSign /> {numberWithCommas(PTC)}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="packM">
              <Box
                sx={{
                  p: "15px",
                  background: "rgb(216, 159, 13)",
                  color: "white",
                }}
              >
                {" "}
                <span>Pelladium Package-₹1,650/sq.ft* </span>{" "}
              </Box>

              <Box sx={{ p: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "4px",
                    borderBottom: "3px solid white",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Built Up Cost <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      <FaRupeeSign /> {numberWithCommas(Effect)} sq.ft *
                      ₹1,650/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(AUC)}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    borderBottom: "3px solid white",

                    pb: "4px",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Car Parking Cost
                    <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      {car} * 135 sq.ft * ₹1320/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(ACPC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "6px",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Balcony & Utility Cost
                    <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      <FaRupeeSign /> {numberWithCommas(Balcony)} sq.ft *
                      ₹1320/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(ABUC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "10px",
                    borderTop: "1px solid gray",
                    alignItems: "center",
                    color: "rgb(216, 159, 13)",
                  }}
                >
                  <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Total Cost <br />
                  </Box>
                  <Box sx={{ fontSize: "20px", fontWeight: "bold", color: "" }}>
                    <FaRupeeSign /> {numberWithCommas(ATC)}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="pack">
              <Box
                sx={{
                  p: "15px",
                  background: "rgb(216, 159, 13)",
                  color: "white",
                }}
              >
                {" "}
                <span>Platinum Package-₹1,550/sq.ft*</span>{" "}
              </Box>

              <Box sx={{ p: "10px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "4px",
                    borderBottom: "3px solid white",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Built Up Cost <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      <FaRupeeSign /> {numberWithCommas(Effect)} sq.ft *
                      ₹1,550/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(BUC)}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "4px",
                    borderBottom: "3px solid white",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Car Parking Cost
                    <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      {car}* 135 sq.ft * ₹1240/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(BCPC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "5px",
                    pb: "6px",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    Balcony & Utility Cost
                    <br />
                    <label
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "grey",
                      }}
                    >
                      <FaRupeeSign /> {numberWithCommas(Balcony)} sq.ft *
                      ₹1240/sq.ft
                    </label>
                  </Box>
                  <Box>
                    <FaRupeeSign /> {numberWithCommas(BBUC)}{" "}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "10px",
                    borderTop: "1px solid gray",
                    alignItems: "center",
                    color: "rgb(216, 159, 13)",
                  }}
                >
                  <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Total Cost <br />
                  </Box>
                  <Box sx={{ fontSize: "20px", fontWeight: "bold", color: "" }}>
                    <FaRupeeSign /> {numberWithCommas(BTC)}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default Calculator;
