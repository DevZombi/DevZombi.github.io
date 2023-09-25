import Status from '../elements/status.js'

class StatusBuilder {
    constructor(gfx) {
        this.x = 0
        this.y = 0
        this.width = 100
        this.height = 20
        this.background_color = '#898989'
        this.border_color = '#eee'
        this.empty_color = '#eee'
        this.accent_color = '#393939'
        this.gfx = gfx
    }

    setLocation(x, y) {
        this.x = x
        this.y = y
        return this
    }

    setSize(width, height) {
        this.width = width
        this.height = height
        return this
    }

    setColors(background, accent, border, empty) {
        this.background_color = background
        this.accent_color = accent
        this.border_color = border
        this.empty_color = empty
        return this
    }

    build() {
        return new Status(this.x, this.y, this.width, this.height, this.background_color, this.accent_color, this.border_color, this.empty_color, this.gfx)
    }
}

export default StatusBuilder