import { Box } from '@mui/material';
import AdvantageArea from './components/advantageArea/AdvantageArea';
import CeoDescription from './components/ceoDesription/CeoDescription';
import Footer from './components/Footer';
import Header from './components/header/Header';
import InforContainer from './components/inforContainer/InforContainer';
import MarketingDes from './components/marketingDes/MarketingDes';
import UpdateArea from './components/updateArea/UpdateArea';

import "./index.css";

const App = () => {
  return (
    <Box>
      <Header/>
      <MarketingDes />
      <InforContainer />
      <CeoDescription />
      <AdvantageArea />
      <UpdateArea />
      <Footer />
    </Box>
  );
}

export default App;
