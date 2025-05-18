import React from "react";

const features = [
  {
    name: "Code Block",
    description: "Render code snippets with syntax highlighting.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Table",
    description: "Display tabular data in markdown.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Heading",
    description: "Create headings of various levels.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Unordered List",
    description: "Create bullet point lists.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Ordered List",
    description: "Create numbered lists.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Radio Button",
    description: "Render radio button inputs.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Check Box",
    description: "Render checkboxes for task lists.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Horizontal Line",
    description: "Add horizontal dividers.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Latex Math",
    description: "Render mathematical expressions.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Indent",
    description: "Indent text for better formatting.",
    supported: true,
    upcoming: false,
  },
  {
    name: "BlockQuote",
    description: "Highlight quoted text.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Image",
    description: "Embed images in markdown.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Highlighted Text",
    description: "Highlight important text.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Strike Text",
    description: "Strike through text.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Bold Text",
    description: "Emphasize text with bold styling.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Italic Text",
    description: "Emphasize text with italic styling.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Links",
    description: "Add hyperlinks to text.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Selectable",
    description: "Make text selectable.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Custom components",
    description: "Embed custom React components.",
    supported: true,
    upcoming: false,
  },
  {
    name: "Underline",
    description: "Underline text (upcoming).",
    supported: false,
    upcoming: true,
  },
];

export default function FeatureTable() {
  return (
    <div className="space-y-6">
      {features.map((feature, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            {feature.name}
            {feature.supported && (
              <span className="ml-2 text-green-500">✅ Supported</span>
            )}
            {feature.upcoming && (
              <span className="ml-2 text-blue-500">🔜 Upcoming</span>
            )}
          </h2>
          <p className="text-gray-700 mt-1">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
