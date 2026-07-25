"use client";

import React from "react";
import Icon from "./Icon";
import { useRFQ } from "./RFQContext";

export default function AddToEnquiry({
  id,
  name,
  detail,
  className = "",
  variant = "primary",
}: {
  id: string;
  name: string;
  detail?: string;
  className?: string;
  variant?: "primary" | "ghost" | "navy";
}) {
  const { add, has } = useRFQ();
  const added = has(id);

  return (
    <button
      onClick={() => add({ id, name, detail })}
      className={`btn ${
        added ? "btn-navy" : variant === "ghost" ? "btn-ghost" : variant === "navy" ? "btn-navy" : "btn-primary"
      } ${className}`}
    >
      <Icon name={added ? "check" : "plus"} className="w-4.5 h-4.5" />
      {added ? "Added to Enquiry" : "Add to Enquiry"}
    </button>
  );
}
