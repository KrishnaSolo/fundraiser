import "./App.css";
import Home from "./views/home";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <Home />
      <Fab
        aria-label="submit-donation-proof"
        className="feedbackIcon"
        component="button"
        variant="extended"
      >
        <Typography variant="button" display="block">
          Submit Donation Proof
        </Typography>
      </Fab>
    </div>
  );
}

export default App;
