import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, Button } from "@mydefi/ui";

const ContentCard = props => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Card
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        The {"<Card>"} component can be used to display blocks as Cards. <br />
        It can be useful to group data together
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { Card } from "@mydefi/ui"; 
            
const App = () => (
    <Card title="My Title" description="The Card Description"></Button>
);`}
          </pre>
        </Card>
        <Text bold size="19px" break>
          Demonstration
        </Text>
        {/** Default Card */}
        <Card className="mtop-10 mbottom-15">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Default Card with Title and Description:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<Card
    title="Default card"
    description="With Title and Description."
></Card>`}
            </pre>
          </div>
        </Card>
        <div className="col-6 offset-3 mtop-10 p-0">
          <Card
            title="Default Card"
            description="With Title and Description."
          ></Card>
        </div>

        {/** Clickable Card with Icon */}
        <Card className="mtop-10 mbottom-15">
          <div className="mbottom-10">
            <Text size="15px" bold>
              A Clickable Card with an Icon:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<Card
    title="Clickable card with icon"
    description="Click me to show the alert."
    icon="https://mydefi.org/img/compound-icon.png"
    onClick={() => alert("You clicked me!")}
></Card>`}
            </pre>
          </div>
        </Card>
        <div className="col-6 offset-3 mtop-10 p-0">
          <Card
            title="Clickable card with icon"
            description="Click me to show the alert."
            icon="https://mydefi.org/img/compound-icon.png"
            onClick={() => alert("You clicked me!")}
          ></Card>
        </div>

        {/** Full width card with content */}
        <Card className="mtop-10 mbottom-15">
          <div className="col-12 align-middle">
            <div className="mbottom-10">
              <Text size="15px" bold>
                A Card with Child content:
              </Text>
            </div>
            <pre className="mbottom-20">
              {`<Card>
    <div>
        <Text size="15px">
            "We can easily forgive a child who is afraid of the dark; the
            real tragedy of life is when men are afraid of the light." 
            <Text size="15px" bold>Plato</Text>
        </Text>
    </div>
    <div>
        <Button>I'm not clickable</Button>
    </div>
</Card>`}
            </pre>
          </div>
        </Card>
        <div className="col-10 offset-1 mtop-10 p-0 mbottom-50">
          <Card>
            <div>
              <Text size="15px">
                "We can easily forgive a child who is afraid of the dark; the
                real tragedy of life is when men are afraid of the light."{" "}
                <Text size="15px" bold>
                  Plato
                </Text>
              </Text>
            </div>
            <div className="mtop-20">
              <Button>I'm not clickable</Button>
            </div>
          </Card>
        </div>

        <Text bold size="19px" break>
          Properties
        </Text>
        <Text size="16px" color={Colors.textSecondary} break>
          Here are the properties that can be used with the Button component.
        </Text>

        {/** <Text> properties */}
        <Card className="mtop-10 mbottom-15 component_properties">
          <Text bold size="16px" break>
            title
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            The title of the card. You can automatically display a title for
            your Card if you want to.
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
            The description of the card. You can automatically display a
            description for your Card if you want to.
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
            icon
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            You can also display an icon for your Card, it will positioned on
            the left of the Card. The prop should be the image url.
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
            The with in "px" or "%" of the Card. Example: "300px" or "50%".
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
                100%
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

export default ContentCard;
