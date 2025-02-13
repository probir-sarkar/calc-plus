import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => <h2 className="text-2xl font-bold mb-4">{children}</h2>,
    ol: ({ children }) => <ol className="list-decimal ml-6 mb-8">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
    p: ({ children }) => <p className="mb-2">{children}</p>,
    code: ({ children }) => <code className="bg-gray-100 dark:bg-slate-600 my-2 p-2 rounded">{children}</code>,
    ...components,
  }
}