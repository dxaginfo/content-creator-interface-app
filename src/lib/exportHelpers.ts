import { jsPDF } from 'jspdf';

// Export content as PDF
export function saveAsPDF(content: string) {
  const doc = new jsPDF();
  
  // Strip HTML tags for simple text conversion
  const plainText = content.replace(/<[^>]*>/g, '');
  
  // Add text to PDF
  doc.text(plainText, 10, 10);
  doc.save('generated-content.pdf');
}

// Export content as Markdown
export function saveAsMarkdown(content: string) {
  // Convert HTML to Markdown (this is a simple conversion)
  const markdown = content
    .replace(/<h1>(.*?)<\/h1>/g, '# $1\n')
    .replace(/<h2>(.*?)<\/h2>/g, '## $1\n')
    .replace(/<h3>(.*?)<\/h3>/g, '### $1\n')
    .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<ul>(.*?)<\/ul>/gs, '$1\n')
    .replace(/<li>(.*?)<\/li>/g, '- $1\n')
    .replace(/<br\/?>/g, '\n')
    .replace(/<[^>]*>/g, '');
  
  // Create a download link
  const blob = new Blob([markdown], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'generated-content.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}