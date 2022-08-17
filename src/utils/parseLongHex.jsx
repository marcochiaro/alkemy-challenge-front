export const parseLongHex = (hex) => {
  return `${hex.slice(0, 6)}...${hex.slice(hex.length - 4)}`
}
