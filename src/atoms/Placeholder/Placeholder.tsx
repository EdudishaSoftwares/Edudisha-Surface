import PlaceholderGraph from "./PlaceholderGraph";
import PlaceholderGrid from "./PlaceholderGrid";
import PlaceholderParagraph from "./PlaceholderParagraph";

export interface PlaceholderType {
  Paragraph: typeof PlaceholderParagraph;
  Grid: typeof PlaceholderGrid;
  Graph: typeof PlaceholderGraph;
}

const Placeholder: PlaceholderType = {
  Paragraph: PlaceholderParagraph,
  Grid: PlaceholderGrid,
  Graph: PlaceholderGraph,
};

export default Placeholder;
