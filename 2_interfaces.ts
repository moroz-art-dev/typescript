interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 120,
        height: 130
    },
    color: 'red'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 120,
        height: 130
    }
}
rect2.color = '#ccc'

const rect3 = {} as Rect
const rect4 = <Rect>{}

/////

interface RectWidthArea extends Rect {
    getArea: () => number
}

const rect5: RectWidthArea = {
    id: '123',
    size: {
        width: 20,
        height: 30
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ===========

interface IClock {
    time: Date

    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date) {
        this.time = date
    }
}


//=======

interface Styles {
   [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '10px',
    borderRadius: '5px '
}