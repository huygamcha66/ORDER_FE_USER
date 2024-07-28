/* eslint-disable quotes */
export const getCanvasFingerprint = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx.textBaseline = 'top'
  ctx.font = '14px Arial'
  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = '#f60'
  ctx.fillRect(125, 1, 62, 20)
  ctx.fillStyle = '#069'
  ctx.fillText('Hello, world!', 2, 15)
  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)'
  ctx.fillText('Hello, world!', 4, 17)
  const dataUrl = canvas.toDataURL()
  return dataUrl
}
export const getWebGLFingerprint = () => {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl')
  if (!gl) return null
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
  if (!debugInfo) return null
  return {
    vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
    renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
  }
}

export const addressIP = navigator.userAgent
