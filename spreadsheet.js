'use strict';

/* 
THIS SCRIPT MAKES USE OF MONKEY APPROVED GRAPHICS (copyright monkey-approved.com)
*/

//----------------------------------------------------------------------------------------//

// the following part loads the monkey approved graphics script...
// add your code below inside magRUN

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}

let magLoad = loadScript("graphics.js");

magLoad.then(
  script => magRun(),
  error => alert(`Error: ${error.message}`)
);

// if you want to warn users before closing the page, uncomment the lines below
// this is intended for cases where data might be lost or accidential horizontal
// scrolls (leading to previous page) can easily occur

window.addEventListener("beforeunload", function (e) {
    let confirmationMessage = 'Are you sure you want to leave?'
                            + 'Unsaved changes will be lost...';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});


// only change code below this line!!!

//----------------------------------------------------------------------------------------//


let menuColor = 'rgb(220, 220, 220)';

let buttonStyle1 = {
	inactive: {backgroundColor: 'rgb(200, 200, 200)', color: 'rgb(75, 75, 75)'}, 
	active: {backgroundColor: 'rgb(75, 75, 75)', color: 'white'},
	inactiveHover: {backgroundColor: 'rgb(150, 150, 150)', color: 'white'},
	activeHover: {backgroundColor: 'rgb(75, 75, 75)', color: 'white'}};
	
