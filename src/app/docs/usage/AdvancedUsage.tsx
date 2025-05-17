import React from "react";

export function AdvancedUsage() {
  return (
    <div>
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
        like ChatGPT and Gemini. Here&apos;s how you might use it with
        AI-generated content:
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
        You can update the markdown content dynamically. Here&apos;s an example
        using a StatefulWidget:
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
    </div>
  );
}
