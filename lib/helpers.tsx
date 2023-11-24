import React from "react";

interface ListItemRendererProps {
  content: string;
}
export function ListItemRenderer({ content }: ListItemRendererProps) {
  // Split the content into individual list items based on the '\n' character

  const listItems = content.split("\n");

  // Map through the list items and render them as separate elements
  const renderedList: any = listItems.map((item: string, index: number) => (
    <li key={index}>{item.trim()}</li>
  ));
  return (
    <>
      <ul>{renderedList}</ul>
    </>
  );
}
