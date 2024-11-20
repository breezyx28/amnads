// global.d.ts
import $ from "jquery";

declare global {
  interface Window {
    $: typeof $;
    jQuery: typeof $;
  }
  interface JQuery<TElement = HTMLElement> {
    select2(options?: any): JQuery<TElement>;
  }
}
