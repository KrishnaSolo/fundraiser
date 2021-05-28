import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
//import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import { ShareBar } from "../components/shareBar";
import { FAQ } from "../components/faq";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 30,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Tooltip
        title={`Min Goal: 5K, Max Goal: 10K, Raised so far: ${props.amt}`}
        placement="top"
        arrow
      >
        <Box width="100%" mr={1}>
          <BorderLinearProgress variant="determinate" {...props} />
        </Box>
      </Tooltip>
      <Box minWidth={35}>
        <Typography variant="subtitle1" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function Home() {
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        style={{
          marginTop: "80px",
          display: "block",
        }}
      >
        <Typography variant="h2" component="h2">
          COVID-19 Fundraiser For India
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        style={{
          marginTop: "20px",
          display: "block",
          textAlign: "justify",
          fontSize: "15px",
        }}
      >
        <Typography
          variant="subtitle2"
          component="body"
          style={{ fontSize: "16px" }}
        >
          I started this fundraiser to help support India through the
          devastating second wave which has left the country reeling as
          thousands die from shortages of oxygen tanks/concentrators, medical
          equipment, or simply from a lack of medical attention. As of May 3rd,
          2021, the death count is at approx 219K, with 3K dying every day, and
          over 19M people are infected (experts backed by journalist reports
          believe the true numbers are far worse). This issue is especially
          personal as I have loved ones struggling to recover and my story is
          just one of many. I am sure you may know someone or be that someone
          whose loved ones have been infected or sadly have passed away due to
          this virus.
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        style={{
          display: "block",
          textAlign: "justify",
          marginTop: "10px",
        }}
      >
        <Typography variant="subtitle1" component="body">
          <strong>
            If you cannot donate, please share this site with those who can and
            reach out to friends/coworkers who have family in India and check up
            on them! With covid restrictions, mental health is more important
            than ever, be kind and take care of each other!
          </strong>
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        style={{
          marginTop: "130px",
          display: "block",
          justifyContent: "center",
        }}
      >
        <LinearProgressWithLabel
          value={Math.round((6301.24 / 10000) * 100)}
          amt={6301.24}
        />
      </Container>
      <Container
        maxWidth="md"
        style={{
          marginTop: "25px",
          display: "block",
        }}
      >
        <Typography variant="h6" component="h6">
          <strong>
            My min goal is to raise 5K CAD, with a max goal of 10K CAD. I will
            be matching the final amount to double your generous donations!{" "}
          </strong>
        </Typography>
      </Container>
      <FAQ />
      <ShareBar />
    </React.Fragment>
  );
}
