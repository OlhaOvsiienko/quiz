import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

import { styles } from './ProgressBar.styles'

const ProgressBar = ({ value }) => {
   
    const clampedValue = Math.max(0, Math.min(100, value))
    
    return (
        <Box sx={styles.progressBox}>
            <LinearProgress 
                sx={styles.progressBar}
                variant="determinate" 
                value={clampedValue} />
        </Box>
    )
}

export default ProgressBar
