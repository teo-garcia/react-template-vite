const deferRender = async () => {
  const { setupMSW } = await import('../../lib/mocks')
  return setupMSW()
}

export { deferRender }
