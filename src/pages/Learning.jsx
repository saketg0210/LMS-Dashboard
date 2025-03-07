import { useEffect, useState } from "react";
import { Sun, Moon, ChevronLeft, ChevronRight, ChevronLeftCircle, ChevronLeftSquareIcon, ChevronLeftCircleIcon } from "lucide-react";

export default function LearningPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(10);
  const [activeTopic, setActiveTopic] = useState("Introduction");
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topics = [
    "Introduction",
    "HTML Basics",
    "CSS Styling",
    "JavaScript Essentials",
    "React Fundamentals",
  ];

  const handleTopicClick = (topic) => {
    setActiveTopic(topic);
    setProgress((prev) => Math.min(prev + 20, 100));
  };

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full transition-all duration-300 z-50">
        {isSidebarOpen ? (
          <div className="w-64 h-content bg-white dark:bg-gray-600 shadow-lg p-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:hover:text-white"
              onClick={() => setIsSidebarOpen(false)}
            >
              <ChevronLeftCircleIcon size={24} />
            </button>
            <h2 className="text-lg font-bold mb-4">Learning Topics</h2>
            <ul>
              {topics.map((topic) => (
                <li
                  key={topic}
                  className={`cursor-pointer p-2 rounded ${
                    activeTopic === topic ? "bg-blue-500 text-white" : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => handleTopicClick(topic)}
                >
                  {topic}
                </li>
              ))}
            </ul>
            <button
          className="mt-4 w-full flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />} Toggle Mode
        </button>
          </div>
        ) : (
          <button
            className="p-3 bg-blue-500 text-white rounded-l-lg fixed right-0 top-4 flex items-center"
            onClick={() => setIsSidebarOpen(true)}
          >
            <ChevronLeftCircle size={24} className="mr-2" />
            Expand
          </button>
        )}
      </div>

      {/* Main Content */}
      <main className="p-6 flex-1 overflow-auto">
        <nav
          className={`fixed top-0 right-0 w-full p-4 shadow-md transition-all ${
            isSticky ? "shadow-lg" : "shadow-none"
          }`}
        >
          <h1 className="text-xl font-bold">{activeTopic}</h1>
        </nav>
        <div className="mt-16">
          <div className="relative w-1/2 h-2 bg-gray-300 rounded overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-blue-500 transition-all" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="mt-4">
            {activeTopic === "Introduction" && "Welcome to the learning page!"}
            {activeTopic === "HTML Basics" && "HTML is the structure of web pages."}
            {activeTopic === "CSS Styling" && "CSS helps to style the web pages beautifully."}
            {activeTopic === "JavaScript Essentials" && "JavaScript adds interactivity to web pages."}
            {activeTopic === "React Fundamentals" && "React is a JavaScript library for building UI."}
          </p>
        </div>
      </main>
    </div>
  );
}
