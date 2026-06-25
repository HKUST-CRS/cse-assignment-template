import type { MarkdownHeading } from "astro";

export type OrganizedHeading = {
  heading: MarkdownHeading;
  subheadings: OrganizedHeading[];
};

export function organizeHeadings(
  headings: MarkdownHeading[],
): OrganizedHeading[] {
  const root: OrganizedHeading[] = [];
  const stack: OrganizedHeading[] = [];

  for (const heading of headings) {
    const node: OrganizedHeading = {
      heading,
      subheadings: [],
    };

    while (
      stack.length > 0 &&
      heading.depth <= stack[stack.length - 1].heading.depth
    ) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];
    if (parent) {
      parent.subheadings.push(node);
    } else {
      root.push(node);
    }

    stack.push(node);
  }

  return root;
}
