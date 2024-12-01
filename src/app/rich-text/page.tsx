"use client";
import { RichText } from "@/components/molecules/richtext/RichText";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");
  console.log({ value });
  return <RichText initialValue={value} onChange={setValue} />;
}
