"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1
      style={{
        fontSize: "2rem",
        fontWeight: 700,
        color: "#1d1d1f",
        marginBottom: "1rem",
        marginTop: "1.6rem",
        lineHeight: 1.3,
      }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2
      style={{
        fontSize: "1.7rem",
        fontWeight: 700,
        color: "#1d1d1f",
        marginBottom: "0.8rem",
        marginTop: "1.4rem",
        lineHeight: 1.3,
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        fontSize: "1.5rem",
        fontWeight: 600,
        color: "#1d1d1f",
        marginBottom: "0.6rem",
        marginTop: "1.4rem",
        lineHeight: 1.4,
      }}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p
      style={{
        fontSize: "1.4rem",
        lineHeight: 1.75,
        color: "#1d1d1f",
        marginBottom: "0.8rem",
      }}
    >
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong style={{ fontWeight: 600, color: "#1d1d1f" }}>{children}</strong>
  ),
  em: ({ children }) => (
    <em style={{ fontStyle: "italic", color: "#5a5a72" }}>{children}</em>
  ),
  ul: ({ children }) => (
    <ul
      style={{
        paddingLeft: "2rem",
        marginBottom: "0.8rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      style={{
        paddingLeft: "2rem",
        marginBottom: "0.8rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li
      style={{
        fontSize: "1.4rem",
        lineHeight: 1.65,
        color: "#1d1d1f",
        listStyleType: "disc",
      }}
    >
      {children}
    </li>
  ),
  code: ({ inline, children, ...props }: { inline?: boolean; children?: React.ReactNode }) =>
    inline ? (
      <code
        style={{
          fontFamily: "'SF Mono', 'Fira Code', monospace",
          fontSize: "1.25rem",
          background: "#f0effc",
          color: "#5a56c8",
          padding: "0.15rem 0.5rem",
          borderRadius: "5px",
          border: "1px solid #e0dff5",
        }}
        {...props}
      >
        {children}
      </code>
    ) : (
      <code
        style={{
          display: "block",
          fontFamily: "'SF Mono', 'Fira Code', monospace",
          fontSize: "1.25rem",
          background: "#1e1e2e",
          color: "#cdd6f4",
          padding: "1.6rem",
          borderRadius: "10px",
          overflowX: "auto",
          lineHeight: 1.7,
          marginBottom: "0.8rem",
        }}
        {...props}
      >
        {children}
      </code>
    ),
  pre: ({ children }) => (
    <pre
      style={{
        background: "#1e1e2e",
        borderRadius: "10px",
        marginBottom: "1rem",
        overflow: "hidden",
      }}
    >
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote
      style={{
        borderLeft: "3px solid #6e6cc8",
        background: "linear-gradient(135deg, #f7f6ff 0%, #f0fdfb 100%)",
        padding: "1rem 1.4rem",
        borderRadius: "0 10px 10px 0",
        margin: "1rem 0",
        color: "#4a4868",
        fontSize: "1.35rem",
        lineHeight: 1.65,
      }}
    >
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid #eceaf8",
        margin: "1.2rem 0",
      }}
    />
  ),
  table: ({ children }) => (
    <div
      style={{
        overflowX: "auto",
        marginBottom: "1.2rem",
        borderRadius: "10px",
        border: "1px solid #eceaf8",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "1.3rem",
        }}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead style={{ background: "#f7f6ff" }}>{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr
      style={{ borderBottom: "1px solid #eceaf8" }}
    >
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th
      style={{
        padding: "1rem 1.4rem",
        textAlign: "left",
        fontWeight: 600,
        color: "#5a56c8",
        fontSize: "1.25rem",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td
      style={{
        padding: "0.9rem 1.4rem",
        color: "#1d1d1f",
        fontSize: "1.3rem",
        lineHeight: 1.5,
      }}
    >
      {children}
    </td>
  ),
};

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <div style={{ width: "100%" }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
