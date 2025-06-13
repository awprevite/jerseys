import supabase from '../db';

export async function GET(): Promise<Response> {
  const { data, error } = await supabase
    .from('jerseys')
    .select('*');

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}