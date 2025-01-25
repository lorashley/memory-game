/**
 * New color palette
 * https://www.figma.com/file/CIYSAMSkgFs9DgAabdEyk6Ua/UI-Kit?node-id=11712%3A1979
 */

export const black = '#161618'
export const white = '#ffffff'

export const gray1 = '#f7f8f9'
export const gray2 = '#ecedf0'
export const gray3 = '#e1e2e7'
export const gray4 = '#d4d6dd'
export const gray5 = '#c1c4cd'
export const gray6 = '#818691'
export const gray7 = '#4c4e55'
export const gray8 = '#313236'

export const purple1 = '#ece9fd'
export const purple2 = '#d0c9fb'
export const purple3 = '#b0a6f9'
export const purple4 = '#9082f7'
export const purple5 = '#644bff'
export const purple6 = '#581bf5'

export const flamingo1 = '#fcefee'
export const flamingo2 = '#f8d6d2'
export const flamingo3 = '#f4bab5'
export const flamingo4 = '#f19f97'
export const flamingo5 = '#ff6e66'
export const flamingo6 = '#eb5144'

export const orange1 = '#faeee8'
export const orange2 = '#f2d3c5'
export const orange3 = '#eab69f'
export const orange4 = '#e29879'
export const orange5 = '#e66636'
export const orange6 = '#c54628'

export const yellow1 = '#fdf6eb'
export const yellow2 = '#f9e9cb'
export const yellow3 = '#f5d9a9'
export const yellow4 = '#f0ca87'
export const yellow5 = '#f4b144'
export const yellow6 = '#df8d3c'

export const green1 = '#edf7ee'
export const green2 = '#d2ead5'
export const green3 = '#b5ddb9'
export const green4 = '#98ce9e'
export const green5 = '#54bc6d'
export const green6 = '#4d9549'

export const blue1 = '#eaf4fd'
export const blue2 = '#bfdef8'
export const blue3 = '#99cbf4'
export const blue4 = '#75b8f0'
export const blue5 = '#2a92e8'
export const blue6 = '#146eb8'

export const violet1 = '#f5e9fa'
export const violet2 = '#debaef'
export const violet3 = '#cd97e6'
export const violet4 = '#bd75de'
export const violet5 = '#9727cc'
export const violet6 = '#712097'

export const rose1 = '#fcf0f7'
export const rose2 = '#f4cee7'
export const rose3 = '#eeb5db'
export const rose4 = '#e99ccf'
export const rose5 = '#dc71ba'
export const rose6 = '#b53c8e'

export const hexaToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
