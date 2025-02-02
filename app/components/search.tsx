'use client';
import algo from 'algoliasearch/lite';
import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-algolia';
 
const client = algo(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY!);
    
const index = client.initIndex('document');
 
export default function CustomSearchDialog(props: SharedProps) {
  return <SearchDialog index={index} {...props} />;
}