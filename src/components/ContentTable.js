import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, Table, TableRow } from "@mydefi/ui";

const ContentTable = () => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Table & TableRow
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        The {"<Table>"} and {"<TableRow>"} components are used to display Tables
        with Rows.
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { Table } from "@mydefi/ui"; 
            
const App = () => (
    <Table>
        <TableRow head data={["Hash", "From", "To", "Value"]}></TableRow>
        <TableRow 
            data={["0x5a89...", "0x89ui...", "0x23ae...", "10 ETH"]}>
        </TableRow>
    </Table>
);`}
          </pre>
        </Card>
        <Text bold size="19px" break>
          Demonstration
        </Text>

        {/** Simple Table */}
        <Card className="mtop-10 mbottom-15">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Simple Table:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<Table>
    <TableRow head data={["Hash", "From", "To", "Value"]}></TableRow>
    <TableRow
        data={["0x14578...", "0xa78wOP...", "0xa78wOP...", "0.45 ETH"]}
    ></TableRow>
    <TableRow
        data={["0x56a78...", "0xo95wOP...", "0xP180kP...", "3.85 ETH"]}
    ></TableRow>
</Table>`}
            </pre>
            <div className="col-12 center">
              <Table className="mtop-15">
                <TableRow
                  head
                  data={["Hash", "From", "To", "Value"]}
                ></TableRow>
                <TableRow
                  data={[
                    "0x14578...",
                    "0xa78wOP...",
                    "0xa78wOP...",
                    "0.45 ETH"
                  ]}
                ></TableRow>
                <TableRow
                  data={[
                    "0x56a78...",
                    "0xo95wOP...",
                    "0xP180kP...",
                    "3.85 ETH"
                  ]}
                ></TableRow>
              </Table>
            </div>
          </div>
        </Card>

        {/** Colored Table */}
        <Card className="mtop-10 mbottom-50">
          <div className="mbottom-10">
            <Text size="15px" bold>
              Table with custom content:
            </Text>
          </div>
          <div className="col-12 align-middle">
            <pre className="mbottom-20">
              {`<Table>
    <TableRow head data={["Hash", "From", "To", "Value"]}></TableRow>
    <TableRow
        data={[
            <Text>
                0x1f973b233f5ebb1e5d7cfe51b9ae4a32415a3a08
            </Text>,
            <Badge rounded>9,900 ETH</Badge>
        ]}>
    </TableRow>
    <TableRow
        data={[
            <Text color={Colors.pink}>
                0x18e86dea941fc7d53ef293086cda56b94bf52ccf
            </Text>,
            <Badge rounded
                backgroundColor="#d43d76"
                foregroundColor="#FFFFFF">
                120.10 ETH
            </Badge>
        ]}>
    </TableRow>
</Table>`}
            </pre>
            <div className="col-12 mtop-15">
              <Table>
                <TableRow head data={["Account", "Balance"]}></TableRow>
                <TableRow
                  data={[
                    <Text>0x1f973b233f5ebb1e5d7cfe51b9ae4a32415a3a08</Text>,
                    <Badge rounded>9,900 ETH</Badge>
                  ]}
                ></TableRow>
                <TableRow
                  data={[
                    <Text color={Colors.pink}>
                      0x18e86dea941fc7d53ef293086cda56b94bf52ccf
                    </Text>,

                    <Badge
                      rounded
                      backgroundColor="#d43d76"
                      foregroundColor="#FFFFFF"
                    >
                      120.10 ETH
                    </Badge>
                  ]}
                ></TableRow>
              </Table>
            </div>
          </div>
        </Card>

        <Text bold size="19px" break>
          Properties (for TableRow)
        </Text>
        <Text size="16px" color={Colors.textSecondary} break>
          Here are the properties that can be used with the TableRow component.
        </Text>

        {/** <Text> properties */}
        <Card className="mtop-10 mbottom-15 component_properties">
          <Text bold size="16px" break>
            data
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            The data array prop is the main property of the TableRow component.
            Each key in the "data" array will create one new column. Each key
            can be customized to use an HTML value or another component such as{" "}
            {"<Text>"}.
          </Text>
          <ul>
            <li>
              <Text size="15px">Type:</Text>{" "}
              <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                array
              </Badge>
            </li>
            <li>
              Default:{" "}
              <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                null
              </Badge>
            </li>
            <li>
              Example:{" "}
              <Badge backgroundColor="#11112b" foregroundColor="#FFFFFF">
                {'["Column One", "Column Two", "Column Three"]'}
              </Badge>
            </li>
          </ul>
          <hr />
          <Text bold size="16px" break>
            head
          </Text>
          <Text size="15px" color={Colors.textSecondary} break>
            When this property is true, the content of the row will be bold and
            it will be using the theme primary color.
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

export default ContentTable;
