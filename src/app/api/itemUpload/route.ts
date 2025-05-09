import supabase from '../db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await supabase
    .from('jerseys')
    .insert([
      {
        first_name: body.firstName,
        last_name: body.lastName,
        number: body.number,
        team: body.team,
        brand: body.brand,
        size: body.size,
        front_image_url: body.frontImageUrl,
        back_image_url: body.backImageUrl,
        for_sale: body.forSale,
        price: body.price,
        sold: body.sold,
      },
    ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}