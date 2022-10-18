import { Box } from '@mui/material';
import Header from './components/header/Header';
import InforContainer from './components/inforContainer/InforContainer';
import MarketingDes from './components/marketingDes/MarketingDes';

import "./index.css";

const App = () => {
  return (
    <Box>
      <Header/>
      <MarketingDes />
      <InforContainer />
    </Box>
  );
}

export default App;
