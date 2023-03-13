import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout/BasicLayout';
import Examples from './pages/Examples/Examples';
import Home from './pages/Home/Home';
import { exampleroutes } from './exampleroutes';
import ExampleLayout from './layout/ExampleLayout/ExampleLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path='/examples' element={<Examples />} />
        </Route>
        <Route path='examples' element={<ExampleLayout />}>
          {exampleroutes.map((element, index) => {
            const { path, component: Component } = element;
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
