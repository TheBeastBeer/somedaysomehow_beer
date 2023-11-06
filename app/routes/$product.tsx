import {redirect, type LoaderFunctionArgs} from '@shopify/remix-oxygen';

export async function loader({params}: LoaderFunctionArgs) {
  const {product} = params;

  return redirect(`/products/${product}`);
};