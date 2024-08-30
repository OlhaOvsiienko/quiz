export const styles = {
    root: {
        backgroundColor: '#56859c',
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100vh',
    },

    question: {
        width: '550px',
        border: '1px solid grey',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: '20px',
        padding: '30px',
        position: 'relative', // необходимо для псевдоэлемента
        boxShadow: '5px 10px 0px #ededed',
    },

    title: {
        width: '500px',
        //border: '1px solid green',
        backgroundColor: 'white',
        fontSize: '18px',
        margin: '0',
    },

    variant: {
        width: '500px',
        border: '1px solid grey',
        backgroundColor: 'white',
        borderRadius: '10px',
        marginTop: '10px',
        
        '&:hover': {
          backgroundColor: '#ededed',
          borderColor: '#333',
        },
        
    },

    
}