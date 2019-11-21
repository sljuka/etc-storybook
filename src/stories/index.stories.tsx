import React from "react";
import { storiesOf } from "@storybook/react";
import { Diagram } from "../components/flowDiagram";
import {
  ActivityNode,
  ActivityNodePort
} from "../components/flowDiagram/Nodes/Activity/ActivityNode";
import { oldTheme as theme } from "../components/flowDiagram/theme";
import { GrayLabel } from "../components/GrayLabel";
import {
  EventNodePort,
  EventNode
} from "../components/flowDiagram/Nodes/Event/EventNode";
import {
  GatewayPort,
  GatewayNode,
  Spacer
} from "../components/flowDiagram/Nodes/Gateway/GatewayNode";
import { CustomThemeTable } from "../components/table";

storiesOf("Grommet component lib", module).add(
  "Sample table",
  () => <CustomThemeTable />,
  {
    info: { inline: true }
  }
);

storiesOf("Flow diagram", module)
  .add("Flow Diagram", () => <Diagram />, {
    info: { inline: false }
  })
  .add(
    "Activity Node",
    () => (
      <ActivityNode
        model={{
          name: "Sample activity",
          color: theme.COLORS.green,
          isSelected: () => false
        }}
      >
        <ActivityNodePort />
        <ActivityNodePort />
      </ActivityNode>
    ),
    { info: { inline: true } }
  )
  .add(
    "Event Node",
    () => (
      <EventNode
        model={{
          name: "Sample event",
          color: theme.COLORS.green,
          isSelected: () => false
        }}
      >
        <EventNodePort />
        <EventNodePort />
      </EventNode>
    ),
    { info: { inline: true } }
  )
  .add(
    "Gateway Node",
    () => (
      <GatewayNode
        model={{
          name: "Sample gateway",
          color: theme.COLORS.purple,
          isSelected: () => false
        }}
      >
        <GatewayPort />
        <GatewayPort />
        <Spacer />
        <GatewayPort />
        <GatewayPort />
      </GatewayNode>
    ),
    {
      info: { inline: true }
    }
  )
  .add("Gray label", () => <GrayLabel>Text</GrayLabel>, {
    info: { inline: true }
  });
