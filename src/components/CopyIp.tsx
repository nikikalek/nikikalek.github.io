import { useState } from 'react';

export default function CopyIp({ label = 'Kopiuj IP' }: { label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const value = 'kraniec.pl';
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = document.createElement('input');
        input.value = value;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button className="copy-button" type="button" onClick={handleCopy} aria-label="Skopiuj adres IP serwera">
      {copied ? 'Skopiowano' : label}
    </button>
  );
}
