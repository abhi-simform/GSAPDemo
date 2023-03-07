import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicLayout from './layout/PublicLayout/BasicLayout';
import About from './pages/About/About';
import Examples from './pages/Examples/Examples';
import Home from './pages/Home/Home';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'var(--font-family)',
        },
      }}>
      <BrowserRouter>
        <Routes>
          <Route element={<BasicLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/examples' element={<Examples />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
