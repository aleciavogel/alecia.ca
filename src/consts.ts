// Top border of the article body (giving the slanted effect)
export const TRIANGLE_HEIGHT = 152;

export const ZIG_X = 18;
export const ZIG_Y = 6;
export const ZIG_OFFSET = 0;

// The zigzags I'm currently using
export const ZIGZAG_PATH = `M -${ZIG_OFFSET} ${ZIG_Y} L ${ZIG_X / 2 - ZIG_OFFSET} 0 L ${
  ZIG_X - ZIG_OFFSET
} ${ZIG_Y} L ${ZIG_X * 1.5 - ZIG_OFFSET} 0 L ${ZIG_X * 2 - ZIG_OFFSET} ${ZIG_Y}`;
export const ZIGZAG_VIEWBOX = `0 0 ${ZIG_X} ${ZIG_Y + 1}`;
export const ZIGZAG_TRANSLATE_TO = ZIG_X;

export const UNDERLINE_BORDER = ZIGZAG_PATH;
export const UNDERLINE_VIEWBOX = ZIGZAG_VIEWBOX;
export const UNDERLINE_TRANSLATE_TO = ZIGZAG_TRANSLATE_TO;
export const UNDERLINE_TIMING = 0.4;

export const SQUIGGLE_WIDTH = "400px";
