import { useTheme } from 'next-themes'
import { FC, memo, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { programmingLanguages, generateRandomString } from './tools/codeblock'
import { CheckIcon, ClipboardIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

interface Props {
  language: string
  value: string
}

export const CodeBlock: FC<Props> = memo(({ language, value }) => {
  const [isCopied, setIsCopied] = useState<Boolean>(false)
  const { theme } = useTheme()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  // descargar codigo desde el caht bot
  const downloadAsFile = () => {
    const fileExtension = programmingLanguages[language] || '.file'
    const suggestedFileName = `file-${generateRandomString(3, true)}${fileExtension}`
    const fileName = window.prompt('Enter file name', suggestedFileName)

    if (!fileName) {
      // user pressed cancel on prompt
      return
    }

    const blob = new Blob([value], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = fileName
    link.href = url
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className='codeblock relative w-full overflow-x-auto whitespace-pre-wrap break-words font-sans text-[16px]'>
      <div className='flex items-center justify-between px-4 py-1.5'>
        <span className='text-xs lowercase text-white'>{language}</span>

        <div className='flex items-center gap-2'>
          <button
            className='flex items-center gap-1.5 rounded bg-none p-1 text-xs text-white'
            onClick={copyToClipboard}
          >
            {isCopied ? <CheckIcon className='h-4 w-4' /> : <ClipboardIcon className='h-4 w-4' />}
            {isCopied ? 'Copied!' : 'Copy code'}
          </button>


          <button
            className="flex items-center rounded bg-none p-1 text-xs text-white"
            onClick={downloadAsFile}
          >
            <ArrowDownTrayIcon className='h-4 w-4' />
          </button>
        </div>
      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{ margin: 0 }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
})
CodeBlock.displayName = 'CodeBlock'
