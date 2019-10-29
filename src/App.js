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

  render() {
    return (
      <Main>
        {/** Menu SideBar */}
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
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Installation")}
            >
              Installation
            </Text>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Theme
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Colors")}
            >
              Colors
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Text")}
            >
              Text
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Button")}
            >
              Button
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Badge")}
            >
              Badge
            </Text>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Containers
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Main")}
            >
              Main
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Card")}
            >
              Card
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Table")}
            >
              Table
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("SidePanel")}
            >
              SidePanel
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Modal")}
            >
              Modal
            </Text>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={Colors.textSecondary} break>
              Inputs
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("TextField")}
            >
              TextField
            </Text>
            <Text
              bold
              size="18px"
              color={Colors.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("CheckBox")}
            >
              CheckBox
            </Text>
          </div>
        </div>

        {/** Container Components */}
        <section style={{ marginLeft: "260px", marginRight: "200px" }}>
          <div className="container ptop-75">
            {this.DisplaySelectedComponent()}
          </div>
        </section>

        {/** SidePanel */}
        <SidePanel
          title="SidePanel needs a title"
          description="This is description of the SidePanel"
          visible={this.state.panel_visible}
          onClose={() => this.ClosePanel()}
        >
          {/** Add content here */}
        </SidePanel>

        {/** Modal */}
        <Modal
          title="Modal Title"
          description="And the amazing Modal description!"
          visible={this.state.modal_visible}
          onClose={() => this.CloseModal()}
        >
          <div className="col-10 offset-1 mtop-10">
            <TextField label="Name" smallcaps>
              <input
                type="text"
                placeholder="Your name"
                value={this.state.input_name}
                onChange={evt =>
                  this.setState({ input_name: evt.target.value })
                }
              />
            </TextField>
          </div>

          <div className="col-10 offset-1 mtop-10">
            <TextField label="Email">
              <input
                type="text"
                placeholder="Your email address"
                value={this.state.input_email}
                onChange={evt =>
                  this.setState({ input_email: evt.target.value })
                }
              />
            </TextField>
          </div>

          <div className="col-12 center mtop-10">
            <Button onClick={() => this.SubmitForm()}>Save</Button>
          </div>
        </Modal>
      </Main>
    );
  }
}
