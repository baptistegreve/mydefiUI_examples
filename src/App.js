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

/** Import Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    panel_visible: false,
    modal_visible: false,

    /** Test Input */
    input_email: "",
    input_name: ""
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

  render() {
    return (
      <Main>
        {/** Top Part with buttons */}
        <div className="container ptop-25">
          <div className="col-12">
            <Button className="mright-10" onClick={() => this.OpenPanel()}>
              Open Panel
            </Button>
            <Button
              className="mright-10"
              color="yellow"
              onClick={() => this.OpenModal()}
            >
              Open Modal
            </Button>
            <Button color="pink" onClick={() => alert("Nice click.")}>
              Alert
            </Button>
          </div>
        </div>

        <div className="container mtop-25">
          {/** Cards Row */}
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

          <div className="row">
            {/** Left Column */}
            <div className="col-6">
              {/** Table Component */}
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
                        onClick={() => this.OpenPanel()}
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

              {/** Text Components */}
              <div className="col-12 p-0">
                <Card
                  title="Text Components"
                  description="Our Text component can be used to easily create Text assets."
                >
                  <div className="col-12 mtop-40 left">
                    <p>
                      <Text size="28px" bold break>
                        Title
                      </Text>
                      <Text size="19px" color={theme.textSecondary} break>
                        Subtitle
                      </Text>
                      <Text size="14px" color={theme.textPrimary}>
                        We can easily forgive a child who is afraid of the dark;
                        the real tragedy of life is when men are afraid of the
                        light.
                      </Text>{" "}
                      <Text size="14px" color={theme.yellow} break bold italic>
                        Plato.
                      </Text>{" "}
                      <Text size="14px" color={theme.pink} break>
                        The Republic and Life.
                      </Text>
                    </p>
                    <hr />
                    <p>
                      <Text
                        size="19px"
                        smallcaps
                        color={theme.textSecondary}
                        break
                        className="mtop-20"
                      >
                        Smallcaps Subtitle
                      </Text>
                      <Text size="14px" color={theme.textPrimary}>
                        One of the penalties for refusing to participate in
                        politics is that you end up being governed by your
                        inferiors.
                      </Text>{" "}
                      <Text size="14px" color={theme.blue} break bold italic>
                        Plato.
                      </Text>{" "}
                      <Text size="14px" color={theme.green} break>
                        The Republic and Life (again).
                      </Text>
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/** Right Column */}
            <div className="col-6">
              {/** Random Components Row */}
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

              {/** Inputs */}
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
                      <input
                        type="text"
                        placeholder="Text input without label"
                      />
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
            </div>
          </div>
        </div>

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
