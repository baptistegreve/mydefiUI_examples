import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text } from "@mydefi/ui";

const ContentColors = () => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Colors
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        Here are the different colors included in our basic theme.
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { Colors } from "@mydefi/ui"; 
            
const App = () => (
    <span style={{color: Colors.pink}}>Pink default Text</span>
);`}
          </pre>
        </Card>
        <Text bold size="19px" break>
          Colors
        </Text>

        {/** Using Theme Colors */}
        <Card className="mtop-10 mbottom-50">
          <div className="col-12 align-middle">
            {/** textPrimary */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.textPrimary }}
              ></div>
              <Text size="14px">textPrimary</Text>
            </div>

            {/** textSecondary */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.textSecondary }}
              ></div>
              <Text size="14px">textSecondary</Text>
            </div>

            {/** textTertiary */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.textTertiary }}
              ></div>
              <Text size="14px">textTertiary</Text>
            </div>

            <hr />

            {/** mainBackground */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.mainBackground }}
              ></div>
              <Text size="14px">mainBackground</Text>
            </div>

            {/** secondaryBackground */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.secondaryBackground }}
              ></div>
              <Text size="14px">secondaryBackground</Text>
            </div>

            {/** darkBackground01 */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.darkBackground01 }}
              ></div>
              <Text size="14px">darkBackground01</Text>
            </div>

            {/** darkBackground02 */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.darkBackground02 }}
              ></div>
              <Text size="14px">darkBackground02</Text>
            </div>

            <hr />

            {/** positive */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.positive }}
              ></div>
              <Text size="14px">positive</Text>
            </div>

            {/** negative */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.negative }}
              ></div>
              <Text size="14px">negative</Text>
            </div>

            <hr />

            {/** green */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.green }}
              ></div>
              <Text size="14px">green</Text>
            </div>

            {/** blue */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.blue }}
              ></div>
              <Text size="14px">blue</Text>
            </div>

            {/** yellow */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.yellow }}
              ></div>
              <Text size="14px">yellow</Text>
            </div>

            {/** pink */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.pink }}
              ></div>
              <Text size="14px">pink</Text>
            </div>

            {/** white */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.white }}
              ></div>
              <Text size="14px">white</Text>
            </div>

            {/** grey */}
            <div className="align-middle">
              <div
                className="bubble"
                style={{ backgroundColor: Colors.grey }}
              ></div>
              <Text size="14px">grey</Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContentColors;
