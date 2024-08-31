import { useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { tests } from "../quiz-content/QuizContent";
import Result from "../result/Result";
import { styles } from "./Game.styles";

const Game = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const currentTest = tests[step] || {};
  const questionTitle = currentTest.question || "No more questions";
  const answerVariants = currentTest.answers || [];
  const correctAnswerIndex = currentTest.correct;

  const percentageProgress = Math.round((step / tests.length) * 100);

  const onClickAnswer = (index) => {
    if (index === correctAnswerIndex) {
      setCorrect(correct + 1);
    }

    if (step < tests.length - 1) {
      setStep(step + 1);
    } else {
      setStep(tests.length);
    }
  };

  const tryAgain = () => {
    setStep(0);
    setCorrect(0);
  };

  return (
    <Box sx={styles.root}>
      {step >= tests.length ? (
        <Result correct={correct} tryAgain={tryAgain} />
      ) : (
        <Box sx={styles.question}>
          <Box sx={styles.progressBox}>
            <LinearProgress
              sx={styles.progressBar}
              variant="determinate"
              value={percentageProgress}
            />
          </Box>

          <Box sx={styles.title}>
            <Typography variant="h5" align="left">
              {questionTitle}
            </Typography>
          </Box>

          <List sx={styles.list}>
            {answerVariants.map((answer, index) => (
              <ListItem
                key={index}
                onClick={() => onClickAnswer(index)}
                sx={styles.variant}
              >
                {answer}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Game;
