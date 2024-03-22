import { CodeBlock } from '@/app/components/Markdown/code-block'
import { parse } from 'marked'
import { cloneElement, useCallback } from 'react'

export default function useMarkdownRenderer() {
  const MarkdownRenderer = ({ markdownText }: { markdownText: string }) => {
    return (
      <div
        className='relative mx-auto grid w-full min-w-80 max-w-xl whitespace-pre-wrap text-pretty text-opacity-80 opacity-90'
        dangerouslySetInnerHTML={{ __html: parse(markdownText) }}
      />
    )
  }
  const renderMessageContent = useCallback((messageContent: string) => {
    const codeBlockRegex = /```(\w+)?\s*([\s\S]*?)\s*```/g // Updated regex
    let lastIndex = 0
    let elements = []
    const inCodeBlock =
      messageContent?.includes('```') && messageContent?.split('```').length % 2 === 0
    const cleanMessageContent = inCodeBlock ? messageContent + '\n```' : messageContent

    let match
    while ((match = codeBlockRegex.exec(cleanMessageContent)) !== null) {
      // Add the text before the code block
      if (match.index > lastIndex) {
        const text = cleanMessageContent?.slice(lastIndex, match.index)
        elements.push(MarkdownRenderer({ markdownText: text }))
      }

      // Add the code block
      const language = match[1] || '' // Extracted language
      const code = match[2].trim()
      elements.push(<CodeBlock language={language} value={code} />)

      lastIndex = match.index + match[0].length
    }

    // Add the text after the last code block
    if (lastIndex < cleanMessageContent?.length) {
      const text = cleanMessageContent?.slice(lastIndex)
      elements.push(MarkdownRenderer({ markdownText: text }))
    }

    elements = elements.map((element, index) => {
      return cloneElement(element, { key: 'render-msg-' + index })
    })

    return elements
  }, [])

  function getFirstCodeBlockContent(str: string): string | null {
    const codeBlockRegex = /```(\w+)?\s*([\s\S]*?)\s*```/
    const match = codeBlockRegex.exec(str)
    return match ? match[2] : null
  }

  return { renderMessageContent, getFirstCodeBlockContent }
}
