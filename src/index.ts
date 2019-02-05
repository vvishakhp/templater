import { MakeFunction } from "./makeFunction";

// Node traversing
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

export class Templater {
    private element: HTMLElement;
    private makeFunction: MakeFunction;

    constructor(element: string | Element) {
        if (typeof element === "string") this.element = document.querySelector(element);
        this.makeFunction = new MakeFunction(this.element.tagName);
    }

    public asFunction() {
        return this.makeFunction.getFunction();
    }
}

window['templater'] = (el) => new Templater(el).asFunction();