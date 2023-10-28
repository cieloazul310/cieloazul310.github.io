// @ts-nocheck
import { PanelLink, Alert, Link } from "@cieloazul310/astro-sarkara";
import Gallery from "./Gallery.astro";
import Iframe from "./Iframe.astro";
import YouTube from "./YouTube.astro";
import Ad from "./Ad.astro";
import Twitter from "./Twitter.astro";

const shortcodes = {
  Gallery,
  Iframe,
  YouTube,
  PanelLink,
  Alert,
  Ad,
  Twitter,
  a: Link,
};

export default shortcodes;
