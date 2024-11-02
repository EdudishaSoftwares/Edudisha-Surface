

  export interface PlaceholderGraphProps {
    height?: number;
    width?: number;
    active?: boolean;
    className?: string;
  }

  export interface PlaceholderGridProps {
    rows?: number;
    columns?: number;
    active?: boolean;
    className?: string;
  }

  export interface PlaceholderParagraphProps {
    rows?: number;
    graph?: boolean | 'circle' | 'square' | 'image';
    active?: boolean;
    className?: string;
  }