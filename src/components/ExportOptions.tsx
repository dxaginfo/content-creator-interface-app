import { Button } from "../ui/button";
import { Download, Copy, FileText } from "lucide-react";
import { useState } from "react";
import { saveAsPDF, saveAsMarkdown } from "../lib/exportHelpers";

interface ExportOptionsProps {
  content: string;
}

export function ExportOptions({ content }: ExportOptionsProps) {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" onClick={() => saveAsPDF(content)}>
        <Download className="h-4 w-4 mr-2" />
        Export as PDF
      </Button>
      
      <Button variant="outline" size="sm" onClick={() => saveAsMarkdown(content)}>
        <FileText className="h-4 w-4 mr-2" />
        Export as Markdown
      </Button>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleCopyToClipboard}
        className={isCopied ? "bg-green-100 dark:bg-green-900" : ""}
      >
        <Copy className="h-4 w-4 mr-2" />
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </Button>
    </div>
  );
}