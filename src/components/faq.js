import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const FAQ = () => {
  return (
    <>
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
    </>
  );
};
