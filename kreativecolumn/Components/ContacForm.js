import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import { Box, TextField } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
function ContacForm() {
  const form = useRef();
  const [phone, setP] = useState("");
  const [name, setN] = useState("");
  const [email, setE] = useState("");
  const [city, setC] = useState("");
  const [queryType, setQueryType] = useState("");

  const [succes, setSucces] = useState(false);
  const [err, setErr] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();
    if (phone && name && email) {
      emailjs
        .sendForm(
          "service_l0jdqls",
          "template_c2iac0q",
          form.current,
          "focd_zE7s59OxypV5"
             )
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            setSucces(true);
            setErr(false);
          } else {
            setSucces(false);
            setErr(true);
          }
        });
    }
  };
  return (
    <form
      action="sc"
      ref={form}
      onSubmit={sendMail}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="contact">
        <div>
          <h4 style={{ textAlign: "center", fontSize: "30px" }}>
            Request a{" "}
            <span style={{ color: "rgb(216, 159, 13,.9)" }}> Call Back</span>
          </h4>
        </div>
        <div className="name">
          <TextField
            label="Name"
            variant="standard"
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setN(e.target.value)}
            className="input"
          />
          <TextField
            type="email"
            name="user_email"
            value={email}
            label="Email"
            variant="standard"
            onChange={(e) => setE(e.target.value)}
            className="input"
          />
        </div>
        {/* <div className="name">


   
</div> */}
        <div className="name">
          <TextField
            type="number"
            name="phone_Number"
            value={phone}
            label="Phone"
            variant="standard"
            onChange={(e) => setP(e.target.value)}
            className="input"
            sx={{ mt: "20px" }}
          />
          <TextField
            type="text"
            name="city"
            value={city}
            label="City"
            variant="standard"
            onChange={(e) => setC(e.target.value)}
            className="input"
            sx={{ mt: "20px" }}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <FormControl variant="standard" sx={{ width: "50%", mt: "20px" }}>
            <InputLabel id="demo-simple-select-standard-label">
              Query Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={queryType}
              onChange={(e) => setQueryType(e.target.value)}
              label="Query Type"  name="user_enquiry"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Construction Request"}>Construction Request </MenuItem>
              <MenuItem value={"Complaint"}>Complaint </MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <textarea
            name="message"
            id=""
            style={{ width: "100%", fontSize: "15px", marginTop: "23px" }}
            placeholder="Enquiry"
            rows="3"

            className="input"
          ></textarea>
        </div>
        <Box
          sx={{
            display: { lg: "flex", md: "flex", sm: "flex", xs: "block" },
            gap: "10px",
            padding: "7px",
            justifyContent: "space-betwen",
            width: "100%",
          }}
        >
          <Box sx={{ lineHeight: "25px" }}>
            By submitting this form, you agree to{" "}
            <Link href="/privacy-policy" target="_blank">
              <span style={{ color: "rgb(216, 159, 13,.7)" }}>
                {" "}
                the privacy policy{" "}
              </span>
            </Link>{" "}
            & <br />{" "}
            <span style={{ color: "rgb(216, 159, 13,.7)" }}>
              <Link href="/terms-and-conditions" target="_blank">
                terms and tonditions.{" "}
              </Link>{" "}
            </span>
          </Box>
          <Box>
            <Button
              variant="contained"
              type="submit"
              sx={{
                ml: "2vw",
                backgroundColor: "rgb(216, 175, 11)",
                mt: "5px",
                textTransform: "capitalize",
              }}
              onClick={() => {
                if (!phone && !name && !email) {
                  setErr(true);
                }
              }}
            >
              Submit{" "}
              <span style={{ marginLeft: "5px", marginTop: "8px" }}></span>{" "}
            </Button>
          </Box>
        </Box>
        {succes? (
          <div style={{ color: "green" }}> message sent Succesfully!</div>
        ) : (
          ""
        )}
        {err ? (
          <div style={{ color: "Red" }}> Fill All Mandatory fields !</div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default ContacForm;
