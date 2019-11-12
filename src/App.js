import React from "react";
import "./App.css";

/** Import mydefiUI theme */
import { Main } from "@mydefi/ui";

/** Manage Routing */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/** Import Docs Components */
import ContentInstallation from "./components/ContentInstallation";
import ContentColors from "./components/ContentColors";
import ContentText from "./components/ContentText";
import ContentButton from "./components/ContentButton";
import ContentBadge from "./components/ContentBadge";
import ContentMain from "./components/ContentMain";
import ContentCard from "./components/ContentCard";
import ContentTable from "./components/ContentTable";
import ContentSidePanel from "./components/ContentSidePanel";
import ContentModal from "./components/ContentModal";
import ContentTextField from "./components/ContentTextField";
import ContentCheckBox from "./components/ContentCheckBox";
import ContentAsset from "./components/ContentAsset";

/** Import Navigation Components */
import Navigation from "./components/Navigation";

/** Import Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Main>
      <Router>
        {/** Display Navigation */}
        <Navigation></Navigation>

        <Switch>
          {/** Home / Installation */}
          <Route exact path="/">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentInstallation></ContentInstallation>
              </div>
            </section>
          </Route>
          <Route exact path="/installation">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentInstallation></ContentInstallation>
              </div>
            </section>
          </Route>

          {/** Colors */}
          <Route exact path="/colors">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentColors></ContentColors>
              </div>
            </section>
          </Route>

          {/** Text */}
          <Route exact path="/text">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentText></ContentText>
              </div>
            </section>
          </Route>

          {/** Button */}
          <Route exact path="/button">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentButton></ContentButton>
              </div>
            </section>
          </Route>

          {/** Badge */}
          <Route exact path="/badge">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentBadge></ContentBadge>
              </div>
            </section>
          </Route>

          {/** Main */}
          <Route exact path="/main">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentMain></ContentMain>
              </div>
            </section>
          </Route>

          {/** Card */}
          <Route exact path="/card">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentCard></ContentCard>
              </div>
            </section>
          </Route>

          {/** Asset */}
          <Route exact path="/asset">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentAsset></ContentAsset>
              </div>
            </section>
          </Route>

          {/** Table */}
          <Route exact path="/table">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentTable></ContentTable>
              </div>
            </section>
          </Route>

          {/** SidePanel */}
          <Route exact path="/sidepanel">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentSidePanel></ContentSidePanel>
              </div>
            </section>
          </Route>

          {/** Modal */}
          <Route exact path="/modal">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentModal></ContentModal>
              </div>
            </section>
          </Route>

          {/** TextField */}
          <Route exact path="/textfield">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentTextField></ContentTextField>
              </div>
            </section>
          </Route>

          {/** CheckBox */}
          <Route exact path="/checkbox">
            <section className="examples-container">
              <div className="container ptop-75">
                <ContentCheckBox></ContentCheckBox>
              </div>
            </section>
          </Route>
        </Switch>
      </Router>
    </Main>
  );
};

export default App;
