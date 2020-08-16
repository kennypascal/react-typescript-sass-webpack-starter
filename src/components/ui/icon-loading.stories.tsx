import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import IconLoading from "./icon-loading";

const decorators = {
  decorators: [withKnobs],
};

storiesOf("Icon", module).add("Loading", () => <IconLoading />, {
  ...decorators,
});
