import { CircularProgress } from "@mui/material";

const LoadingBar = () => {
  return (
    <CircularProgress
    style={{color:"#79999d", marginLeft: '40px', marginTop: '30px' }}
    />
  );
};

export default LoadingBar;