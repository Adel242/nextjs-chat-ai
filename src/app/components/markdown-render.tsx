// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import rehypeRaw from 'rehype-raw'
// import { useEffect, useState } from 'react'
// import { ClipboardIcon, CommandLineIcon } from '@heroicons/react/24/outline'
// import { Button, Tooltip } from '@nextui-org/react'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// const copyToClipboard = async (text: string) => {
//   try {
//     const textArea = document.createElement('textarea')
//     textArea.value = text
//     document.body.appendChild(textArea)
//     textArea.select()
//     // document.execCommand('Copy') deprecaded
//     await navigator.clipboard.writeText(text);
//     console.log('Text copied to clipboard');
//     textArea.remove()
//   } catch (error) {
//     console.error('failed to copy', error)
//   }
// };

// export const MarkdownRender = ({
//   content,
//   className,
//   markdownClassName = true
// }: {
//   content: string
//   children?: React.ReactNode
//   className?: string
//   markdownClassName?: boolean
// }) => {

//   const [renderedContent, setRenderedContent] = useState <string | null>(null);

//   useEffect(() => {
//     setRenderedContent(content);
//   }, [content]);

//   return (
//     <>
//       <ReactMarkdown
//         className={`${markdownClassName ? 'markdown grid gap-4' : ''} ${className ?? ''}`}
//         rehypePlugins={[[rehypeRaw]]}
//         remarkPlugins={[remarkGfm]}
//         components={{
//           code({
//             node,
//             inline,
//             className,
//             children,
//             ...props
//           }: {
//             node?: any
//             inline?: boolean
//             className?: string
//             children?: React.ReactNode
//             props?: any
//           }) {
//             return !inline && className ? (
//               <div className='grid gap-2 bg-content1 text-default-500 text-sm rounded-xl my-2 shadow pb-2'>
//                 <div className='w-full grid grid-flow-col justify-between items-center border-b border-b-default-500/30 p-2'>
//                   <span className='flex gap-1 items-center text-xs uppercase'>
//                     <CommandLineIcon className='w-4 h-4' />
//                     {className?.replaceAll('language-', '')}
//                   </span>
//                   <Tooltip content='Copy to clipboard' placement='top'>
//                     <Button
//                       size='sm'
//                       variant='light'
//                       className='ml-auto border-default-500 text-default-500'
//                       startContent={<ClipboardIcon className='w-4 h-4' />}
//                       isIconOnly
//                       onPress={() => copyToClipboard(String(children).replace(/\n$/, ''))}
//                     />
//                   </Tooltip>
//                 </div>
//                 <SyntaxHighlighter
//                   language={className?.replaceAll('language-', '')}
//                   style={oneDark} // style={theme === 'dark' ? oneDark : oneLight}
//                   customStyle={{ margin: 0, backgroundColor: 'transparent' }}
//                   class={`SyntaxHighlighter ${className}`}
//                 >
//                   {String(children).replaceAll('<span class="last-character"></span>', '')}
//                 </SyntaxHighlighter>
//               </div>
//             ) : (
//               <code className={className} {...props}>
//                 {String(children).replaceAll('<span class="last-character"></span>', '')}
//               </code>
//             )
//           },
//           h1({ node, children, ...props }) {
//             return (
//               <h1 className='text-large font-black tracking-normal' {...props}>
//                 {children}
//               </h1>
//             )
//           },
//           h2({ node, children, ...props }) {
//             return (
//               <h2 className='text-md font-bold tracking-normal' {...props}>
//                 {children}
//               </h2>
//             )
//           },
//           h3({ node, children, ...props }) {
//             return (
//               <h3 className='text-md font-bold tracking-normal' {...props}>
//                 {children}
//               </h3>
//             )
//           },
//           h4({ node, children, ...props }) {
//             return (
//               <h4 className='text-sm font-bold tracking-normal' {...props}>
//                 {children}
//               </h4>
//             )
//           },
//           h5({ node, children, ...props }) {
//             return (
//               <h5 className='text-sm font-bold tracking-normal' {...props}>
//                 {children}
//               </h5>
//             )
//           },
//           h6({ node, children, ...props }) {
//             return (
//               <h6 className='text-sm font-bold tracking-normal' {...props}>
//                 {children}
//               </h6>
//             )
//           },
//           ol({ node, children, ...props }) {
//             return (
//               <ul className='grid gap-2' {...props}>
//                 {children}
//               </ul>
//             )
//           },
//           ul({ node, children, ...props }) {
//             return (
//               <ul className='grid gap-2' {...props}>
//                 {children}
//               </ul>
//             )
//           },
//           a({ node, children, ...props }) {
//             return (
//               <a className='' {...props} target='_blank' rel='noopener noreferrer'>
//                 <u>{children}</u>
//               </a>
//             )
//           },
//           li({ node, children, ...props }) {
//             return <li {...props}>{children}</li>
//           }
//         }}
//       >
//         {/* {content} */}
//         {renderedContent}
//       </ReactMarkdown>
//     </>
//   )
// }
