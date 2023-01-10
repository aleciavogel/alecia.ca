import React, { FC, useCallback, useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import CodeSnippetCopy from "../../features/blog/partials/CodeSnippetCopy";
import { preToCodeBlock } from "./utils";

interface Props {
  codeString: string;
  language: Language;
  isLive?: boolean;
  ghSource?: string;
  codeTitle?: string;
}

const Index: FC<Props> = ({ codeString, language, isLive = false, codeTitle, ghSource }) => {
  if (isLive) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    const classNames: string[] = ["gatsby-highlight"];
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [keepShowingCopy, setKeepShowingCopy] = useState<boolean>(false);

    if (codeTitle) {
      classNames.push("has-code-title");
    }

    const codeSourceComponent = (
      <a className="gatsby-code-source" href={ghSource} target="_blank" rel="noreferrer">
        <span>View on GitHub</span>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    );

    const handleClipboard = useCallback(() => {
      const type = "text/plain";
      const blob = new Blob([codeString], { type });
      const data = [new ClipboardItem({ [type]: blob })];
      navigator.clipboard.write(data).then(
        () => {
          setIsCopied(true);
          setKeepShowingCopy(true);
          setTimeout(() => setKeepShowingCopy(false), 3000);
          setTimeout(() => setIsCopied(false), 3300); // Change text after it hides again
        },
        () => {
          console.warn("Clipboard failed to copy code snippet :(");
        },
      );
    }, [setIsCopied, setKeepShowingCopy, codeString]);

    return (
      <Highlight {...defaultProps} code={codeString} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={classNames.join(" ")}>
            {Boolean(codeTitle) && (
              <div className="gatsby-code-title">
                {codeTitle}
                {codeSourceComponent}
              </div>
            )}
            <CodeSnippetCopy
              onCopy={handleClipboard}
              isCopied={isCopied}
              showCopied={keepShowingCopy}
            />
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
            {Boolean(ghSource) && !codeTitle && codeSourceComponent}
          </div>
        )}
      </Highlight>
    );
  }
};

export const parseCodeBlock = (preProps: any) => {
  const props = preToCodeBlock(preProps);
  if (props) {
    return <Index {...props} />;
  } else {
    return <pre {...preProps} />;
  }
};

export default Index;
