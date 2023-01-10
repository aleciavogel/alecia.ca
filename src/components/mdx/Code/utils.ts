export const preToCodeBlock = (preProps: any) => {
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

export const parseOptions = (language: string) => {
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
