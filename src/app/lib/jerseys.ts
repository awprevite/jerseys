import { useState, useEffect } from 'react';
interface ItemData {
  firstName: string;
  lastName: string;
  number: number;
  team: string;
  brand: string;
  size: string;
  frontImageUrl: string;
  backImageUrl: string;
  forSale: boolean;
  price: number;
  sold: boolean;
}

function toCamelCase(jersey: any) {
  return {
    id: jersey.id,
    firstName: jersey.first_name,
    lastName: jersey.last_name,
    number: jersey.number,
    team: jersey.team,
    brand: jersey.brand,
    size: jersey.size,
    frontImageUrl: jersey.front_image_url,
    backImageUrl: jersey.back_image_url,
    forSale: jersey.for_sale,
    price: jersey.price,
    sold: jersey.sold,
    createdAt: jersey.created_at,
  };
}

function useJerseys(){
  const [jerseys, setJerseys] = useState<ItemData[]>([]);

  useEffect(() => {
    const fetchJerseys = async () => {
      try {
        const response = await fetch('/api');
        const raw = await response.json();
        const data = raw.map((jersey: any) => toCamelCase(jersey));
        setJerseys(data);
        console.log('Fetched jerseys:', data);
      } catch (error) {
        console.error('Error fetching jerseys:', error);
      } 
    }

    fetchJerseys();
  }, []);

  return jerseys;
}

export { useJerseys }
export type { ItemData };