"use client";

import { Label } from "@/registry/default/ui/label";
import { ListBox, ListBoxItem } from "react-aria-components";

export default function Component() {
  return (
    <div className="*:not-first:mt-2">
      <Label>Listbox with multiple options</Label>
      <div className="border-input overflow-hidden rounded-lg border">
        <ListBox
          className="bg-background max-h-72 min-h-20 space-y-1 overflow-auto p-1 text-sm shadow-xs transition-shadow"
          aria-label="Select framework"
          selectionMode="multiple"
          defaultSelectedKeys={["react", "vue"]}
        >
          <ListBoxItem
            id="react"
            className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:outline-ring/70 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
          >
            React
          </ListBoxItem>
          <ListBoxItem
            id="vue"
            className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:outline-ring/70 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
          >
            Vue
          </ListBoxItem>
          <ListBoxItem
            id="angular"
            className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:outline-ring/70 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
          >
            Angular
          </ListBoxItem>
          <ListBoxItem
            id="svelte"
            className="data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-focus-visible:outline-ring/70 relative rounded-md px-2 py-1.5 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-focus-visible:outline-2"
          >
            Svelte
          </ListBoxItem>
        </ListBox>
      </div>
      <p className="text-muted-foreground mt-2 text-xs" role="region" aria-live="polite">
        Built with{" "}
        <a
          className="hover:text-foreground underline"
          href="https://react-spectrum.adobe.com/react-aria/ListBox.html"
          target="_blank"
          rel="noopener nofollow"
        >
          React Aria
        </a>
      </p>
    </div>
  );
}
