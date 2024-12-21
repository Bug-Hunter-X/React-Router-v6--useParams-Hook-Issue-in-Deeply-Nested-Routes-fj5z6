# React Router v6 Nested Route useParams Issue

This repository demonstrates a common issue in React Router v6 when using the `useParams` hook within deeply nested routes.  The problem stems from how parameters are inherited or overridden when parent routes also define parameters.  If not handled correctly, the nested component might receive undefined parameter values.

The `nestedRoutesBug.js` file illustrates the problem.  The solution, found in `nestedRoutesSolution.js`, shows how to properly define routes to ensure correct parameter passing.

## Solution

The key is to explicitly define each nested route's path, ensuring it correctly accounts for all parent parameters. Using the `*` wildcard for optional segments can also resolve certain cases. 

We also use the `Outlet` component to render nested routes, facilitating the correct route matching behavior.