import { type Language } from 'prism-react-renderer'

interface CodeSnippetProps {
  codeString: string
  language: Language
  codeTitle?: string
  ghSource?: string
}

export const preToCodeSnippetProps = (preProps: any): CodeSnippetProps | undefined => {
  if (
    // if MDXTag is going to render a <code>
    preProps.children.type === 'code'
  ) {
    // we have a <pre><code> situation
    const { className, children: codeString, ...props } = preProps.children.props

    const { splitLanguage, ...otherProps } = parseOptions(className)

    return {
      ...props,
      ...otherProps,
      codeString: codeString.trim(),
      language: splitLanguage as Language,
    }
  }
  return undefined
}

interface Options {
  splitLanguage: string
  codeTitle?: string
  ghSource?: string
}

export const parseOptions = (language: string): Options => {
  let codeTitle: string | undefined
  let ghSource: string | undefined

  if (language === ``) {
    return {
      splitLanguage: ``,
      codeTitle,
      ghSource,
    }
  }

  const [className, ...options] = language.split(`{`)
  const splitLanguage = className.split('-')[1]

  if (options.length > 0) {
    // Options can be given in any order and are optional

    options.forEach((option) => {
      option = option.slice(0, -1)
      const [optionName, ...optionValues] = option.replace(/ /g, ``).split(`:`)

      switch (optionName) {
        case `title`:
          codeTitle = optionValues[0]
          break
        case `github`:
          ghSource = optionValues.join(':')
          break
        default:
          break
      }
    })

    return {
      splitLanguage: splitLanguage as Language,
      codeTitle,
      ghSource,
    }
  }

  return { splitLanguage }
}
