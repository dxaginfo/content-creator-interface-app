interface GeneratedContentProps {
  content: string;
}

export function GeneratedContent({ content }: GeneratedContentProps) {
  if (!content) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center">
        <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
          No content generated yet
        </h3>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Select a writing style and enter a prompt to generate content
        </p>
      </div>
    );
  }
  
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Generated Content</h2>
      <div 
        className="prose dark:prose-invert max-w-none prose-sm sm:prose-base"
        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}
      />
    </div>
  );
}