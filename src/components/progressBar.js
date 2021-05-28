import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
//import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

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

export const ProgressBar = () => {
  return (
    <>
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
    </>
  );
};
