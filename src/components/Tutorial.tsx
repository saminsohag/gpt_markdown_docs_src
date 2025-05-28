import React from "react";
import { CodeBlock } from "./ui/components/ui/code-block";

interface CodeBlockProps {
  language: string;
  code: string;
  filename: string;
}

interface TutorialProps {
  title: string;
  description: string;
  code: CodeBlockProps | null;
  className?: string;
  titleClassname?: string;
}

const Tutorial = ({
  title,
  description,
  code,
  className,
  titleClassname,
}: TutorialProps) => {
  return (
    <div className={className}>
      <h2 className={`text-2xl font-bold ${titleClassname}`}>{title}</h2>
      <p className="text-gray-300">{description}</p>
      {code && (
        <CodeBlock
          language={code.language}
          code={code.code}
          filename={code.filename}
        />
      )}
    </div>
  );
};

export default Tutorial;
