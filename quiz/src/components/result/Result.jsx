import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { styles } from '../result/Result.styles'
import { QuizContent } from '../quiz-content/QuizContent'
import winner from '../../img/winner.png' 

const Result = ({ correct }) => {

    return (
        <Box sx={styles.result}>
            <img src={winner} alt='Winner Icon' /> 
            <Typography variant='h5'>
                You answered {correct} questions from {QuizContent.length}!
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {}}
            >
                Try again
            </Button>
        </Box>
    )
}

export default Result
