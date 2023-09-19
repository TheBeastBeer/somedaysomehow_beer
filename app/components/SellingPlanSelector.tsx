// Original: https://github.com/Shopify/hydrogen/blob/eb5dd4dd288ae04c9450e62c0e8118e4dc105872/packages/hydrogen/src/product/VariantSelector.ts
import {useLocation} from '@remix-run/react';
import type {SellingPlanGroupOption} from '@shopify/hydrogen/storefront-api-types';
import type {ReactNode} from 'react';
import {useMemo, createElement, Fragment} from 'react';
import type {PartialDeep} from 'type-fest';

export type SellingPlanOption = {
  name: string;
  activeValue?: string;
  details: Array<SellingPlanOptionValue>;
};

export type SellingPlanOptionValue = {
  value: string;
  path: string;
  search: string;
  isActive: boolean;
};

type SellingPlanSelectorProps = {
  /** The product handle for all of the variants */
  handle: string;
  /** The HTML friendly selling plan name and value */
  plan: string | undefined;
  /** Selling Plan Group options from the [Storefront API](https://shopify.dev/docs/api/storefront/2023-07/objects/SellingPlanGroupOption). Make sure both `name` and `values` are apart of your query. */
  options: Array<PartialDeep<SellingPlanGroupOption>> | undefined;
  /** By default all products are under /products. Use this prop to provide a custom path. */
  productPath?: string;
  children: ({option}: {option: SellingPlanOption}) => ReactNode;
};

export function SellingPlanSelector({
  handle,
  plan,
  options = [],
  productPath = 'products',
  children,
}: SellingPlanSelectorProps) {
  const {searchParams, productPathOnly} = useCurrentPath(handle, productPath);
  const currentPlan = plan?.split(':')[1];

  return createElement(
    Fragment,
    null,
    ...useMemo(() => {
      return options.map((option) => {
        let activeValue;
        // eslint-disable-next-line prefer-const
        let details: SellingPlanOptionValue[] = [];
        const nameWithUnderscores = option.name?.replace(/ /g, '_');

        // eslint-disable-next-line prefer-const
        for (let value of option.values!) {
          const valueWithUnderscores = value.replace(/ /g, '_');

          // If a URL parameter exists for the current option, check if it equals the current value.
          // But, any spaces in the value must be converted to underscores, beforehand.
          const calculatedActiveValue = currentPlan
            ? currentPlan === valueWithUnderscores
            : false;

          if (calculatedActiveValue) {
            // Save out the current value if it's active. This should only ever happen once.
            // Should we throw if it happens a second time?
            activeValue = value;
          }

          const path = `${productPathOnly}/${nameWithUnderscores}:${valueWithUnderscores}/${searchParams}`;

          details.push({
            value: value!,
            path,
            search: searchParams,
            isActive: calculatedActiveValue,
          });
        }

        return children({
          option: {
            name: option.name!,
            activeValue,
            details,
          },
        });
      });
    }, [options, children, currentPlan, productPathOnly, searchParams]),
  );
}

function useCurrentPath(handle: string, productPath: string) {
  const {pathname, search} = useLocation();

  return useMemo(() => {
    const match = /(\/[a-zA-Z]{2}-[a-zA-Z]{2}\/)/g.exec(pathname);
    const isLocalePathname = match && match.length > 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    productPath = productPath.startsWith('/')
      ? productPath.substring(1)
      : productPath;

    const productPathOnly = isLocalePathname
      ? `${match![0]}${productPath}/${handle}`
      : `/${productPath}/${handle}`;

    return {
      searchParams: search,
      productPathOnly,
    };
  }, [pathname, search, handle, productPath]);
}
