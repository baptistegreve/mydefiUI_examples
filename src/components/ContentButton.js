import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, Button } from "@mydefi/ui";

const ContentButton = props => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Button
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        The {"<Button>"} component is used to display buttons. They can be
        linked to the function of your choice.
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { Button } from "@mydefi/ui"; 
            
const App = () => (
    <Button>Your Button Text</Button>
);`}
          </pre>
        </Card>
        <Text bold size="19px" break>
          Demonstration
        </Text>

        {/** Default Button */}
        <Card className="mtop-10 mbottom-15">
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<Button onClick={() => alert("I'm working")}>Click me!</Button>`}
            </pre>
            <div className="col-12 center">
              <Button onClick={() => alert("I'm working")}>Click me!</Button>
            </div>
          </div>
        </Card>

        {/** Colored Buttons */}
        <Card className="mtop-10 mbottom-50">
          <div className="col-12">
            <pre className="mbottom-20">
              {`<Button color="yellow">Yellow Button</Button>
<Button color="pink">Pink Button</Button>`}
            </pre>
            <div className="col-12 center">
              <Button color="yellow" className="mright-15">
                Yellow Button
              </Button>
              <Button color="pink">Pink Button</Button>
            </div>
          </div>
        </Card>

        <Text bold size="19px" break>
          Properties
        </Text>
        <Text size="16px" color={Colors.textSecondary} break>
          Here are the properties that can be used with the Button component.
        </Text>

        {/** <Text> properties */}
        <Card className="mtop-10 mbottom-15 component_properties">
          <Text bold size="16px" break>
            color
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            Use the color of your choice. Example: Theme colors such as
            "yellow", "pink"... or hex colors such as "#FF9944".
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
                #ffffff
              </Badge>
            </li>
          </ul>
          <hr />

          <Text bold size="16px" break>
            onClick
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            An action can be called when clicking on a this component if you add
            the onClick properties. <br />
            Example: () => this.YourFunction()
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
  );
};

export default ContentButton;
