import React from "react";

export function BestPractices() {
  return (
    <div>
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
          Use the package&apos;s theming options to match your app&apos;s design
          system.
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
