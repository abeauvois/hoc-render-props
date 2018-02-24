import React from "react";
import { render } from "react-dom";

import Text from "./Text";
import Checkbox from "./Checkbox";
import Comment from "./Comment";
import Help from "./Help";
import withHelp from "./withHelp";

const TextAvecAide = withHelp(Text);
const CheckboxAvecAide = withHelp(Checkbox);
const AddHelp = withHelp(({ children, ...props }) => children(props));

const App = () => (
  <div>
    <Comment content="// avec Help :" />
    <Help content="besoin d'aide" help="Merci!" />

    <Comment content="// avec winHelp :" />
    <TextAvecAide content="besoin d'aide" help="Merci!" />
    <CheckboxAvecAide content="besoin d'aide" help="Merci!" />
    <AddHelp content="help me" help="thanks">
      {({ content }) => <Text content={content}>test</Text>}
    </AddHelp>
  </div>
);

render(<App />, document.getElementById("root"));
