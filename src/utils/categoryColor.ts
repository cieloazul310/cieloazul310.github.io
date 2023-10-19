export const categoryColor = {
  tech: "primary",
  works: "secondary",
};

function isCategoryType(categoryType: string): categoryType is keyof typeof categoryColor {
  return categoryType === "tech" || categoryType === "works";
}

export function getCategoryColor(categoryType: string) {
  if (isCategoryType(categoryType)) return categoryColor[categoryType];
  return "neutral";
}
