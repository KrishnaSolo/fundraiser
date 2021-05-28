import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";

export const ShareBar = () => {
  const shareurl = "https://covid19fundraiser.netlify.app/";
  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: "50px",
        marginBottom: "100px",
        display: "block",
      }}
    >
      <Typography>
        <strong>Share: </strong>
      </Typography>
      <EmailShareButton url={shareurl}>
        <EmailIcon size={32} />
      </EmailShareButton>
      <FacebookShareButton url={shareurl}>
        <FacebookIcon size={32} />
      </FacebookShareButton>
      <LinkedinShareButton url={shareurl}>
        <LinkedinIcon size={32} />
      </LinkedinShareButton>
      <RedditShareButton url={shareurl}>
        <RedditIcon size={32} />
      </RedditShareButton>
      <TelegramShareButton url={shareurl}>
        <TelegramIcon size={32} />
      </TelegramShareButton>
      <TwitterShareButton url={shareurl}>
        <TwitterIcon size={32} />
      </TwitterShareButton>
      <WhatsappShareButton url={shareurl}>
        <WhatsappIcon size={32} />
      </WhatsappShareButton>
    </Container>
  );
};
