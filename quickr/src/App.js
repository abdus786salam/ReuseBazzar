

import Responsive from './Components/HomePage/Adds';
import { BuySell } from './Components/HomePage/buySell';
import { MostPopular } from './Components/HomePage/MostPopularProduct';
import AllRoutes from './higherOrderFunc/AllRoutes';

function App() {
  return (
    <div>
      {/* <AllRoutes /> */}
      
     <MostPopular/>
     <BuySell/>
     <Responsive/>
    </div>
  );
}

export default App;
