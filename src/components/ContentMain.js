import React from "react";

/** Import mydefiUI theme */
import { Colors, Card, Text } from "@mydefi/ui";

const ContentText = () => {
  return (
    <div className="col-12 p-0">
      <Text size="28px" bold break>
        Main
      </Text>
      <Text size="19px" color={Colors.textTertiary} break>
        The {"<Main>"} component is used as a base for the other components to
        function properly. <br />
        It should be your app container.
      </Text>
      <div className="ptop-50">
        <Text bold size="19px" break>
          Usage
        </Text>
        <Card className="mtop-10 mbottom-50">
          <pre>
            {`import { Main } from "@mydefi/ui"; 
            
const App = () => (
    <Main></Main>
);`}
          </pre>
        </Card>
      </div>
    </div>
  );
};

export default ContentText;