let inputStyle1 = {
	inactive: {backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(75, 75, 75)'}, 
	active: {backgroundColor: 'rgb(75, 75, 75)', color: 'white'},
	inactiveHover: {backgroundColor: 'rgb(150, 150, 150)', color: 'white'},
	activeHover: {backgroundColor: 'rgb(75, 75, 75)', color: 'white'}};

class elementMenu {
	constructor(parentNode, userInterface) {
		this.parentNode = parentNode;
		this.userInterface = userInterface;
		
		magDefaults.magDOMparagraph.scaling = 2;
		magDefaults.magDOMparagraph.alignment = 12;
		magDefaults.magDOMinput.scaling = 2;
		magDefaults.magDOMinput.alignment = 12;
		
		let labelText1 = {fontFamily: 'Montserrat', fontSize: 80, fontScaling: 'relative', verticalAlign: 'center', horizontalAlign: 'right'};
		let labelText2 = {fontFamily: 'Montserrat', fontSize: 80, fontScaling: 'relative', verticalAlign: 'center', horizontalAlign: 'center'};
		
		let inputs = [['label', 'position', [25, 6], [9, 2.5], {textStyle: labelText1}],
							['label', 'size', [25, 9], [9, 2.5], {textStyle: labelText1}],
							['label', 'x (hor.)', [35, 3], [9, 2.5], {textStyle: labelText2}],
							['label', 'y (vert.)', [45, 3], [9, 2.5], {textStyle: labelText2}],
							['number', 0, [35, 6], [9, 2.5], {id: 'xPos', textStyle: labelText2, styleChanges: inputStyle1}],
							['number', 0, [45, 6], [9, 2.5], {id: 'yPos', textStyle: labelText2, styleChanges: inputStyle1}],
							['number', 100, [35, 9], [9, 2.5], {id: 'width', textStyle: labelText2, styleChanges: inputStyle1}],
							['number', 100, [45, 9], [9, 2.5], {id: 'height', textStyle: labelText2, styleChanges: inputStyle1}],
							['color', [60, 10], [30, 80], {id: 'color'}],
							['button', 'click me', [55, 9], [9, 2.5], {id: 'button1', textStyle: labelText2, styleChanges: inputStyle1}]];
							
		let inputs2 = [['label', 'position', [35, 60], [30, 20], {textStyle: labelText2}],
							['label', 'size', [35, 90], [30, 20], {textStyle: labelText2}]];
		
		this.form = new magDOMmenu(parentNode, inputs, {position: [50, 0], size: [100, 10], alignment: 10, scaling: 2, style: {backgroundColor: menuColor}});
		
		//this.form.enableMouseDrag();
		
		this.form2 = new magDOMmenu(parentNode, inputs2, {position: [130, 30], size: [10, 10], alignment: 10, scaling: 2, style: {backgroundColor: 'rgb(200, 200, 200)'}});
		let a = this.form;
		console.log(`pos: ${a.position}, size: ${a.size}, posAbs: ${a.positionAbs}, sizeAbs: ${a.sizeAbs}`);
		console.log(`scaling: ${a.scaling}, alignment: ${a.alignment}`);
		console.log(`parentWidth: ${a.parentWidth}, parentHeight: ${a.parentHeight}`);
		
		/*
		this.div = new magDOMelement(parentNode, 'div', {position: [50, 0], size: [100, 10], alignment: 10, scaling: 2, style: {backgroundColor: menuColor}});
		this.par = new magDOMelement(this.div, 'p', {position: [50, 0], size: [10, 2.5], alignment: 10, scaling: 2});
		let style = {fontFamily: 'Montserrat', fontSize: 90, fontScaling: 'relative', verticalAlign: 'center',
						 horizontalAlign: 'left', margins: [0, 0, 0, 0], marginScaling: 'relative'};
		this.par.insertText('test', style);
		/*
		this.span = new magElement(this.par, 'span');
		this.span.node.innerHTML = 'test <br> test <br> test';
		let margin = (this.par.height - this.span.height) / 2;
		this.par.node.style.marginTop = margin + 'px';
		this.par.node.style.marginBottom = margin + 'px';
		
		mag.addFontToTable('Kirang Haerang');
		mag.print(mag.fontSizeTable['Kirang Haerang']);
		this.button1 = new magDOMbutton(this.div, [50, 50], [10, 10], {styleChanges: buttonStyle1, text: 'hello'});
		*/
		
		/*
		this.div.hidden = true;
		this.inputElemX = new magDOMinput(this.div, [20, 5], [9, 20], {alignment: 0});
		this.inputElemY = new magDOMinput(this.div, [30, 5], [9, 20], {alignment: 0});
		this.inputElemDX = new magDOMinput(this.div, [45, 5], [9, 20], {alignment: 0});
		this.inputElemDY = new magDOMinput(this.div, [55, 5], [9, 20], {alignment: 0});
		
		this.scaling = 0;
		this.alignment = 11;
		*/
	}
	
	selectElement(element) {
		this.userInterface.hideMenus();
		this.element = element;
		this.update();
		this.div.hidden = false;
	}
	
	update() {
		let temp = this.element.getPosition(this.scaling, this.alignment);
		this.inputElemX.node.value = mag.roundDecimal(temp[0], 100);
		this.inputElemY.node.value = mag.roundDecimal(temp[1], 100);
		temp = this.element.getSize(this.scaling);
		this.inputElemDX.node.value = mag.roundDecimal(temp[0], 100);
		this.inputElemDY.node.value = mag.roundDecimal(temp[1], 100);
	}
	
	hide() {
		this.div.hidden = true;
	}
}

class documentMenu {
	constructor(parentNode, userInterface) {
		this.parentNode = parentNode;
		this.canvas = userInterface;
		this.div = new magDOMelement(parentNode, 'div', {position: [60, 90], size: [80, 20], alignment: 11, style: {backgroundColor: menuColor}});
		this.div.hidden = true;
		//this.inputDX = new magDOMinput(this.div, [20, 5], [9, 20], {alignment: 0});
		//this.inputDY = new magDOMinput(this.div, [30, 5], [9, 20], {alignment: 0});
	}
	
	updateMenu() {
		//this.inputDX.node.value = mag.roundDecimal(this.size[0], 10);
		//this.inputDY.node.value = mag.roundDecimal(this.size[1], 10);
	}
	
	show() {
		this.updateMenu();
		this.div.hidden = false;
	}
	
	hide() {
		this.div.hidden = true;
	}
}

class mainMenu {
	constructor(parentNode, userInterface) {
		this.parentNode = parentNode;
		this.userInterface = userInterface;
		this.div = new magDOMelement(parentNode, 'div', {position: [10, 50], size: [20, 100], alignment: 11, style: {backgroundColor: menuColor}});
		this.elementButtons = new magDOMbuttonGroup(this.div, [[50, 10], [50, 17], [50, 24], [50, 31], [50, 38], [50, 45], [50, 52]],
			[80, 5], ['Select', 'Rectangle', 'Circle', 'Polygon', 'Line', 'Curve', 'Function'],
			{style: {fontSize: 5, fontFamily: 'Kirang Haerang'}, scaling: 1,
			borderStyle: {radius: 3}, alignment: 11, styleChanges: buttonStyle1});
		this.elementButtons.chosen = 0;
	}
	
	get currentTool() {
		return this.elementButtons.chosenText;
	}
}

class canvas {
	constructor(parentNode, userInterface) {
		this.parentNode = parentNode;
		this.userInterface = userInterface;
		this.mouseStatus = 'up';
		this.mode = 'Select';
		
		// set up all elements in the DOM tree
		// the canvas contains three layers:
		// bottom -> behind the actual drawing, can be used for background
		// middle -> the actual drawing
		// top -> used to show indicators, selection tools,...
		this.div = new magDOMelement(parentNode, 'div', {position: [60, 40], size: [80, 80], alignment: 11, style: {overflow: 'auto'}});
		this.bottomLayer = new magSVGcanvas(this.div, [50, 50], [100, 100], {id: 'bottomLayer', alignment: 11, scaling: 1, style: {backgroundColor: 'rgb(255, 255, 255)'}});
		this.middleLayer = new magSVGcanvas(this.div, [50, 50], [100, 100], {id: 'middleLayer', alignment: 11, scaling: 1});
		this.topLayer = new magSVGcanvas(this.div, [50, 50], [100, 100], {id: 'topLayer', alignment: 11, scaling: 1, style: {pointerEvents: 'none'}});
		
		this.selectionRect = new selectionRect(this.topLayer);
		this.allElements = [];
		
		// set up mouse events
		this.div.onEvent('mousedown', this.mouseDown.bind(this)); // user presses mouse button over canvas
		// the mouseUp and mouseMove events are set up in the userInterface object,
		// this way the user can drag the mouse outside the canvas!
	}
	
	getMousePosition(event) {
		let xPos = event.clientX;
		let yPos = event.clientY;
		let canvasRect = this.div.node.getBoundingClientRect();
		return [Math.round(xPos - canvasRect.left), Math.round(yPos - canvasRect.top)];
	}
	
	updateSelectionBox(event) {
		let currentPosition = this.getMousePosition(event);
		this.selectionBox = mag.boundingBox([currentPosition, this.firstMousePosition]);
		if (this.selectionBox[1][0] < 1) {
			this.selectionBox[1][0] = 1;
		}
		if (this.selectionBox[1][1] < 1) {
			this.selectionBox[1][1] = 1;
		}
		//mag.print(this.selectionBox);
	}
	
	mouseDown(event) {
		//console.log(`MOUSE down on: ${event.target.id}`);
		// the user starts a new mouse event
		this.mouseStatus = 'down';
		this.firstMousePosition = this.getMousePosition(event);
	}
	
	mouseMove(event) {
		//console.log(`MOUSE move on: ${event.target.id}`);
		// mouse is being moved over canvas:
		if (this.mouseStatus == 'down') {
			// first move after mouse down
			this.mouseStatus = 'move';
			this.updateSelectionBox(event)
			if (this.dragMode == 'element') {
				this.addNewElement();
			} else if (this.dragMode == 'select') {
				this.selectionRect.selectElement(this.selectionBox);
			}
		} else if (this.mouseStatus == 'move') {
			// mouse motion continues
			// perform an action depending on the selected tool (from main menu)
			this.updateSelectionBox(event);
			if (this.dragMode == 'element') {
				this.updateElement();
			} else if (this.dragMode == 'select') {
				this.selectionRect.update(this.selectionBox);
			}
		}
	}
	
	mouseUp(event) {
		//console.log(`MOUSE up on: ${event.target.id}`);
		if (this.mouseStatus == 'down') {
			// the user clicked without moving the mouse
			this.click(event);
		} else if (this.mouseStatus == 'move') {
			console.log(`MOUSE drag: ${event.target.id}`);
			this.updateSelectionBox(event);
			if (this.dragMode == 'element') {
				// user finished drawing a new element
				this.updateElement();
				this.finishElement();
			} else if (this.dragMode == 'select') {
				// user selection finished
				this.selectionRect.update(this.selectionBox);
				this.finishSelection();
			}
		}
		// the mouse event ends
		this.mouseStatus = 'up';
	}
	
	click(event) {
		//console.log(`MOUSE click on: ${event.target}`);
	}
	
	get currentTool() {
		return this.userInterface.currentTool; 
	}
	
	get dragMode() {
		if (this.currentTool == 'Select') {
			return 'select';
		} else {
			return 'element';
		}
	}
	
	get selectedElement() {
		return this.userInterface.elementMenu.element;
	}
	
	set selectedElement(element) {
		return this.userInterface.elementMenu.selectElement(element);
	}
	
	addNewElement() {
		let style = mag.mergeObjects({fill: 'rgb(255, 0, 0)'}, {pointerEvents: 'auto'});
		console.log(this.userInterface.currentTool);
		if (this.currentTool == 'Rectangle') {
			this.selectedElement = new magRect(this.middleLayer, [0, 0], [1, 1], {alignment: 0, scaling: 1, style: style});
			console.log('adding new rectangle');
		} else if (this.currentTool == 'Circle') {
			this.selectedElement = new magCircle(this.middleLayer, [0, 0], [1, 1], {alignment: 0, scaling: 1, style: style});
		} else if (this.currentTool == 'Polygon') {
			this.selectedElement = new magCircle(this.middleLayer, [0, 0], [1, 1], {alignment: 0, scaling: 1, style: style});
		} else if (this.currentTool == 'Line') {
			this.selectedElement = new magCircle(this.middleLayer, [0, 0], [1, 1], {alignment: 0, scaling: 1, style: style});
		} else if (this.currentTool == 'Curve') {
			this.selectedElement = new magCircle(this.middleLayer, [0, 0], [1, 1], {alignment: 0, scaling: 1, style: style});
		}
		
		this.updateElement();
	}
	
	updateElement(boundingBox = this.selectionBox) {
		this.selectedElement.setBoundingRect(boundingBox);
		this.userInterface.elementMenu.update();
	}
	
	finishElement() {
		this.allElements.push(this.selectedElement);
	}
	
	finishSelection() {
		
	}
	
	zoomIn() {
		this.middleLayer.size = mag.vectorMath(this.middleLayer.size, 1.1, '*');
	}
	
	zoomOut() {
		this.middleLayer.size = mag.vectorMath(this.middleLayer.size, 1.1, '/');
	}
	
	scroll(event) {
		console.log(event);
		window.scrollTo(0, 0);
	}
}

class userInterface {
	
	constructor(parentNode) {
		this.parentNode = parentNode;
		this.div = new magDOMelement(parentNode, 'div', {position: [10, 10], size: [80, 80], alignment: 0});
		
		/*
		// initialize all parts of the user interface
		this.canvas = new canvas(this.div, this);
		//this.mainMenu = new mainMenu(this.div, this);
		this.elementMenu = new elementMenu(this.div, this);
		//this.documentMenu = new documentMenu(this.div, this);
		//this.documentMenu.show();
		
		this.menuList = [this.elementMenu, this.documentMenu];
		
		// set up mouse events
		this.div.onEvent('mouseup', this.canvas.mouseUp.bind(this.canvas));
		this.div.onEvent('mousemove', this.canvas.mouseMove.bind(this.canvas));
		//window.addEventListener('scroll', this.canvas.scroll.bind(this.canvas));
		
		// set up key events
		this.hotkeysActive = false;
		document.addEventListener('keydown', this.keyDown.bind(this));
		*/
		/*
		magDefaults.magDOMmouseInteract.styleChanges.inactive = {fill: {color: [80, 80, 80]}, };
		magDefaults.magDOMmouseInteract.styleChanges.inactiveHover = {fill: {color: [80, 80, 80]}};
		magDefaults.magDOMmouseInteract.styleChanges.active = {fill: {color: [20, 20, 20]}};
		magDefaults.magDOMmouseInteract.styleChanges.activeHover = {fill: {color: [20, 20, 20]}};
		*/
		
		//let commands = [['M', 10, 50], ['Q', 15, 60, 20, 50], ['T', 30, 50], ['T', 40, 50], ['T', 50, 50], ['T', 60, 50]];
		
		let commands2 = [['M', 10, 50], ['C', 10, 60, 20, 60, 20, 50], ['S',30, 40, 30, 50], ['S',40, 60, 40, 50], ['Q',50, 60, 50, 50], ['T', 60, 50]];
		//let arc = [['M', 50, 30], ['A', 20, 40, 45, 0, 1, 70, 35]]
		
		this.svg = new magSVGcanvas(this.div, [10, 100], [80, 80], {alignment: 0, stroke: {width: 1, style: 'solid', color: [[130, 0, 130], 'red', 'blue', 'white']}, fill: {color: 'red', gradient: [[0, 0, 0, 0.3], 'white', 'to bottom left']}});
		
		this.path = new magSVGpath(this.svg, commands2, {rotation: {angle: -10, center: [50, 50]}, stroke: {linejoin: 'round', width: 1}});
		//this.path2 = new magSVGpath(this.svg, arc, {rotation: {angle: -10, center: [50, 50]}, stroke: {linejoin: 'round', width: 1}});
		//this.line = new magSVGline(this.svg, [[0,0], [10,10], [20,0], [30,10], [40,0]], {fill: {color: 'none'}, stroke: {linejoin: 'miter', dasharray: [20, 2]}})
		//this.poly = new magSVGpolygon(this.svg, [[20,20],[30,20],[30,30],[20,30]]);
		//this.circ = new magSVGcircle(this.svg, [80, 80], [5, 10]);
		
		//this.poly.replaceCommand(2, ['L',35,35]);
		
		this.path.enableHighlight();
		//this.path2.enableHighlight();
		
		//this.path.applyTranslation([0, 200]);
		//this.path.enableMouseDrag();
		
		let font1 = '"Kirang Haerang"';
		let font2 = 'Helvetica';
		let font3 = 'Montserrat';
		
		let font = {color: [255, 255, 255], family: 'Montserrat', overflow: '...', size: 80, alignHor: 'left', wrap: 'nowrap'};
		let stroke = {width: 0.3, style: 'solid', color: [200, 200, 200]};
		let fill = {color: [20, 20, 20]};
		
		let style1 = {fill: {color: [20, 20, 20]}};
		let style2 = {fill: {color: [80, 80, 80]}};
		let style3 = {fill: {color: [20, 20, 100]}};
		let style4 = {fill: {color: [20, 20, 100]}};
		
		let styleChanges = {styleChanges: {inactive: style1, hover: style2, active: style3, activehover: style4}};
		
		/*this.paragraph1 = new magDOMelement(this.div, 'p', {position: [0, 10], size: [90, 10], scaling: 2, text:' testing 123456789033333',
		                                    stroke: {width: 0.3, style: 'solid', color: [200, 200, 200]},
														fill: {color:[20, 20, 20]},
														font: {alignHor: 'center', lineHeight: 1, alignVert: 'center', size: 90, family: font3, color: [200, 200, 200],
													   transform: 'capitalize', letterSpacing: 10, wrap: 'nowrap', overflow: '...'}});
		*/
		//this.inputs1 = new magDOMinputList(this.div, [[0, 0], [20, 20], [30, 10]], [10, 2], mag.mergeObjects(settings, style0))
		this.matrix = new magDOMspreadsheet(this.div, {position: [0, 0], size: [100, 100], alignment: 0});
		//this.in1 = new magDOMinputSpreadsheet(this.div, [50, 50], [20, 5], [20, 5], [2, 5], mag.mergeObjects(settings, style0, styleChanges));
		
		this.test = new magDOMbutton(parentNode, {position: [0, 0], size: [30, 10], text: 'bob'});
		this.test.activateEvents();
		
		this.test2 = new magDOMinputEquation(parentNode, {position: [40, 0], size: [30, 10], styleChanges: styleChanges, font: font, stoke: stroke, fill: fill});
		this.test2.activateEvents();
	}
	
	hideMenus() {
		let len = this.menuList.length;
		for (let i=0; i<len; i++) {
			this.menuList[i].hide();
		}
	}
	
	keyDown(event) {
		if (this.hotkeysActive) {
			console.log(`key pressed: ${event.key} (${event.code})`);
			if (event.code == 'KeyS') {
				this.mainMenu.elementButtons.chosen = 0;
			} else if (event.code == 'KeyR') {
				this.mainMenu.elementButtons.chosen = 1;
			} else if (event.code == 'KeyC') {
				this.mainMenu.elementButtons.chosen = 2;
			} else if (event.code == 'KeyP') {
				this.mainMenu.elementButtons.chosen = 3;
			} else if (event.code == 'KeyL') {
				this.mainMenu.elementButtons.chosen = 4;
			} else if (event.code == 'KeyB') {
				this.mainMenu.elementButtons.chosen = 5;
			} else if (event.code == 'KeyF') {
				this.mainMenu.elementButtons.chosen = 6;
			} else if (event.key == '+') {
				this.canvas.zoomIn();
				console.log('ZOOM in...');
			} else if (event.key == '-') {
				this.canvas.zoomOut();
				console.log('ZOOM out...');
			}
		}
	}
	
	get currentTool() {
		return this.mainMenu.currentTool;
	}
	
	get mouseStatus() {
		return this.canvas.mouseStatus;
	}
	
}

function magRun() {
	
	let body = new magBody();
	let svgUI = new userInterface(body);
	
}