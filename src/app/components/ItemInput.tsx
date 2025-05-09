'use client';
import { useState } from 'react';
import Button from './Button';
import ImageUpload from './imageUpload';

interface ItemInputProps {
  fields: string[]
}

export default function ItemInput({ fields }: ItemInputProps) {
  const [frontImageUrl, setFrontImageUrl] = useState<string | null>(null);
  const [backImageUrl, setBackImageUrl] = useState<string | null>(null);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (field: string, checked: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [field]: checked,
    }));
  };


  const handleSubmit = async () => {
    if (!frontImageUrl || !backImageUrl) {
      alert('Please upload both front and back images.');
      return;
    }

    const requiredFields = ['firstName', 'lastName', 'number', 'team', 'brand', 'size', 'forSale', 'price', 'sold'];


    for (const field of requiredFields) {
      if (!inputValues[field] || inputValues[field].trim() === '') {
        alert(`Please fill out the "${field}" field.`);
        return;
      }
    }

    const data = {
      ...inputValues,
      frontImageUrl,
      backImageUrl,
    }

    try {
      const response = await fetch('/api/itemUpload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Upload successful!');
        console.log('Inserted:', result.data);
      } else {
        alert(`Upload failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Error uploading item:', error);
    }
    
  }
  return (
    <div>
      <div className='input-container'>
        {fields.map((field: string, index: number) => (
          <div key={index}>
            <label>{field}</label><br />
            {field === 'forSale' || field === 'sold' ? (
              <input
                type="checkbox"
                checked={inputValues[field] === 'true'}
                onChange={(e) => handleCheckboxChange(field, e.target.checked ? 'true' : 'false')}
              />
            ) : (
              <input
                type="text"
                placeholder={field}
                value={inputValues[field] || ''}
                onChange={(e) => handleInputChange(field, e.target.value)}
              />
            )}
          </div>
        ))}
      </div>
      <ImageUpload side = 'front' onUpload={(setFrontImageUrl)}/>
      <ImageUpload side = 'back' onUpload={(setBackImageUrl)}/>
      <Button type='primary' text='Submit' onClick={() => handleSubmit()} />
    </div>
  );
}