//check out typography.js for other themes. Other installed themes have been commented out

import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'
//import bootstrapTheme from 'typography-theme-bootstrap'
//import lincolnTheme from 'typography-theme-lincoln'
//import wp2014Theme from 'typography-theme-wordpress-2014'
//import elkglenTheme from 'typography-theme-elk-glen'
kirkhamTheme.baseFontSize = '16px'
const typography = new Typography(kirkhamTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
