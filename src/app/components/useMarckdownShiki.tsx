// import React, { useEffect, useState } from 'react';
// import { getHighlighter, Highlighter } from 'shiki';

// interface ShikiHighlighterProps {
//   code: string;
//   language?: string;
//   theme?: string;
// };

// const ShikiHighlighter: React.FC<ShikiHighlighterProps> = (
//   {
//     code,
//     language = ' ',
//     theme = 'andromeeda'
//   }) => {

//   const [highlightedCode, setHighlightedCode] = useState<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       const highlighter: Highlighter = await getHighlighter({ themes: [theme], langs: [language] });
//       setHighlightedCode(highlighter.codeToHtml(code, { lang: language, theme }));
//     })();
//   }, [code, language, theme]);

//   return highlightedCode ? <pre dangerouslySetInnerHTML={{ __html: highlightedCode }} /> : null;
// };

// export default ShikiHighlighter;