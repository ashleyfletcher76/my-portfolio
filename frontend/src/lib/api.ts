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
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GET ${url} -> ${res.status} ${res.statusText}: ${body}`);
  }
  return res.json() as Promise<T>;
}

export type LatestProject = {
  name: string;
  description: string;
  url: string;
  lastUpdatedIso: string;
};

export async function getLatestProject(): Promise<LatestProject | null> {
  const url = `${API_BASE}/api/projects/latest`;
  try {
    const project = await apiGet<LatestProject>('/api/projects/latest');
    return project;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : JSON.stringify(err);
    console.error(
      `[getLatestProject] Failed to fetch from ${url}\nEnvironment: ${process.env.NODE_ENV}\nError: ${message}`,
    );
    return null;
  }
}
