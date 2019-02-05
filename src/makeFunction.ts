export class MakeFunction {

    varName = 0;

    commands: string[] = [];

    constructor() {

    }

    public addElement(elementType: string, attrs: { [key: string]: string }, parentVar: string): string {
        var element = this.createElement(elementType, parentVar);
        Object.keys(attrs).forEach(key => {
            this.setAttr(element, key, attrs[key]);
        });
        return element;
    }

    public createElement(tagName: string, parentVar: string = null) {
        const varName = `var${this.varName++}`;
        this.commands.push(`var ${varName} = document.createElement('${tagName.toLocaleLowerCase()}');`);
        if (parentVar) {
            this.commands.push(`${parentVar}.appendChild(${varName})`);
        }
        return varName;
    }

    setAttr(element: string, key: string, value: string) {
        this.commands.push(`${element}.setAttribute(${key}, ${value})`);
    }

    getFunction(): Function {
        this.commands.push('return var0;');
        return new Function('data', this.commands.join(''));
    }
}