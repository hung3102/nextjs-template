"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";

type IRichText = {
  initialValue: string;
  onChange: (html: string) => void;
};

export function RichText({ initialValue, onChange }: IRichText) {
  const editorRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const ReactQuill =
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    typeof window === "object" ? require("react-quill") : () => false;

  const handleChange = (value: string) => {
    onChange(value);
  };

  function undoChange() {
    const quill = editorRef.current.getEditor();
    quill.history.undo();
  }
  function redoChange() {
    const quill = editorRef.current.getEditor();
    quill.history.redo();
  }

  const handleImageInserted = async (file: any) => {
    console.log(file);
    try {
      // const imageUrl = await handleFsImageUpload(path, file); // image upload function
      const imageUrl =
        "https://the7eagles.com/wp-content/uploads/2024/05/What-is-an-Image-URL.webp";
      const quill = editorRef.current.getEditor();
      const range = quill.getSelection();
      quill.insertEmbed(range.index, "image", imageUrl);
    } catch (error) {
      console.error("Error handling image insertion:", error);
    }
  };

  const openImageFileDialog = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        handleImageInserted(file);
      }
    };
    input.click();
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
        handlers: {
          undo: undoChange,
          redo: redoChange,
          image: openImageFileDialog,
        },
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
    };
  }, []);

  const formats = [
    "header",
    // "font",
    // "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "code-block",
  ];

  return (
    <div className="text-editor">
      <>
        <EditorToolbar />
        {isClient && (
          <ReactQuill
            ref={editorRef}
            theme="snow"
            value={initialValue}
            onChange={handleChange}
            modules={modules}
            formats={formats}
          />
        )}
      </>
    </div>
  );
}

// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

// Quill Toolbar component
const EditorToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      {/* <select className="ql-font" defaultValue="arial">
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select> */}
      {/* <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select> */}
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading 1</option>
        <option value="2">Heading 2</option>
        <option value="3">Heading 3</option>
        <option value="4">Heading 4</option>
        <option value="5">Heading 5</option>
        <option value="6">Heading 6</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
    <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
    </span>
    <span className="ql-formats">
      <select className="ql-align" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span>
    <span className="ql-formats">
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
    <span className="ql-formats">
      <button className="ql-undo">
        <CustomUndo />
      </button>
      <button className="ql-redo">
        <CustomRedo />
      </button>
    </span>
  </div>
);
