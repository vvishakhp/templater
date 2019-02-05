export class MakeFunction {

    varName = 0;

    commands: string[] = [];

    constructor(rootElement: string) {
        this.createElement(rootElement);
        this.addElement('p', {}, 'var0');
    }

    public addElement(elementType: string, attrs: { [key: string]: string }, parentVar: string) {
        this.createElement(elementType, parentVar);
    }

    public createElement(tagName: string, parentVar: string = null) {
        const varName = `var${this.varName++}`;
        this.commands.push(`var ${varName} = document.createElement('${tagName.toLocaleLowerCase()}');`);
        if (parentVar) {
            this.commands.push(`${parentVar}.appendChild(${varName})`);
        }
        return varName;
    }

    getFunction(): Function {
        this.commands.push('return var0;');
        return new Function('data', this.commands.join(''));
    }
}