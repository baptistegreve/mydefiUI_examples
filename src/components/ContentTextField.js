import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, TextField } from "@mydefi/ui";

const ContentTextField = props => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        TextField
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        The {"<TextField>"} component is used to display stylized text inputs
        and textareas.
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { TextField } from "@mydefi/ui"; 
            
const App = () => (
    <TextField>
        <input type="text" placeholder="Default Input" />
    </TextField>
);`}
          </pre>
        </Card>
        <Text bold size="19px" break>
          Demonstration
        </Text>

        {/** Input Without Label */}
        <Card className="mtop-10 mbottom-15">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Input without label:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<TextField>
    <input type="text" placeholder="Default Input" />
</TextField>`}
            </pre>
            <div className="col-lg-6 offset-lg-3">
              <TextField>
                <input type="text" placeholder="Default Input" />
              </TextField>
            </div>
          </div>
        </Card>

        {/** Input WITH Label */}
        <Card className="mtop-10 mbottom-15">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Input with label
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<TextField label="Email Address">
    <input type="text" placeholder="Email address" />
</TextField>`}
            </pre>
            <div className="col-lg-6 offset-lg-3">
              <TextField label="Email Address">
                <input type="text" placeholder="Email address" />
              </TextField>
            </div>
          </div>
        </Card>

        {/** Input with custom Label */}
        <Card className="mtop-10 mbottom-50">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Input with custom label:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<TextField 
    label={<Text smallcaps color={Colors.pink} size="16px">Full name</Text>}>
    <input type="text" placeholder="Your name" />
</TextField>`}
            </pre>
            <div className="col-lg-6 offset-lg-3">
              <TextField
                label={
                  <Text smallcaps color={Colors.pink} size="16px">
                    Full name
                  </Text>
                }
              >
                <input type="text" placeholder="Your name" />
              </TextField>
            </div>
          </div>
        </Card>

        {/** Input WITH Label & textarea */}
        <Card className="mtop-10 mbottom-50">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Input and textarea with labels:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<TextField label="Email Address">
    <input type="text" placeholder="Email address" />
</TextField>
<TextField label="Your Project">
    <textarea placeholder="What's your idea?" rows="5"></textarea>
</TextField>`}
            </pre>
            <div className="col-lg-6 offset-lg-3">
              <TextField label="Email Address">
                <input type="text" placeholder="Email address" />
              </TextField>
              <TextField label="Your Project" className="mtop-15">
                <textarea placeholder="What's your idea?" rows="5"></textarea>
              </TextField>
            </div>
          </div>
        </Card>

        {/** <Text> properties */}
        <Text bold size="19px" break>
          Properties
        </Text>
        <Text size="16px" color={Colors.textSecondary} break>
          Here are the properties that can be used with the Text component.
        </Text>
        <Card className="mtop-10 mbottom-15 component_properties">
          <Text bold size="16px" break>
            label (optional)
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            You can add a label to the TextField component, it will appear on
            top of the input. <br />
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
                "Label Text"
              </Badge>{" "}
              or{" "}
              <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                {'<Text color="#ff9944">Orange Label</Text>'}
              </Badge>
            </li>
          </ul>
          <hr />
          <Text bold size="16px" break>
            ::child
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            The TextField component can contains text inputs ({"<input/>"}) or
            textareas ({"<textarea/>"}). They will automatically be stylized to
            follow our theme.
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default ContentTextField;
