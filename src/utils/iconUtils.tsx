import * as React from "react";

export function getIcon(
  icon: React.ReactNode | React.ComponentType
): React.ReactNode {
  if (React.isValidElement(icon)) return icon;

  const Icon = icon as React.ComponentType;
  return <Icon />;
}
