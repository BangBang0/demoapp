
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/Header';
import { WalletDetails } from '@/components/WalletDetails';
import { NetworkInfo } from '@/components/NetworkInfo';
import { AccountInfo } from '@/components/AccountInfo';

// Pages
import {Home} from './components/Home';
import {Records} from './components/Records';
import {Profile} from './components/Profile';

function App() {
  const { connected } = useWallet();

  return (
    <Router>
      <Header />
      <div className="flex items-center justify-center flex-col">
        {connected ? (
          <Routes>
            <Route path=""element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/records" element={<Records />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>To get started Connect a wallet</CardTitle>
            </CardHeader>
          </Card>
        )}
      </div>
    </Router>
  );
}

export default App;
//hii