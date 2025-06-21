import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Loader2 } from "lucide-react";

interface ContentPromptProps {
  prompt: string;
  onPromptChange: (value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  disabled?: boolean;
}

export function ContentPrompt({ 
  prompt, 
  onPromptChange, 
  onGenerate, 
  isGenerating,
  disabled 
}: ContentPromptProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Content Prompt</h2>
      
      <Textarea
        placeholder="Enter your content prompt here..."
        className="min-h-[120px]"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        disabled={isGenerating || disabled}
      />
      
      <Button 
        className="w-full" 
        onClick={onGenerate}
        disabled={isGenerating || !prompt || disabled}
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate Content"
        )}
      </Button>
    </div>
  );
}