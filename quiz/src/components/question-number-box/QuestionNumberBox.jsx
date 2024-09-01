import Button from "@mui/material/Button";

const QuestionNumberBox = ({ index, isAnswered, onClick }) => {
    return (
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          width: 40,
          height: 40,
          margin: 1,
          minWidth: '0',
          backgroundColor: isAnswered ? "lightblue" : "lightgray",
        }}
      >
        {index + 1}
      </Button>
    );
  };
export default QuestionNumberBox  