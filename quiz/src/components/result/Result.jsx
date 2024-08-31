import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { styles } from '../result/Result.styles'
import { QuizContent } from '../quiz-content/QuizContent'
import winner from '../../img/winner.png' 
import sadFace from '../../img/sadFace.png'

const Result = ({ correct, tryAgain }) => {

    return (
        <Box sx={styles.result}>
            <Box sx={styles.img}>
                {
                    correct === 0 ? (
                        <img src={sadFace} alt='Sad Face Icon' /> 
                    ) : (
                        <img src={winner} alt='Winner Icon' /> 
                    )
                }
            </Box>
            
            <Typography variant='h5'>
                You answered {correct} questions out of {QuizContent.length}!
            </Typography>
            <Button
                variant='contained'
                size='large'
                sx={styles.button}
                onClick={tryAgain}
            >
                Try again
            </Button>
        </Box>
    )
}

export default Result
