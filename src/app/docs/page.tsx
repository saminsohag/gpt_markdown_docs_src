import { CodeBlock } from "@/components/ui/components/ui/code-block";
import React from "react";

const DocsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-white">
          GPT Markdown & LaTeX for Flutter
        </h1>
        <p className="text-lg text-gray-300">
          A comprehensive Flutter package for rendering rich Markdown and LaTeX
          content in your apps, designed for seamless integration with AI
          outputs like ChatGPT and Gemini.
        </p>
      </div>

      {/* Features Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          ✨ Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
            <h3 className="font-medium mb-2 text-white">Markdown Support</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Code Blocks</li>
              <li>Tables</li>
              <li>Lists (Ordered & Unordered)</li>
              <li>Headings</li>
              <li>Links & Images</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
            <h3 className="font-medium mb-2 text-white">LaTeX Support</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Inline Math</li>
              <li>Block Math</li>
              <li>Complex Equations</li>
              <li>Matrices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          🚀 Installation
        </h2>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <CodeBlock
            language="bash"
            code="flutter pub add gpt_markdown"
            filename="terminal"
          />
        </div>
      </section>

      {/* Usage Example Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">📖 Usage</h2>
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <pre className="text-sm overflow-x-auto text-gray-300">
            {`import 'package:flutter/material.dart';
import 'package:gpt_markdown/gpt_markdown.dart';

return GptMarkdown(
  '''
  * This is a unordered list.
  ''',
  style: const TextStyle(
    color: Colors.red,
  ),
);`}
          </pre>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          🔗 Additional Information
        </h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
            <h3 className="font-medium mb-2 text-white">Package Details</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>Version: 1.0.19</li>
              <li>License: BSD-3-Clause</li>
              <li>Dependencies: flutter, flutter_math_fork</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg bg-gray-800">
            <h3 className="font-medium mb-2 text-white">Links</h3>
            <ul className="list-disc list-inside text-gray-300">
              <li>
                <a
                  href="https://pub.dev/packages/gpt_markdown"
                  className="text-blue-400 hover:text-blue-300 hover:underline">
                  Pub.dev Package
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/infinitix-tech/gpt_markdown"
                  className="text-blue-400 hover:text-blue-300 hover:underline">
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
