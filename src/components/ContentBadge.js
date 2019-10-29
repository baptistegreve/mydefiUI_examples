import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, Button } from "@mydefi/ui";

const ContentBadge = props => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Badge
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        The {"<Badge>"} component is used to display small badges. It can be
        useful to highlight some numbers/data.
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { Badge } from "@mydefi/ui"; 
            
const App = () => (
    <Badge>Default Badge</Badge>
);`}
          </pre>
        </Card>
        <Text bold size="19px" break>
          Demonstration
        </Text>

        {/** Default Button */}
        <Card className="mtop-10 mbottom-15">
          <div className="col-12 align-middle">
            <pre className="mbottom-20">{`<Badge>Default Badge</Badge>`}</pre>
            <div class="col-12 center">
              <Badge>Default Badge</Badge>
            </div>
          </div>
        </Card>

        {/** Rounded Colored Badge */}
        <Card className="mtop-10 mbottom-15">
          <div className="col-12 align-middle">
            <pre className="mbottom-20">{`<Badge rounded backgroundColor="#1ad692" foregroundColor="#ffffff">
    Rounded/Green Badge
</Badge>`}</pre>
            <div class="col-12 center">
              <Badge
                rounded
                backgroundColor="#1ad692"
                foregroundColor="#ffffff"
              >
                Rounded/Green Badge
              </Badge>
            </div>
          </div>
        </Card>

        {/** Bigger Badge with Label */}
        <Card className="mtop-10 mbottom-15">
          <div className="col-12 align-middle">
            <pre className="mbottom-20">{`<Badge size="15px" label="SAFE" foregroundColor="#7ffacc" 
    backgroundColor="#191735">Status</Badge>`}</pre>
            <div class="col-12 center">
              <Badge
                size="15px"
                foregroundColor="#7ffacc"
                backgroundColor="#191735"
                className="p-10"
                label="SAFE"
              >
                Status
              </Badge>
            </div>
          </div>
        </Card>

        {/** Bigger Badge with custom labels */}
        <Card className="mtop-10 mbottom-50">
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<Badge foregroundColor="#7ffacc" backgroundColor="#191735" size="15px"
    label={
        <Text>
            <Text size="14px" bold break>
                10 ETH
            </Text>
            <Text color={Colors.textSecondary} size="13px">
                $1,700
            </Text>
        </Text>
    }>
    Collateral
</Badge>`}
            </pre>
            <div class="col-12 center">
              <Badge
                size="15px"
                foregroundColor="#7ffacc"
                backgroundColor="#191735"
                className="p-10"
                label={
                  <Text>
                    <Text size="14px" bold break>
                      10 ETH
                    </Text>
                    <Text color={Colors.textSecondary} size="13px">
                      $1,700
                    </Text>
                  </Text>
                }
              >
                Collateral
              </Badge>
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
          <hr />

          <Text bold size="16px" break>
            size
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            Set the size of badge's title: Example "15px".
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
                15px
              </Badge>
            </li>
          </ul>
          <hr />

          <Text bold size="16px" break>
            label (optional)
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            You can add a label to the badge if you want to display more
            information. <br />
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

export default ContentBadge;
