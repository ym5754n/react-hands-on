import React from "react";
import ErrorBoundary from "./ErrorBoundary";

export default function Callout({ children }) {
  return (
    <ErrorBoundary>
      <div className="callout">{children}</div>
    </ErrorBoundary>
  );
}