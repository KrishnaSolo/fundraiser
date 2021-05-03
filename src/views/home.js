import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
//import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
        title={`Min Goal: 5K, Max Goal: 10K, Raised so far: ${props.value}`}
        placement="top"
        arrow
      >
        <Box width="100%" mr={1}>
          <BorderLinearProgress variant="determinate" {...props} />
        </Box>
      </Tooltip>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
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
          marginTop: "10px",
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
          devestating second wave which has left the county reeling as thousands
          die from shortages of oxygen tanks/concentrators, medical equipment or
          simply from lack of medical attention. As of May 3rd 2021, the death
          count is at approx 219K, with 3K dying every day, and over 19M people
          infected (experts backed by journalist reports believe the true
          numbers are far worse). This issue is especially personal as I have
          loved ones struggling to recover and my story is just one of many. I
          am sure you may know someone or be that someone whose loved ones are
          infected or sadly have passed away due to this virus.
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
            If you cannot donate, please share this site to those who can and
            reach out to friends/coworkers who have family in India and check up
            on them! With covid restrictions, mental health is even more
            important and I have provided a link to those who are struggling to
            talk to professionals counsellors for free!
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
        <LinearProgressWithLabel value={10} />
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
            My goal is to raise 5K as of now, but I am be hoping to raise 10K. I
            will be matching the final amount to double your generous donations!{" "}
          </strong>
        </Typography>
      </Container>
      <Container
        maxWidth="md"
        style={{
          marginTop: "110px",
          display: "block",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>How It Works?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Container
        maxWidth="md"
        style={{
          marginTop: "10px",
          display: "block",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Places to Donate</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Container
        maxWidth="md"
        style={{
          marginTop: "10px",
          display: "block",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Mental Health Resources</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </React.Fragment>
  );
}
