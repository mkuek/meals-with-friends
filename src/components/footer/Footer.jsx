import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <Divider />
      <div className="footer">
        <div className="footer-main">
          <div className="footer-left">
            <Box sx={{ width: "75%", padding: "0.5rem" }}>
              <Typography variant="subtitle1" component="div" fontWeight="bold">
                Disclaimer
              </Typography>
              <Typography variant="subtitle2" component="div">
                This site is for informational purposes only, and is not
                intended for distribution or usage to the public. This is a
                student project for Digital Crafts. Created by Michael Kuek.
              </Typography>
            </Box>
          </div>
          <div className="footer-right">
            <Box
              sx={{
                height: "100%",
                width: "75%",
                padding: "0.5rem",
                justifyContent: "center",
              }}
            >
              <Box sx={{ margin: "auto" }}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight="bold"
                >
                  Connect
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "0.75rem",
                  }}
                >
                  <Link href="https://github.com/mkuek">
                    <GitHubIcon />
                  </Link>
                  <Link href="https://www.linkedin.com/in/michaelkuek/">
                    <LinkedInIcon />
                  </Link>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
        <div className="footer-bottom">
          <Box>
            <Typography variant="body2" component="div" fontWeight="bold">
              MEAL TRAIN® is a registered trademark of Meal Train LLC
            </Typography>
            <Typography variant="body2" component="div">
              <Link href="https://www.mealtrain.com/">
                Meal Train LLC ©2022
              </Link>
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Footer;
