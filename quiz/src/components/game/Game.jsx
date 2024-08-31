/*import { useState } from "react";
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

export default Game;*/

//=====================================

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import { tests } from "../quiz-content/QuizContent";
import Result from "../result/Result";
import { styles } from "./Game.styles";

const Game = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(tests.length).fill(null));
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const currentTest = tests[step] || {};
  const questionTitle = currentTest.question || "No more questions";
  const answerVariants = currentTest.answers || [];

  const answeredQuestionsCount = answers.filter(answer => answer !== null).length;
  const percentageProgress = Math.round((answeredQuestionsCount / tests.length) * 100);

  const onClickAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[step] = index; 
    setAnswers(updatedAnswers);

    if (step < tests.length - 1) {
      setStep(step + 1);
    }
  };

  const tryAgain = () => {
    setStep(0);
    setAnswers(Array(tests.length).fill(null)); 
    setIsQuizFinished(false); 
  };

  const goToQuestion = (event, pageNumber) => {
    setStep(pageNumber - 1); 
  };

  const finishQuiz = () => {
    const correctAnswersCount = answers.reduce((total, answer, index) => {
      return answer === tests[index].correct ? total + 1 : total;
    }, 0);
    setIsQuizFinished(true); 
    return correctAnswersCount;
  };

  const correctAnswersCount = isQuizFinished
    ? answers.reduce((total, answer, index) => 
        answer === tests[index].correct ? total + 1 : total, 0)
    : null;

  return (
    <Box sx={styles.root}>
      {isQuizFinished ? (
        <Result 
          answers={answers} 
          tryAgain={tryAgain} 
          correctAnswersCount={correctAnswersCount} 
        />
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
                sx={{
                  ...styles.variant,
                  backgroundColor:
                    answers[step] === index ? "#ededed" : "white",
                }}
              >
                {answer}
              </ListItem>
            ))}
          </List>

          <Pagination
            count={tests.length}
            page={step + 1}
            onChange={goToQuestion}
            variant="outlined"
            shape="rounded"
          />

          
            <Button variant="contained" onClick={finishQuiz} sx={styles.finishButton}>
              Finish Quiz
            </Button>
          
        </Box>
      )}
    </Box>
  );
};

export default Game;

