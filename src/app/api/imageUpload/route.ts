import supabase from '../db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const side = formData.get('side') as string;

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const fileName = `${side}/${Date.now()}-${file.name}`;


  const { data, error } = await supabase.storage
    .from('jerseys')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const publicUrl = supabase.storage
    .from('jerseys')
    .getPublicUrl(data.path).data.publicUrl;

  return NextResponse.json({ path: data.path, url: publicUrl });
}