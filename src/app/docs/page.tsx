import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        GPT Markdown
      </h1>
      <p className="leading-7">
        A comprehensive Flutter package for rendering rich Markdown and LaTeX
        content in your apps, specifically designed for seamless integration
        with AI outputs like ChatGPT and Gemini.
      </p>

      <div className="my-6 w-full overflow-y-auto">
        <Tabs defaultValue="dart" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="dart">pubspec.yaml</TabsTrigger>
            <TabsTrigger value="flutter">Flutter</TabsTrigger>
          </TabsList>
          <TabsContent value="dart" className="rounded-md bg-slate-950 p-4">
            <pre className="text-sm text-white overflow-x-auto">
              <code>{`dependencies:
  flutter:
    sdk: flutter
  gpt_markdown: ^1.0.0`}</code>
            </pre>
          </TabsContent>
          <TabsContent value="flutter" className="rounded-md bg-slate-950 p-4">
            <pre className="text-sm text-white overflow-x-auto">
              <code>{`flutter pub add gpt_markdown`}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Overview
      </h2>
      <p className="leading-7">
        GPT Markdown is designed to provide a seamless experience for rendering
        AI-generated content in Flutter apps. It handles all common Markdown
        syntax and extends support to LaTeX mathematical expressions, making it
        perfect for educational, scientific, and AI assistant applications.
      </p>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Key Features
      </h3>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          Complete Markdown syntax support including tables, task lists, and
          blockquotes
        </li>
        <li>LaTeX mathematical expressions rendering</li>
        <li>
          Code blocks with syntax highlighting for multiple programming
          languages
        </li>
        <li>Customizable styling to match your app's theme</li>
        <li>
          Optimized for AI-generated content from models like GPT and Gemini
        </li>
        <li>Interactive elements like checkboxes and expandable sections</li>
      </ul>

      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Quick Example
      </h3>
      <div className="my-6 w-full overflow-y-auto rounded-md bg-slate-950 p-4">
        <pre className="text-sm text-white">
          <code>{`import 'package:flutter/material.dart';
import 'package:gpt_markdown/gpt_markdown.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('GPT Markdown Example')),
        body: SingleChildScrollView(
          padding: const EdgeInsets.all(16.0),
          child: GPTMarkdown(
            markdownText: '''
# Hello Markdown!
This is a **bold** text and this is *italic*.

## Math Example
Solve the equation: $x^2 + 2x + 1 = 0$

## Code Example
\`\`\`dart
void main() {
  print('Hello world!');
}
\`\`\`
            ''',
          ),
        ),
      ),
    );
  }
}`}</code>
        </pre>
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Next Steps
      </h2>
      <p className="leading-7">
        Now you have a basic understanding of what GPT Markdown is and how it
        works. Continue exploring the documentation to learn more about
        installation, configuration, and advanced features.
      </p>
      <div className="flex flex-col space-y-2 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <h3 className="text-xl font-medium">Installation</h3>
            <p className="text-muted-foreground mt-1">
              Detailed instructions for adding GPT Markdown to your Flutter
              project
            </p>
            <a
              href="/docs/installation"
              className="text-primary hover:underline inline-flex items-center mt-2">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="ml-1 h-4 w-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="text-xl font-medium">Basic Usage</h3>
            <p className="text-muted-foreground mt-1">
              Learn how to use the GPT Markdown widget in your Flutter apps
            </p>
            <a
              href="/docs/usage"
              className="text-primary hover:underline inline-flex items-center mt-2">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="ml-1 h-4 w-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
