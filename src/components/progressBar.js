import React, { useCallback, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
//import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import sewaProof from "../images/195011539_236119961279495_3306847529746484108_n.jpg";
import awgpProof from "../images/195072035_231169078540036_5971593227133574664_n.jpg";

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
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => {
    const newState = !open;
    setOpen(newState);
  }, [open]);
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
            Update: Thank you everyone for donating! We raised 6.3k which I have
            matched. You can see my receipts below:
          </strong>
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClick}
          style={{ marginTop: "20px" }}
        >
          Proof
        </Button>
        <Dialog
          open={open}
          onClose={handleClick}
          aria-labelledby="proof"
          aria-describedby="donation proof"
        >
          <DialogTitle id="proof">Proof</DialogTitle>
          <DialogContent>
            <img
              src={sewaProof}
              style={{ border: "5px solid #ddd" }}
              alt="donation receipt for sewa"
            />
            <img
              src={awgpProof}
              style={{ border: "5px solid #ddd", marginTop: "10px" }}
              alt="donation receipt for awgp"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClick} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};
