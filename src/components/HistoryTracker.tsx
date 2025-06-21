import { Button } from "../ui/button";
import { History, Trash2 } from "lucide-react";
import { WritingStyle } from "../types";

interface HistoryTrackerProps {
  history: Array<{style: WritingStyle, prompt: string, content: string}>;
  onLoadFromHistory: (index: number) => void;
  onClearHistory: () => void;
}

export function HistoryTracker({ 
  history, 
  onLoadFromHistory, 
  onClearHistory 
}: HistoryTrackerProps) {
  if (history.length === 0) {
    return null;
  }
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">History</h2>
        <Button variant="destructive" size="sm" onClick={onClearHistory}>
          <Trash2 className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </div>
      
      <div className="space-y-2 max-h-96 overflow-auto">
        {history.map((item, index) => (
          <div 
            key={index} 
            className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => onLoadFromHistory(index)}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-medium text-sm text-gray-900 dark:text-white">{item.style.name}</h3>
              <Button variant="ghost" size="sm" className="h-6 px-2">
                <History className="h-3 w-3 mr-1" />
                Load
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}