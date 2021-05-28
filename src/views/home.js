import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { ShareBar } from "../components/shareBar";
import { FAQ } from "../components/faq";
import { BackgroundCard } from "../components/backgroundCard";
import { ProgressBar } from "../components/progressBar";

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
        <BackgroundCard />
      </Container>
      <ProgressBar />
      <FAQ />
      <ShareBar />
    </React.Fragment>
  );
}
