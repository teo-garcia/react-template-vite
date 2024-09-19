const deferRender = async () => {
  const { setupMSWBrowser } = await import('../mocks')
  return setupMSWBrowser()
}

export { deferRender }
