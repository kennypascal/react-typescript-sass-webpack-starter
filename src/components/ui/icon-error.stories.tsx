import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import IconError from "./icon-error";

const decorators = {
  decorators: [withKnobs],
};

storiesOf("Icon", module).add("Error", () => <IconError />, {
  ...decorators,
});
