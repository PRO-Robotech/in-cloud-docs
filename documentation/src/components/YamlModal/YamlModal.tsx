import React, { useState, useEffect, useRef, useMemo } from 'react';
import { default as MonacoEditor } from '@monaco-editor/react';

interface YamlModalProps {
  yamlContent: string;
  onCloseOtherModals?: () => void;
}

const YamlModal: React.FC<YamlModalProps> = ({ yamlContent, onCloseOtherModals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [editorHeight, setEditorHeight] = useState<string>('300px');
  const dialogRef = useRef<HTMLDialogElement>(null);

  const lineCount = useMemo(() => yamlContent.split('\n').length, [yamlContent]);

  useEffect(() => {
    const minHeight = 200;
    const maxHeight = window.innerHeight * 0.8;
    const approxHeight = lineCount * 20;
    const finalHeight = Math.min(Math.max(approxHeight, minHeight), maxHeight);
    setEditorHeight(`${finalHeight}px`);
  }, [lineCount]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleOpen = () => {
    onCloseOtherModals?.();
    setIsOpen(true);
    setTimeout(() => dialogRef.current?.focus(), 0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(yamlContent).then(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    });
  };

  return (
    <>
      <button
        onClick={handleOpen}
        style={{
          whiteSpace: 'nowrap',
          padding: '0.35rem 0.75rem',
          backgroundColor: '#2b2b2b',
          color: '#fff',
          border: '1px solid #555',
          borderRadius: '6px',
          fontSize: '0.85rem',
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        Открыть пример
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <dialog
            ref={dialogRef}
            open
            style={{
              border: 'none',
              background: '#1e1e1e',
              borderRadius: '8px',
              width: '90vw',
              maxWidth: '960px',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '1rem', fontWeight: 'bold', color: '#ccc' }}>
                Пример политики
              </div>
              <div style={{ padding: '0 1rem 1rem', overflow: 'auto' }}>
                <MonacoEditor
                  height={editorHeight}
                  defaultLanguage="yaml"
                  defaultValue={yamlContent}
                  theme="vs-dark"
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    fontFamily: '"Fira Code", "Courier New", monospace',
                    fontSize: 16,
                  }}
                />
              </div>
              <div style={{ textAlign: 'right', padding: '0.5rem 1rem' }}>
                <button
                  onClick={handleCopy}
                  style={{
                    marginRight: '0.5rem',
                    padding: '0.4rem 0.8rem',
                    background: '#007acc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  Скопировать
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    background: '#444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </dialog>
        </div>
      )}

      {showNotification && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#007acc',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontSize: '0.85rem',
            zIndex: 1100,
          }}
        >
          Сохранено в буфер обмена
        </div>
      )}
    </>
  );
};

export default YamlModal;
