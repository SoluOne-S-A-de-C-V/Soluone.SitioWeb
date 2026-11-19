"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, Download, ExternalLink } from "lucide-react";

interface ImageLightboxModalProps {
  isOpen: boolean;
  src: string;
  title: string;
  caption?: string;
  onClose: () => void;
}

export function ImageLightboxModal({
  isOpen,
  src,
  title,
  caption,
  onClose,
}: ImageLightboxModalProps) {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setZoomLevel(1);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <div>
            <h4 id="lightbox-modal-title" className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E00E8B]" />
              {title}
            </h4>
            {caption && (
              <p className="text-xs text-slate-400 mt-0.5">{caption}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400 min-w-10 text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5))}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors hidden sm:inline-flex"
              title="Open image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#E00E8B] transition-colors ml-2"
              title="Close (Esc)"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Content Container with scroll/pan */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950/50 min-h-[300px]">
          <div
            className="transition-transform duration-150 ease-out origin-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={src}
              alt={title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl mx-auto select-none"
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-6 py-2.5 border-t border-slate-800 bg-slate-900/80 text-center text-[11px] text-slate-400 shrink-0">
          Use zoom controls to inspect technical architecture details or press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">Esc</kbd> to close.
        </div>
      </div>
    </div>
  );
}
