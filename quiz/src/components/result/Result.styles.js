export const styles = {
  result: {
    width: "100%",
    maxWidth: "550px",
    boxSizing: "border-box",
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
  },

  img: {
    width: "100px",
    marginBottom: "20px",
    img: {
      width: "100%",
      height: "auto",
    },
  },

  button: {
    borderRadius: "50px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none",
      color: "black",
    },
    backgroundColor: "orange",
    textTransform: "none",
    marginTop: "20px",
    fontSize: "18px",
  },
};
