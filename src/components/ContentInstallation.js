import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Button } from "@mydefi/ui";

const ContentInstallation = () => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Installation
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        mydefiUI is a React Library used to build the user interface of the{" "}
        <a
          href="https://mydefi.org"
          rel="noopener noreferrer"
          className="white"
          target="_blank"
        >
          MyDeFi
        </a>{" "}
        web app (and this example website). We decided to open-source it to let
        anyone benefit from it and potentially build applications that could be
        integrated later in MyDeFi. <br />
        <br />
        Here is how to install the mydefiUI package.
      </Text>
      <div className="ptop-50">
        <Card className="mtop-10 mbottom-50">
          <pre>{`npm install @mydefi/ui`}</pre>
        </Card>
        <Text bold size="19px" break>
          GitHub
        </Text>

        {/** Using Theme Colors */}
        <Card className="mtop-10 mbottom-50">
          <div className="col-12 align-middle">
            <Text color={Colors.textTertiary} size="15px">
              The mydefiUI project is open-sourced on GitHub. Feel free to
              browse/fork our work!
            </Text>
            <div className="center mtop-15">
              <a
                without
                rel="noopener noreferrer"
                href="https://github.com/baptistegreve/mydefiUI"
                target="_blank"
              >
                <Button>View on GitHub</Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContentInstallation;
