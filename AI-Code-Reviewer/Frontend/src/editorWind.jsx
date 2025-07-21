import React from 'react'
import './App.css';
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useEffect, useState } from 'react';
import Editor from "react-simple-code-editor";
import axios from 'axios';
import Markdown from'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";


function editor() {
   const [code, setCode] = useState(``);
  const [review,setReview]=useState(``);
  const [loading , setLoading]=useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode(){
    setLoading(true);
    try{
    const response= await axios.post('http://localhost:3000/ai/get-response',{code})
     setReview(response.data);
    } catch(error){
      setReview("Please Write a Code....")
    } finally{
      setLoading(false);
    }
  }
  return (
     <div className='main'>
        <div className="right">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 14,
                backgroundColor: "#2a2a40",
                color: "#f8f8f2",
                borderRadius: "0.5rem",
                minHeight: "100%",
                outline:'none',
              }}
            />
          </div>
         <button onClick={reviewCode} className="button" disabled={loading} >{loading?"loading....":"Review"}</button>
        </div>
        <div className="left">
          {loading ? (
          <div className="loading-box">
    <h1 className="shining-text">Loading...</h1>
  </div>
        ) : (
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        )}
        </div>
      </div>
  )
}

export default editor