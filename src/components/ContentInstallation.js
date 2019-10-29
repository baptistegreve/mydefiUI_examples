import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text, Badge, Button } from "@mydefi/ui";

const ContentInstallation = props => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Installation
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
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
