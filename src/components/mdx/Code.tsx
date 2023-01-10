import React, { FC, useCallback, useState } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import CodeSnippetCopy from "../features/blog/partials/CodeSnippetCopy";

interface Props {
  codeString: string;
  language: Language;
  isLive?: boolean;
  ghSource?: string;
  codeTitle?: string;
}

const Wrapper = (props: any) => <div style={{ position: "relative" }} {...props} />;

const ConfettiWrapper = (props: any) => (
  <div style={{ position: "absolute", top: 0, right: 0, border: "solid 1px red" }} {...props} />
);

const Code: FC<Props> = ({ codeString, language, isLive = false, codeTitle, ghSource }) => {
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
          setTimeout(() => setIsCopied(false), 3000);
        },
        () => {
          console.warn("Clipboard failed to copy code snippet :(");
        },
      );
    }, [setIsCopied, codeString]);

    return (
      <Wrapper>
        <Highlight {...defaultProps} code={codeString} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <div className={classNames.join(" ")}>
              {Boolean(codeTitle) && (
                <div className="gatsby-code-title">
                  {codeTitle}
                  {codeSourceComponent}
                </div>
              )}
              <CodeSnippetCopy onCopy={handleClipboard} isCopied={isCopied} />
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <>
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  </>
                ))}
              </pre>
              {Boolean(ghSource) && !codeTitle && codeSourceComponent}
            </div>
          )}
        </Highlight>
      </Wrapper>
    );
  }
};

const preToCodeBlock = (preProps: any) => {
  if (
    // if MDXTag is going to render a <code>
    preProps.children.type === "code"
  ) {
    // we have a <pre><code> situation
    const { className, children: codeString, ...props } = preProps.children.props;

    const { splitLanguage, ...otherProps } = parseOptions(className);

    return {
      codeString: codeString.trim(),
      language: splitLanguage,
      ...props,
      ...otherProps,
    };
  }
  return undefined;
};

const parseOptions = (language: string) => {
  if (!language) {
    return { splitLanguage: `` };
  }

  const [className, ...options] = language.split(`{`);
  const splitLanguage = className.split("-")[1];

  if (options.length) {
    let codeTitle;
    let ghSource;
    // Options can be given in any order and are optional

    options.forEach((option) => {
      option = option.slice(0, -1);
      const [optionName, ...optionValues] = option.replace(/ /g, ``).split(`:`);

      switch (optionName) {
        case `title`:
          codeTitle = optionValues[0];
          break;
        case `github`:
          ghSource = optionValues.join(":");
          break;
        default:
          break;
      }
    });

    return {
      splitLanguage,
      codeTitle,
      ghSource,
    };
  }

  return { splitLanguage };
};

export const parseCodeBlock = (preProps: any) => {
  const props = preToCodeBlock(preProps);
  if (props) {
    console.log("I am printing some code");
    return <Code {...props} />;
  } else {
    console.log("I am printing a pre");
    return <pre {...preProps} />;
  }
};

export default Code;
