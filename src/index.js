import React, { Fragment } from "react";
import { render } from "react-dom";

import Text from "./Text";
import Checkbox from "./Checkbox";
import Comment from "./Comment";
import Help from "./Help";
import withHelp from "./withHelp";

const TextAvecAide = withHelp(Text);
const CheckboxAvecAide = withHelp(Checkbox);
const AddHelp = withHelp(({children, ...props}) => children(props))

const App = () => (
  <div>
    <Comment content="// avec Help :" />
    <Help content="besoin d'aide" help="Merci!" />

    <Comment content="// avec winHelp :" />
    <TextAvecAide content="besoin d'aide" help="Merci!" />
    <CheckboxAvecAide content="besoin d'aide" help="Merci!" />
    <AddHelp content="test">
    {({content}) => <div>test</div>}
    </AddHelp>
  </div>
);

render(<App />, document.getElementById("root"));
