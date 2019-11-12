import React, { Component } from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, Button, SidePanel } from "@mydefi/ui";

export default class ContentSidePanel extends Component {
  state = {
    SidePanel01Visible: false
  };
  // Function to Open the Default SidePanel
  OpenDefaultSidePanel() {
    this.setState({ SidePanel01Visible: true });
  }
  CloseSidePanel01() {
    this.setState({ SidePanel01Visible: false });
  }
  render() {
    return (
      <React.Fragment>
        {/** SidePanel 01 */}
        <SidePanel
          visible={this.state.SidePanel01Visible}
          title="I am a SidePanel"
          description="And I'm animated!"
          onClose={() => this.CloseSidePanel01()}
        ></SidePanel>

        <div className="col-12 p-0">
          <Text size="28px" bold break>
            SidePanel
          </Text>
          <Text size="19px" color={Colors.textTertiary} break>
            The {"<SidePanel>"} component can be used to open a panel on the
            right to display more information.{" "}
          </Text>
          <div className="ptop-50">
            <Text bold size="19px" break>
              Usage
            </Text>
            <Card className="mtop-10 mbottom-50">
              <pre>
                {`import { SidePanel } from "@mydefi/ui"; 
                    
const App = () => (
    <SidePanel 
        title="SidePanel Title" 
        description="The SidePanel Description">
    </SidePanel>
);`}
              </pre>
            </Card>
            <Text bold size="19px" break>
              Demonstration
            </Text>
            {/** Default Card */}
            <Card className="mtop-10 mbottom-50">
              <div className="mbottom-10">
                <Text size="15px" bold>
                  Default SidePanel with Title and Description (click on the
                  button to open it):
                </Text>
              </div>
              <div className="col-12 align-middle">
                <pre className="mbottom-20">
                  {`<SidePanel
    title="I am a SidePanel"
    description="And I'm animated!"
    onClose={() => this.CloseSidePanel01()}
></SidePanel>`}
                </pre>
              </div>
              <div className="col-12 center mtop-10">
                <Button onClick={() => this.OpenDefaultSidePanel()}>
                  Open SidePanel
                </Button>
              </div>
            </Card>

            <Text bold size="19px" break>
              Properties
            </Text>
            <Text size="16px" color={Colors.textSecondary} break>
              Here are the properties that can be used with the Button
              component.
            </Text>

            {/** <Text> properties */}
            <Card className="mtop-10 mbottom-15 component_properties">
              <Text bold size="16px" break>
                title
              </Text>
              <Text size="15px" color={Colors.textSecondary} break>
                The title of the SidePanel. You can automatically display a
                title for your SidePanel if you want to.
              </Text>
              <ul>
                <li>
                  <Text size="15px">Type:</Text>{" "}
                  <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                    string
                  </Badge>
                </li>
                <li>
                  Default:{" "}
                  <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                    null
                  </Badge>
                </li>
              </ul>
              <hr />

              <Text bold size="16px" break>
                description
              </Text>
              <Text size="15px" color={Colors.textSecondary} break>
                The description of the SidePanel. You can automatically display
                a description for your SidePanel if you want to.
              </Text>
              <ul>
                <li>
                  <Text size="15px">Type:</Text>{" "}
                  <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                    string
                  </Badge>
                </li>
                <li>
                  Default:{" "}
                  <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                    null
                  </Badge>
                </li>
              </ul>
              <hr />

              <Text bold size="16px" break>
                width
              </Text>
              <Text size="15px" color={Colors.textSecondary} break>
                The with in "px" or "%" of the SidePanel. Example: "300px" or
                "50%".
              </Text>
              <ul>
                <li>
                  <Text size="15px">Type:</Text>{" "}
                  <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                    string
                  </Badge>
                </li>
                <li>
                  Default:{" "}
                  <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                    600px
                  </Badge>
                </li>
              </ul>
              <hr />

              <Text bold size="16px" break>
                onClose
              </Text>
              <Text size="15px" color={Colors.textSecondary} break>
                This is the internal function that will be called when the user
                clicks on the SidePanel's dark background to close it.
                <br />
                Example: () => this.CloseSidePanel()
              </Text>
              <ul>
                <li>
                  <Text size="15px">Type:</Text>{" "}
                  <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                    function
                  </Badge>
                </li>
                <li>
                  Default:{" "}
                  <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                    undefined
                  </Badge>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
