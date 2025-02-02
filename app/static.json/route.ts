//Creating an API route in Next.js to export search indexes

import { NextResponse } from 'next/server';
import { type DocumentRecord } from 'fumadocs-core/search/algolia';
import { source } from '@/app/source';

export const revalidate = false;

export function GET() {
  const results: DocumentRecord[] = [];

  for (const page of source.getPages()) {
    results.push({
      _id: page.url,                    // Unique ID for each page
      structured: page.data.structuredData, // Structured data (if any)
      url: page.url,                     // Page URL
      title: page.data.title,             // Page Title
      description: page.data.description, // Page Description
    });
  }

  return NextResponse.json(results);
}
