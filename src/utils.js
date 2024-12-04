export function downloadContent(content, options) {
  const { type, filename } = {
    type: 'text/html',
    filename: 'download.html',
    ...options,
  };
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;

  link.click();

  URL.revokeObjectURL(url);
}
