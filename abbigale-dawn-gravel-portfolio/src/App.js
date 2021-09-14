import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainPage } from "./MainPage/MainPage";
import { Nasa } from "./CaseStudiesPage/Nasa/Nasa";
import { Bloom } from "./CaseStudiesPage/Bloom/Bloom";
import { Inkbook } from "./CaseStudiesPage/Inkbook/Inkbook";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/abbigale-dawn-gravel-portfolio/"
          component={MainPage}
        />
        <Route
          exact
          path="/abbigale-dawn-gravel-portfolio/nasa"
          component={Nasa}
        />
        <Route
          exact
          path="/abbigale-dawn-gravel-portfolio/bloom"
          component={Bloom}
        />
        <Route
          exact
          path="/abbigale-dawn-gravel-portfolio/inkbook"
          component={Inkbook}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
