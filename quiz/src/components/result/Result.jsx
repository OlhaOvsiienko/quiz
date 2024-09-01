/*import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styles } from "../result/Result.styles";
import { tests } from "../quiz-content/QuizContent";
import sadFace from "../../img/sadFace.png";
import winner from "../../img/winner.png";

const Result = ({ correct, tryAgain }) => {
  return (
    <Box sx={styles.result}>
      <Box sx={styles.img}>
        {correct === 0 ? (
          <img src={sadFace} alt="Sad Face Icon" />
        ) : (
          <img src={winner} alt="Winner Icon" />
        )}
      </Box>

      <Typography variant="h5">
        You answered {correct} questions out of {tests.length}!
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={styles.button}
        onClick={tryAgain}
      >
        Try again
      </Button>
    </Box>
  );
};

export default Result;  */
//==============

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styles } from "../result/Result.styles";
import { tests } from "../quiz-content/QuizContent";
import sadFace from "../../img/sadFace.png";
import winner from "../../img/winner.png";

const Result = ({ tryAgain, correctAnswersCount }) => {
  
  return (
    <Box sx={styles.result}>
      <Box sx={styles.img}>
        {correctAnswersCount === 0 ? (
          <img src={sadFace} alt="Sad Face Icon" />
        ) : (
          <img src={winner} alt="Winner Icon" />
        )}
      </Box>

      <Typography variant="h5">
        You answered {correctAnswersCount} questions from {tests.length}!
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={styles.button}
        onClick={tryAgain}
      >
        Try again
      </Button>
    </Box>
  );
};

export default Result;
