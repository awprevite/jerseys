'use client';

export default function Button({ type, text, onClick }: { type?: string, text: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className={'button ' + type}>
      {text}
    </button>
  );
}