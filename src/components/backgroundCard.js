import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export const BackgroundCard = () => {
  return (
    <>
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
    </>
  );
};
