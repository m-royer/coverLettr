import Image from "next/image";
import { version } from "react-dom";
import { Editor } from './editor';

export default function Home() {
  return (
    <div className="h-full p-5">
      <div className="text-center border-b-2 border-red-900/40">
        <h1 className="text-center text-8xl/18">CoverLettr</h1>
        <p className="text-center">An app for writing cover letters</p>
      </div>
      <Editor />
    </div>
  );
}
