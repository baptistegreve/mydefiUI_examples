import React, { Component } from "react";
import "./App.css";

/** Import mydefiUI theme */
import {
  Colors,
  Main,
  SidePanel,
  Button,
  Modal,
  TextField,
  Text
} from "@mydefi/ui";

/** Manage Routing */
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

/** Import Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    panel_visible: false,
    modal_visible: false,

    /** Test Input */
    input_email: "",
    input_name: "",

    /** Manage SideBar Clicks */
    component_selected: "Installation"
  };

  /** Form Submit */
  SubmitForm() {
    alert(
      "Email: " + this.state.input_email + " \nName: " + this.state.input_name
    );
  }

  SelectComponent(_component) {
    console.log("Select component: " + _component);
    this.setState({ component_selected: _component });
  }

  DisplaySelectedComponent() {
    switch (this.state.component_selected) {
      // Display Installation Instructions
      case "Installation":
        return <ContentInstallation></ContentInstallation>;
        break;

      // Display Colors
      case "Colors":
        return <ContentColors></ContentColors>;
        break;

      // Display Main
      case "Main":
        return <ContentMain></ContentMain>;
        break;

      // Card Component
      case "Card":
        return <ContentCard></ContentCard>;
        break;

      // SidePanel Component
      case "SidePanel":
        return <ContentSidePanel></ContentSidePanel>;
        break;

      // Modal Component
      case "Modal":
        return <ContentModal></ContentModal>;
        break;

      // Display Buttons
      case "Button":
        return <ContentButton></ContentButton>;
        break;

      // Table
      case "Table":
        return <ContentTable></ContentTable>;
        break;

      // Text Component
      case "Text":
        return <ContentText></ContentText>;
        break;

      // Badge Component
      case "Badge":
        return <ContentBadge></ContentBadge>;
        break;

      // TextField
      case "TextField":
        return <ContentTextField></ContentTextField>;
        break;

      // CheckBox
      case "CheckBox":
        return <ContentCheckBox></ContentCheckBox>;
        break;
    }
  }

  DisplaySideNavigation() {
    return (
      <React.Fragment>
        <div className="SideNav ptop-25">
          <div className="col-12 center">
            <Text
              bold
              size="20px"
              className="cursor"
              onClick={() => this.SelectComponent("Installation")}
            >
              mydefiUI
            </Text>
          </div>

          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Get Started
            </Text>
            <Link to="/installation">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Installation
              </Text>
            </Link>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Theme
            </Text>
            <Link to="/colors">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Colors
              </Text>
            </Link>

            <Link to="/text">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Text
              </Text>
            </Link>

            <Link to="/button">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Button
              </Text>
            </Link>

            <Link to="/badge">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Badge
              </Text>
            </Link>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Components
            </Text>

            <Link to="/main">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Main
              </Text>
            </Link>

            <Link to="/card">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Card
              </Text>
            </Link>

            <Link to="/asset">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Asset
              </Text>
            </Link>

            <Link to="/table">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Table
              </Text>
            </Link>

            <Link to="/sidepanel">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                SidePanel
              </Text>
            </Link>
            <Link to="/modal">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                Modal
              </Text>
            </Link>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Inputs
            </Text>

            <Link to="/textfield">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                TextField
              </Text>
            </Link>

            <Link to="/checkbox">
              <Text
                bold
                size="18px"
                color={Colors.textPrimary}
                break
                className="TextHover"
              >
                CheckBox
              </Text>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Main>
        {/** Container Components */}
        <Router>
          {this.DisplaySideNavigation()}
          <Switch>
            {/** Home / Installation */}
            <Route exact path="/">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentInstallation></ContentInstallation>
                </div>
              </section>
            </Route>
            <Route exact path="/installation">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentInstallation></ContentInstallation>
                </div>
              </section>
            </Route>

            {/** Colors */}
            <Route exact path="/colors">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentColors></ContentColors>
                </div>
              </section>
            </Route>

            {/** Text */}
            <Route exact path="/text">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentText></ContentText>
                </div>
              </section>
            </Route>

            {/** Button */}
            <Route exact path="/button">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentButton></ContentButton>
                </div>
              </section>
            </Route>

            {/** Badge */}
            <Route exact path="/badge">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentBadge></ContentBadge>
                </div>
              </section>
            </Route>

            {/** Main */}
            <Route exact path="/main">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentMain></ContentMain>
                </div>
              </section>
            </Route>

            {/** Card */}
            <Route exact path="/card">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentCard></ContentCard>
                </div>
              </section>
            </Route>

            {/** Asset */}
            <Route exact path="/asset">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentAsset></ContentAsset>
                </div>
              </section>
            </Route>

            {/** Table */}
            <Route exact path="/table">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentTable></ContentTable>
                </div>
              </section>
            </Route>

            {/** SidePanel */}
            <Route exact path="/sidepanel">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentSidePanel></ContentSidePanel>
                </div>
              </section>
            </Route>

            {/** Modal */}
            <Route exact path="/modal">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentModal></ContentModal>
                </div>
              </section>
            </Route>

            {/** TextField */}
            <Route exact path="/textfield">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentTextField></ContentTextField>
                </div>
              </section>
            </Route>

            {/** CheckBox */}
            <Route exact path="/checkbox">
              <section style={{ marginLeft: "260px", marginRight: "200px" }}>
                <div className="container ptop-75">
                  <ContentCheckBox></ContentCheckBox>
                </div>
              </section>
            </Route>
          </Switch>
        </Router>
      </Main>
    );
  }
}
