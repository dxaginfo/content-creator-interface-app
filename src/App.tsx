import { useState } from 'react'
import { StyleSelector } from './components/StyleSelector'
import { ContentPrompt } from './components/ContentPrompt'
import { GeneratedContent } from './components/GeneratedContent'
import { ExportOptions } from './components/ExportOptions'
import { HistoryTracker } from './components/HistoryTracker'
import { generateContent } from './lib/styleGenerators'
import { WritingStyle } from './types'

function App() {
  const [selectedStyle, setSelectedStyle] = useState<WritingStyle | null>(null)
  const [prompt, setPrompt] = useState('')
  const [generatedContent, setGeneratedContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [history, setHistory] = useState<Array<{style: WritingStyle, prompt: string, content: string}>>([]);

  const handleGenerate = async () => {
    if (!selectedStyle || !prompt) return;
    
    setIsGenerating(true);
    try {
      const content = await generateContent(selectedStyle.id, prompt);
      setGeneratedContent(content);
      
      // Add to history
      setHistory(prev => [
        {style: selectedStyle, prompt, content},
        ...prev
      ]);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleHistoryItemLoad = (index: number) => {
    const item = history[index];
    setSelectedStyle(item.style);
    setPrompt(item.prompt);
    setGeneratedContent(item.content);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Content Creator Interface
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <StyleSelector 
              selectedStyle={selectedStyle} 
              onSelectStyle={setSelectedStyle} 
            />
            
            <ContentPrompt 
              prompt={prompt}
              onPromptChange={setPrompt}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              disabled={!selectedStyle}
            />
            
            <HistoryTracker 
              history={history}
              onLoadFromHistory={handleHistoryItemLoad}
              onClearHistory={() => setHistory([])} 
            />
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <GeneratedContent content={generatedContent} />
            
            {generatedContent && (
              <ExportOptions content={generatedContent} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App