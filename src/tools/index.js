export const paintingPic = (ctx, width, height) => {
    ctx.beginPath()
    ctx.moveTo(width / 2, height / 2)
    ctx.lineTo(width, height)
    ctx.lineTo(0, height)
    ctx.fillStyle = '#fff'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(0, height * 2 / 3)
    ctx.lineTo(width / 2, height / 2)
    ctx.lineTo(width, height * 2 / 3)
    ctx.lineTo(width, height)
    ctx.lineTo(width / 2, height / 2)
    ctx.lineTo(0, height)
    ctx.fillStyle = 'rgba(255,255,255,0.5)'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(0, height / 3)
    ctx.lineTo(width / 2, height / 2)
    ctx.lineTo(width, height / 3)
    ctx.lineTo(width, height * 2 / 3)
    ctx.lineTo(width / 2, height / 2)
    ctx.lineTo(0, height * 2 / 3)
    ctx.fillStyle = 'rgba(255,255,255,0.3)'
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(0, 0) //从A（100,0）开始
    ctx.lineTo(width / 2, height / 2)
    ctx.lineTo(width, 0)
    ctx.lineTo(width, height / 3)
    ctx.lineTo(width / 2, height / 2)
    ctx.lineTo(0, height / 3)
    ctx.fillStyle = 'rgba(255,255,255,0.1)'
    ctx.fill()
}
