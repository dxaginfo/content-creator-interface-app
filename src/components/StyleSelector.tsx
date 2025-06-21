import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { WRITING_STYLES } from "../data/writingStyles"
import { WritingStyle } from "../types"

interface StyleSelectorProps {
  selectedStyle: WritingStyle | null;
  onSelectStyle: (style: WritingStyle) => void;
}

export function StyleSelector({ selectedStyle, onSelectStyle }: StyleSelectorProps) {
  const handleValueChange = (value: string) => {
    const style = WRITING_STYLES.find(s => s.id === value);
    if (style) {
      onSelectStyle(style);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Select Writing Style</h2>
      <Select 
        value={selectedStyle?.id} 
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose a writing style" />
        </SelectTrigger>
        <SelectContent>
          {WRITING_STYLES.map((style) => (
            <SelectItem key={style.id} value={style.id}>
              {style.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedStyle && (
        <div className="p-4 rounded-md bg-gray-100 dark:bg-gray-800">
          <h3 className="font-medium mb-2 text-gray-900 dark:text-white">{selectedStyle.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{selectedStyle.description}</p>
          <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
            {selectedStyle.characteristics.split('\n').map((char, index) => (
              <p key={index}>{char}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}