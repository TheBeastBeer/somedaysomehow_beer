import {redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';

export async function loader({params, request, context}: LoaderFunctionArgs) {
  const {handle} = params;
  const {storefront} = context;

  // await the query for the critical product data
  const {product} = await storefront.query(PRODUCT_QUERY, {
    variables: {handle},
  });

  if (!product?.id) {
    throw new Response(`${new URL(request.url).pathname} not found`, {
      status: 404,
    });
  }

  // TODO: Add locale support to redirect URL
  return redirect(`/products/${handle}`);
}

export default function Component() {
  return null;
}

const PRODUCT_QUERY = `#graphql
query ProductID(
  $country: CountryCode
  $handle: String!
  $language: LanguageCode
) @inContext(country: $country, language: $language) {
  product(handle: $handle) {
    id
  }
}` as const;
