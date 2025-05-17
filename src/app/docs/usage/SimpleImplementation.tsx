import { CodeBlock } from "@/components/ui/components/ui/code-block";
import React from "react";

export function SimpleImplementation() {
  const exampleCode = `import 'package:flutter/material.dart';
import 'package:gpt_markdown/gpt_markdown.dart';

class MarkdownDemo extends StatelessWidget {
  const MarkdownDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('GPT Markdown Demo')),
      body: const SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: GPTMarkdown(
          markdownText: '''
# Hello Markdown

This is a paragraph with **bold** and *italic* text.

## Lists

### Unordered List
- Item 1
- Item 2
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

## Code

Inline \`code\` example.

\`\`\`dart
void main() {
  print('Hello, GPT Markdown!');
}
\`\`\`

## Math Expression

$E = mc^2$

## Blockquote

> This is a blockquote
> It can span multiple lines

## Table

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

## Task List

- [x] Completed task
- [ ] Incomplete task
          ''',
        ),
      ),
    );
  }
}
`;
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Basic Usage
      </h1>
      <p className="leading-7">
        This guide will walk you through the basics of using GPT Markdown in
        your Flutter applications.
      </p>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Simple Implementation
      </h2>
      <p className="leading-7">
        Using GPT Markdown in your Flutter app is straightforward. Here&apos;s a
        simple example to get you started:
      </p>
      <div className="my-6 w-full overflow-y-auto rounded-md p-4">
        <pre className="text-sm text-white">
          <CodeBlock
            filename="basic_example.dart"
            language="dart"
            code={exampleCode}
          />
        </pre>
      </div>
    </div>
  );
}
