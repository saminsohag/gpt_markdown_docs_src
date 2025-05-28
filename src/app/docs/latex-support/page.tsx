import Tutorial from "@/components/Tutorial";
import React from "react";

const page = () => {
  return (
    <div>
      <Tutorial
        title="LaTeX Support"
        description="LaTeX support is a feature of the GPT Markdown package that allows you to render LaTeX code in your Flutter apps."
        code={{
          language: "dart",
          code: "import 'package:gpt_markdown/gpt_markdown.dart';",
          filename: "main.dart",
        }}
      />
    </div>
  );
};

export default page;
