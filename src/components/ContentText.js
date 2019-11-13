import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge } from "@mydefi/ui";

const ContentText = props => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Text
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        The {"<Text>"} component is used to display inline-text with some custom
        styles. It can be used to display titles, paragraphs of text, or even
        labels inside other components.
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { Text } from "@mydefi/ui"; 
            
const App = () => (
    <Text>Your Text</Text>
);`}
          </pre>
        </Card>
        <Text bold size="19px" break>
          Demonstration
        </Text>

        {/** White Title */}
        <Card className="mtop-10 mbottom-15">
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<Text size="25px" bold break>White Bold Title</Text>
<Text size="16px" color={Colors.textSecondary}>With a grey description.</Text>`}
            </pre>
            <Text size="25px" bold break>
              White Bold Title
            </Text>
            <Text size="16px" color={Colors.textSecondary}>
              With a grey description.
            </Text>
          </div>
        </Card>

        {/** Blue, White, Red Text */}
        <Card className="mtop-10 mbottom-15">
          <div className="col-12">
            <pre className="mbottom-20">
              {`<Text size="15px" color={Colors.blue} break>Blue</Text>
<Text size="15px" color={Colors.negative} break>Red</Text>`}
            </pre>
            <Text size="15px" color={Colors.blue} break>
              Blue Text
            </Text>{" "}
            <Text size="15px" color={Colors.negative}>
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
        <Text size="16px" color={Colors.textSecondary} break>
          Here are the properties that can be used with the Text component.
        </Text>

        {/** <Text> properties */}
        <Card className="mtop-10 mbottom-15 component_properties">
          <Text bold size="16px" break>
            color
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
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
          <Text size="15px" color={Colors.textSecondary} break>
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
          <Text size="15px" color={Colors.textSecondary} break>
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
          <Text size="15px" color={Colors.textSecondary} break>
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
            break
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            Add a line-break after the Text component
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
          <Text size="15px" color={Colors.textSecondary} break>
            An action can be called when clicking on this component if you add
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

export default ContentText;
