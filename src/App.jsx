import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout/BasicLayout';
import Examples from './pages/Examples/Examples';
import Home from './pages/Home/Home';
import { exampleroutes } from './exampleroutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path='/examples' element={<Examples />} />
        </Route>
        <Route path='examples' element={<BasicLayout />}>
          {exampleroutes.map((element, index) => {
            const { path, component: Component } = element;
            if (!Component) return null;
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
