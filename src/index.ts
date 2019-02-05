import { MakeFunction } from "./makeFunction";

export class Templater {
    private element: HTMLElement;
    private makeFunction: MakeFunction;

    constructor(element: string | Element) {
        if (typeof element === "string") this.element = document.querySelector(element);
        this.parse();
    }

    public parse() {
        this.makeFunction = new MakeFunction();
        this.addNodeToFunction(this.element);
    }

    addNodeToFunction(element: Node) {

        // Use to check the type of this node and add it to the node Tree
        switch (element.nodeType) {

        }

        const attrs: { [key: string]: string } = {};

        if (element.childNodes.length > 0) {
            // element has children
        } else {
            // element has no children
        }
    }

    public asFunction() {
        return this.makeFunction.getFunction();
    }
}

window['templater'] = (el) => new Templater(el).asFunction();