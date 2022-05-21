import "./style/index.less"

class Food {
    element: HTMLElement;
    constructor() {
        // food 一定不为空
        this.element = document.getElementById('food')!

    }

    get X() {
        return this.element.offsetLeft
    }
    get Y() {
        return this.element.offsetTop
    }
    change() {

        let top = Math.round(Math.random() * 29) * 10
        let left = Math.round(Math.random() * 29) * 10
        this.element.style.left = `${top}px`
        this.element.style.top = `${left}px`
    }
}

const food = new Food()


food.change()
console.log(food.X, food.Y)