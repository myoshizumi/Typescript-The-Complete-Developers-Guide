export class UserForm {
	constructor(public parent: Element) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			"click:button": this.onButtonClick,
			// 'hover:h1': this.onHoverHeader,
			// 'drag:div': this.onDragDiv
		};
	}

	onButtonClick(): void {
		console.log("hi there");
	}

	template(): string {
		return /*html*/ `
            <div>
                <h1>User Form</h1>
                <input />
                <button>Click Me</button>
            </div>
        `;
	}

	render(): void {
		const templateElement = document.createElement("template");
		templateElement.innerHTML = this.template();

		this.parent.appendChild(templateElement.content);
	}
}
