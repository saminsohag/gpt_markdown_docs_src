import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UsagePage() {
  return (
    <div className="space-y-6">
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
        Using GPT Markdown in your Flutter app is straightforward. Here's a
        simple example to get you started:
      </p>
      <div className="my-6 w-full overflow-y-auto rounded-md bg-slate-950 p-4">
        <pre className="text-sm text-white">
          <code>{`import 'package:flutter/material.dart';
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
}`}</code>
        </pre>
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Basic Configuration
      </h2>
      <p className="leading-7">
        GPT Markdown provides several configuration options to customize its
        behavior and appearance:
      </p>
      <div className="my-6 w-full overflow-y-auto rounded-md bg-slate-950 p-4">
        <pre className="text-sm text-white">
          <code>{`GPTMarkdown(
  // Required: The Markdown text to render
  markdownText: '# Your markdown content here',
  
  // Optional: Control whether to enable syntax highlighting for code blocks
  enableSyntaxHighlighting: true,
  
  // Optional: Control whether to enable LaTeX rendering
  enableLatex: true,
  
  // Optional: Configure the theme for syntax highlighting
  syntaxHighlightTheme: 'dracula', // Options: 'dracula', 'github', 'monokai', etc.
  
  // Optional: Configure the base text style
  textStyle: TextStyle(
    fontSize: 16.0,
    color: Colors.black87,
    height: 1.5,
  ),
  
  // Optional: Configure the padding around the content
  padding: EdgeInsets.all(8.0),
  
  // Optional: Callback for handling link taps
  onLinkTap: (String url) {
    // Handle link taps here
    launchUrl(Uri.parse(url));
  },
)`}</code>
        </pre>
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Working with AI Content
      </h2>
      <p className="leading-7">
        GPT Markdown is specially optimized for rendering content from AI models
        like ChatGPT and Gemini. Here's how you might use it with AI-generated
        content:
      </p>
      <div className="my-6 w-full overflow-y-auto rounded-md bg-slate-950 p-4">
        <pre className="text-sm text-white">
          <code>{`import 'package:flutter/material.dart';
import 'package:gpt_markdown/gpt_markdown.dart';
import 'package:your_ai_service/ai_service.dart'; // Your AI service implementation

class AIChatScreen extends StatefulWidget {
  const AIChatScreen({super.key});

  @override
  State<AIChatScreen> createState() => _AIChatScreenState();
}

class _AIChatScreenState extends State<AIChatScreen> {
  final TextEditingController _controller = TextEditingController();
  String _aiResponse = '';
  bool _loading = false;
  
  Future<void> _sendPrompt() async {
    final prompt = _controller.text;
    if (prompt.isEmpty) return;
    
    setState(() {
      _loading = true;
    });
    
    try {
      // Get response from your AI service
      final response = await AIService().getCompletion(prompt);
      
      setState(() {
        _aiResponse = response;
        _loading = false;
      });
    } catch (e) {
      setState(() {
        _aiResponse = "Error: \$\{e.toString()}";
        _loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('AI Chat')),
      body: Column(
        children: [
          Expanded(
            child: _aiResponse.isNotEmpty
              ? SingleChildScrollView(
                  padding: const EdgeInsets.all(16.0),
                  child: GPTMarkdown(
                    markdownText: _aiResponse,
                    enableLatex: true,
                    enableSyntaxHighlighting: true,
                  ),
                )
              : const Center(
                  child: Text('Ask something to get started'),
                ),
          ),
          if (_loading)
            const LinearProgressIndicator(),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _controller,
                    decoration: const InputDecoration(
                      hintText: 'Ask a question...',
                      border: OutlineInputBorder(),
                    ),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.send),
                  onPressed: _sendPrompt,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}`}</code>
        </pre>
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Dynamic Content
      </h2>
      <p className="leading-7">
        You can update the markdown content dynamically. Here's an example using
        a StatefulWidget:
      </p>
      <div className="my-6 w-full overflow-y-auto rounded-md bg-slate-950 p-4">
        <pre className="text-sm text-white">
          <code>{`import 'package:flutter/material.dart';
import 'package:gpt_markdown/gpt_markdown.dart';

class DynamicMarkdownDemo extends StatefulWidget {
  const DynamicMarkdownDemo({super.key});

  @override
  State<DynamicMarkdownDemo> createState() => _DynamicMarkdownDemoState();
}

class _DynamicMarkdownDemoState extends State<DynamicMarkdownDemo> {
  String _markdownText = '# Default Heading';
  final TextEditingController _controller = TextEditingController();

  @override
  void initState() {
    super.initState();
    _controller.text = _markdownText;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Dynamic GPT Markdown')),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextField(
              controller: _controller,
              maxLines: 3,
              decoration: const InputDecoration(
                labelText: 'Enter Markdown',
                border: OutlineInputBorder(),
              ),
            ),
          ),
          ElevatedButton(
            onPressed: () {
              setState(() {
                _markdownText = _controller.text;
              });
            },
            child: const Text('Update Markdown'),
          ),
          const Divider(),
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(16.0),
              child: GPTMarkdown(
                markdownText: _markdownText,
              ),
            ),
          ),
        ],
      ),
    );
  }
}`}</code>
        </pre>
      </div>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Best Practices
      </h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          Always wrap <code className="bg-muted rounded px-1">GPTMarkdown</code>{" "}
          in a{" "}
          <code className="bg-muted rounded px-1">SingleChildScrollView</code>{" "}
          to handle overflow content.
        </li>
        <li>
          Consider using{" "}
          <code className="bg-muted rounded px-1">FutureBuilder</code> or{" "}
          <code className="bg-muted rounded px-1">StreamBuilder</code> when
          loading markdown content from an API or database.
        </li>
        <li>
          Implement error handling for cases where the markdown content might be
          malformed.
        </li>
        <li>
          Test your implementation with different types of markdown content to
          ensure consistent rendering.
        </li>
        <li>
          Use the package's theming options to match your app's design system.
        </li>
      </ul>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
        Next Steps
      </h2>
      <p className="leading-7">
        Now that you understand the basics of using GPT Markdown, you can
        explore its more advanced features:
      </p>

      <div className="flex flex-col space-y-2 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border p-4">
            <h3 className="text-xl font-medium">Markdown Features</h3>
            <p className="text-muted-foreground mt-1">
              Explore all the Markdown syntax features supported by the package
            </p>
            <a
              href="/docs/markdown-features"
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
            <h3 className="text-xl font-medium">LaTeX Support</h3>
            <p className="text-muted-foreground mt-1">
              Learn how to use mathematical expressions and equations
            </p>
            <a
              href="/docs/latex-support"
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

      <div className="flex justify-between items-center mt-8">
        <a
          href="/docs/installation"
          className="text-primary hover:underline inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="mr-1 h-4 w-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Installation
        </a>
        <a
          href="/docs/markdown-features"
          className="text-primary hover:underline inline-flex items-center">
          Markdown Features
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
  );
}
