export const getUploadAreaStyles = (isDragActive: boolean) => {
  const droppableAreaStyles = {
    borderColor: isDragActive ? 'var(--btn-bg-primary)' : undefined
  }

  const backdropStyles = {
    backgroundColor: isDragActive ? 'var(--bg-secondary)' : undefined,
    opacity: isDragActive ? '0.5' : undefined
  }

  return { droppableAreaStyles, backdropStyles }
}
