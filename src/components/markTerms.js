import React from 'react'

export default function(words, terms, options = {}) {
  if (!words) return words
  if (typeof options === 'string') {
    options = { className: options }
  }
  if (terms) {
    const splitTerms = terms.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").split(/\s+/)
    const result = []
    let lastIndex = 0

    // ['this', 'that'] => /this|that/
    const regex = new RegExp('(' + splitTerms.join('|') + ')', 'ig')

    words.replace(regex, (match, group, index) => {
      if (index > lastIndex) {
        result.push(words.slice(lastIndex, index))
      }

      result.push(<span key={index} className={options.className || ''}>{match}</span>)
      lastIndex = index + match.length
    })

    if (lastIndex < words.length) {
      result.push(words.slice(lastIndex))
    }
    return result
  }
  else {
    return [words]
  }
}
