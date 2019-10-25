import React, { Component } from "react";
import "./App.css";

/** Import mydefiUI theme */
import {
  theme,
  Main,
  Card,
  SidePanel,
  Button,
  Modal,
  Field,
  Table,
  TableRow,
  Badge,
  Text,
  CheckBox
} from "@mydefi/ui";

/** Import Docs Components */
import ContentText from "./components/ContentText";
import ContentButton from "./components/ContentButton";

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
    component_selected: "Text"
  };

  /** Open and Close Panel */
  OpenPanel() {
    console.log("Should open panel.");
    this.setState({ panel_visible: true });
  }
  ClosePanel() {
    console.log("Should close panel.");
    this.setState({ panel_visible: false });
  }

  /** Open and Close Modal */
  OpenModal() {
    this.setState({ modal_visible: true });
  }
  CloseModal() {
    this.setState({ modal_visible: false });
  }

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
      // Display Buttons
      case "Button":
        return <ContentButton></ContentButton>;
        break;

      // Table
      case "Table":
        return (
          <div className="col-12 p-0">
            <Card
              title="This a simple table"
              description="It can be useful to display a large amount of information."
            >
              <Table className="mtop-15">
                <thead>
                  <TableRow
                    head={true}
                    data={["Hash", "From", "To", "Value"]}
                  ></TableRow>
                </thead>
                <tbody>
                  <TableRow
                    data={[
                      <span className="white">0x14578...</span>,
                      <Text color={theme.textSecondary}>0xa78wOP...</Text>,
                      "0xa78wOP...",
                      <Badge rounded>0.45 ETH</Badge>
                    ]}
                  ></TableRow>

                  <TableRow
                    data={[
                      <span className="pink">0x14578...</span>,
                      "0xa78wOP...",
                      "0xa78wOP...",
                      <Badge
                        rounded
                        backgroundColor="#d43d76"
                        foregroundColor="#FFFFFF"
                      >
                        12.10 ETH
                      </Badge>
                    ]}
                  ></TableRow>

                  <TableRow
                    data={[
                      <span className="yellow">0x14578...</span>,
                      "0xa78wOP...",
                      "0xa78wOP...",
                      <Badge
                        rounded
                        backgroundColor="#fd9240"
                        foregroundColor="#FFFFFF"
                      >
                        892.90 ETH
                      </Badge>
                    ]}
                  ></TableRow>
                  <TableRow
                    data={[
                      <span className="green">0x14578...</span>,
                      "0xa78wOP...",
                      "0xa78wOP...",
                      <Badge
                        rounded
                        backgroundColor="#1ad692"
                        foregroundColor="#FFFFFF"
                      >
                        892.90 ETH
                      </Badge>
                    ]}
                  ></TableRow>
                </tbody>
              </Table>
            </Card>
          </div>
        );
        break;

      // Card Component
      case "Card":
        return (
          <div className="row">
            <div className="col-4">
              <Card
                title="Clickable card with icon"
                description="Click me to open a side panel"
                icon={require("./assets/img/compound-logo-square.png")}
                onClick={() => this.OpenPanel()}
              ></Card>
            </div>

            <div className="col-4">
              <Card
                title="No need to click"
                description="I'm not clickable"
              ></Card>
            </div>

            <div className="col-4">
              <Card
                title="Open a Modal"
                description="Click on me to open a simple Modal"
                icon={require("./assets/img/wallet-logo-square.png")}
                onClick={() => this.OpenModal()}
              ></Card>
            </div>
          </div>
        );
        break;

      // Text Component
      case "Text":
        return <ContentText></ContentText>;
        break;

      // Badge Component
      case "Badge":
        return (
          <div className="col-12 p-0">
            <Card
              title="Here are some other components"
              description="Have you noticed that the title and description are now centered?"
              className="center"
            >
              <div className="col-12 mtop-40 left">
                <h3 className="left mbottom-15">Badges</h3>

                {/** Collateral Badge with label */}
                <Badge
                  size="15px"
                  foregroundColor="#7ffacc"
                  backgroundColor="#191735"
                  label={
                    <React.Fragment>
                      <Text size="14px" bold break>
                        10 ETH
                      </Text>
                      <Text color={theme.textSecondary} size="13px">
                        $1,700
                      </Text>
                    </React.Fragment>
                  }
                  className="p-10"
                >
                  Collateral
                </Badge>

                {/** Debt Badge with label */}
                <Badge
                  size="15px"
                  foregroundColor="#e85e5e"
                  backgroundColor="#191735"
                  label={
                    <React.Fragment>
                      <Text size="14px" bold break>
                        103 DAI
                      </Text>
                      <Text color={theme.textSecondary} size="13px">
                        $103
                      </Text>
                    </React.Fragment>
                  }
                  className="p-10 mtop-10"
                >
                  Debt
                </Badge>

                {/** Status Badge without secondary label */}
                <Badge
                  size="15px"
                  foregroundColor="#ffffff"
                  backgroundColor="#191735"
                  label={
                    <Text size="14px" color={theme.green} bold>
                      SAFE
                    </Text>
                  }
                  className="p-10 mtop-10"
                >
                  Status
                </Badge>
              </div>
            </Card>
          </div>
        );
        break;

      // TextField
      case "TextField":
        return (
          <div className="col-12 p-0">
            <Card
              title="Inputs"
              description="You can use those inputs in your forms."
              className="center"
            >
              {/** Text Inputs */}
              <div className="col-12 mtop-20 left">
                <Text bold break size="14px">
                  Text Inputs
                </Text>
                <Field
                  label={
                    <Text smallcaps size="15px" color={theme.textSecondary}>
                      Text Input with label
                    </Text>
                  }
                >
                  <input type="text" placeholder="Standard Placeholder" />
                </Field>
                <Field className="mtop-10">
                  <input type="text" placeholder="Text input without label" />
                </Field>
              </div>

              {/** Checkbox Inputs */}
              <div className="col-12 mtop-20 left">
                <Text bold break size="14px">
                  Checkbox
                </Text>
                <CheckBox
                  className="mtop-10"
                  label="Checkbox with green checkmark (default)"
                ></CheckBox>
                <CheckBox
                  label="White checkbox with pink checkmark"
                  backgroundColor={theme.white}
                  foregroundColor={theme.pink}
                ></CheckBox>
                <CheckBox
                  label={
                    <Text color={theme.white}>
                      <Text color={theme.yellow}>Yellow</Text> checkbox with{" "}
                      <Text color={theme.blue}>blue</Text> checkmark (and
                      colored label)
                    </Text>
                  }
                  backgroundColor={theme.yellow}
                  foregroundColor={theme.blue}
                ></CheckBox>
              </div>
            </Card>
          </div>
        );
        break;
    }
  }

  render() {
    return (
      <Main>
        {/** Menu SideBar */}
        <div className="SideNav ptop-25">
          <div className="col-12 center">
            <Text bold size="20px">
              mydefiUI
            </Text>
          </div>

          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={theme.textSecondary} break>
              Theme
            </Text>
            <Text
              bold
              size="18px"
              color={theme.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Colors")}
            >
              Colors
            </Text>
            <Text
              bold
              size="18px"
              color={theme.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Text")}
            >
              Text
            </Text>
            <Text
              bold
              size="18px"
              color={theme.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Button")}
            >
              Button
            </Text>
            <Text
              bold
              size="18px"
              color={theme.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Badge")}
            >
              Badge
            </Text>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={theme.textSecondary} break>
              Containers
            </Text>
            <Text
              bold
              size="18px"
              color={theme.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Main")}
            >
              Main
            </Text>
            <Text
              bold
              size="18px"
              color={theme.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Card")}
            >
              Card
            </Text>
            <Text
              bold
              size="18px"
              color={theme.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("Table")}
            >
              Table
            </Text>
            <Text
              bold
              size="18px"
              color={theme.textPrimary}
              break
              className="TextHover"
              onClick={() => this.SelectComponent("SidePanel")}
            >
              SidePanel
            </Text>
            <Text bold size="18px" color={theme.textPrimary} break>
              Modal
            </Text>
          </div>
          <div className="col-12 ptop-25">
            <Text smallcaps bold size="17px" color={theme.textSecondary} break>
              Inputs
            </Text>
            <Text bold size="18px" color={theme.textPrimary} break>
              TextField
            </Text>
            <Text bold size="18px" color={theme.textPrimary} break>
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
            <Field label="Name" smallcaps>
              <input
                type="text"
                placeholder="Your name"
                value={this.state.input_name}
                onChange={evt =>
                  this.setState({ input_name: evt.target.value })
                }
              />
            </Field>
          </div>

          <div className="col-10 offset-1 mtop-10">
            <Field label="Email">
              <input
                type="text"
                placeholder="Your email address"
                value={this.state.input_email}
                onChange={evt =>
                  this.setState({ input_email: evt.target.value })
                }
              />
            </Field>
          </div>

          <div className="col-12 center mtop-10">
            <Button onClick={() => this.SubmitForm()}>Save</Button>
          </div>
        </Modal>
      </Main>
    );
  }
}
