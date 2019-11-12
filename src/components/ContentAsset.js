import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, Asset } from "@mydefi/ui";

const ContentButton = () => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Asset
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        The {"<Asset>"} component is used to a crypto asset with a its icon and
        symbol.
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { Asset } from "@mydefi/ui"; 
            
const App = () => (
    <Asset 
        icon="https://mydefi.org/img/tokens/dai.png" 
        size="30px" 
        symbol="DAI">
    </Asset>
);`}
          </pre>
        </Card>
        <Text bold size="19px" break>
          Demonstration
        </Text>

        {/** Default Asset */}
        <Card className="mtop-10 mbottom-15">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Default Asset:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<Asset 
    icon="https://mydefi.org/img/tokens/dai.png" 
    size="30px" 
    symbol="DAI">
</Asset>`}
            </pre>
            <div className="col-12 center">
              <Asset
                icon="https://mydefi.org/img/tokens/dai.png"
                size="30px"
                symbol="DAI"
              ></Asset>
            </div>
          </div>
        </Card>

        {/** Colored Buttons */}
        <Card className="mtop-10 mbottom-50">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Default Asset with custom label:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<Asset 
    icon="https://mydefi.org/img/tokens/eth.png" 
    size="40px" 
    symbol={<Text>
        <Text size="15px" bold break>ETH</Text>
        <Text color={Colors.textSecondary}>Ethereum</Text>
    </Text>}>
</Asset>`}
            </pre>
            <div className="col-12 center">
              <Asset
                icon="https://mydefi.org/img/tokens/eth.png"
                size="40px"
                symbol={
                  <Text>
                    <Text size="15px" bold break>
                      ETH
                    </Text>
                    <Text color={Colors.textSecondary}>Ethereum</Text>
                  </Text>
                }
              ></Asset>
            </div>
          </div>
        </Card>

        <Text bold size="19px" break>
          Properties
        </Text>
        <Text size="16px" color={Colors.textSecondary} break>
          Here are the properties that can be used with the Asset component.
        </Text>

        {/** <Text> properties */}
        <Card className="mtop-10 mbottom-15 component_properties">
          <Text bold size="16px" break>
            icon
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            The url of the icon image that you want to display. Example:
            https://mydefi.org/img/tokens/eth.png
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
            symbol
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            The text to be displayed next to the icon. It can be a simple string
            such as "ETH" or a custom {"<Text>"} component.
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
            size
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            The size of the icon in px. Example: 30px
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
                40px
              </Badge>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ContentButton;
