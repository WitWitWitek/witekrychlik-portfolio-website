'use server';

import { redirect } from 'next/navigation';

export default async function AdminPage() {
  redirect((process?.env?.SANITY_STUDIO_URL as string) ?? '/');
}
