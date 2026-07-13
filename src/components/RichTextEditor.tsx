"use client";

import { useRef, useCallback } from "react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Quote,
  Image,
  Undo,
  Redo,
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

const tools = [
  { icon: Bold, cmd: "bold", label: "Bold" },
  { icon: Italic, cmd: "italic", label: "Italic" },
  { icon: Heading2, cmd: "formatBlock", value: "h2", label: "Heading" },
  { icon: List, cmd: "insertUnorderedList", label: "Bullet List" },
  { icon: ListOrdered, cmd: "insertOrderedList", label: "Numbered List" },
  { icon: Quote, cmd: "formatBlock", value: "blockquote", label: "Quote" },
];

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  const exec = useCallback((cmd: string, val?: string) => {
    document.execCommand(cmd, false, val);
    if (editorRef.current) onChange(editorRef.current.innerHTML);
  }, [onChange]);

  const handleImageUpload = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) {
        document.execCommand("insertImage", false, data.url);
        if (editorRef.current) onChange(editorRef.current.innerHTML);
      }
    };
    input.click();
  }, [onChange]);

  return (
    <div className="border border-white/10">
      <div className="flex items-center gap-0.5 p-1.5 bg-fortress-charcoal border-b border-white/10 flex-wrap">
        {tools.map((t) => (
          <button
            key={t.cmd + (t.value || "")}
            type="button"
            onMouseDown={(e) => { e.preventDefault(); exec(t.cmd, t.value); }}
            className="p-1.5 text-fortress-silver hover:text-fortress-ivory hover:bg-white/5 transition-colors"
            title={t.label}
          >
            <t.icon className="w-4 h-4" />
          </button>
        ))}
        <span className="w-px h-5 bg-white/10 mx-1" />
        <button
          type="button"
          onClick={handleImageUpload}
          className="p-1.5 text-fortress-silver hover:text-fortress-ivory hover:bg-white/5 transition-colors"
          title="Insert Image"
        >
          <Image className="w-4 h-4" />
        </button>
        <span className="w-px h-5 bg-white/10 mx-1" />
        <button
          type="button"
          onMouseDown={(e) => { e.preventDefault(); document.execCommand("undo"); if (editorRef.current) onChange(editorRef.current.innerHTML); }}
          className="p-1.5 text-fortress-silver hover:text-fortress-ivory hover:bg-white/5 transition-colors"
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          type="button"
          onMouseDown={(e) => { e.preventDefault(); document.execCommand("redo"); if (editorRef.current) onChange(editorRef.current.innerHTML); }}
          className="p-1.5 text-fortress-silver hover:text-fortress-ivory hover:bg-white/5 transition-colors"
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="min-h-[300px] p-4 text-fortress-ivory text-sm focus:outline-none prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={() => {
          if (editorRef.current) onChange(editorRef.current.innerHTML);
        }}
      />
    </div>
  );
}
