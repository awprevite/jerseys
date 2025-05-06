interface ItemData {
  size: '48' | '50' | '52';
  name: string;
  number: number;
  team: string;
  brand: string;
  image: string;
}

const simpleImageBlob = '/example.jpeg';

const mockItems: ItemData[] = [
  {size: '52', name: 'Connor McDavid', number: 97, team: 'Edmonton Oilers', brand: 'Adidas', image: simpleImageBlob},
  {size: '52', name: 'Auston Matthews', number: 34, team: 'Toronto Maple Leafs', brand: 'Adidas', image: simpleImageBlob},
  {size: '52', name: 'Sidney Crosby', number: 87, team: 'Pittsburgh Penguins', brand: 'Reebok', image: simpleImageBlob},
  {size: '52', name: 'Alex Ovechkin', number: 8, team: 'Washington Capitals', brand: 'Adidas', image: simpleImageBlob},
  {size: '52', name: 'Nathan MacKinnon', number: 29, team: 'Colorado Avalanche', brand: 'Adidas', image: simpleImageBlob},  
  {size: '52', name: 'Leon Draisaitl', number: 29, team: 'Edmonton Oilers', brand: 'Adidas', image: simpleImageBlob},
  {size: '52', name: 'Patrick Kane', number: 88, team: 'Chicago Blackhawks', brand: 'Adidas', image: simpleImageBlob},
  {size: '50', name: 'Steven Stamkos', number: 91, team: 'Tampa Bay Lightning', brand: 'Adidas', image: simpleImageBlob},
  {size: '50', name: 'Brad Marchand', number: 63, team: 'Boston Bruins', brand: 'Adidas', image: simpleImageBlob},
];

export { mockItems }
export type { ItemData };