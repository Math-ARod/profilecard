/**
 * (*for) cicle implementation
 * @param element the root element from HTML part where you want to apply (*for) cicle. This root element cannot to use (*for). Just children are allowed to use it.
 * @returns void
 */
export function htmlFor(element: HTMLElement): void {
    replace(element, element);
	return;
}

/**
 * Recursive function for map all descendants and replace (*for) cicles with repetitions where items from array will be applied on HTML.
 * @param rootElement The root element
 * @param el The mapped root and its children
 */
function replace(rootElement: HTMLElement, el: HTMLElement): void {
	el.childNodes.forEach((childNode) => {
		if (childNode instanceof HTMLElement) {
			const child = childNode as HTMLElement;
			if (child.hasAttribute('*for')) {
				const operation = (child as HTMLElement).getAttribute('*for');
				const itemsCommand = /let (.*) of (.*)/.exec(operation!);
				if (itemsCommand?.length === 3) {
					const listName = itemsCommand[2];
					const itemName = itemsCommand[1];

					if (rootElement[listName] && Array.isArray(rootElement[listName])) {
						for (let item of rootElement[listName]) {
							const clone = child.cloneNode(true) as HTMLElement;
							clone.removeAttribute('*for');
							const htmlParts = clone.innerHTML.split('}}');
							htmlParts.forEach((part, i, parts) => {
								const position = part.indexOf('{{');

								if (position >= 0) {
									const pathTovalue = part.substring(position+2).replace(/ /g, '');
									const prefix = part.substring(0, position);
								
									let finalValue = '';
									let replaced = false;
									console.log({ pathTovalue });
									
									if (pathTovalue.indexOf('.') >= 0) {
										const byPatternSplitted = pathTovalue.split('.');
										if (byPatternSplitted[0] === itemName) {
											replaced = true;
											for (const subpath of byPatternSplitted) {
												finalValue = item[subpath];
											}
										}
									} else {						
										if (pathTovalue === itemName) {
											replaced = true;
											finalValue = item;
										}
									}
									parts[i] = prefix + finalValue;
								}

								return part;
							});

							clone.innerHTML = htmlParts.join('');							

							el.append(clone);
						}
					}
				}
				el.removeChild(child);
			}
			replace(rootElement, child);
		}
	});
}
