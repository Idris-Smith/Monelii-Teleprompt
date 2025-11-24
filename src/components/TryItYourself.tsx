import { type ReactElement, useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Trash2 } from 'lucide-react';

export default function TryItYourself(): ReactElement {
  const [script, setScript] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(2);
  const [fontSize, setFontSize] = useState(32);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const prompterRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPositionRef = useRef(0);

  const fonts = ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana'];

  const animate = () => {
    if (prompterRef.current) {
      scrollPositionRef.current += speed;
      prompterRef.current.scrollTop = scrollPositionRef.current;
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  }, [isPlaying, speed]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const resetPrompter = () => {
    if (prompterRef.current) {
      scrollPositionRef.current = 0;
      prompterRef.current.scrollTop = 0;
    }
    setIsPlaying(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const clearAll = () => {
    setScript('');
    resetPrompter();
  };

  return (
    <section id="demo" className="py-24 bg-gray-900" role="region" aria-labelledby="demo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="demo-heading" className="text-4xl font-bold text-center text-white mb-16">Try Our Teleprompter Demo</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div className="bg-gray-800 rounded-xl p-6 space-y-6" role="form" aria-label="Teleprompter controls">
            <div>
              <label htmlFor="script-input" className="block text-white mb-2">Your Script</label>
              <textarea
                id="script-input"
                value={script}
                onChange={(e) => setScript(e.target.value)}
                className="w-full h-48 p-4 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Type or paste your script here..."
                aria-describedby="script-help"
              />
              <p id="script-help" className="sr-only">Enter your script text to see it displayed in the teleprompter preview</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="font-select" className="block text-white mb-2">Font</label>
                <select
                  id="font-select"
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full p-2 bg-gray-700 text-white rounded-lg"
                  aria-label="Select font family for teleprompter text"
                >
                  {fonts.map(font => (
                    <option key={font} value={font}>{font}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="color-input" className="block text-white mb-2">Text Color</label>
                <input
                  id="color-input"
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full h-10 bg-gray-700 rounded-lg cursor-pointer"
                  aria-label="Select text color for teleprompter"
                />
              </div>
            </div>

            <div>
              <label htmlFor="speed-slider" className="block text-white mb-2">Speed: {speed.toFixed(1)}x</label>
              <input
                id="speed-slider"
                type="range"
                min="-10"
                max="10"
                step="0.5"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full"
                aria-label="Adjust teleprompter scrolling speed"
              />
            </div>

            <div>
              <label htmlFor="fontsize-slider" className="block text-white mb-2">Font Size: {fontSize}px</label>
              <input
                id="fontsize-slider"
                type="range"
                min="16"
                max="72"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
                aria-label="Adjust teleprompter font size"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={togglePlay}
                className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                aria-label={isPlaying ? 'Pause teleprompter' : 'Play teleprompter'}
              >
                {isPlaying ? <Pause className="mr-2" aria-hidden="true" /> : <Play className="mr-2" aria-hidden="true" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              
              <button
                onClick={resetPrompter}
                className="flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                aria-label="Reset teleprompter to beginning"
              >
                <RotateCcw aria-hidden="true" />
              </button>
              
              <button
                onClick={clearAll}
                className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                aria-label="Clear all teleprompter content"
              >
                <Trash2 aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-gray-800 rounded-xl p-6" role="region" aria-label="Teleprompter preview">
            <div className="relative h-[500px] overflow-hidden rounded-lg bg-black" aria-live="polite">
              <div
                ref={prompterRef}
                className="absolute inset-0 overflow-auto hide-scrollbar"
                style={{
                  perspective: '1000px',
                  transform: 'rotateX(10deg)',
                }}
              >
                <div
                  className="p-8 whitespace-pre-wrap"
                  style={{
                    fontFamily,
                    fontSize: `${fontSize}px`,
                    color: textColor,
                  }}
                >
                  {script || 'Your script will appear here...'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}