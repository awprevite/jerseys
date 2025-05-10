import { NextResponse } from 'next/server';
import supabase from '../db';

export async function POST(request: Request): Promise<Response> {

  const body = await request.json();
  const { username, password } = body;

  const { data, error } = await supabase
    .from('admins')
    .select('username, password')
    .eq('username', username)
    .single();

    if (error) {
      return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
    }
  
    if (!data || data.password !== password) {
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    }
  
  return NextResponse.json({ success: true });
}
