export const categoryColor = {
  tech: "primary",
  works: "amber",
  blog: "neutral",
};

function isCategoryType(categoryType: string): categoryType is keyof typeof categoryColor {
  return categoryType === "tech" || categoryType === "works" || categoryType === "blog";
}

export function getCategoryColor(categoryType: string) {
  if (isCategoryType(categoryType)) return categoryColor[categoryType];
  return "neutral";
}
