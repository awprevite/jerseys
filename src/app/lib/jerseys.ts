interface ItemData {
  id: string;
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

async function getJerseys(): Promise<ItemData[]> {
  try {
    const response = await fetch('/api/getItems');
    const raw = await response.json();
    return raw.map((jersey: any) => toCamelCase(jersey));
  } catch (error) {
    console.error('Error fetching jerseys:', error);
    return [];
  }
}

export { getJerseys }
export type { ItemData };