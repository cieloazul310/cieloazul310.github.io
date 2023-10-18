import { defineSiteMetadata, defineMenu } from "@cieloazul310/astro-sarkara";

export const siteMetadata = defineSiteMetadata({
	title: "水戸地図(β)",
	description: "水戸地図のAstroバージョン",
  image: "/ogimage.png",
  favicon: "/favicon.ico",
});
export const menu = defineMenu([
  { title: "トップページ", href: "/" },
  { title: "記事一覧", href: "/posts" },
  {
    title: "技術記事",
    items: [
      { title: "技術記事", href: "/tech" },
      { title: "Astro", href: "/tech/astro" },
      { title: "Gatsby", href: "/tech/gatsby" },
    ],
  },
]);
export const pageSize = 1;
