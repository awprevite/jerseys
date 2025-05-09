'use client';
import { useState } from 'react';
import Button from './Button';

interface ImageUploadProps {
  side: string;
  onUpload: (url: string) => void;
}

export default function ImageUpload({ side, onUpload }: ImageUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('side', side);

    try {
      const response = await fetch('/api/imageUpload', {
        method: 'POST',
        body: formData,    
      });

      const result = await response.json();
      onUpload(result.url);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {previewUrl && <img src={previewUrl} alt="Preview" style={{ maxWidth: '200px', marginTop: '10px' }} />}
      <br />
      <button disabled={!file} onClick={handleUpload}>Upload</button>
      <Button type='primary' text='Remove' onClick={() => {
        setPreviewUrl(null);
        setFile(null);
      }}/>
    </div>
  );
}