import { useState } from 'react';
import './App.css';
import ReactMarkdown from "react-markdown";


function App() {
  const [markDownText, setMarkDownText] = useState<string>("")

  return (
    <>
      <div>
        <h1>Markdown Previewer</h1>
      </div>
    </>
  )
}

export default App
