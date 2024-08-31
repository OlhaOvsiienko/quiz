export const styles = {
    
    progressBox: {
        width: '100%',               
        maxWidth: '500px',
        display: 'flex',
    },

    progressBar: {
        height: '10px', 
        backgroundColor: '#ededed', // Цвет фона
        borderRadius: '50px',
        width: '100%',               
        maxWidth: '500px',
        '& .MuiLinearProgress-bar': {
            backgroundColor: '#37f507', // Цвет заполнения
            borderRadius: '50px',
            transition: 'all 0.3s ease-in-out',
        },
        border: '1px solid grey',
        marginBottom: '25px',
        display: 'flex',
    }
}