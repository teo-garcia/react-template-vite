const deferRender = async () => {
  const { setupMSWBrowser } = await import('../../lib/mocks')
  return setupMSWBrowser()
}

export { deferRender }
