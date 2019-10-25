import React from "react";
import Prism from "prismjs";
/** Import mydefiUI theme */
import { theme, Card, Text, Badge, Button } from "@mydefi/ui";

// The code snippet you want to highlight, as a string
const code_usage = `import { Text } from "@mydefi/ui";

const App = () => (
    <Text>Your Text</Text>
);`;

// Returns a highlighted HTML string
const html_usage = Prism.highlight(
  code_usage,
  Prism.languages.javascript,
  "javascript"
);
console.log(html_usage);

const ContentButton = props => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Button
      </Text>
      <Text size="19px" color={theme.textSecondary} break>
        The {"<Button>"} component is used to display buttons.
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
            <div class="col-12 center">
              <Button onClick={() => alert("I'm working")}>Click me!</Button>
            </div>
          </div>
        </Card>

        {/** Blue, White, Red Text */}
        <Card className="mtop-10 mbottom-15">
          <div className="col-12">
            <pre className="mbottom-20">
              {`<Text size="15px" color={theme.blue} break>Blue</Text>
<Text size="15px" color={theme.red} break>Red</Text>`}
            </pre>
            <Text size="15px" color={theme.blue} break>
              Blue Text
            </Text>{" "}
            <Text size="15px" color={theme.red}>
              Red Text
            </Text>
          </div>
        </Card>

        {/** Grey Smallcaps */}
        <Card className="mtop-10 mbottom-15 mbottom-50">
          <div className="col-12 align-middle">
            <pre className="mbottom-20">{`<Text size="18px" smallcaps color="#d43d76>Pink Smallcaps</Text>`}</pre>
            <Text size="18px" smallcaps color="#d43d76">
              Pink Smallcaps
            </Text>
          </div>
        </Card>

        <Text bold size="19px" break>
          Properties
        </Text>
        <Text size="16px" color={theme.textSecondary} break>
          Here are the properties that can be used with the Text component.
        </Text>

        {/** <Text> properties */}
        <Card className="mtop-10 mbottom-15 component_properties">
          <Text bold size="16px" break>
            color
          </Text>
          <Text size="15px" color={theme.textSecondary} break>
            Use the color of your choice. Example: #FF9944.
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
            size
          </Text>
          <Text size="15px" color={theme.textSecondary} break>
            Use the size of your choice. Example: 14px.
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
                13px
              </Badge>
            </li>
          </ul>
          <hr />
          <Text bold size="16px" break>
            smallcaps
          </Text>
          <Text size="15px" color={theme.textSecondary} break>
            Set the text to small capitals.
          </Text>
          <ul>
            <li>
              <Text size="15px">Type:</Text>{" "}
              <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                boolean
              </Badge>
            </li>
            <li>
              Default:{" "}
              <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                false
              </Badge>
            </li>
          </ul>
          <hr />
          <Text bold size="16px" break>
            bold
          </Text>
          <Text size="15px" color={theme.textSecondary} break>
            Set the text to bold.
          </Text>
          <ul>
            <li>
              <Text size="15px">Type:</Text>{" "}
              <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                boolean
              </Badge>
            </li>
            <li>
              Default:{" "}
              <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                false
              </Badge>
            </li>
          </ul>
          <hr />
          <Text bold size="16px" break>
            onClick
          </Text>
          <Text size="15px" color={theme.textSecondary} break>
            An action can be called when clicking on a Text component if you add
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
