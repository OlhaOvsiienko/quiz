export const styles = {
  root: {
    backgroundColor: "#56859c",
    border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  question: {
    width: "100%",
    maxWidth: "550px",
    border: "1px solid grey",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    padding: "30px",
    position: "relative",
    boxShadow: "5px 10px 0px #ededed",
    boxSizing: "border-box",
  },

  title: {
    width: "100%",
    maxWidth: "550px",
    backgroundColor: "white",
    fontSize: "18px",
    margin: "0",
  },

  list: {
    width: "100%",
    maxWidth: "550px",
  },

  variant: {
    width: "100%",
    maxWidth: "550px",
    display: "flex",
    border: "1px solid grey",
    backgroundColor: "white",
    borderRadius: "10px",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#ededed",
      borderColor: "#333",
    },
  },

  progressBox: {
    width: "100%",
    maxWidth: "500px",
    display: "flex",
  },

  progressBar: {
    height: "10px",
    backgroundColor: "#ededed",
    borderRadius: "50px",
    width: "100%",
    maxWidth: "500px",
    "& .MuiLinearProgress-bar": {
      backgroundColor: "#37f507",
      borderRadius: "50px",
      transition: "all 0.3s ease-in-out",
    },
    border: "1px solid grey",
    marginBottom: "25px",
    display: "flex",
  },

  finishButton: {
    borderRadius: "5px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      color: "black",
    },
    backgroundColor: "#56859c",
    textTransform: "none",
    marginTop: "20px",
    fontSize: "18px",
  },
  
};
