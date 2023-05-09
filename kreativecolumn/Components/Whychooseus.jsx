import { Box } from "@mui/system";
import React from "react";
import { SiTestcafe, SiInstructure } from "react-icons/si";
import { GiMagnifyingGlass } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import {
  MdOutlineThumbUpOffAlt,
  MdOutlineContentPasteSearch,
} from "react-icons/md";

// MdOutlineThumbUpOffAlt

function Whychooseus() {
  return (
    <div className="feat bg-gray pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <Box sx={{ fontSize: { md: "30px", xs: "20px" } }}>
              <h4>
                <span>Why Kreative Kolumn for </span> Turn Key Projects?
              </h4>
            </Box>
            <p>
              Will handle from the legal permissions till the execution of the
              project. Quality check as per the standards & following by our
              company
            </p>
          </div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                md: "30% 30% 30%",
                xs: "95%",
                gridGap: "10px",
              },
              justifyContent: "center",
            }}
          >
            <div
              className="col-lg-4 col-sm-6"
              style={{ paddingBottom: "30px" }}
            >
              <div className="item">
                {" "}
                <span className="icon feature_box_col_one">
                  <SiTestcafe size="44px" style={{ color: "orange" }} />
                </span>
                <Box sx={{ fontSize: { md: "13px", xs: "20px" } }}>
                  <h6 style={{ fontSize: "20px" }}>
                    {" "}
                    Soil Investigation Report
                  </h6>
                </Box>
                <p style={{ paddingBottom: "30px" }}>
                  We perform soil investigation reports to know the load bearing
                  capacity and to analyze other metrics.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              style={{ paddingBottom: "30px" }}
            >
              <div className="item">
                {" "}
                <span className="icon feature_box_col_two">
                  <MdOutlineContentPasteSearch
                    size="40px"
                    style={{ color: "orange" }}
                  />
                </span>
                <Box sx={{ fontSize: { md: "13px", xs: "25px" } }}>
                  <h6 style={{ fontSize: "20px" }}>Architecture Plans</h6>
                </Box>
                <p style={{ paddingBottom: "30px" }}>
                  Create essential blueprints that provide a detailed overview
                  of a building's design and layout.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              style={{ paddingBottom: "30px" }}
            >
              <div className="item">
                {" "}
                <span className="icon feature_box_col_three">
                  <SiInstructure size="40px" style={{ color: "orange" }} />
                </span>
                <Box sx={{ fontSize: { md: "13px", xs: "25px" } }}>
                  <h6 style={{ fontSize: "20px" }}>Structural Designs</h6>
                </Box>
                <p style={{ paddingBottom: "30px" }}>
                  If our customer has any problem and any query we are always
                  happy to help them feel Free to contact.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              style={{ paddingBottom: "30px" }}
            >
              <div className="item">
                {" "}
                <span className="icon feature_box_col_four">
                  <GiMagnifyingGlass size="40px" style={{ color: "orange" }} />
                </span>
                <Box sx={{ fontSize: { md: "13px", xs: "25px" } }}>
                  <h6 style={{ fontSize: "20px" }}>Material Test</h6>
                </Box>
                <p style={{ paddingBottom: "30px" }}>
                  Crucial process in construction industries,as it helps to
                  ensure that materials used in structures are of the required
                  quality .
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              style={{ paddingBottom: "30px" }}
            >
              <div className="item">
                {" "}
                <span className="icon feature_box_col_five">
                  <GoChecklist size="40px" style={{ color: "orange" }} />
                </span>
                <Box sx={{ fontSize: { md: "13px", xs: "25px" } }}>
                  <h6 style={{ fontSize: "20px" }}>
                    Assured Quality Checklist
                  </h6>
                </Box>
                <p style={{ paddingBottom: "30px" }}>
                  Each mile stone having assured quality checklists (on average
                  will receive 120 checklists from the excavation to handover) .
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6"
              style={{ paddingBottom: "30px" }}
            >
              <div className="item">
                {" "}
                <span className="icon feature_box_col_six">
                  <MdOutlineThumbUpOffAlt
                    size="40px"
                    style={{ color: "orange" }}
                  />
                </span>
                <Box sx={{ fontSize: { md: "13px", xs: "25px" } }}>
                  <h6 style={{ fontSize: "20px" }}>Sample Material Approval</h6>
                </Box>
                <p style={{ paddingBottom: "30px" }}>
                  Sample material approval is shared with the client to discuss
                  about the type of quality material which we use for the
                  construction.
                </p>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
