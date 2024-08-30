import { useState } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import { QuizContent } from '../quiz-content/QuizContent'
import ProgressBar from '../progress-bar/Progressbar'
import Result from '../result/Result'

import { styles } from './Game.styles'

const Game = () => {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    
    const currentQuestion = QuizContent[step] || {}
    const questionTitle = currentQuestion.question || 'No more questions'
    const answerVariants = currentQuestion.answers || []
    const correctAnswerIndex = currentQuestion.correct

    const percentageProgress = Math.round((step / QuizContent.length) * 100)

    const onClickAnswer = (index) => {
        
        if (index === correctAnswerIndex) {
            setCorrect(correct + 1)
        }

        if (step < QuizContent.length - 1) {
            setStep(step + 1)
        } else {
            setStep(QuizContent.length)  
        }
        
    }

    return (
        <Box sx={styles.root}>
            {step >= QuizContent.length ? (
                <Result correct={correct} />
            ) : (
                <Box sx={styles.question}>
                    <ProgressBar value={percentageProgress} />
                    <Box sx={styles.title}>
                        <Typography variant="h5" align="left">
                            {questionTitle}
                        </Typography>
                    </Box>
                    <List>
                        {answerVariants.map((answer, index) => (
                            <ListItem 
                                key={index} 
                                onClick={() => onClickAnswer(index)}
                                sx={styles.variant}>
                                {answer}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </Box>
    )
    
}

export default Game

