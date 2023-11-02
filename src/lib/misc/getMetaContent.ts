function getMetaContent(selector: string) {
  const metaElement = document.head.querySelector(selector)
  const metaContent = metaElement?.getAttribute('content') || ''
  return metaContent
}

export { getMetaContent }
