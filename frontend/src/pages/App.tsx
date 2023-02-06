import { AuthContext } from 'context/auth';
import { FunctionComponent, useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'router';

const  App: FunctionComponent = (): JSX.Element => {

  const { auth } = useContext(AuthContext);
  
  return (
    <BrowserRouter>
      { auth ?
        <Routes>
          {privateRoutes.map(route => 
              <Route 
                key={route.path}
                element={route.element}
                path={route.path}
              />
            )}
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
        :
        <Routes>
          {publicRoutes.map(route => 
              <Route 
                key={route.path}
                element={route.element}
                path={route.path}
              />
            )}
            <Route path="*" element={<Navigate to ="/sign" />}/>
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
