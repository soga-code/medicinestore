import React from "react";
import { ArrowUp } from "lucide-react";

export default function PageUp() {
    return (
      <div className="fixed bottom-8 right-8 bg-green-700 p-3 rounded-full shadow-lg hover:bg-green-800 transition-colors">
        <ArrowUp onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-white"/>
      </div>
    );
    }