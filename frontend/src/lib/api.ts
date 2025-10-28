export const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/+$/, '') || '';

if (!API_BASE && process.env.NODE_ENV === 'production') {
  throw new Error('NEXT_PUBLIC_BACKEND_URL is missing in production');
}

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${API_BASE}${path.startsWith('/') ? path : `/${path}`}`;
  const res = await fetch(url, {
    ...init,
    headers: { Accept: 'application/json', ...(init?.headers || {}) },
  });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.json() as Promise<T>;
}
