import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, CheckBox } from "@mydefi/ui";

const ContentCheckBox = props => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        CheckBox
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        The {"<CheckBox>"} component is used to display checkboxes.
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { CheckBox } from "@mydefi/ui"; 
            
const App = () => (
    <CheckBox label="Default checkbox"></CheckBox>
);`}
          </pre>
        </Card>
        <Text bold size="19px" break>
          Demonstration
        </Text>

        {/** Default Input Without Label */}
        <Card className="mtop-10 mbottom-15">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Default checkbox:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<CheckBox label="Default checkbox"></CheckBox>`}
            </pre>
            <CheckBox label="Default checkbox"></CheckBox>
          </div>
        </Card>

        {/** Default Input Without Label */}
        <Card className="mtop-10 mbottom-50">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Custom / colored checkboxes:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<CheckBox 
    label="White checkbox/pink checkmark" 
    backgroundColor={Colors.white} 
    foregroundColor={Colors.pink}>
</CheckBox>

<CheckBox
    label={
        <Text color={Colors.white}>
            <Text color={Colors.yellow}>Yellow</Text> checkbox with{" "}
            <Text color={Colors.blue}>blue</Text> checkmark (and colored
            label)
        </Text>}
    backgroundColor={Colors.yellow}
    foregroundColor={Colors.blue}
></CheckBox>`}
            </pre>

            <CheckBox
              label="White checkbox with pink checkmark"
              backgroundColor={Colors.white}
              foregroundColor={Colors.pink}
            ></CheckBox>
            <CheckBox
              label={
                <Text color={Colors.white}>
                  <Text color={Colors.yellow}>Yellow</Text> checkbox with{" "}
                  <Text color={Colors.blue}>blue</Text> checkmark (and colored
                  label)
                </Text>
              }
              backgroundColor={Colors.yellow}
              foregroundColor={Colors.blue}
            ></CheckBox>
          </div>
        </Card>

        <Text bold size="19px" break>
          Properties
        </Text>
        <Text size="16px" color={Colors.textSecondary} break>
          Here are the properties that can be used with the Text component.
        </Text>

        {/** <Text> properties */}
        <Card className="mtop-10 mbottom-15 component_properties">
          <Text bold size="16px" break>
            label
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            You can add a label to the CheckBox component, it will appear on top
            of the checkbox. <br />
            The label can be a simple string or custom Text component.
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
                "CheckBox Label"
              </Badge>{" "}
              or{" "}
              <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                {'<Text color="#ff9944">Orange Label</Text>'}
              </Badge>
            </li>
          </ul>
          <hr />

          <Text bold size="16px" break>
            backgroundColor
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            Set the background color with the hex color of your choice. Example:
            "#ff9944".
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
            foregroundColor
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            Set the text color with the hex color of your choice. Example:
            "#ffffff".
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
        </Card>
      </div>
    </div>
  );
};

export default ContentCheckBox;
