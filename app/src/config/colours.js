export const primary = '#3066BE';
export const primaryLight = '#00A7E1';
export const primaryDark = '#0B429C';
export const secondary = '#F2994A';
export const secondaryLight = '#FFB97A';
export const white = '#FCFCFC';
export const offWhite = '#F2F2F2';
export const black = '#000000';

export const hexToRGB = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

export const rgba = (hex, opacity = 1.0) => {
  const rgb = hexToRGB(hex);
  return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})` : hex;
};
