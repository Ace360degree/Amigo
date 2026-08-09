import React, { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About setCurrentPage={setCurrentPage} />;
      default:
        return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-white my-12 mx-6 rounded-3xl border border-neutral-100 shadow-sm max-w-3xl sm:mx-auto">
            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-3xl font-outfit font-bold text-neutral-800 mb-2">Page Design Pending</h1>
            <p className="text-neutral-500 max-w-md text-sm leading-relaxed">
              We are waiting for your page assets or design guidelines. Once you share the layout details, we will build this section for you.
            </p>
            <button
              onClick={() => setCurrentPage("home")}
              className="mt-6 bg-[#e31e24] hover:bg-[#c2141a] text-white font-sans font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all active:scale-95"
            >
              Back to Home
            </button>
          </div>
        );
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
