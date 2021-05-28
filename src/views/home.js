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
import { ShareBar } from "../components/shareBar";

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
            <Typography>How It Works</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container
              fixed
              style={{
                display: "block",
                textAlign: "justify",
              }}
            >
              <Typography>
                After donating, click on submit donation. This will direct you
                to a google form where you can add how much you donated and
                optionally upload the receipt. If the form is not working or
                inconvenient - email me directly at{" "}
                <strong>krishna.solanki@mail.utoronto.ca.</strong>
                <br />
                <br />
                The fundraising will be open till end of May or till the 10K
                goal is reached. After which I will post evidence of my donation
                for anyone to verify!
                <br />
                <br />
                <strong>Note:</strong> I will be updating the progress bar every
                day at Noon (est).
              </Typography>
            </Container>
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
            <Container
              fixed
              style={{
                display: "block",
                textAlign: "justify",
              }}
            >
              <Typography>
                Some charities which I know are trustable and transparent:
                <ul>
                  <li>
                    <a
                      href="https://www.sewausa.org/Covid-19-Support-Bharath-Fundraiser"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sewa USA
                    </a>
                    {" - "}
                    <a
                      href="https://ca.gofundme.com/f/covid-oxygen-concentrators-relief-for-india-by-s?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      (For canadians, use this)
                    </a>{" "}
                    - you can see their charity rating{" "}
                    <a
                      href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=17737"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ca.gofundme.com/f/oxygen-concentrators-for-central-india?utm_campaign=p_cp_url&utm_medium=os&utm_source=customer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      AWGP
                    </a>{" "}
                    - you can see their charity rating{" "}
                    <a
                      href="https://www.charitynavigator.org/ein/954505410"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://covid.giveindia.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Give India
                    </a>{" "}
                    - Another organization doing great work at the ground level!
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/donate/471073180772113/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Help India Breathe!
                    </a>{" "}
                    - Fundraiser for Give India -{" "}
                    <strong>Up to $1 Million will be matched!</strong>
                  </li>
                </ul>
                <br />I am happy to add any other charity to this list - you can
                reach me by email:{" "}
                <strong>krishna.solanki@mail.utoronto.ca</strong> or by text:
                <strong> +16476549325</strong>
              </Typography>
            </Container>
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
            <Typography>COVID-19 Resources for People in India</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Container
              fixed
              style={{
                display: "block",
                textAlign: "justify",
              }}
            >
              <Typography>
                Some resources to help deal with the pandemic:
                <ul>
                  <li>
                    <a
                      href="https://ask4support.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ask4Support
                    </a>{" "}
                    - A free mental health service for people in India to get
                    professional help.
                  </li>
                  <li>
                    <a
                      href="https://covidsewa.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sewa India Help Desk
                    </a>{" "}
                    - A virtual help desk on where to get medical supplies,
                    oxygen and other resources{" "}
                  </li>
                </ul>
              </Typography>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Container>
      <ShareBar />
    </React.Fragment>
  );
}
