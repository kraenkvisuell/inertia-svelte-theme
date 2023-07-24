<script context="module">
export { default as layout } from '../Layouts/Layout.svelte';
</script>

<script>
// props
export let globals;
export let products;
export let errors;

// console.log(products);
</script>

<svelte:head>
    <title>{globals.websiteName} | Shop</title>
</svelte:head>

<div>
    <h1>{globals.websiteName} | Shop</h1>

    {products.length}
</div>
