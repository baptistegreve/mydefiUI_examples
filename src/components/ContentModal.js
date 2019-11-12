import React, { Component } from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, Button, Modal } from "@mydefi/ui";

export default class ContentModal extends Component {
  state = {
    Modal01Visible: false
  };
  // Function to Open the Default Modal
  OpenDefaultModal() {
    this.setState({ Modal01Visible: true });
  }
  CloseModal01() {
    this.setState({ Modal01Visible: false });
  }
  render() {
    return (
      <React.Fragment>
        {/** Modal 01 */}
        <Modal
          visible={this.state.Modal01Visible}
          title="I am a Modal"
          description="And I'm animated!"
          onClose={() => this.CloseModal01()}
        ></Modal>

        <div className="col-12 p-0">
          <Text size="28px" bold break>
            Modal
          </Text>
          <Text size="19px" color={Colors.textTertiary} break>
            The {"<Modal>"} component can be used to open a Modal in the middle
            of the screen.
          </Text>
          <div className="ptop-50">
            <Text bold size="19px" break>
              Usage
            </Text>
            <Card className="mtop-10 mbottom-50">
              <pre>
                {`import { Modal } from "@mydefi/ui"; 
                    
const App = () => (
    <Modal 
        title="Modal Title" 
        description="The Modal Description">
    </Modal>
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
                  Default Modal with Title and Description (click on the button
                  to open it):
                </Text>
              </div>
              <div className="col-12 align-middle">
                <pre className="mbottom-20">
                  {`<Modal
    title="I am a Modal"
    description="And I'm animated!"
    onClose={() => this.CloseModal01()}
></Modal>`}
                </pre>
              </div>
              <div className="col-12 center mtop-10">
                <Button onClick={() => this.OpenDefaultModal()}>
                  Open Modal
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
                The title of the Modal. You can automatically display a title
                for your Modal if you want to.
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
                The description of the Modal. You can automatically display a
                description for your Modal if you want to.
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
                The with in "px" or "%" of the Modal. Example: "300px" or "50%".
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
                    500px
                  </Badge>
                </li>
              </ul>
              <hr />

              <Text bold size="16px" break>
                onClose
              </Text>
              <Text size="15px" color={Colors.textSecondary} break>
                This is the internal function that will be called when the user
                clicks on the Modal's dark background to close it.
                <br />
                Example: () => this.CloseModal()
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
