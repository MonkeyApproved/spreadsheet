// This is MONKEY APPROVED GRAPHICS (copyright 2018 monkey-approved.com)

/*
NOTES FOR USING MAG

SCALING VARIABLE FOR ELEMENTS
0 - all sizes are absolute (in pixels)
1 - horizontal and vertical sizes are scaled according to width and height of parent node respectively
2 - all sizes are scaled according to width of parent node
2 - all sizes are scaled according to height of parent node

ALIGNMENT
all elements can be aligned respecive to one of the following nine points:

0 xxxxxxxxxxxxxxx 10 xxxxxxxxxxxxxxx 20
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
1 xxxxxxxxxxxxxxx 11 xxxxxxxxxxxxxxx 21
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
2 xxxxxxxxxxxxxxx 12 xxxxxxxxxxxxxxx 22


TESTING LOCALLY - LOCAL FILE ACCESS
In order to try any scripts on your local computer, it is easiest to set up a simple http-server using python:
-> open terminal
-> navigate	to the folder containing the file/script
-> type: 'python3 -m http.server'   (or 'python -m SimpleHTTPServer' for Python 2.xx)
-> now you can access the server from any web-browser by typing: 'localhost:8000'
-> in order to make sure that the current version of the file is displayed and not an old version from cache,
	open Developer tools -> Network -> check the 'disable cache' box (at least in Chrome)
*/

let magDefaults = { // main style options
	solidStroke: {color: 'black', width: 0.5},
	dashedStroke: {color: 'red', width: 0.5, dasharray: [5, 5]},
	solidFill: {color: 'rgb(230, 230, 230)'},
	noFill: {color: 'none'},
	font: {color: [255, 255, 255], family: 'Montserrat', size: 80, alignHor: 'left', wrap: 'nowrap'},
	
	lineStyle: {stroke: {color: 'black', width: 0.5}, fill: {color: 'none'}},
	lineStyle2: {stroke: {color: 'red', width: 0.5, dasharray: [5, 5]}, fill: {color: 'none'}},
	solidStyle: {stroke: {color: 'black', width: 0.5}, fill: {color: 'rgb(230, 230, 230)'}},
	textStyle: {fill: 'black', fontFamily: 'Helvetica'},
	borderStyle: {type: 'none', stroke: 'black', strokeWidth: 0, radius: 0},
	innerHTML: {fontFamily: 'Helvetica', fontSize: 12, fontScaling: 'absolute', verticalAlign: 'top', horizontalAlign: 'left',
					margins: [0, 0, 0, 0], marginScaling: 'absolute'},
	eventSetting: {mouseHandler: true, mouseBorder: 'default', keyboardHandler: true},
	pointStyle: {scaling: 0, fill: {color: 'red'}, stroke: {color: 'none'}, radius: 2},
	pointStyle2: {scaling: 0, fill: {color: 'blue'}, stroke: {color: 'none'}, radius: 2}
}

Object.assign(magDefaults, { // mag class defaults
	// general html elements
	magBody: {id: 'monkey-approved document'},
	magElement: {id: 'magElement', scaling: 1, alignment: 0, size: [100,100], position: [0, 0], style: {}, layer: 'top', namespaceURI: 'none'},
	magDOMelement: {id: 'magDOMelement', positioning: 'absolute', borderStyle: magDefaults.borderStyle, innerHTML: 'none'},
	magDOMparagraph: {id: 'magDOMparagraph', textStyle: magDefaults.innerHTML},
	magDOMloadHTML: {id: 'magDOMloadHTML'},
	
	// html input elements
	magDOMspreadsheet: {id: 'magDOMspreadsheet', font: {color: [255, 255, 255], family: 'Montserrat', overflow: '...', size: 80, alignHor: 'center', alignVert: 'center', wrap: 'nowrap'},
						cellColors: {cell: [80, 80, 80], selected: [0, 0, 0, 0.4], label: [120, 120, 120], line: [255, 255, 255], parents: [150, 0, 0], children: [0, 150, 0], info: 0},
						lineWidth: 0.2, cellSize: [20, 5]},
	magDOMbutton: {id: 'magDOMbutton', font: {color: [255, 255, 255], family: 'Montserrat', size: 80, alignHor: 'center', alignVert: 'center', wrap: 'nowrap'}},
	magDOMinput: {id: 'magDOMinput', styleChanges: {active: {}, inactive: {}, activeHover: {}, inactiveHover: {}}, 
					  font: {color: [255, 255, 255], family: 'Montserrat', size: 80, alignHor: 'center', alignVert: 'center', wrap: 'nowrap', overflow: '...'}},
	magDOMslider: {id: 'magDOMslider', main: {style: {stroke: 0.5}}, slider: {style: {stroke: 'white', strokeWidth: 0.5, fill: 'black'}},
	               eventSettings: magDefaults.eventSetting},
	magDOMcolor: {id: 'magDOMcolor', main: {}, slider: {}, eventSettings: {mouseHandler: true}},
	magDOMmouseInteract: {id: 'magDOMmouseInteract', styleChanges: {active: {}, inactive: {}, activeHover: {}, inactiveHover: {}}},
	magDOMsubmenu: {id: 'magDOMsubmenu', mode: 'click'},
	magDOMform: {id: 'magDOMform', textStyle: magDefaults.innerHTML},
	magDOMcanvas: {id: 'magDOMcanvas'},
	
	// SVG elements
	magSVGcanvas: {id: 'magSVGcanvas', namespaceURI: 'http://www.w3.org/2000/svg'},
	magSVGelement: {id: 'magSVGelement', namespaceURI: 'http://www.w3.org/2000/svg', scaling: 2, stroke: {width: 0.5, color: 'black'}, fill: {color: 'red'}},
	magSVGpath: {id: 'magSVGpath', fill: magDefaults.noFill},
	magSVGpathElements: {lineOp: {scaling: 0, stroke: {color: 'black', width: 0.6}, fill: {color: 'none'}},
		                  pointOp: {scaling: 0, stroke: {color: 'black', width: 0.6}, fill: {color: 'white'}},
							   corner: {scaling: 0, stroke: {color: 'black', width: 0.6}, fill: {color: 'none'}}},
	magSVGLine: {id: 'magSVGline', fill: magDefaults.noFill},
	magSVGpolygon: {id: 'magSVGpolygon', fill: magDefaults.solidFill},
	magSVGcircle: {id: 'magSVGcircle', fill: magDefaults.solidFill},
	magSVGselector: {id: 'magSVGselector', fill: {color: 'none'}, stroke: magDefaults.dashedStroke, endPoint: magDefaults.pointStyle,
	                 line: magDefaults.lineStyle2, controlPoint: magDefaults.pointStyle2},
	
	magLine: {id: 'magLine', style: magDefaults.lineStyle},
	magRect: {id: 'magRect', style: magDefaults.solidStyle, cornerRadius: 0},
	magCircle: {id: 'magCircle', style: magDefaults.solidStyle, alignment: 11},
	magBezierCurve: {id: 'magBezierCurve', style: magDefaults.lineStyle},
	magInterpolation: {id: 'magInterpolation', style: magDefaults.lineStyle},
	magText: {id: 'magText', style: magDefaults.textStyle},
	
	// complex SVG elements (composed of multiple elements)
	magSelection: {id: 'magSelection', rectStyle: {stroke: 'black', strokeDasharray: '10,10', strokeWidth: 0.5, fill: 'rgb(0, 0, 0)', fillOpacity: 0.1},
						cornerStyle: {stroke: 'none', fill: 'rgb(0, 0, 0)', fillOpacity: 0.5}, cornerPositions: [0, 1, 2, 10, 12, 20, 21, 22],
						cursorStyles: ['nw-resize', 'w-resize', 'sw-resize', 'n-resize', 's-resize', 'ne-resize', 'e-resize', 'se-resize']},
	
	plotOptions: {padding: 'automatic', labelStyle: {size: [40,5], scaling: 1, style: {stroke: 'none', fill: 'black'}},
					  frame: true, axis: false, label: ['x-value', 'y-value'], frameStyle: {strokeWidth: 0.4, style: {stroke: 'black', fill: 'none'}},
					  settings: {spacings: [0,2,1,1], frameTickLength: [1.5,1]}},
	listplotOptions: {elements: [true, false, false], pointStyle: {radius: 1, style: {stroke: 'none', fill: 'blue'}},
							lineStyle: {strokeWidth: 0.4, style: {stroke: 'blue', fill: 'none'}}, plotPoints: 100}
});

let magVars = {
	inputCounter: 0
};

let mag = {
	getBspline(points) {
		/* 
		This interpolation uses so called "spline interpolation" (B-splines).
		The idea is to connect all consecutive points using cubic Bezier-curves and match
		the first and second derivatives at the connection points (which are the actual input points).
		To do this, one has to calculate the control points of the Bezier curve using the equation:

			(4 1 0 0 0)   (B1)   (6*S1 - S0)
			(1 4 1 0 0)   (B2)   (   S2    )
			(0 1 4 1 0) x (B3) = (   S3    )    and B0 = S0, B6 = S6
			(0 0 1 4 1)   (B4)   (   S4    )
			(0 0 0 1 4)   (B5)   (6*S5 - S6)
	
		with the Si being the input points and Bi being the points used for the B-splines.
		This set of equations (tridiagonal system) can be solved using the Thomas matrix algorithm.
		For B-splines check http://www.math.ucla.edu/%7Ebaker/149.1.02w/handouts/dd_splines.pdf
		For Thomas algorithm check https://en.wikipedia.org/wiki/Tridiagonal_matrix_algorithm
		*/

		// First calculate the vector with the solutions (vector on the right above).
		// Actually we use one-sixth of the vector and multiply it by 6 at the end of the calculation!
		// Note that the first and last element (B0 and B6 above) are not part of the matrix
		// calculation but simply correspond to the first and last input points!
		let BsplineX = points.slice().map( function(point){ return point[0]; });
		let BsplineY = points.slice().map( function(point){ return point[1]; });
		let len = BsplineX.length;

		BsplineX[1] = BsplineX[1] - BsplineX[0] / 6;
		BsplineX[len - 2] = BsplineX[len - 2] - BsplineX[len - 1] / 6;
		BsplineY[1] = BsplineY[1] - BsplineY[0] / 6;
		BsplineY[len - 2] = BsplineY[len - 2] - BsplineY[len - 1] / 6;

		// Instead of tracking the entire 1-4-1 matrix we only keep the trace
		// all other values will remain 0 or 1 anyways -> no information!
		let trace = [1, 4];

		// Apply Thomas matrix algorithm
		for (let row = 2; row < len - 1; row++) {
			BsplineX[row] = BsplineX[row] - BsplineX[row - 1] / trace[row - 1];
			BsplineY[row] = BsplineY[row] - BsplineY[row - 1] / trace[row - 1];
			trace.push(4 - 1 / trace[row - 1]);
		}
		for (let row = len - 3; row > 0; row--) {
			BsplineX[row] = BsplineX[row] - BsplineX[row + 1] / trace[row + 1];
			BsplineY[row] = BsplineY[row] - BsplineY[row + 1] / trace[row + 1];
		}
		for (let row = 1; row < len - 1; row++) {
			BsplineX[row] = BsplineX[row] / trace[row] * 6;
			BsplineY[row] = BsplineY[row] / trace[row] * 6;
		}
	
		// Calculate control points for Bezier-curves C1 and C2.
		// Using the control points which devide the line between and two points Bi into three
		// equal segments, creates Bezier curves which pass through the original input points!
		// At least for the way we constructed our points Bi -> this was the whole point!
		// For details check B-spline reference above...
		let controlPoints1 = [];
		let controlPoints2 = [];
		for (let i = 0; i < len - 1; i++) {
			controlPoints1.push([2/3 * BsplineX[i] + 1/3 * BsplineX[i + 1], 2/3 * BsplineY[i] + 1/3 * BsplineY[i + 1]]);
			controlPoints2.push([1/3 * BsplineX[i] + 2/3 * BsplineX[i + 1], 1/3 * BsplineY[i] + 2/3 * BsplineY[i + 1]]);
		}
	
		return [controlPoints1, controlPoints2];
	},
	
	vectorMath(vectorA, elementB, action) {
		if (typeof vectorA == 'number') {
			// vectorA is a number
			if (action == '+') {
				return vectorA + elementB;
			} else if (action == '-') {
				return vectorA - elementB;
			} else if (action == '*') {
				return vectorA * elementB;
			} else if (action == '/') {
				return vectorA / elementB;
			} else if (action == '.') {
				return vectorA * elementB;
			}
		} else if (Array.isArray(elementB)) {
			// both elements are vectors
			if (action == '+') {
				return vectorA.map((value, index) => value + elementB[index]);
			} else if (action == '-') {
				return vectorA.map((value, index) => value - elementB[index]);
			} else if (action == '*') {
				return vectorA.map((value, index) => value * elementB[index]);
			} else if (action == '/') {
				return vectorA.map((value, index) => value / elementB[index]);
			} else if (action == '.') {
				return vectorA.reduce((sum, current, index) => sum + current * elementB[index], 0);
			}
		} else if (typeof elementB == 'number') {
			// vectorA is a vector and elementB is a number
			if (action == '+') {
				return vectorA.map(value => value + elementB);
			} else if (action == '-') {
				return vectorA.map(value => value - elementB);
			} else if (action == '*') {
				return vectorA.map(value => value * elementB);
			} else if (action == '/') {
				return vectorA.map(value => value / elementB);
			} else if (action == 'abs') {
				return vectorA.reduce((sum, current) => sum + current * elementB, 0);
			}
		}
	},
	
	roundToNearest(number, roundTo) {
		return Math.round(number / roundTo) * roundTo;
	},
	
	roundDecimal(number, decimal) {
		return Math.round(number * decimal) / decimal;
	},
	
	matrixMath(matrixA, elementB, action) {
		if (Array.isArray(elementB)) {
			if (Array.isArray(elementB[0])) {
				return matrixA.map((vector, index) => this.vectorMath(vector, elementB[index], action));
			}
		}
		return matrixA.map(vector => this.vectorMath(vector, elementB, action));
	},
	
	transpose(matrix) {
		let len1 = matrix.length;
		let len2 = matrix[0].length;
		let matrixNew = this.zeros(len2, len1);
		for (let i=0; i<len1; i++) {
			for (let j=0; j<len2; j++) {
				matrixNew[j][i] = matrix[i][j];
			}
		}
		return matrixNew.slice();
	},
	
	rotatePoint(point, angle, rotationCenter = [0, 0]) {
		// first shift the point by rotation-center
		let result = this.vectorMath(point, rotationCenter, '-');
		// multiply by rotation matrix
		angle = angle / 180 * Math.PI;
		result = [result[0] * Math.cos(angle) - result[1] * Math.sin(angle),
		          result[0] * Math.sin(angle) + result[1] * Math.cos(angle)];
		// shift back by rotation-center
		return this.vectorMath(result, rotationCenter, '+');
	},
	
	stretchPoint(point, factor, stretchCenter = [0, 0]) {
		// first shift the point by stretch-center
		let result = this.vectorMath(point, stretchCenter, '-');
		// apply the stretch factor
		result = this.vectorMath(result, factor, '*');
		// shift back by stretch-center
		return this.vectorMath(result, stretchCenter, '+');
	},
	
	shiftListByReference(list, distance) {
		let len = list.length;
		for (let n = 0; n < len; n++) {
			list[n] = [list[n][0] + distance[0], list[n][1] + distance[1]];
		}
	},
	
	zeros(...dimensions) {
		let array = [];
		let len = dimensions.shift();
		if (dimensions.length == 0) {
			for (let i=0; i<len; i++) {
				array.push(0);
			} 
		} else {
			for (let i=0; i<len; i++) {
				array.push(this.zeros(...dimensions));
			}
		}
		return array;
	},
	
	// get the minimum values of a 2D-matrix for every column:
	// input: [[x1,y1,z1,...], [x2,y2,z2,...], ... , [xn,yn,zn,...]]
	// output: [xmin, ymin, zmin,...]
	listMin(list) {
		let min = list[0].slice();
		let len = list.length;
		let len2 = min.length;
		for (let i=1; i<len; i++) {
			for (let j=0; j<len2; j++) {
				if (list[i][j] < min[j]) {
					min[j] = list[i][j];
				}
			}
		}
		return min;
	},
	
	// get the maximum values of a 2D-matrix for every column:
	// input: [[x1,y1,z1,...], [x2,y2,z2,...], ... , [xn,yn,zn,...]]
	// output: [xmax, ymax, zmax,...]
	listMax(list) {
		let max = list[0].slice();
		let len = list.length;
		let len2 = max.length;
		for (let i=1; i<len; i++) {
			for (let j=0; j<len2; j++) {
				if (list[i][j] > max[j]) {
					max[j] = list[i][j];
				}
			}
		}
		return max;
	},
	
	// get the corner points of the bounding rect [[xmin, ymin,...], [xmax, ymax,...]]
	listMinMax(list) {
		let min = this.listMin(list);
		let max = this.listMax(list);
		return [min, max];
	},
	
	uniqueList(list) {
		return list.filter((value, index, array) => array.indexOf(value) === index); 
	},
	
	// input is a list of points [[x1,y1], [x2,y2],... , [xn,yn]]
	// the output is the top-left corner and the size of the smallest rectangle containing all points
	boundingBox(list) {
		let min = this.listMin(list);
		let max = this.listMax(list);
		let size = this.vectorMath(max, min, '-');
		return [min, size];
	},
	
	// restrict position of a bounding box [[xpos, ypos], [xsize, ysize]] to another box.
	// only possible if x- and y-size of elementRect are smaller than those of borderRect!
	restrictPosition(elementRect, borderRect, mode = 'xy') {
		// check if restriction is possible
		if (elementRect[1][0] > borderRect[1][0] || elementRect[1][1] > borderRect[1][1]) {
			console.log('ERROR: restriction failed, element size too large!');
			return elementRect;
		}
		
		// restrict x-position
		if (mode == 'xy' || mode == 'x') {
			let eMin = elementRect[0][0];
			let eMax = elementRect[0][0] + elementRect[1][0];
			let bMin = borderRect[0][0];
			let bMax = borderRect[0][0] + borderRect[1][0];
			if (eMin <  bMin) {elementRect[0][0] = bMin;}
			else if (eMax >  bMax) {elementRect[0][0] = bMax - eMax + eMin;}
		}
		
		// restrict y-position
		if (mode == 'xy' || mode == 'y') {
			let eMin = elementRect[0][1];
			let eMax = elementRect[0][1] + elementRect[1][1];
			let bMin = borderRect[0][1];
			let bMax = borderRect[0][1] + borderRect[1][1];
			if (eMin <  bMin) {elementRect[0][1] = bMin;}
			else if (eMax >  bMax) {elementRect[0][1] = bMax - eMax + eMin;}
		}
		
		return elementRect;
	},
	
	maxObjProperty(objList, property) {
		let len = objList.length;
		let max = objList[0][property];
		for (let i=1; i<len; i++) {
			let value = objList[i][property];
			if (value > max) {
				max = value;
			}
		}
		return max;
	},
	
	minObjProperty(objList, property) {
		let len = objList.length;
		let min = objList[0][property];
		for (let i=1; i<len; i++) {
			let value = objList[i][property];
			if (value < min) {
				min = value;
			}
		}
		return min;
	},
	
	sortMatrix(matrix, index = 0) {
		let sortFunction = function(a, b) {
		    if (a[index] === b[index]) {
		        return 0;
		    }
		    else {
		        return (a[index] < b[index]) ? -1 : 1;
		    }
		}
		
		return matrix.slice().sort(sortFunction);
	},
	
	getOrderMagnitude(value) {
		let order = 0;
		while (value < 1) {
			value = value * 10;
			order--;
		}
		while (value > 10) {
			value = value / 10;
			order++;
		}
		return [order, value];
	},
	
	// give value between 1 and 10 and this returns an accetable tick spacing
	// the first value is the spacing of the main ticks, the second value is the spacing of the sub ticks
	getAcceptableValue(value) {
		if (value < 1) { return -1; }
		else if (value == 1) { return [1, 0.2]; }
		else if (value <= 2) { return [2, 0.5]; }
		else if (value <= 2.5) { return [2.5, 0.5]; }
		else if (value <= 5) { return [5, 1]; }
		else if (value <= 7.5) { return [7.5, 2.5]; }
		else if (value <= 10) { return [10, 2]; }
		else { return -1; }
	},
	
	// for large data ranges we scale everything by 10^3n [e.g. 1,2,...*10^3 instead of 1000,2000,...]
	getScaling(tickSpacing) {
		let scaling = 0;
		while (tickSpacing > 100) {
			tickSpacing = tickSpacing / 1000;
			scaling = scaling - 3;
		}
		while (tickSpacing < 0.01) {
			tickSpacing = tickSpacing * 1000;
			scaling = scaling + 3;
		}
		return scaling;
	},
	
	// if the data range is much smaller than the actual values, we add an offset [e.g. 3,4,...+9000 instead of 9003,9004,...]
	getOffset(minTick, maxTick) {
		while (maxTick > 1) {
			tickSpacing = tickSpacing / 1000;
			scaling = scaling - 3;
		}
		while (tickSpacing < 0.01) {
			tickSpacing = tickSpacing * 1000;
			scaling = scaling + 3;
		}
		return scaling;
	},
	
	getTicks(min, max) {
		let maxTicks = 8;
		let range = max - min;
		let rangeScaled = this.getOrderMagnitude(range / maxTicks);
		let tickSpacing = this.getAcceptableValue(rangeScaled[1]);
		let mainSpacing = tickSpacing[0] * 10**rangeScaled[0];
		let subSpacing = tickSpacing[1] * 10**rangeScaled[0];
		
		// apply scaling if spacing is larger 100 or smaller 0.01
		let scaling = this.getScaling(mainSpacing);
				
		let tick = Math.ceil(min / mainSpacing) * mainSpacing;
		let subtick = Math.ceil(min / subSpacing) * subSpacing;
		let tickStr = [];
		let tickPos = [];
		let subTicks = [];
		while (tick <= max) {
			while (subtick < tick + mainSpacing && subtick < max) {
				subTicks.push(subtick);
				subtick += subSpacing;
			}
			tickStr.push(`${this.roundToNearest(tick * 10**scaling, 0.01)}`);
			tickPos.push(tick);
			tick += mainSpacing;
			subtick = tick + subSpacing;
		}
		
		return {mainTickNames: tickStr, mainTickPositions: tickPos, subTickPositions: subTicks, scaling: scaling, offset: 0};
	},
	
	matchObjListLength(list, newLen, obj, args) {
		if (!Array.isArray(list)) {
			list = [];
		}
		while (list.length < newLen) {
			list.push(new obj(...args));
		}
		while (list.length > newLen) {
			let toDelete = list.pop();
			toDelete.remove();
		}
		return list;
	},
	
	setObjListProperty(objList, property, propertyList) {
		let len = objList.length;
		for (let i=0; i<len; i++) {
			objList[i][property] = propertyList[i];
		}
	},
	
	getRange(n, min, max) {
		if (!(typeof min == 'number' || !typeof max == 'number')) {
			min = 0;
			max = n;
		}
		let step = (max-min) / n;
		let range = [];
		for (let i=0; i<n+1; i++) {
			range.push(min + step * i);
		}
		return range;
	},
	
	// ------ CUSTOM PRINT TO CONSOLE ------- //
	
	printBody(body, depth = 1) {
		console.log(`id: width x height, (left, top)`)
		console.log(`-> body: ${body.width} x ${body.height}, (${body.left}, ${body.top})`);
		if (depth > 0) {
			let children = body.childrenList;
			let len = children.length;
			for (let i=0; i<len; i++) {
				this.printElement(children[i], depth - 1, '\t');
			}
		}
	},
	
	printElement(element, depth = 1, prefix = '') {
		if (prefix == '') {
			console.log(`id: width x height, (left, top)`);
		}
		console.log(`${prefix}-> ${element.id}: ${element.width} x ${element.height}, (${element.left}, ${element.top})`);
		if (depth > 0) {
			prefix = prefix + `\t`;
			let children = element.childrenList;
			let len = children.length;
			for (let i=0; i<len; i++) {
				this.printElement(children[i], depth - 1, prefix);
			}
		}
	},
	
	printArray(array) {
		let len = array.length;
		let str = `array print out (length ${len}):`;
		for (let row = 0; row < len; row++) {
			str = `${str} \n [${array[row]}]`;
		}
		console.log(str);
	},
	
	printObject(obj, prefix = '') {
		if (prefix == '') {
			console.log('object print out:');
		}
		for (let key in obj) {
			if (Array.isArray(obj[key])) {
				console.log(`${prefix}-> ${key}: [${obj[key]}]`);
			} else if (typeof obj[key] == 'object') {
				console.log(`${prefix}-> ${key}:`);
				this.printObject(obj[key], prefix + '\t');
			} else {
				console.log(`${prefix}-> ${key}: ${obj[key]}`);
			}
		}
	},
	
	print(stuff, ...args) {
		if (Array.isArray(stuff)) {
			if (Array.isArray(stuff[0])) {
				this.printArray(stuff);
			} else {
				console.log(`array: [${stuff}]`);
			}
		} else if (typeof stuff == 'string') {
			console.log(stuff);
		} else if (typeof stuff == 'number') {
			console.log(`${stuff}`);
		} else if (stuff instanceof magBody) {
			this.printBody(stuff, ...args);
		} else if (stuff instanceof magDOMelement) {
			this.printElement(stuff, ...args);
		} else if (typeof stuff == 'object') {
			this.printObject(stuff);
		}
		console.log('__________________________________');
	},
	
	// ------ OBJECT OPERATIONS ------- //
	
	mergeObjects(...objList) {
		// merge all objects in order of priority
		let result = {};
		let len = objList.length;
		for (let i=0; i<len; i++) {
			if (typeof objList[len - 1 - i] != 'object') {
				console.log(`ERROR: mag.mergeObject was called with '${typeof objList[len - 1 - i]}' as an argument!`);
			}
			Object.assign(result, objList[len - 1 - i]);
		}
		// if a value in the result is another object, check if this object exist in more than one objects in objList
		// if so, merge these objects as well and keep checking for the same inside these objects
		for (let key in result) {
			if (typeof result[key] == 'object' && !Array.isArray(result[key])) {
				let objList2 = [];
				for (let i=0; i<len; i++) {
					if (typeof objList[i][key] == 'object' && !Array.isArray(objList[i][key])) {
						objList2.push(objList[i][key]);
					}
				}
				result[key] = this.mergeObjects(...objList2);
			}
		}
		return result
	},
	
	pop(obj, key) {
		let value = obj[key];
		delete obj[key];
		return value;
	},
	
	// ------ LOAD CONTENT FROM SERVER --------- //
	
	loadContent(node, link) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', `${link}`);
		xhr.send('');
		
		xhr.onload = function() {
		  if (xhr.status != 200) {
			  // error
			  node.innerHTML = `<h1 class='postTitle'> PAGE NOT FOUND </h1>`;
		  } else {
			  // no error
			  node.innerHTML = xhr.responseText;
		  }}
	},
	
	// ------ SCALE FONT TO MATCH ELEMENT ------ //
	
	countTextLines(text) {
		if (typeof text == 'string') {
			let count = 1;
			count += text.split('<br').length - 1;
			count += text.split('<Br').length - 1;
			return count;
		} else if (text.getClientRects()) {
			let rectList = text.getClientRects();
			let lineTop = rectList[0].top;
			let lineCount = 1;
			let len = rectList.length;
			for (let i = 1; i < len; i++) {
				if (lineTop != rectList[i].top) {
					lineCount++;
					lineTop = rectList[i].top;
				}
			}
			return lineCount;
		} else {
			console.log('WARNING: countTextLines() called with unsupported text format!');
			return 1;
		}
	},
	
	fontSizeTable: {},
	
	addFontToTable(font) {
		if (!this.dummyP) {
			console.log('creating dummy container for font testing');
			this.dummyP = new magElement(document.body, 'p', {id: 'dummy container', scaling: 0, style: {margin: '0px', position: 'absolute', top: '0px', left: '0px'}});
			this.dummyP.hidden = true;
			this.dummyP.node.style['line-height'] = 1;
			
			this.dummySpan = new magElement(this.dummyP, 'span', {id: 'dummy container'});
			this.dummySpan.node.innerHTML = 'AJyg'
		}
		this.dummyP.node.style.fontFamily = font;
		let sizeTable = [];
		for (let size = 1; size <= 20; size++) {
			this.dummyP.node.style.fontSize = size + 'px';
			let rect = this.dummySpan.node.getBoundingClientRect();
			sizeTable.push([size, rect.height, rect.top]);
		}
		for (let size = 22; size <= 60; size = size + 2) {
			this.dummyP.node.style.fontSize = size + 'px';
			let rect = this.dummySpan.node.getBoundingClientRect();
			sizeTable.push([size, rect.height, rect.top]);
		}
		for (let size = 65; size <= 100; size = size + 5) {
			this.dummyP.node.style.fontSize = size + 'px';
			let rect = this.dummySpan.node.getBoundingClientRect();
			sizeTable.push([size, rect.height, rect.top]);
		}
		for (let size = 120; size <= 300; size = size + 10) {
			this.dummyP.node.style.fontSize = size + 'px';
			let rect = this.dummySpan.node.getBoundingClientRect();
			sizeTable.push([size, rect.height, rect.top]);
		}
		for (let size = 350; size <= 1000; size = size + 50) {
			this.dummyP.node.style.fontSize = size + 'px';
			let rect = this.dummySpan.node.getBoundingClientRect();
			sizeTable.push([size, rect.height, rect.top]);
		}
		this.fontSizeTable[font] = sizeTable;
		this.dummyP.node.style.fontSize = '1px';
		console.log(`${font} was added to the font size table!`);
	},
	
	getFontSize(font, pixelHeight) {
		if (!this.fontSizeTable[font]) {
			this.addFontToTable(font);
		}
		let sizeTable = this.fontSizeTable[font];
		let i = 1;
		while (pixelHeight > sizeTable[i][1] && i <= sizeTable.length) {
			i++;
		}
		return sizeTable[i - 1];
	},
	
	getColor(input) {
		/** Allowed color inputs are:
		*   - 'rgb(255, 0, 255)'
		*   - 'purple'
		*   - 'def_id' -> use a predefined gradient (id = id of the gradient -> see SVGcanvas)
		*   - [255, 0, 255] -> define rgb-color by array of three numbers
		*
		*   The output is the definition string
		*/
		if (typeof input == 'string') {
			// input is string (check for def_id)
			let checkDef = input.split(/def_/);
			if (checkDef.length == 2) {
				return `url(#${checkDef[1]})`;
			} else {
				return input;
			}
		} else if (Array.isArray(input)) {
			// input is array
			if (input.length == 3) {
				// rgb -> color without alpha channel (opacity)
				return `rgb(${input[0]}, ${input[1]}, ${input[2]})`;
			} else {
				// rgba -> color with alpha channel (opacity)
				return `rgba(${input[0]}, ${input[1]}, ${input[2]}, ${input[3]})`;
			}
			
		} else {
			console.log(`ERROR: unknown color: ${input}`);
			return '';
		}
	},
	
	// ------ SPREADSHEET FUNCTIONS ------------ //
	
	getColumnLabel(index) {
		if (index > 25) {
			let str1 = String.fromCharCode((index % 26) + 65);
			let str2 = this.getColumnLabel(Math.floor(index/26) - 1);
			return str2 + str1;
		} else {
			return String.fromCharCode(index + 65)
		}
	},
	
	getRowLabel(index) {
		return `${index + 1}`;
	},
	
	cellToString(cell) {
		return `${this.getColumnLabel(cell[0])}${this.getRowLabel(cell[1])}`;
	},
	
	stringToCell(str) {
		let valid = true;
		let len = str.length;
		let column = 0;
		let columnChars = 0;
		let row = 0;
		let rowChars = 0;
		for (let i = len - 1; i > -1; i--) {
			let charCode = str.charCodeAt(i)
			if (65 <= charCode && charCode <= 90) {
				// char is a capital letter -> could be column encoding
				column += (charCode - 64) * Math.pow(26, columnChars);
				columnChars++;
			} else if (48 <= charCode && charCode <= 57) {
				// char is a number -> could be a row encoding
				if (columnChars != 0) {
					return -1;
				} else {
					row += (charCode - 48) * Math.pow(10, rowChars);
					rowChars++;
				}
			} else {
				return -1;
			}
		}
		if (columnChars == 0 || rowChars == 0) {
			return -1;
		} else {
			return [column - 1, row - 1];
		}
	},
	
	cellRangeToCellStrings(str1, str2) {
		let cell1 = mag.stringToCell(str1);
		let cell2 = mag.stringToCell(str2);
		let rangeX = mag.mathFunctions.range(cell1[0], cell2[0]);
		let rangeY = mag.mathFunctions.range(cell1[1], cell2[1]);
		let lenX = rangeX.length;
		let lenY = rangeY.length;
		let list = [];
		for (let x = 0; x < lenX; x++) {
			for (let y = 0; y < lenY; y++) {
				let cellString = mag.cellToString([rangeX[x],rangeY[y]]);
				list.push(cellString);
			}
		}
		return list;
	},
	
	cellRangeToCells(str1, str2) {
		let cell1 = mag.stringToCell(str1);
		let cell2 = mag.stringToCell(str2);
		let rangeX = mag.mathFunctions.range(cell1[0], cell2[0]);
		let rangeY = mag.mathFunctions.range(cell1[1], cell2[1]);
		let lenX = rangeX.length;
		let lenY = rangeY.length;
		let list = [];
		for (let x = 0; x < lenX; x++) {
			for (let y = 0; y < lenY; y++) {
				list.push([rangeX[x],rangeY[y]]);
			}
		}
		return list;
	},
	
	cellRangeToArray(str1, str2) {
		let cell1 = mag.stringToCell(str1);
		let cell2 = mag.stringToCell(str2);
		let rangeX = mag.mathFunctions.range(cell1[0], cell2[0]);
		let rangeY = mag.mathFunctions.range(cell1[1], cell2[1]);
		let lenX = rangeX.length;
		let lenY = rangeY.length;
		let list = [];
		for (let x = 0; x < lenX; x++) {
			for (let y = 0; y < lenY; y++) {
				let cellString = mag.cellToString([rangeX[x],rangeY[y]]);
				let value = mag.variables[cellString];
				if (value == undefined) {
					list.push(NaN);
				} else {
					list.push(value);
				}
			}
		}
		return list;
	},
	
	numberToString(value, digits = 4) {
		// convert arrays to strings
		if (Array.isArray(value)) {
			let len = value.length;
			if (len > 0) {
				let str = `[${this.numberToString(value[0], digits)}`;
				for (i = 1; i < len; i++) {
					str = `${str}, ${this.numberToString(value[i], digits)}`;
				}
				return `${str}]`;
			} else {
				return '[]';
			}
		}
		
		// convert numbers to strings
		if (value == 0) {
			return '0';
		}
		let order = 0;
		let sign = Math.sign(value);
		value = Math.abs(value);
		if (value < 0.001) {
			while (value < 1 && order > -1000) {
				value = value * 10;
				order--;
			}
		} else if (value >= 10000) {
			while (value >= 10 && order < 1000) {
				value = value / 10;
				order++;
			}
		}
		numberString = `${value*sign}`;
		if (numberString.length > digits + 1) {
			numberString = Number.parseFloat(value*sign).toPrecision(digits);
		}
		
		// cut off trailing zeros
		
		
		
		if (order === 0) {
			return numberString;
		} else {
			return `${numberString} x 10<sup>${order}</sup>`;
		}
	},
	
	// ------ EQUATION FUNCTIONS -------------- //
	
	identifyChar(charCode) {
		if (97 <= charCode && charCode <= 122) {
			return 'letter';
		} else if (65 <= charCode && charCode <= 90) {
			return 'Cletter';
		} else if (48 <= charCode && charCode <= 57) {
			return 'number';
		} else if (46 == charCode) {
			return 'delimiter';
		} else if (44 == charCode) {
			return 'comma';
		} else if (charCode == 40) {
			return 'leftParenthesis';
		} else if (charCode == 41) {
			return 'rightParenthesis';
		} else if (charCode == 91) {
			return 'arrayBegin';
		} else if (charCode == 93) {
			return 'arrayEnd';
		} else if (charCode == 32 || charCode == 9) {
			return 'space';
		} else if (charCode == 37) {
			return 'mod';
		} else if (charCode == 42) {
			return 'mul';
		} else if (charCode == 43) {
			return 'add';
		} else if (charCode == 45) {
			return 'sub';
		} else if (charCode == 47) {
			return 'div';
		} else if (charCode == 94) {
			return 'pow';
		} else if (charCode == 58) {
			return 'colon';
		} else if (charCode == 95) {
			return 'part';
		} else {
			return 'unknown';
		} 
	},
	
	checkDataType(x) {
		if (typeof x == 'string') {
			return 'string';
		} else if (typeof x == 'number') {
			return 'number';
		} else if (Array.isArray(x)) {
			if (typeof x[0] == 'number') {
				return 'vector';
			} else if (Array.isArray(x[0])) {
				return 'matrix';
			}
		}
	},
	
	mathFunctions: {
		twoArgFunc(x, y, func) {
			let tx = mag.checkDataType(x);
			let ty = mag.checkDataType(y); 
			if (tx == 'number' && ty == 'number') {
				return func(x, y);
			} else if (tx == 'number' && ty == 'vector') {
				return y.map(yi => func(x, yi)); 
			} else if (tx == 'vector' && ty == 'number') {
				return x.map(xi => func(xi, y)); 
			} else if (tx == 'vector' && ty == 'vector') {
				console.log('2 vectors')
				if (x.length == y.length) {
					return x.map((xi, i) => func(xi, y[i]));
				} else {
					return `vector lengths do not match (${x.length} and ${y.length})`;
				}
			} else if (tx == 'matrix' && ty == 'number') {
				return x.map((xi, i) => mag.mathFunctions.twoArgFunc(xi, y, func));
			} else if (tx == 'number' && ty == 'matrix') {
				return y.map((yi, i) => mag.mathFunctions.twoArgFunc(x, yi, func));
			} else if (tx == 'matrix' && ty == 'vector') {
				return x.map((xi, i) => mag.mathFunctions.twoArgFunc(xi, y, func));
			} else if (tx == 'vector' && ty == 'matrix') {
				return y.map((yi, i) => mag.mathFunctions.twoArgFunc(x, yi, func));
			} else if (tx == 'matrix' && ty == 'matrix') {
				if (x.length == y.length) {
					return x.map((xi, i) => mag.mathFunctions.twoArgFunc(xi, y[i], func));
				} else {
					return 'matrix sizes do not match';
				}
			} else {
				return 'unknown data types in evaluation function...';
			}
		},
		oneArgFunc(x, func) {
			let tx = mag.checkDataType(x);
			if (tx == 'number') {
				return func(x);
			} else if (tx == 'vector') {
				return x.map(xi => func(xi)); 
			} else if (tx == 'matrix') {
				return x.map(xi => mag.mathFunctions.oneArgFunc(xi, func));
			} else {
				return 'unknown data types in evaluation function...';
			}
		},
		flatten(...args) {
			let len = args.length;
			let list = [];
			for (let i = 0; i < len; i++) {
				let type = mag.checkDataType(args[i]);
				if (type == 'number') {
					list.push(args[i]);
				} else if (type == 'vector') {
					list.push(...args[i]);
				} else {
					return 'unknown data types in evaluation function...';
				}
			}
			return list;
		},
		compareToList(x, ...list) {
			let len = list.length;
			if (len === 1 && Array.isArray(list[0])) {
				list = list[0];
			}
			for (let i = 0; i < len; i++) {
				if (x === list[i]) {return true;}
			} 
			return false;
		},
		forbiddenValues(x, ...values) {
			let type = mag.checkDataType(x);
			if (type == 'number') {
				return mag.mathFunctions.compareToList(x, ...values);
			} else if (type == 'vector') {
				let len = x.length;
				for (let i = 0; i < len; i++) {
					let match = mag.mathFunctions.compareToList(x[i], ...values);
					if (match) {
						return true;
					}
				}
				return false;
			} else if (type == 'matrix') {
				return x.map(xi => mag.mathFunctions.compareToList(xi, ...values));
			} else {
				return 'forbiddenValues() called with unknown data type...';
			}
		},
		array(...args) {return [...args]},
		part(array, n) {
			if (n > array.length) {
				return `index out of range (index: ${n}, array: ${array.length})`;
			} else if (n == 0) {
				return 'index 0 is invalid (start at 1)'
			} else if (n < 0) {
				return array[array.length + n];
			} else {
				return array[n-1];
			}
		},
		add(...args) {
			let len = args.length;
			let func = (x,y) => x+y;
			if (len == 0) {
				return 0;
			} else if (len == 1) {
				return args[0];
			} else {
				return args.reduce((ac, xi) => mag.mathFunctions.twoArgFunc(ac, xi, func));
			}
		},
		sub(...args) {
			let len = args.length;
			let func = (x,y) => x-y;
			if (len == 0) {
				return 0;
			} else if (len == 1) {
				return args[0];
			} else {
				return args.reduce((ac, xi) => mag.mathFunctions.twoArgFunc(ac, xi, func));
			}
		},
		mul(...args) {
			let len = args.length;
			let func = (x,y) => x*y;
			if (len == 0) {
				return 0;
			} else if (len == 1) {
				return args[0];
			} else {
				return args.reduce((ac, xi) => mag.mathFunctions.twoArgFunc(ac, xi, func));
			}
		},
		mulFirst(x,y) {
			let func = (x,y) => x*y;
			return mag.mathFunctions.twoArgFunc(x, y, func);
		},
		div(...args) {
			let len = args.length;
			for (let i = 1; i < len; i++) {
				if (mag.mathFunctions.forbiddenValues(args[i], 0)) {
					return 'divide by zero error';
				}
			}
			let func = (x,y) => x/y;
			if (len == 0) {
				return 0;
			} else if (len == 1) {
				return args[0];
			} else {
				return args.reduce((ac, xi) => mag.mathFunctions.twoArgFunc(ac, xi, func));
			}
		},
		pow(...args) {
			let len = args.length;
			let func = (x,y) => Math.pow(x,y);
			if (len == 0) {
				return 0;
			} else if (len == 1) {
				return args[0];
			} else {
				return args.reduce((ac, xi) => mag.mathFunctions.twoArgFunc(ac, xi, func));
			}
		},
		abs(x) {
			let func = x => Math.abs(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		acos(x) {
			let func = x => Math.acos(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		acosh(x) {
			let func = x => Math.acosh(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		asin(x) {
			let func = x => Math.asin(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		asinh(x) {
			let func = x => Math.asinh(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		atan(x) {
			let func = x => Math.atan(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		atanh(x) {
			let func = x => Math.atanh(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		cbrt(x) {
			let func = x => Math.cbrt(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		ceil(x) {
			let func = x => Math.ceil(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		cos(x) {
			let func = x => Math.cos(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		cosh(x) {
			let func = x => Math.cosh(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		exp(x) {
			let func = x => Math.exp(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		expml(x) {
			let func = x => Math.expml(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		floor(x) {
			let func = x => Math.floor(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		fround(x) {
			let func = x => Math.fround(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		hypot(x) {
			let func = x => Math.hypot(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		imul(x) {
			let func = x => Math.imul(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		log(x) {
			let func = x => Math.log(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		log10(x) {
			let func = x => Math.log10(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		log1p(x) {
			let func = x => Math.log1p(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		log2(x) {
			let func = x => Math.log2(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		max(...args) {
			let list = mag.mathFunctions.flatten(...args);
			return Math.max(...list);
		},
		min(...args) {
			let list = mag.mathFunctions.flatten(...args);
			return Math.min(...list);
		},
		random() {return Math.random();},
		round(x) {
			let func = x => Math.round(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		sign(x) {
			let func = x => Math.sign(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		sin(x) {
			let func = x => Math.sin(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		sinh(x) {
			let func = x => Math.sinh(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		sqrt(x) {
			if (x < 0) {
				return `sqrt of negative value (${x})`;
			}
			let func = x => Math.sqrt(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		sum(...args) {
			let list = mag.mathFunctions.flatten(...args);
			return list.reduce((sum, current) => sum + current, 0);
		},
		total(...args) {
			let list = mag.mathFunctions.flatten(...args);
			return list.reduce((sum, current) => sum + current, 0);
		},
		tan(x) {
			let func = x => Math.tan(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		tanh(x) {
			let func = x => Math.tanh(x);
			return mag.mathFunctions.oneArgFunc(x, func);
		},
		bezier(t, start, cp1, cp2, end) {
			let x = 1 - t;
			return start*x*x*x + 3*cp1*x*x*t + 3*cp2*x*t*t + end*t*t*t;
		},
		range(x,y,step = 1) {
			if (y == undefined) {
				y = x;
				x = 1;
			}
			let tx = mag.checkDataType(x);
			let ty = mag.checkDataType(y);
			let ts = mag.checkDataType(step);
			if (tx == 'number' && ty == 'number' && ts == 'number') {
				if (x > y) {
					step = -Math.abs(step);
				} else if (x == y) {
					return [x];
				} else {
					step = Math.abs(step);
				}
				let range = [];
				let next = x;
				let counter = 0;
				while (true) {
					range.push(next);
					next = next + step;
					if (x > y && next < y) {
						break;
					} else if (x < y && next > y) {
						break;
					}
					counter++;
					if (counter > 2000) {
						console.log('ERROR: vrange maximum length of 2000 reached');
						break;
					}
				}
				return range;
			} else {
				return 'arange has to be called with numbers';
			}
		},
		vabs(x) {
			
			return 0;
		}
	},
	
	variables: {
		pi: 3.1415926535,
		sqrt2: 1.41421356237,
		e: 2.718281828459,
		h: 6.62607 * Math.pow(10,-34),
		hbar: 1.0545718 * Math.pow(10,-34),
		e: 1.602176634 * Math.pow(10,-19),
		mol: 6.02214076 * Math.pow(10,23),
		kB: 1.380649 * Math.pow(10,-23),
		c: 299792458,
		u: 1.660539066 * Math.pow(10,-27),
		g: 9.80665,
		bohrR: 5.291772109 * Math.pow(10,-11),
		eMass: 9.109383701 * Math.pow(10,-31),
		pMass: 1.672621923 * Math.pow(10,-27),
		rydberg: 10973731,
		mu0: 1.2566370621 * Math.pow(10,-6),
		e0: 8.8541878128 * Math.pow(10,-12),
		vacuumZ: 376.730313,
		muB: 9.274010078 * Math.pow(10,-24),
		G: 6.67430,
		kilo: 1000,
		mega: 1000000,
		giga: 1000000000,
		tera: 1000000000000,
		peta: 1000000000000000,
		milli: 0.001,
		micro: 0.000001,
		nano: 0.000000001,
		femto: 0.000000000001,
		pico: 0.000000000000001
	},
	
	asso(str) {
		if (str == 'pow' || str == 'part') {
			return 'right';
		} else {
			return 'left';
		}
	},
	
	precedence(str) {
		if (str == 'mod' || str == 'mul' || str == 'div') {
			return 2;
		} else if (str == 'pow' || str == 'part') {
			return 3;
		} else if (str == 'mulFirst') {
			return 4;
		} else {
			return 0;
		}
	},
	
	getTokens(equationString) {
		// split up the expression into it's basic elements (numbers, operators, variables, brackets)
		// all strings that are defined in mag.mathFunctions() are treated as functions, all others are
		// treated as variable names. If a variable is not defined, the getValue() method returns an error.
		let tokens = [];
		let len = equationString.length;
		for (let i=0; i<len; i++) {
			let type = this.identifyChar(equationString.charCodeAt(i));
			let nextType = this.identifyChar(equationString.charCodeAt(i+1));
			if (type == 'number') {
				let number = equationString[i];
				let counter = 0;
				while (nextType == 'number' || nextType == 'delimiter') {
					number = number + equationString[i+1];
					i++;
					nextType = this.identifyChar(equationString.charCodeAt(i+1));
					counter++;
					if (counter > 100) {
						console.log('ERROR: while loop timeout...');
						return 'maximum number length (100) reached';
						break;
					}
				}
				tokens.push(['number', Number(number)]);
			} else if (type == 'letter' || type == 'Cletter') {
				let str = equationString[i];
				let counter = 0;
				while (nextType == 'letter' || nextType == 'Cletter' || nextType == 'number') {
					str = str + equationString[i+1];
					i++;
					nextType = this.identifyChar(equationString.charCodeAt(i+1));
					counter++;
					if (counter > 100) {
						console.log('ERROR: while loop timeout...');
						return 'maximum variable name length (100) reached';
						break;
					}
				}
				if (this.mathFunctions[str.toLowerCase()] != undefined) {
					tokens.push(['function', str.toLowerCase(), 1]);
				} else if (this.stringToCell(str) != -1) {
					tokens.push(['cell', str]);
				} else {
					tokens.push(['variable', str]);
				}
			} else if (type == 'arrayBegin') {
				tokens.push(['function', 'array', 1]);
				tokens.push(['leftParenthesis', 'leftParenthesis']);
			} else if (type == 'arrayEnd') {
				tokens.push(['rightParenthesis', 'rightParenthesis']);
			} else if (type == 'leftParenthesis' || type == 'rightParenthesis' || type == 'comma') {
				tokens.push([type, type]);
			} else if (type == 'space') { // do nothing
			} else if (type == 'unknown') {
				return `unknown symbol: ${equationString[i]} (char. code: ${equationString.charCodeAt(i)})`;
			} else {
				tokens.push(['operator', type, 2]);
			}
		}
		
		error = this.fixTokens(tokens);
		
		if (error === 0) {
			return tokens;
		} else {
			return error;
		}
	},
	
	tokenDetails(token) {
		let opReplace = {add: '+', mul: '*', div: '/', pow: '^', part: '_', sub: '-',
			leftParenthesis: '(', rightParenthesis: ')', comma: ',', mod: '%'};
		let type = token[0];
		let kind = token[1];
		if (type == 'operator') {
			return `'${opReplace[kind]}' operator`;
		} else if (type == 'leftParenthesis' || type == 'leftParenthesis') {
			return `'${opReplace[kind]}' parenthesis`;
		} else if (type == 'comma') {
			return `comma`;
		} else if (this.isValue(type)) {
			if (type == 'cellRange') {
				return `${type} (${kind} : ${token[2]})`;
			} else {
				return `${type} (${kind})`;
			}
		} else {
			return `${type}`;
		}
	},
	
	isValue(tokenType) {
		return this.mathFunctions.compareToList(tokenType, 'number', 'variable', 'cell', 'cellRange');
	},
	
	fixTokens(tokens) {
		let len = tokens.length;
		for (let i = len - 2; i >= 0; i--) {
			let type = tokens[i][0];
			let kind = tokens[i][1];
			
			// 1) check for minus operator which is a sign: -1+2 or 2+(-3+5) or -sin(2) or -B2
			if (type == 'operator' && (kind == 'add' || kind == 'sub')) {
				// token is operator '+' or '-'
				let replace = 0;
				
				// 1.1) check for minus sign in front of a number or variable
				if (this.isValue(tokens[i+1][0])) {
					if (i == 0) {
						// leading sign in equation, e.g. -1+2
						replace = 1;
					} else if (tokens[i-1][0] == 'leftParenthesis') {
						// sign at beginning of a bracket, e.g. cos(-3)
						replace = 1;
					}  else if (tokens[i-1][0] == 'comma') {
						// sign after comma, e.g. [1,-2,3]
						replace = 1;
					} else if (tokens[i-1][0] == 'operator' && tokens[i-1][1] == 'pow') {
						// sign after power operator, e.g. 2^-3
						replace = 1;
					}  else if (tokens[i-1][0] == 'operator' && tokens[i-1][1] == 'part') {
						// sign after part operator, e.g. [1,2,3]_-1
						replace = 1;
					}
					
					if (replace == 1 && tokens[i+1][0] == 'variable') {
						replace = 2;
					}
				}
				
				// 1.2) check for minus in front of parenthesis or function
				else if (tokens[i+1][0] == 'leftParenthesis' || tokens[i+1][0] == 'function') {
					replace = 2;
				}
				
				if (replace == 1) {
					if (kind == 'sub' && tokens[i+1][0] == 'number') {
						tokens[i+1][1] = -tokens[i+1][1];
					}
					tokens.splice(i, 1);
				} else if (replace == 2) {
					tokens.splice(i, 1, ['number', -1], ['operator', 'mulFirst', 2]);
				}
				
			}
			
			// 2) check for a cases like: 2 cos(2) -> multiplication without explicit '*'
			else if (this.isValue(type) || type == 'rightParenthesis') {
				let addMul = false;
				let next = tokens[i+1][0];
				if (this.isValue(next)) {
					// two variables/numbers without any operator in between, e.g. (2 a)
					addMul = true;
				} else if (next == 'leftParenthesis') {
					// factor in front of bracket/array, e.g. 2(a+b) or 2[1,2,3]
					addMul = true;
				} else if (next == 'function') {
					// factor in front of function, e.g. 2 cos(theta)
					addMul = true;
				}
				
				if (addMul) {
					console.log(`WARNING: added multiplication between ${this.tokenDetails(tokens[i])} and ${this.tokenDetails(tokens[i+1])}`);
					tokens.splice(i+1, 0, ['operator', 'mul', 2]);
				}
			}
			
			// 3) check for colons -> A1:A4 represents cellRange from A1 to A4
			else if (type == 'operator' && kind == 'colon') {
				if (i == 0) {
					return 'misplaced colon';
				} else if (tokens[i+1][0] == 'cell' && tokens[i-1][0] == 'cell') {
					// token prior and past colon are both valid cell definitions
					tokens.splice(i-1, 3, ['cellRange', tokens[i-1][1], tokens[i+1][1]]);
					i--;
				} else {
					return 'misplaced colon';
				}
			}
		}
		
		// Check if the equation makes sense!
		//  -> check that the parenthesis make sense
		//  -> check that every token is followed by a compatible token
		//  -> if there are commas on the 'lowest level', interpret the input as array
		//  -> count number of arguments for every function with parenthesis, e.g. min(1,2,3)
		
		let level = 0;
		let groundLevelCommas = 0;
		let hierarchy = [];
		let next = tokens[0][0];
		let type;
		len = tokens.length;
		for (let i = 0; i < len; i++) {
			type = next;
			next;
			let errorMessage;
			if (i == len-1) {
				next = 'end';
				errorMessage = `invalid equation, ${this.tokenDetails(tokens[i])} at the end`;
			} else {
				next = tokens[i+1][0];
				errorMessage = `invalid equation, ${this.tokenDetails(tokens[i])} followed by ${this.tokenDetails(tokens[i+1])}`;
			}
			
			if (this.isValue(type)) {
				if (next == 'function' || this.isValue(next) || next == 'leftParenthesis') {
					return errorMessage;
				}
			} else if (type == 'operator') {
				if (next == 'operator' || next == 'rightParenthesis' || next == 'comma' || next == 'end') {
					return errorMessage;
				}
			} else if (type == 'function') {
				if (next == 'rightParenthesis' || next == 'operator' || next == 'comma' || next == 'end') {
					return errorMessage;
				} else if (next == 'leftParenthesis') {
					// following parenthesis contains the argument(s) of the function
					hierarchy.push(tokens[i]);
				}
			} else if (type == 'leftParenthesis') {
				if (next == 'operator' || next == 'comma' || next == 'end') {
					return errorMessage;
				} else {
					if (hierarchy.length < level) {
						hierarchy.push(0);
					}
					level++;
				}
			} else if (type == 'rightParenthesis') {
				if (level == 0) {
					return errorMessage;
				} else if (next == 'function' || this.isValue(next) || next == 'leftParenthesis') {
					return errorMessage;
				} else {
					level--;
					hierarchy.pop();
				}
			} else if (type == 'comma') {
				if (next == 'operator' || next == 'comma' || next == 'end') {
					return errorMessage;
				} else if (level == 0) {
					groundLevelCommas++;
				} else if (hierarchy[level - 1] == 0) {
					return 'misplaced comma';
				} else {
					hierarchy[level - 1][2]++;
				}
			}
		}
		if (level != 0) {
			return 'missing parenthesis';
		}
		
		if (groundLevelCommas > 0) {
			tokens.unshift(['function', 'array', groundLevelCommas + 1], ['leftParenthesis', 'leftParenthesis']);
			tokens.push(['rightParenthesis', 'rightParenthesis']);
		}
		
		return 0;
	},
	
	getRPN(tokens) {
		// check if tokens contain an error message
		if (typeof tokens == 'string') {
			return tokens;
		}
		
		// compute the reversed polish notation of the expression
		let functionStack = [];
		let outputQueue = [];
		let len = tokens.length;
		for (let i=0; i<len; i++) {
			let type = tokens[i][0];
			if (this.isValue(type)) {
				outputQueue.push(tokens[i]);
			} else if (type == 'function') {
				functionStack.push(tokens[i]);
			} else if (type == 'operator') {
				let counter = 0;
				while (functionStack.length > 0) {
					let x = tokens[i][1];
					let stackTop = functionStack.pop();
					let x2 = stackTop[1];
					if (stackTop[0] == 'function') {
						outputQueue.push(stackTop);
					} else if (this.precedence(x2) > this.precedence(x)) {
						outputQueue.push(stackTop);
					} else if (this.precedence(x2) == this.precedence(x) && this.asso(x2) == 'right') {
						outputQueue.push(stackTop);
					} else {
						functionStack.push(stackTop);
						break;
					}
					counter++;
					if (counter > 100) {
						console.log('ERROR: while loop timeout...');
						break;
					}
				}
				functionStack.push(tokens[i]);
			} else if (type == 'leftParenthesis') {
				functionStack.push(tokens[i]);
			} else if (type == 'comma') {
				let stackTop = functionStack.pop();
				let counter = 0;
				while (stackTop[0] != 'leftParenthesis') {
					outputQueue.push(stackTop);
					stackTop = functionStack.pop();
					if (stackTop == undefined) {
						return 'Misplaced comma!';
						break;
					}
					counter++;
					if (counter > 100) {
						console.log('ERROR: while loop timeout...');
						break;
					}
				}
				functionStack.push(stackTop);
			} else if (type == 'rightParenthesis') {
				let stackTop = functionStack.pop();
				let counter = 0;
				while (stackTop[0] != 'leftParenthesis') {
					if (stackTop == undefined) {
						return 'There is an opening bracket missing!';
					}
					outputQueue.push(stackTop);
					stackTop = functionStack.pop();
					counter++;
					if (counter > 100) {
						console.log('ERROR: while loop timeout...');
						break;
					}
				}
			}
		}
		let counter = 0;
		while (functionStack.length > 0) {
			outputQueue.push(functionStack.pop());
			counter++;
			if (counter > 100) {
				console.log('ERROR: while loop timeout...');
				break;
			}
		}
		return outputQueue.reverse();
	},
	
	stringToRPN(equationString) {
		let tokens = this.getTokens(equationString);
		if (typeof tokens == 'string') {
			// error occured
			console.log(`ERROR creating tokens: ${tokens}`);
			return tokens;
		} else {
			let RPN = this.getRPN(tokens);
			if (typeof RPN == 'string') {
				console.log(`ERROR creating RPN: ${RPN}`);
			}
			return RPN;
		}
	},
	
	getValue(RPNref) {
		/** Takes a reversed polish notation (RPN) as input and calculates the resulting value.
		*   There are different elements in the RPN:
		*   - number
		*   - variable  -> any string that doesnt match a function name is considered to be a variable
		*                  the value of all known variables is stored in mag.variables
		*   - cell      -> cell of a spreadsheet, if no value defined, zero is used
		*   - function  -> mathematical function such as sin, cos, exp,...
		*   - operator  -> mathematical operator which is equivalent to a function, e.g. + (add)
		*   
		*  In RPN the equation '1+2/3' is stored as RPN: [1,3,2,'div','add']. Additionally we have a stack: []
		*  To calculate the final value we always take the first element of the RPN and act depending on type:
		*    item is number/variable     ->  move onto stack
		*    item is operator/function   ->  take N numbers from the stack (N = number of args of func)
		*                                    and evaluate function, put result on stack
		*
		*  For the example above this looks like:
		*     RPN: [1,3,2,'div','add']    stack: []
		*     RPN: [3,2,'div','add']      stack: [1]
		*     RPN: [2,'div','add']        stack: [1,3]
		*     RPN: ['div','add']          stack: [1,3,2]
		*             evaluate: div(2,3)
		*     RPN: ['add']                stack: [1,0.666]
		*             evaluate: add(0.666,1)
		*     RPN: []                     stack: [1.666] <- result
		*
		*  If there is exactly one number left on the stack at the end, this is the result.
		*  If there are multiple items left, the equation is not mathematically correct!
		**/
		
		// check if RPN just contains an error code...
		if (typeof RPNref == 'string') {
			return RPNref;
		}
		
		let RPN = RPNref.slice();
		let stack = [];
		let counter = 0;
		while (RPN.length > 0) {
			let element = RPN.pop();
			if (element[0] == 'number') {
				stack.push(element[1]);
			} else if (element[0] == 'variable') {
				// check if variable exists
				if (mag.variables[element[1]] == undefined) {
					return `unknown variable: ${element[1]}`;
				}
				stack.push(mag.variables[element[1]]);
			} else if (element[0] == 'cell') {
				// check if cell is defined
				let value = mag.variables[element[1]];
				if (value == undefined) {
					stack.push(NaN);
				} else {
					stack.push(value);
				}
			} else if (element[0] == 'cellRange') {
				// check if cell is defined
				let value = mag.cellRangeToArray(element[1], element[2]);
				stack.push(value);
			} else if (element[0] == 'operator' || element[0] == 'function') {
				let func = mag.mathFunctions[element[1]];
				let Nargs = element[2];
				let args = [];
				if (Nargs > stack.length) {
					return 'invalid equation';
				}
				for (let i = 0; i < Nargs; i++) {
					args.unshift(stack.pop());
				}
				let result = func(...args);
				if (typeof result == 'string') {
					// function returned an error
					return result;
				}
				stack.push(result);
			}
			counter++;
			if (counter > 100) {
				console.log('ERROR: while loop timeout...');
				return 'maximum equation length reached';
				break;
			}
		}
		if (stack.length == 1) {
			return stack[0];
		} else {
			return 'invalid equation';
		}
	},
	
	getValueTable(RPNref, varName, values) {
		let table = [];
		let len = values.length;
		for (let i=0; i<len; i++) {
			mag.variables[varName] = values[i];
			table.push([values[i], this.getValue(RPNref)]);
		}
		return table;
	},
	
	equationToValue(equationString) {
		let RPN = this.stringToRPN(equationString);
		if (typeof RPN == 'string') {
			// error occured
			return RPN;
		} else {
			return this.getValue(RPN);
		}
	},
}

class magNode {
	
	/*************************************************************************************************************************
	*	This class is the basis for all later elements.
	*	It adds the node to the parent node.
	*	The parent node can be defined as another magNode object or by the id (string) of the parent node:
	*	- parentNode (magNode object / string) -> defines the parent in the DOM tree by the node or the id string
	*	
	*	The layer argument can be used to define the position within all the children of the parent node:
	*	- layer (string) -> allowed options are 'top', 'bottom', 'before', 'after' (with the last two requiring a reference)
	*	- reference (magNode object / string) -> defines the reference for the layer options 'before' and 'after'
	*	
	*	Public methods which can be used by derived classes are:
	*	- notifyChildren('functionName', ...args) -> invokes the function with the the args: child.functionName(...args)
	*	- remove() -> deletes the node from the DOM tree
	*	- addTag(tag, attributes, node, namespace) -> add a new child which is not initialized as a seperate instance of magNode.
	*  - getCurrentParentWidth() -> get width of parent node
	*  - getCurrentParentHeight() -> get height of parent node
	*************************************************************************************************************************/
	
	constructor(node, parentNode, layer, reference) {
		this.node = node;
		this.childrenList = [];
		if (typeof parentNode == 'object') {
			if (parentNode.node) {
				// parent node defined by another magNode object
				this.parentNode = parentNode.node;
				this.parentObj = parentNode;
				parentNode.addChild(this, layer, reference);
			} else {
				// parent node defined by a node
				this.parentNode = parentNode;
				this.parentNode.appendChild(this.node);
			}
		} else if (typeof parentNode == 'string') {
			// parent node defined by id string
			this.parentNode = document.getElementById(parentNode);
			this.parentNode.appendChild(this.node);
		}
	}
	
	addChild(element, layer = 'top', reference) {
		this.childrenList.push(element);
		if (layer == 'top') {
			this.node.appendChild(element.node);
		} else if (layer == 'bottom') {
			this.node.insertBefore(element.node, this.node.firstChild);
		} else if (layer == 'after') {
			this.node.insertBefore(element.node, reference.node.nextSibling);
		} else if (layer == 'before') {
			this.node.insertBefore(element.node, reference.node);
		}
	}
	
	removeChild(element) {
		let index = this.childrenList.indexOf(element);
		if (index > -1) {
		  this.childrenList.splice(index, 1);
		}
		this.node.removeChild(element.node);
	}
	
	notifyChildren(funcName, ...args) {
		let len = this.childrenList.length;
		for (let i=0; i<len; ++i) {
			if (typeof this.childrenList[i][funcName] == 'function') {
				this.childrenList[i][funcName](...args);
				if (typeof this.childrenList[i].notifyChildren == 'function') {
					this.childrenList[i].notifyChildren(funcName, ...args);
				}
			}
		}
	}
	
	remove() {
		if (this.parentObj instanceof magNode) {
			this.parentObj.removeChild(this);
		} else {
			this.parentNode.removeChild(this.node);
		}
	}
	
	addTag(tag, attributes = {}, node = this.node, namespace = 0) {
		let element;
		if (namespace) {
			element = document.createElementNS(namespace, tag);
		} else {
			element = document.createElement(tag);
		}
		
		node.appendChild(element);
		
		for (let at in attributes) {
			element.setAttribute(at, attributes[at]);
		}
		
		return element;
	}
	
	getCurrentParentWidth() {
		if (this.parentObj) {
			return this.parentObj.widthAbs;
		} else {
			return this.parentNode.getBoundingClientRect().width;
		}
	}
	
	getCurrentParentHeight() {
		if (this.parentObj) {
			return this.parentObj.heightAbs;
		} else {
			return this.parentNode.getBoundingClientRect().height;
		}
	}
}

class magBody extends magNode {
	constructor(width = 100, height = 100, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magBody);
		super(document.body, options['style']);
		this.id = options['id'];
		this.node.setAttribute('id', this.id);
		this.node.setAttribute('margin', 0);
		
		this._width = width;
		this._height = height;
		this.rescale();
		
		// set up rescale calls in case of document resize (user changes size of browser window)
		let root = this;
		this.node.onresize = function() {root.rescale(); root.notifyChildren('rescale');}
	}
	
	rescale() {
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
		console.log(`window size changed to: ${this.windowWidth}x${this.windowHeight}`);
	}
	
	set widthAbs(value) {
		this._width = value;
	}
	
	get widthAbs() {
		return this._width / 100 * this.windowWidth;
	}
	
	set heightAbs(value) {
		this._height = value;
	}
	
	get heightAbs() {
		return this._height / 100 * this.windowHeight;
	}
}

class magElement extends magNode {
	
	/*************************************************************************************************************************
	*	This class is the basis for all DOM- and SVG-elements defined below.
	*	It sets the main charcteristic parameters of the element which are passed via the options object.
	*  The possible parameters are:
	*  - id   {string}
	*  - scaling   {number}
	*  - alignment   {number}
	*  - size   {[number, number]}
	*  - position   {[number, number]}
	*  - style   {object}
	*  - layer   {string}   ('top', 'bottom', 'before', 'after')
	*  - reference   {magNode object}   (for layer option 'before' and 'after')
	*  - namespaceURI   {string}
	*  
	************** OBJECT ATTRIBUTES ******************
	*  The position and size are used to set positionAbs and sizeAbs. The absolute parameters are in pixels, whereas the
	*  original parameters depend on scaling and alignment. The are multiple paramters which are all derived from 
	*	positionAbs and sizeAbs:
	*  - width / widthAbs
	*  - height / heightAbs
	*  - xPos / xPosAbs
	*  - yPos / yPos
	*  - top / topAbs
	*  - bottom / bottomAbs
	*  - left / leftAbs
	*  - right / rightAbs
	*  - rect / rectAbs
	*  - rect2 / rect2Abs
	*  - getPositionAbs(alignment)
	*  - setPositionAbs(position, alignment)
	*  - moveAbs(distance)
	*  - getPosition(alignment, scaling)
	*  - setPosition(position, alignment, scaling)
	*  - moveRel(distance)
	*
	************** SCALING / ALIGNMENT **************
	*  Moreover there is a variety of methods which are used to convert absolute parameters to relative ones and vice versa.
	*  These functions are called with funcName(toConvert, scaling),
	*  with the function names being:
	*  				|	[x,y]			x				y
	*	  ----------------------------------------------
	* 	  Rel->Abs	|	pointAbs		xNumberAbs	yNumberAbs
	*	  Abs->Rel	|	pointRel		xNumberRel	yNumberRel
	*
	*  Another set of functions is used to shift / unshift points and numbers depending on the alignment parameter.
	*  These functions are called with funcName(toConvert, size, alignment),
	*  with the function names being:
	*	  			   |	[x,y]			x				y
	*	  ----------------------------------------------
	* 	  ALI->TLC	|	getTopLeft	getLeft		getTop
	*	  TLC->ALI	|	alignPoint	alignX		alignY
	*  (ALI = position in accordance with alignment, TLC = top-left corner, i.e. alignment = 0)
	*
	************** EVENT HANDLERS ******************
	*  User events can be set up using the following functions:
	*  - onEvent(event, (scope,) func, ...args)        -> trigger func(...args) on event
	*  - onEventSet(event, (scope,) variable, value)   -> set variable to value on event
	*  - keydown(key, (scope,) func, ...args)          -> trigger func(...args) on key down
	*  - keyup(key, (scope,) func, ...args)            -> trigger func(...args) on key up
	*  - keydownSet(key, (scope,) variable, value)     -> set variable to value on key down
	*  - keyupSet(key, (scope,) variable, value)       -> set variable to value on key up
	*  - enableMouseDrag(borderElement, mode)          -> allow user to drag element inside border
	*  - onDrag((scope,) func, ...args)                -> trigger func(...args) on every step of mouse drag
	*  (In all there functions if scope is not set, 'this' is used!)
	*
	************** INHERITED METHODS ***************
	*	Further methods inherited from magNode are:
	*	- notifyChildren('functionName', ...args) -> invokes the function with the the args: child.functionName(...args)
	*	- remove() -> deletes the node from the DOM tree
	*	- addTag(tag, attributes, node, namespace) -> add a new child which is not initialized as an instance of magNode.
	*  - getCurrentParentWidth() -> get width of parent node
	*  - getCurrentParentHeight() -> get height of parent node
	*************************************************************************************************************************/
	
	constructor(parentNode, tag, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magElement);
		// initialize node as child of parentNode
		if (options['namespaceURI'] == 'none') {
			super(document.createElement(tag), parentNode, options['layer'], options['reference']);
		} else {
			super(document.createElementNS(options['namespaceURI'], tag), parentNode, options['layer'], options['reference']);
		}
		
		// set element position and size
		this.parentWidth = this.getCurrentParentWidth();
		this.parentHeight = this.getCurrentParentHeight();
		this.scaling = options['scaling'];
		this.alignment = options['alignment'];
		this._size = options['size'];
		this._position = options['position'];
		
		// prepare/set other html attributes
		if (options['id']) {
			this.id = options['id'];
		}
		
		if (options['style']) {
			this.style = options['style'];
		}
		
		// the event list is used to manage user events (see below)
		this.eventList = {};
	}
	
	rescale() {
		this.checkParent();  // check if parent-width or -height changed and adjust sizeAbs and positionAbs accordingly
		this.setElement();  // set the elements attributes
	}
	
	checkParent() {
		let currentParentWidth = this.getCurrentParentWidth();
		let currentParentHeight = this.getCurrentParentHeight();
		if (currentParentWidth != this.parentWidth || currentParentHeight != this.parentHeight) {
			// the dimensions of the parent element have changed!
			// In this case:
			// 1) store relative positions
			let sizeRel = this.size;
			let positionRel = this.position;
			// 2) update parentHeight and parentWidth
			this.parentWidth = currentParentWidth;
			this.parentHeight = currentParentHeight;
			// 3) calculate new sizeAbs and positionAbs
			this._size = sizeRel;
			this._position = positionRel;
			// 4) calculate new stroke width
			this.scaleStroke();
		}
	}
	
	scaleStroke() {}
	
	setElement() {console.log(`WARNING: class does not have a setElement() method (id: ${this.id})`);}
	
	// --------------------- HTML ATTRIBUTES ---------------------- //
	
	set id(str) {
		this.node.id = str;
	}
	
	get id() {
		return this.node.id;
	}

	set hidden(bool) {
		this._hidden = bool;
		if (bool) {
			this.node.style.visibility = 'hidden';
		} else {
			this.node.style.visibility = 'visible';
		}
	}
	
	get hidden() {
		return this._hidden;
	}
	
	set style(style) {
		this._style = style;
		for (let key in style) {
			this.node.style[key] = style[key];
		}
	}
	
	get style() {
		return this._style;
	}
	
	// ---------------- ABSOLUTE SIZES (SCALING = 0) ---------------- //
	
	set sizeAbs(value) {
		this._sizeAbs = value;
		this.rescale();
	}
	
	get sizeAbs() {
		return this._sizeAbs;
	}
	
	set widthAbs(value) {
		this._sizeAbs[0] = value;
		this.rescale();
	}
	
	get widthAbs() {
		return this._sizeAbs[0];
	}
	
	set heightAbs(value) {
		this._sizeAbs[1] = value;
		this.rescale();
	}
	
	get heightAbs() {
		return this._sizeAbs[1];
	}
	
	// ----------- RELATIVE SIZES (DEPENDENT ON SCALING) ------------ //
	
	set size(value) {
		this.sizeAbs = this.pointAbs(value);
	}
	
	get size() {
		return this.pointRel(this.sizeAbs);
	}
	
	set _size(value) {
		this._sizeAbs = this.pointAbs(value);
	}
	
	get _size() {
		return this.size;
	}
	
	set width(value) {
		this.widthAbs = this.xNumberAbs(value);
	}
	
	get width() {
		return this.xNumberRel(this.widthAbs);
	}
	
	set height(value) {
		this.heightAbs = this.yNumberAbs(value);
	}
	
	get height() {
		return this.yNumberRel(this.heightAbs);
	}
	
	// ------- ABSOLUTE POSITION (SCALING = 0, ALIGNMENT = 0) ------- //
	
	set positionAbs(value) {
		this._positionAbs = value;
		this.rescale();
	}
	
	get positionAbs() {
		return this._positionAbs;
	}
	
	set xPosAbs(value) {
		this._positionAbs[0] = value;
		this.rescale();
	}
	
	get xPosAbs() {
		return this._positionAbs[0];
	}
	
	set yPosAbs(value) {
		this._positionAbs[1] = value;
		this.rescale();
	}
	
	get yPosAbs() {
		return this._positionAbs[1];
	}
	
	set topAbs(value) {
		this.yPosAbs = value;
	}
	
	get topAbs() {
		return this.yPosAbs;
	}
	
	set bottomAbs(value) {
		this.yPosAbs = value - this.heightAbs;
	}
	
	get bottomAbs() {
		return this.yPosAbs + this.heightAbs; 
	}
	
	set leftAbs(value) {
		this.xPosAbs = value;
	}
	
	get leftAbs() {
		return this.xPosAbs;
	}
	
	set rightAbs(value) {
		this.xPosAbs = value - this.widthAbs;
	}
	
	get rightAbs() {
		return this.xPosAbs + this.widthAbs;
	}
	
	// rect = [[xpos, ypos], [width, height]]
	set rectAbs(rect) {
		this._positionAbs = rect[0];
		this._sizeAbs = rect[1];
	}
	
	get rectAbs() {
		return [this._positionAbs, this._sizeAbs];
	}
	
	// rect2 = [[right, top], [right, bottom]] = [[xmin, ymin], [xmax, ymax]]
	set rect2(rect2) {
		let size = mag.vectorMath(rect2[1], rect2[0], '-');
		this._sizeAbs = size;
		this.position = rect[0];
	}
	
	get rect2() {
		return [[this.leftAbs, this.topAbs], [this.rightAbs, this.bottomAbs]];
	}
	
	getPositionAbs(alignment) {
		return this.alignPoint(this._positionAbs, this._sizeAbs, alignment);
	}
	
	setPositionAbs(position, alignment) {
		this.positionAbs = this.getTopLeft(position, this.sizeAbs, alignment);
	}
	
	moveAbs(distance) {
		this.positionAbs = mag.vectorMath(this.positionAbs, distance, '+');
	}
	
	// ----- RELATIVE POSITION (DEPENDENT ON SCALING AND ALIGNMENT) ----- //
	
	set position(value) {
		let valueAbs = this.pointAbs(value);
		this.positionAbs = this.getTopLeft(valueAbs);
	}
	
	get position() {
		let shifted = this.alignPoint(this.positionAbs);
		return this.pointRel(shifted);
	}
	
	set _position(value) {
		let valueAbs = this.pointAbs(value);
		this._positionAbs = this.getTopLeft(valueAbs);
	}
	
	get _position() {
		return this.position;
	}
	
	set xPos(value) {
		let valueAbs = this.xNumberAbs(value);
		this.xPosAbs = this.getLeft(valueAbs);
	}
	
	get xPos() {
		let shifted = this.alignX(this.xPosAbs);
		return this.xNumberRel(shifted);
	}
	
	set yPos(value) {
		let valueAbs = this.yNumberAbs(value);
		this.yPosAbs = this.getTop(valueAbs);
	}
	
	get yPos() {
		let shifted = this.alignY(this.yPosAbs);
		return this.yNumberRel(shifted);
	}
	
	set top(value) {
		this.topAbs = this.yNumberAbs(value);
	}
	
	get top() {
		return this.yNumberRel(this.topAbs);
	}
	
	set bottom(value) {
		this.bottomAbs = this.yNumberAbs(value);
	}
	
	get bottom() {
		return this.yNumberRel(this.yPosAbs + this.heightAbs); 
	}
	
	set left(value) {
		this.leftAbs = this.xNumberAbs(value);
	}
	
	get left() {
		return this.xNumberRel(this.leftAbs);
	}
	
	set right(value) {
		this.rightAbs = this.xNumberAbs(value);
	}
	
	get right() {
		return this.yNumberRel(this.xPosAbs + this.widthAbs);
	}
	
	// rect = [[xpos, ypos], [width, height]]
	set rect(rect) {
		this._sizeAbs = this.pointAbs(rect[1]);
		this.position = this.pointAbs(rect[0]);
	}
	
	get rect() {
		return [this.position, this.size];
	}
	
	// rect2 = [[right, top], [right, bottom]] = [[xmin, ymin], [xmax, ymax]]
	set rect2(rect2) {
		let size = mag.vectorMath(rect2[1], rect2[0], '-');
		this._sizeAbs = this.pointAbs(size);
		this.position = this.pointAbs(rect[0]);
	}
	
	get rect2() {
		return [[this.left, this.top], [this.right, this.bottom]];
	}
	
	getPosition(alignment = this.alignment, scaling = this.scaling) {
		let shifted = this.alignPoint(this.positionAbs, this.sizeAbs, alignment);
		return this.pointRel(shifted, scaling);
	}
	
	setPosition(position, alignment = this.alignment, scaling = this.scaling) {
		let absolute = this.pointAbs(position, scaling);
		this.positionAbs = this.getTopLeft(absolute, this.sizeAbs, alignment);
	}
	
	moveRel(distance) {
		this.position = mag.vectorMath(this.position, distance, '+');
	}
	
	// ------------------- POSITION AND SIZE RESTRICTIONS ------------------ //
	
	// restrict position and size to rect (rect = [[xpos, ypos], [width, height]])
	restrictPosToRect(rect, scaling = 0) {
		if (!this.restrictions) {
			this.restrictions = {};
		}
		let posAbs = this.pointAbs(rect[0]);
		let sizeAbs = this.pointAbs(rect[1]);
		this.restrictions.positionRect = [pos, size];
	}
	
	// restrict position and size to rect (rect = [[xpos, ypos], [width, height]])
	restrictPosToRect2(rect2, scaling = 0) {
		if (!this.restrictions) {
			this.restrictions = {};
		}
		let posAbs = this.pointAbs(rect[0]);
		let sizeAbs = this.pointAbs(rect[1]);
		this.restrictions.positionRect = [pos, mag.vectorMath(sizeAbs, posAbs, '+')];
	}
	
	restrictPosToElement(magElement) {
		if (!this.restrictions) {
			this.restrictions = {};
		}
		this.restrictions.positionElement = magElement;
	}
	
	restrictSize(size, scaling = 0) {
		if (!this.restrictions) {
			this.restrictions = {};
		}
		this.restrictions.size = this.pointAbs(size);
	}
	
	getRestrictedPosition(pos) {
		if (!this.restrictions.positionRect && !this.restrictions.positionElement) {
			return pos;
		};
		
		let rect;
		if (this.restrictions.positionRect) {
			rect = this.restrictions.positionRect;
		} else if (this.restrictions.positionElement) {
			rect = restrictions.positionElement.rectAbs;
		}
		
	}
	
	// set the boundingRect by redefining one corner of the rectangle
	// newPos = [float,float], corner = int (defined as alignment)
	resizeByCorner(newPos, corner) {
		let rect = this.rect.slice();
		let pos = rect[0];
		let size = rect[1];
		
		// adjust y coordinates
		if (corner == 0 || corner == 10 || corner == 20) {
			size[1] = size[1] - newPos[1] + pos[1];
			pos[1] = newPos[1];
		} else if (corner == 2 || corner == 12 || corner == 22) {
			size[1] = newPos[1] - pos[1];
		}
		// adjust x coordinates
		if (corner == 0 || corner == 1 || corner == 2) {
			size[0] = size[0] - newPos[0] + pos[0];
			pos[0] = newPos[0];
		} else if (corner == 20 || corner == 21 || corner == 22) {
			size[0] = newPos[0] - pos[0];
		}
		
		// set new bounding rectangle
		this.rect = rect;
	}
	
	// -------------- SCALING AND ALIGNMENT FUNCTIONS -----------------//
	
	/***** SCALING *****************************************************
	* The scaling functions are used to convert relative positions
	* to absoltue positions (in pixel) and vice versa.
	* 
	* All functions are called with -> funcName(toConvert, scaling)
	*
	* The function names are as follows:
	*
	*				|	[x,y]			x				y
	*	----------------------------------------------
	* 	Rel->Abs	|	pointAbs		xNumberAbs	yNumberAbs
	*	Abs->Rel	|	pointRel		xNumberRel	yNumberRel
	********************************************************************/
	
	// the input is an x-dimension in accordance with scaling
	// the returned number is in absolute values (pixels)
	xNumberAbs(number, scaling = this.scaling) {
		if (scaling == 1 || scaling == 2) {
			return number / 100 * this.parentWidth;
		} else if (scaling == 3) {
			return number / 100 * this.parentHeight;
		} else {
			return number;
		}
	}
	
	// the input is an y-dimension in accordance with scaling
	// the returned number is in absolute values (pixels)
	yNumberAbs(number, scaling = this.scaling) {
		if (scaling == 2) {
			return number / 100 * this.parentWidth;
		} else if (scaling == 1 || scaling == 3) {
			return number / 100 * this.parentHeight;
		} else {
			return number;
		}
	}
	
	// the input point = [x,y] is defined in accordance with scaling
	// the returned point is in absolute values (pixels)
	pointAbs(point, scaling = this.scaling) {
		let x = this.xNumberAbs(point[0], scaling);
		let y = this.yNumberAbs(point[1], scaling);
		return [x, y];
	}
	
	// the input is an absolte x-dimension (in pixels)
	// the returned number is in accordance with scaling
	xNumberRel(number, scaling = this.scaling) {
		if (scaling == 1 || scaling == 2) {
			return number * 100 / this.parentWidth;
		} else if (scaling == 3) {
			return number * 100 / this.parentHeight;
		} else {
			return number;
		}
	}
	
	// the input is an absolte y-dimension (in pixels)
	// the returned number is in accordance with scaling
	yNumberRel(number, scaling = this.scaling) {
		if (scaling == 2) {
			return number * 100 / this.parentWidth;
		} else if (scaling == 1 || scaling == 3) {
			return number * 100 / this.parentHeight;
		} else {
			return number;
		}
	}
	
	// the input point = [x,y] is in absolute values (pixels)
	// the returned point is in accordance with scaling
	pointRel(point, scaling = this.scaling) {
		let x = this.xNumberRel(point[0], scaling);
		let y = this.yNumberRel(point[1], scaling);
		return [x, y];
	}
	
	/***** ALIGNMENT ***************************************************
	* The alignment functions convert the position defined by the top-left
	* corner (TLC) and the position in accordance with alignment (ALI).
	* 
	* All functions are called with -> funcName(toConvert, size, alignment)
	*
	* The function names are as follows:
	*
	*				|	[x,y]			x				y
	*	----------------------------------------------
	* 	ALI->TLC	|	getTopLeft	getLeft		getTop
	*	TLC->ALI	|	alignPoint	alignX		alignY
	********************************************************************/
	
	// the input is a x-position in accordance with alignment
	// the returned value is the x-position corresponding to 'alignment = 0' (left)
	getLeft(xPos, width = this.widthAbs, alignment = this.alignment) {
		if (alignment == 10 || alignment == 11 || alignment == 12) {
			return xPos - width / 2;
		} else if (alignment == 20 || alignment == 21 || alignment == 22) {
			return xPos - width;
		} else {
			return xPos;
		}
	}
	
	// the input is a y-position in accordance with alignment
	// the returned value is the y-position corresponding to 'alignment = 0' (top)
	getTop(yPos, height = this.heightAbs, alignment = this.alignment) {
		if (alignment == 1 || alignment == 11 || alignment == 21) {
			return yPos - height / 2;
		} else if (alignment == 2 || alignment == 12 || alignment == 22) {
			return yPos - height;
		} else {
			return yPos;
		}
	}
	
	// the input is a position in accordance with alignment [x, y]
	// the returned value is the corresponding top-left corner (alignment = 0)
	getTopLeft(pos, size = this.sizeAbs, alignment = this.alignment) {
		let xPos = this.getLeft(pos[0], size[0], alignment);
		let yPos = this.getTop(pos[1], size[1], alignment);
		return [xPos, yPos];
	}
	
	// apply alignment to an x-position
	// basically the input is 'left', the output is the aligned x-position
	alignX(xPos, width = this.widthAbs, alignment = this.alignment) {
		return this.getLeft(xPos, -width, alignment);
	}
	
	// apply alignment to an y-position
	// basically the input is 'top', the output is the aligned y-position
	alignY(yPos, height = this.heightAbs, alignment = this.alignment) {
		return this.getTop(yPos, -height, alignment);
	}
	
	// the input is the top-left corner [x, y]
	// the returned value is the position in accordance with alignment
	alignPoint(topLeft, size = this.sizeAbs, alignment = this.alignment) {
		let xPos = this.alignX(topLeft[0], size[0], alignment);
		let yPos = this.alignY(topLeft[1], size[1], alignment);
		return [xPos, yPos];
	}
	
	// ------------------- OLD DEFINITIONS ------------------- //
	
	
	/*
	
	// the input number is defined in accordance with scaling
	// the returned point is in absolute values (pixels)
	scaleNumber(int) {
		if (this.scaling == 1 || this.scaling == 2) {
			return int / 100 * this.parentWidth;
		} else if (this.scaling == 3) {
			return int / 100 * this.parentHeight;
		} else {
			return int;
		}
	}
	
	// the input point = [x,y] is defined in accordance with scaling
	// the returned point is in absolute values (pixels)
	scalePoint(point, scaling = this.scaling) {
		if (scaling == 0) {  // positions are already is pixels
			return point;
		} else if (scaling == 1) {  // scale height and width to height and width of parent node
			return [point[0] / 100 * this.parentWidth, point[1] / 100 * this.parentHeight];
		} else if (scaling == 2) {  // scale everything according to the width of the parent node
			return point.map(value => value / 100 * this.parentWidth);
		} else if (scaling == 3) {  // scale everything according to the height of the parent node
			return point.map(value => value / 100 * this.parentHeight);
		} else {  // unknown scaling
			return -1
		}
	}
	
	// the input point = [x,y] is in absolute values (pixels)
	// the returned point is in accordance with scaling
	scalePointInverse(point, scaling = this.scaling) {
		if (scaling == 0) {  // positions are already relative
			return point;
		} else if (scaling == 1) {  // scale height and width to height and width of parent node
			return [point[0] * 100 / this.parentWidth, point[1] * 100 / this.parentHeight];
		} else if (scaling == 2) {  // scale everything according to the width of the parent node
			return point.map(value => value * 100 / this.parentWidth);
		} else if (scaling == 3) {  // scale everything according to the width of the parent node
			return point.map(value => value * 100 / this.parentHeight);
		} else {  // unknown scaling
			return -1
		}
	}
	
	alignTopLeft(pos, size, alignment = this.alignment) {
		let topLeft = pos.slice();
		if (alignment == 1 || alignment == 11 || alignment == 21) {
			topLeft[1] -= size[1] / 2;
		} else if (alignment == 2 || alignment == 12 || alignment == 22) {
			topLeft[1] -= size[1];
		}
		if (alignment == 10 || alignment == 11 || alignment == 12) {
			topLeft[0] -= size[0] / 2;
		} else if (alignment == 20 || alignment == 21 || alignment == 22) {
			topLeft[0] -= size[0];
		}
		return topLeft;
	}
	
	alignTopLeftInverse(topLeft, size, alignment = this.alignment) {
		size = mag.vectorMath(size, -1, '*');
		return this.alignTopLeft(topLeft, size, alignment);
	}
	
	alignCenter(pos, size, alignment = this.alignment) {
		// shift position of center according to alignment (see top of page for details)
		// the center position is used to define the position of some elements (e.g. circles)
		let center = pos.slice();
		if (alignment == 0 || alignment == 10 || alignment == 20) {
			center[1] += size[1] / 2;
		} else if (alignment == 2 || alignment == 12 || alignment == 22) {
			center[1] -= size[1] / 2;
		}
		if (alignment == 0 || alignment == 1 || alignment == 2) {
			center[0] += size[0] / 2;
		} else if (alignment == 20 || alignment == 21 || alignment == 22) {
			center[0] -= size[0] / 2;
		}
		return center;
	}
	
	alignCenterReverse(center, size, alignment = this.alignment) {
		size = mag.vectorMath(size, -1, '*')
		return this.alignCenter(topLeft, size, alignment);
	}
	
	// the following methods can be used to obtain the object's properties independent of it's current
	// scaling and alignment. (position, size,... are different, depending on scaling and alignment)
	getSize(scaling = 0) {
		return this.scalePointInverse(this.sizeAbs, scaling);
	}
	
	getPosition(scaling = 0, alignment = 0) {
		let size = this.scalePointInverse(this.sizeAbs, scaling);
		let position = this.scalePointInverse(this.positionAbs, scaling);
		return this.alignTopLeftInverse(position, size, alignment);
	}
	
	// the boundingRect is defined as [position, size] of a rectangle containing the element
	getBoundingRect(scaling = 0) {
		let size = this.scalePointInverse(this.sizeAbs, scaling);
		let position = this.scalePointInverse(this.positionAbs, scaling);
		return [this.alignTopLeftInverse(position, size, 0), size];
	}
	
	// returns x interval [xmin, xmax] containing the element
	getXrange(scaling = 0) {
		let size = this.scalePointInverse(this.sizeAbs, scaling);
		let position = this.scalePointInverse(this.positionAbs, scaling);
		return [position[0], position[0] + size[0]];
	}
	
	// returns y interval [ymin, ymax] containing the element
	getYrange(scaling = 0) {
		let size = this.scalePointInverse(this.sizeAbs, scaling);
		let position = this.scalePointInverse(this.positionAbs, scaling);
		return [position[1], position[1] + size[1]];
	}
	
	getXYrange(scaling = 0) {
		let size = this.scalePointInverse(this.sizeAbs, scaling);
		let position = this.scalePointInverse(this.positionAbs, scaling);
		return [[position[0], position[0] + size[0]], [position[1], position[1] + size[1]]];
	}
	
	// the following methods can be used to manipulate the object's properties without knowledge of it's initial
	// scaling and alignment. (position, size,... are different, depending on scaling and alignment)
	setSize(size, scaling = 0) {
		this._position = this.getPosition(scaling, this.alignment);
		this.scaling = scaling;
		this.size = size;
	}
	
	setPosition(position, scaling = 0, alignment = 0) {
		
		this.size = this.getSize(scaling);
		this.scaling = scaling;
		this.alignment = alignment;
		this.position = position;
		
		if (scaling != this.scaling) {
			scalePoint(position, )
		}
	}
	
	setBoundingRect(rect, scaling = 0) {
		this.size = this.scalePointInverse(rect[1]);
		let position = this.scalePointInverse(rect[0]);
		this.position = this.alignTopLeftInverse(position, this.size);
	}
	
	// set the boundingRect by redefining one corner of the rectangle
	// newPos = [float,float], corner = int (defined as alignment)
	resizeByCorner(newPos, corner) {
		let rect = this.getBoundingRect().slice();
		let pos = rect[0];
		let size = rect[1];
		
		// adjust y coordinates
		if (corner == 0 || corner == 10 || corner == 20) {
			size[1] = size[1] - newPos[1] + pos[1];
			pos[1] = newPos[1];
		} else if (corner == 2 || corner == 12 || corner == 22) {
			size[1] = newPos[1] - pos[1];
		}
		// adjust x coordinates
		if (corner == 0 || corner == 1 || corner == 2) {
			size[0] = size[0] - newPos[0] + pos[0];
			pos[0] = newPos[0];
		} else if (corner == 20 || corner == 21 || corner == 22) {
			size[0] = newPos[0] - pos[0];
		}
		
		// set new bounding rectangle
		this.setBoundingRect(rect);
	}
	
	restrictToElement(element, mode = 'xy') {
		let border = element.getBoundingRect();
		let newBoundingRect = mag.restrictPosition(this.getBoundingRect(), border, mode);
		this.setPosition(newBoundingRect[0]);
	}
	
	*/
	
	//--------- EVENT HANDLER FOR USER INTERACTION -------------//
	
	/**
	* This is a custom event handler for all derived classes.
	* It can be used to easily add, remove or modify events.
	*
	* The parameters are used as follows:
	* @param {String} eventType - Identifier for the event such as 'mousemove', 'focus' or 'keydown'
	* @param {String} eventName - Used defined identifier for the event which can be used to modify or remove it later
	* @param {Object} scope     - The scope of the function (e.g. this)
	* @param {string} func      - Name of function (as string)
	+ @param {...} ...args      - Additional variables, to be passed to func
	*
	* alternatively event() can be called with:
	* scope: unfefined, func: function -> only pass a function which will be called without scope (user can bind scope)
	* scope: object, func: function -> scope will be set as scope of the function: func.bind(scope)
	*
	* When an event is triggered, the function will be called with
	*  -> func(event, ...args)
	*
	* The return value of event() is an event object that conains:
	* -> func - the function that will be called when the event is triggered
	* -> args - list of all the arguments
	* -> active - determins if function will be called (true) or not (false)
	*
	* These parameters can be altered after the event is created.
	* In order to delete the event, call deleteEvent(eventType, eventName)
	* It should be noted that eventName should be chosen uniquely, dublicates will
	* be replaced with: 'eventName 2', 'eventName 3',...
	* 
	* There are some simple derived functions available.
	* In all of these the scope is optional, if not defined it is set to 'this'
	* 
	* -> onEvent(event, (scope,) func, ...args):
	* 				no eventName required and scope is optional (in which case it will be set as 'this')
	*
	* -> onEventSet(event, (scope,) variable, value):
	* 				set a single variable to value when the event is triggered
	*
	*
	* -> keydown(key, (scope,) func, ...args) and
	* -> keyup(key, (scope,) func, ...args):
	* 				trigger func when a cetrain key is pressed
	*
	* -> keydownSet(key, (scope,) variable, value) and
	* -> keyupSet(key, (scope,) variable, value):
	* 				set a single variable to value when a cetrain key is pressed
	*/
	
	event(eventType, eventName, scope, func, ...args) {
		
		// attach event listener for the event (if it doesn't already exist)
		if (!this.eventList[eventType]) {
			switch (eventType) {
				case 'keyup':
				case 'keydown':
				case 'keypress':
					document.addEventListener(eventType, this.handleKey.bind(this));
					break;
				default:
					this.node.addEventListener(eventType, this.handleEvent.bind(this));
			}
			this.eventList[eventType] = {};
		}
		
		// exclude double names
		let givenName = eventName;
		let counter = 2;
		while (this.eventList[eventType][givenName]) {
			givenName = `${eventName} ${counter}`;
			counter++;
			if (counter > 100) {
				console.log('ERROR: while loop timeout...');
				break;
			}
		}
		
		// add event to eventList
		if (typeof func == 'string') {
			this.eventList[eventType][givenName] = {func: scope[func].bind(scope), args: args, active: true};
		} else if (typeof func == 'function' && scope != undefined) {
			this.eventList[eventType][givenName] = {func: func.bind(scope), args: args, active: true};
		} else if (typeof func == 'function' && scope == undefined) {
			this.eventList[eventType][givenName] = {func: func, args: args, active: true};
		}
		
		// for key events the first value of 'args' denotes the key
		if (eventType == 'keyup' || eventType == 'keydown' || eventType == 'keypress') {
			this.eventList[eventType][givenName].key = args[0];
		}
		
		return this.eventList[eventType][givenName];
	}
	
	deleteEvent(eventType, eventName) {
		if (this.eventList[eventType][eventName]) {
			delete this.eventList[eventType][eventName];
		} else {
			console.log(`DELETE EVENT ERROR: event not found (type: ${eventType}, name: ${eventName})`);
		}
	}
	
	handleEvent(event) {
		for (let key in this.eventList[event.type]) {
			let call = this.eventList[event.type][key];
			if (call.active) {
				call.func(event, ...call.args);
			}
		}
	}
	
	handleKey(event) {
		for (let key in this.eventList[event.type]) {
			let call = this.eventList[event.type][key];
			if (call.key != event.key && call.key != 'all') continue;
			if (call.active) {
				call.func(event, ...call.args);
			}
		}
	}
	
	// this function can be called in two different ways:
	// onEvent(event, func, ...args) - if scope is 'this'
	// onEvent(event, scope, func, ...args)
	onEvent(event, ...args) {
		if (typeof args[0] == 'function') {
			return this.event(event, event, this, args[0], ...args.slice(1));
		} else {
			return this.event(event, event, args[0], args[1], ...args.slice(2));
		}
	}
	
	// this function can be called in two different ways:
	// onEventSet(event, variable, value) - if scope is 'this'
	// onEventSet(event, scope, variable, value)
	onEventSet(event, ...args) {
		if (args.length == 2) {
			let func = function(event) {this[args[0]] = args[1];}.bind(this);
			return this.event(event, event, undefined, func);
		} else {
			let func = function(event) {args[0][args[1]] = args[2];}.bind(args[0]);
			return this.event(event, event, undefined, func);
		}
	}
	
	// these functions can be called in two different ways:
	// keyup(key, func, ...args) - if scope is 'this'
	// keyup(key, scope, func, ...args)
	keyup(key, ...args) {
		if (typeof args[0] == 'function') {
			return this.event('keyup', `keyup_${key}`, this, args[0], key, ...args.slice(1));
		} else {
			return this.event('keyup', `keyup_${key}`, args[0], args[1], key, ...args.slice(2));
		}
	}
	
	keydown(key, ...args) {
		if (typeof args[0] == 'function') {
			return this.event('keydown', `keydown_${key}`, this, args[0], key, ...args.slice(1));
		} else {
			return this.event('keydown', `keydown_${key}`, args[0], args[1], key, ...args.slice(2));
		}
	}
	
	// these function can be called in two different ways:
	// keyup(key, variable, value) - if scope is 'this'
	// keyup(key, scope, variable, value)
	keyupSet(key, ...args) {
		if (args.length == 2) {
			let func = function(event) {this[args[0]] = args[1];}.bind(this);
			return this.event('keyup', `keyup_${key}`, undefined, func, key);
		} else {
			let func = function(event) {args[0][args[1]] = args[2];}.bind(args[0]);
			return this.event('keyup', `keyup_${key}`, undefined, func, key);
		}
	}
	
	keydownSet(key, ...args) {
		if (args.length == 2) {
			let func = function(event) {this[args[0]] = args[1];}.bind(this);
			return this.event('keydown', `keydown_${key}`, undefined, func, key);
		} else {
			let func = function(event) {args[0][args[1]] = args[2];}.bind(args[0]);
			return this.event('keydown', `keydown_${key}`, undefined, func, key);
		}
	}
	
	//--------- advanced mouse interactions (MOUSE DRAG) -------------//
	
	/**
	* More complicated mouse functions that are used to track the mouse while the button is down.
	* This can also be used to drag elements around...
	*
	* The relevant functions are:
	*
	* -> startMouseTracking
	*/
	
	enableMouseDrag(borderElement = this.parentObj, mode = 'xy') {
		this.dragMode = mode;
		this.dragBorder = borderElement;
		
		this.eventDown = this.onEvent('mousedown', this, 'startDrag');
		this.eventUp = this.dragBorder.onEvent('mouseup', this, 'stopDrag');
		this.eventLeave = this.dragBorder.onEvent('mouseleave', this, 'stopDrag');
		this.eventMove = this.dragBorder.onEvent('mousemove', this, 'dragElement');
		
		this.dragActive = false;
	}
	
	// define a function (func) which is called while mouse drag is active (on every move)
	// additionally a scope can be defined if the function is not part of the same object
	// to be called as:
	// onDrag((scope,) func, ...args) - again, scope is optional (if not defined 'this' is used)
	onDrag(...args) {
		let func, event;
		if (typeof args[0] == 'function') {
			func = func.bind(this);
			event = [func, args.slice(1)];
		} else if (typeof args[1] == 'function') {
			func = args[0].args[1].bind(args[0]);
			event = [func, args.slice(2)];
		} else {
			func = args[0][args[1]].bind(args[0]);
			event = [func, args.slice(2)];
		}
		
		if (this.dragEvents) {
			this.dragEvents.push(event);
		} else {
			this.dragEvents = [event];
		}
	}
	
	restrictDrag(element, mode = 'xy') {
		this.dragRestriction = element;
		this.restrictionMode = mode;
	}
	
	getMousePosition(event, relativeTo = this.parentObj) {
		let xPos = event.clientX;
		let yPos = event.clientY;
		let canvasRect = relativeTo.node.getBoundingClientRect();
		return [Math.round(xPos - canvasRect.left), Math.round(yPos - canvasRect.top)];
	}
	
	set dragActive(bool) {
		this._dragActive = bool;
		
		// activate events to track mouse
		this.eventUp.active = bool;
		this.eventLeave.active = bool;
		this.eventMove.active = bool;
	}
	
	get dragActive() {
		return this._dragActive;
	}
	
	startDrag(event) {
		console.log(`Start mouse drag on element: ${this.id}`);
		// save relative mouse position on element 
		this.relativeDragPosition = this.getMousePosition(event, this);
		
		// make sure mouse actions of the border element are active
		if (this.dragBorder.style.pointerEvents == 'none') {
			console.log(`Activating mouse actions on: ${this.dragBorder.id}`);
			this.pointerReset = true;
			this.dragBorder.style.pointerEvents = 'auto';
		}
		
		this.dragActive = true;
	}
	
	dragElement(event) {
		let mousePos = this.getMousePosition(event);
		let elementPos = mag.vectorMath(mousePos, this.relativeDragPosition, '-');
		
		if (this.dragRestriction) {
			this.restrictPosition([elementPos, this.sizeAbs], this.dragRestriction.getBoundingRect());
		}
		
		switch (this.dragMode) {
			case 'x':
				this.setPosition([elementPos[0], this.positionAbs[1]]);
				break;
			case 'y':
				this.setPosition([this.positionAbs[0], elementPos[1]]);
				break;
			case 'xy':
				//this.setPosition(elementPos);
				this.positionAbs = elementPos;
				break;
			case 'sw-ne':
				this.setPosition(elementPos);  // to do...
				break;
			case 'nw-se':
				this.setPosition(elementPos);  // to do...
				break;
		}
		
		// execute additional functions defined by onDrag()
		if (this.dragEvents) {
			let len = this.dragEvents.length;
			for (let i = 0; i < len; i++) {
				this.dragEvents[i][0](...this.dragEvents[i][1]);
			}
		}
	}
	
	stopDrag(event) {
		console.log(`Stop mouse drag on element: ${this.id}`);
		this.dragElement(event);
		this.dragActive = false;
		
		// set mouse interactions of border element back to default (see startDrag)
		if (this.pointerReset) {
			console.log(`Deactivating mouse actions on: ${this.dragBorder.id}`);
			this.pointerReset = false;
			this.dragBorder.style.pointerEvents = 'none';
		}
	}
}

class magDOMelement extends magElement {
	
	/*************************************************************************************************************************
	*	This class is the basis for all DOM- and SVG-elements defined below.
	*	It sets the main charcteristic parameters of the element which are passed via the options object.
	*
	************** OPTIONS ***************************
	*  - positioning   {string}   ('relative', 'absolute', 'fixed', 'sticky', 'static')
	*  - stroke   {object}   (width, color, opacity, style, ...)
	*  - fill   {object}   (color, opacity)
	*  - font   {object}   (size, fontFamily)
	*  - text   {string}
	*  +++++++ magElement +++++++
	*  - id   {string}
	*  - scaling   {number}
	*  - alignment   {number}
	*  - size   {[number, number]}
	*  - position   {[number, number]}
	*  - style   {object}
	*  +++++++ magNode +++++++
	*  - layer   {string}   ('top', 'bottom', 'before', 'after')
	*  - reference   {object}   (for layer option 'before' and 'after')
	*  - namespaceURI   {string}
	*  
	************** OBJECT ATTRIBUTES ******************
	*  - font
	*  - text
	*  - stroke
	*  - strokeWidth
	*  - fill
	*  - hidden
	*  - positioning
	*  +++++++ magElement +++++++
	*  - id
	*  - scaling
	*  - alignment
	*  - width / widthAbs
	*  - height / heightAbs
	*  - xPos / xPosAbs
	*  - yPos / yPos
	*  - top / topAbs
	*  - bottom / bottomAbs
	*  - left / leftAbs
	*  - right / rightAbs
	*  - rect / rectAbs
	*  - rect2 / rect2Abs
	*  - getPositionAbs(alignment)
	*  - setPositionAbs(position, alignment)
	*  - moveAbs(distance)
	*  - getPosition(alignment, scaling)
	*  - setPosition(position, alignment, scaling)
	*  - moveRel(distance)
	*  +++++++ magNode +++++++
	*  - node
	*  - parentNode
	*  - parentObj
	*  - childrenList
	*
	************** SCALING / ALIGNMENT **************
	*  Moreover there is a variety of methods which are used to convert absolute parameters to relative ones and vice versa.
	*  These functions are called with funcName(toConvert, scaling),
	*  with the function names being:
	*  				|	[x,y]			x				y
	*	  ----------------------------------------------
	* 	  Rel->Abs	|	pointAbs		xNumberAbs	yNumberAbs
	*	  Abs->Rel	|	pointRel		xNumberRel	yNumberRel
	*
	*  Another set of functions is used to shift / unshift points and numbers depending on the alignment parameter.
	*  These functions are called with funcName(toConvert, size, alignment),
	*  with the function names being:
	*	  			   |	[x,y]			x				y
	*	  ----------------------------------------------
	* 	  ALI->TLC	|	getTopLeft	getLeft		getTop
	*	  TLC->ALI	|	alignPoint	alignX		alignY
	*  (ALI = position in accordance with alignment, TLC = top-left corner, i.e. alignment = 0)
	*
	************** EVENT HANDLERS ******************
	*  User events can be set up using the following functions:
	*  - onEvent(event, (scope,) func, ...args)        -> trigger func(...args) on event
	*  - onEventSet(event, (scope,) variable, value)   -> set variable to value on event
	*  - keydown(key, (scope,) func, ...args)          -> trigger func(...args) on key down
	*  - keyup(key, (scope,) func, ...args)            -> trigger func(...args) on key up
	*  - keydownSet(key, (scope,) variable, value)     -> set variable to value on key down
	*  - keyupSet(key, (scope,) variable, value)       -> set variable to value on key up
	*  - enableMouseDrag(borderElement, mode)          -> allow user to drag element inside border
	*  - onDrag((scope,) func, ...args)                -> trigger func(...args) on every step of mouse drag
	*  (In all there functions if scope is not set, 'this' is used!)
	*
	************** DOM TREE METHODS ****************
	*	Further methods inherited from magNode are:
	*	- notifyChildren('functionName', ...args) -> invokes the function with the the args: child.functionName(...args)
	*	- remove() -> deletes the node from the DOM tree
	*	- addTag(tag, attributes, node, namespace) -> add a new child which is not initialized as an instance of magNode.
	*  - getCurrentParentWidth() -> get width of parent node
	*  - getCurrentParentHeight() -> get height of parent node
	*************************************************************************************************************************/
	
	constructor(parentNode, tag, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMelement);
		super(parentNode, tag, options);
	
		this.positioning = options['positioning'];
		this.borderStyle = options['borderStyle'];
		this.node.style.margin = '0';
		
		if (options['stroke']) {
			this.stroke = options['stroke'];
		} else {
			this._stroke = {};
		}
		
		if (options['fill']) {
			this.fill = options['fill'];
		} else {
			this._fill = {};
		}
		
		if (options['font']) {
			this.font = options['font'];
		} else {
			this._font = {};
		}
		
		if (options['text']) {
			// in this case, setElement() is called from the setter of text
			this.text = options['text'];
		} else {
			this.setElement();
		}
	}
	
	setElement() {
		// scale all attributes that might be defined in relative units
		this._scaleStrokeRadius();
		this._scaleStrokeWidth();
		this._scaleFont();
		
		// apply positioning to node
		let innerSize = this.sizeWithinBorder;	
		this.node.style.width = `${innerSize[0]}px`;
		this.node.style.height = `${innerSize[1]}px`;
		this.node.style.left = `${this.positionAbs[0]}px`;
		this.node.style.top = `${this.positionAbs[1]}px`;
		
		// in case a derived class has a custom rescale function
		if (this.customRescale) {
			this.customRescale();
		}
	}
	
	set positioning(value) {
		this.node.style.position = value;
	}
	
	get positioning() {
		return this.node.style.position;
	}
	
	get sizeWithinBorder() {
		if (this._stroke.widthAbs) {
			if (Array.isArray(this._stroke.width)) {
				let size = this.sizeAbs.slice();
				let width = this._stroke.widthAbs;
				if (width.length == 1) {
					// value is for top/bottom/left/right
					size[0] -= 2 * width[0];
					size[1] -= 2 * width[0];
				} else if (width.length == 2) {
					// 1st value is for top/bottom, 2nd for left/right
					size[0] -= 2 * width[1];
					size[1] -= 2 * width[0];
				} else if (width.length == 3) {
					// 1st value is for top, 2nd for left/right, 3rd for bottom
					size[0] -= 2 * width[1];
					size[1] -= (width[0] + width[2]);
				} else if (width.length == 4) {
					// 1st value is for top, 2nd for right, 3rd for bottom, 4th for left
					size[0] -= (width[1] + width[3]);
					size[1] -= (width[0] + width[2]);
				}
				return size; 
			} else {
				// stroke of all sides is the same!
				return [this.sizeAbs[0] - 2 * this._stroke.widthAbs, this.sizeAbs[1] - 2 * this._stroke.widthAbs];
			}
		} else {
			// no border
			return this.sizeAbs;
		}
	}
	
	// ------------------------- STROKE ------------------------------------------------------ //
	/**
	*   The stroke is defined by the following settings:
	*   {width: 0.5, color: [100, 50, 70], style: 'solid', ...}
	*
	*   Attributes are:
	*   - width   {string or number}   -> numbers are scaled according to scaling, strings are fixed (e.g. '2px')
	*   - scaling   {number}   -> define the scaling if width is defined as a number (if undefined, this.scaling is used)
	*   - color   {string or number}   -> see mag.getColor() for details
	*   - style   {string}   -> 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none'
	*   - radius   {string or number}   -> corner radius of the border
	*
	*   All attributes can also be specified as an array with four entries: [top, right, bottom, left]
	*/
	set stroke(settings) {
		// merge settings with previous settings
		if (this._stroke) {
			this._stroke = mag.mergeObjects(settings, this._stroke);
		} else {
			this._stroke = settings;
		}
		
		if (!this._stroke.scaling) {
			this._stroke.scaling = this.scaling;
		}
		
		if (settings.color) {
			if (Array.isArray(settings.color)) {
				if (typeof settings.color[0] == 'number') {
					// single color defined by rgb array {color: [255, 0, 0]}
					this._applyBorderStyle(mag.getColor(settings.color), 'border-color');
				} else {
					// multiple colors defined for different sides {color: ['red', 'white', 'blue', 'green']}
					let colorList = settings.color.map(value => mag.getColor(value));
					this._applyBorderStyle(colorList, 'border-color');
				}
			} else {
				// single color defined by string {color: 'red'}
				this._applyBorderStyle(mag.getColor(settings.color), 'border-color');
			}
		}
		
		if (settings.style) {
			this._applyBorderStyle(settings.style, 'border-style');
		} else {
			this._applyBorderStyle('solid', 'border-style');
		}
		
		this._scaleStrokeRadius();
		this._scaleStrokeWidth();
	}
	
	_applyBorderStyle(values, styleName) {
		if (Array.isArray(values)) {
			// the four boundaries have been defined seperately
			this.node.style[styleName] = values.join(' ');
		} else {
			this.node.style[styleName] = values;
		}
	}
	
	_scaleLength(value, scaling) {
		let valueAbs;
		if (typeof value == 'string') {
			valueAbs = parseFloat(value);
		} else if (typeof value == 'number') {
			valueAbs = this.xNumberAbs(value, scaling);
			value = `${valueAbs}px`;
		} else {
			console.log('ERROR: unknown length definition for DOM element!')
		}
		return [value, valueAbs];
	}
	
	_scaleStrokeRadius() {
		if (this._stroke.radius) {
			let scaling = this._stroke.scaling;
			if (Array.isArray(this._stroke.radius)) {
				// border radius defined for all four sides seperately
				let radiusList = this._stroke.radius.map(value => this._scaleLength(value, scaling));
				this._stroke.radiusAbs = radiusList.map(value => value[1]);
				this._applyBorderStyle(radiusList.map(value => value[0]), 'border-radius');
			} else {
				let radius = this._scaleLength(this._stroke.radius, scaling);
				this._stroke.radiusAbs = radius[1];
				this._applyBorderStyle(radius[0], 'border-radius');
			}
		}
	}
	
	_scaleStrokeWidth() {
		if (this._stroke.width) {
			let scaling = this._stroke.scaling;
			if (Array.isArray(this._stroke.width)) {
				// border width defined for all four sides seperately
				let widthList = this._stroke.width.map(value => this._scaleLength(value, scaling));
				this._stroke.widthAbs = widthList.map(value => value[1]);
				this._applyBorderStyle(widthList.map(value => value[0]), 'border-width');
			} else {
				let width = this._scaleLength(this._stroke.width, scaling);
				this._stroke.widthAbs = width[1];
				this._applyBorderStyle(width[0], 'border-width');
			}
		}
	}
	
	get stroke() {
		return this._stroke;
	}
	
	get strokeWidth() {
		return this._stroke.widthAbs;
	}
	
	// ------------------------- FILL ------------------------------------------------------ //
	/**
	*   The fill is defined by the following settings:
	*   {color: [100, 50, 70], gradient: [color1, color2, direction]}
	*
	*   Attributes are:
	*   - color   {string or array}   -> see mag.getColor() for details
	*   - gradient   {array}   -> defined by an array with 2 or 3 entries: [color1, color2, direction]
	*                             the direction is optional and takes values like:
	*                             'to bottom' (default), 'to left', 'to top right', '40deg'
	*   - image   {string}   -> define the background image by a string
	*   - size   {string/array}   -> size of the background in absolute units ('10px 10px') or relative
	*   
	*/
	set fill(settings) {
		// merge settings with previous settings
		if (this._fill) {
			this._fill = mag.mergeObjects(settings, this._fill);
		} else {
			this._fill = settings;
		}
		
		if (settings.color) {
			this.node.style['background-color'] = mag.getColor(settings.color);
		}
		
		if (settings.gradient) {
			let color1 = mag.getColor(settings.gradient[0]);
			let color2 = mag.getColor(settings.gradient[1]);
			if (settings.gradient.length > 2) {
				let direction = settings.gradient[2];
				this.node.style['background-image'] = `linear-gradient(${direction}, ${color1}, ${color2})`;
			} else {
				this.node.style['background-image'] = `linear-gradient(${color1}, ${color2})`;
			}
		}
		
		if (settings.image) {
			this.node.style['background-image'] = mag.getColor(settings.image);
		}
		
		if (settings.size) {
			this.node.style['background-size'] = mag.getColor(settings.size);
		}
		
		if (settings.position) {
			this.node.style['background-position'] = mag.getColor(settings.position);
		}
	}
	
	// ------------------------- FONT / TEXT ------------------------------------------------------ //
	/**
	*   The font object has the following attributes:
	*   - family   {string}   -> set the font face, e.g. '"Times New Roman", Times, serif'
	*                            multiple fonts can be defined and the browser takes the first one it knows
	*                            it is best practice to end with a generic font like "serif", "sans-serif"
	*                            or "monospace" which let's the browser choose a font of this type as a fall-back!
	*   - color   {string / array}   -> text color as string ('blue', 'rgb(20,40,50)') or array [20,40,50]
	*   - style   {string}   -> 'normal' or 'italic'
	*   - weight   {string}   -> 'normal' or 'bold'
	*   - decoration   {string}   -> 'none', 'overline', 'line-through' or 'underline'
	*   - shadow   {array}   -> ['2px', '2px', '8px', 'blue']  (xPos yPos blurRadius color) last two are optional
	*                           strings are absolute, numbers are in % of text height
	*   - transform   {string}   -> 'uppercase', 'lowercase' or 'capitalize'
	*   - letterSpacing   {string / number}   -> spacing between single letters
	*   - wordSpacing   {string / number}   -> spacing between words
	*   - indent   {string / number}   -> indentation of first line in paragraph
	*   - wrap   {string}   -> 'normal', 'nowrap' or 'pre'
	*   - overflow   {string}   -> 'clip' (default), 'visible', 'ellipsis' (... at the end of string)
	*   - lineHeight   {string}   -> '1' would be standard, '1.5' means 1.5x the normal line height
	*   - size   {string / number}   -> number for relative size, string (e.g. '10px') for absolute size
	*   - scaling   {number}   -> scaling to use for size (if size is a number), values are:
	*                             0 -> absolute, 1 and 2 -> % of width, 3 -> % of height
	*   - alignVert   {string}   -> possible values are: 'top', 'bottom', 'center'
	*   - alignHor   {string}   -> possible values are: 'left', 'right', 'center', 'justify'
	*   - padding   {array}   -> define the padding by 5 values: [top, right, bottom, left, scaling]
	*                            or by 3 values: [bottom/top, left/right, scaling] or by 2: [all, scaling]
	*                            absolute numbers will be scaled with scaling, strings ('5px') are absolute
	*/
	
	
	set text(str) {
		this._text = str;
		
		// text will be placed inside a <span></span> tag
		// this is necessary for the proper alignment
		if (!this.span) {
			this.span = this.addTag('div');
		}
		this.span.innerHTML = this.text;
		this.setElement();	
	}
	
	get text() {
		return this._text;
	}
	
	set font(settings) {
		if (this._font) {
			this._font = mag.mergeObjects(settings, this._font);
		} else {
			this._font = settings;
		}
		
		if (settings.family) {
			this.node.style['font-family'] = settings.family;
		}
		
		if (settings.color) {
			this.node.style['color'] = mag.getColor(settings.color);
		}
		
		if (settings.style) {
			this.node.style['font-style'] = settings.style;
		}
		
		if (settings.weight) {
			this.node.style['font-weight'] = settings.weight;
		}
		
		if (settings.decoration) {
			this.node.style['text-decoration'] = settings.decoration;
		}
		
		if (settings.alignHor) {
			this.node.style['text-align'] = settings.alignHor;
		}
		
		if (settings.transform) {
			this.node.style['text-transform'] = settings.transform;
		}
		
		if (settings.wrap) {
			this.node.style['white-space'] = settings.wrap;
		}
		
		if (settings.lineHeight) {
			this.node.style['line-height'] = settings.lineHeight;
		} else {
			this.node.style['line-height'] = '1';
		}
		
		this._scaleFont();
	}
	
	get font() {
		return this._font;
	}
	
	_scaleWithFontSize(value) {
		if (typeof value == 'string') {
			return value;
		} else if (typeof value == 'number') {
			if (this.fontSizePixel) {
				return `${value / 100 * this.fontSizePixel}px`;
			} else {
				return `${value / 100 * this.absoluteFontSize}px`;
			}
		} else {
			console.log('ERROR: unknown length definition for DOM element!')
		}
	}
	
	get fontScaling() {
		if (this._font.scaling) {
			return this._font.scaling;
		} else {
			return 'elementHeight';
		}
	}
	
	get absoluteFontSize() {
		let size;
		if (this._font.size) {
			size = this._font.size;
		} else {
			size = magDefaults.font.size;
		}
		
		// if size is defined by a string it is an absolute size -> no scaling needed
		if (typeof size == 'string') {
			return parseFloat(size);
		}
		
		// if size is defined by a number it is scaled according to font scaling
		switch (this.fontScaling) {
			case 'none':
				return size;
			case 'elementHeight':
				return size / 100 * this.sizeWithinBorder[1];
			case 'elementWidth':
				return size / 100 * this.sizeWithinBorder[0];
			case 'windowHeight':
				return size / 100 * window.innerHeight;
			case 'windowWidth':
				return size / 100 * window.innerWidth;
			case 'parentHeight':
				return size / 100 * this.getCurrentParentHeight();
			case 'parentWidth':
				return size / 100 * this.getCurrentParentWidth();
		}
	}
	
	get fontFamily() {
		if (this._font.family) {
			return this._font.family;
		} else {
			return magDefaults.font.family;
		}
	}
	
	get fontPadding() {
		if (this._font.padding) {
			let padding = this._font.padding
			if (Array.isArray(padding)) {
				if (padding.length == 2) {
					let padAll = this._scaleLength(padding[0], padding[1])[1];
					return [padAll, padAll, padAll, padAll];
				} else if (padding.length == 3) {
					let padX = this._scaleLength(padding[1], padding[2])[1];
					let padY = this._scaleLength(padding[0], padding[2])[1];
					return [padY, padX, padY, padX];
				} else if (padding.length == 5) {
					let pad = padding.slice(0,-1);
					pad = pad.map(value => this._scaleLength(value, padding[4])[1])
					return pad;
				} else {
					console.log('WARNING: Unknown padding definition!');
					return [0, 0, 0, 0];
				}
			} else {
				let padAll = this._scaleLength(padding, this.scaling)[1];
				return [padAll, padAll, padAll, padAll];
			}
		} else {
			return [0, 0, 0, 0];
		}
	}
	
	// determine the font size based on the container size
	_scaleFont() {
		if (this.span) {
			// to convert the size from pixels to an actual font size, the font is placed
			// in a hidden element to calibrate the font size (see mag.getFontSize())
			let noLines = mag.countTextLines(this._text);
			let lineHeight = this.node.style['line-height'];
			let targetHeight = this.absoluteFontSize / (noLines + (noLines - 1) * (lineHeight - 1));
			
			let fontSizeList = mag.getFontSize(this.fontFamily, targetHeight);
			this.fontSize = fontSizeList[0];
			this.fontSizePixel = fontSizeList[1];
			this.node.style['font-size'] = this.fontSize + 'px';
		
			// set margins for text alignment (including padding)
			let padding = this.fontPadding;
			
			// the height of the span element is given by #lines * fontSize * lineHeight
			// with the fontSize being the set font size and not the height in pixels!
			// Also the first line is counted to have an altered line height which is not
			// actually the case. Therefore we have to correct for these offsets.
			
			// the actual size is the font height in pixels plus the line spacing times (noLines - 1)
			// the line spacing is given by the set font size times the line height
			let actualSize = this.fontSizePixel + this.fontSize * lineHeight * (noLines - 1);
			let spanSize = this.fontSize * lineHeight * noLines;
			
			// resize span to match size of text (width is always 100%)
			this.span.style.width = `100%`;
			this.span.style.height = `${actualSize}px`;
			let shift = (actualSize - spanSize) / 2;
			let topPos;
			if (shift < 0) {
				this.span.style.padding = `0px 0px ${-shift}px`;
				topPos = shift;
			} else {
				this.span.style.padding = `${shift}px 0px 0px`;
				topPos = 0;
			}
			
			// set the vertical alignment by adding margins to the inner span element
			let alignVert;
			if (this._font.alignVert) {
				alignVert = this._font.alignVert;
			} else {
				alignVert = magDefaults.font.alignVert;
			}
			switch (alignVert) {
				case 'bottom':
					padding[0] = topPos + (this.sizeWithinBorder[1] - actualSize);
					break;
				case 'center':
				case 'middle':
					padding[0] = topPos + (this.sizeWithinBorder[1] - actualSize) / 2;
					break;
				default:
					padding[0] += topPos;
			}
			this.span.style.margin = `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`;
			
			// set other font/text attributes that are affected by scaling or require span
			if (this._font.shadow) {
				let list = this._font.shadow;
				let str;
				if (list.length == 2) {
					str = `${this._scaleWithFontSize(list[0])} ${this._scaleWithFontSize(list[1])}`;
				} else if (list.length == 3) {
					let color = mag.getColor(list[2]);
					str = `${this._scaleWithFontSize(list[0])} ${this._scaleWithFontSize(list[1])} ${color}`;
				} else if (list.length == 4) {
					let color = mag.getColor(list[3]);
					let def = list.slice(0,3).map(value => this._scaleWithFontSize(value));
					str = `${def[0]} ${def[1]} ${def[2]} ${color}`;
				} else if (list.length == 8) {
					let color1 = mag.getColor(list[3]);
					let def1 = list.slice(0,3).map(value => this._scaleWithFontSize(value));
					let color2 = mag.getColor(list[7]);
					let def2 = list.slice(4,7).map(value => this._scaleWithFontSize(value));
					str = `${def1[0]} ${def1[1]} ${def1[2]} ${color1}, ${def2[0]} ${def2[1]} ${def2[2]} ${color2}`;
				}
				this.node.style['text-shadow'] = str;
			}
			
			if (this._font.wordSpacing) {
				this.node.style['word-spacing'] = `${this._scaleWithFontSize(this._font.wordSpacing)}`;
			}
			
			if (this._font.letterSpacing) {
				this.node.style['letter-spacing'] = `${this._scaleWithFontSize(this._font.letterSpacing)}`;
			}
			
			if (this._font.indent) {
				this.node.style['text-indent'] = `${this._scaleWithFontSize(this._font.indent)}`;
			}
			
			if (this._font.overflow) {
				switch (this._font.overflow) {
					case 'clip':
					case 'hidden':
						this.span.style['overflow'] = 'hidden';
						this.span.style['text-overflow'] = 'clip';
						break;
					case 'ellipsis':
					case '...':
						this.span.style['overflow'] = 'hidden';
						this.span.style['text-overflow'] = 'ellipsis';
						break;
					case 'visible':
					case 'show':
						this.span.style['overflow'] = 'visible';
				}	
			}
		}
	}
}

class magDOMmouseInteract extends magDOMelement {
	
	constructor(parentNode, tag, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMmouseInteract);
		super(parentNode, tag, options);
		
		this.styleChanges = options['styleChanges'];
		this.style = this.styleChanges.inactive;
		this._active = false;
		this._hover = false;
	}
	
	activateEvents() {
		this.onEvent('mouseover', this, 'handleMouseEvent', 'over');
		this.onEvent('mouseout', this, 'handleMouseEvent', 'out');
		this.onEvent('click', this, 'handleMouseEvent', 'click');
	}

	handleMouseEvent(event, mouseAction) {
		//root.node.blur();
		if (mouseAction == 'over') {
			this.hover = true;
		} else if (mouseAction == 'out') {
			this.hover = false;
		} else if (event.type == 'click') {
			this.active = !this.active;
		}
	}

	applyStyle() {
		if (this._hover && this._active) {
			this.style = this.styleChanges.activeHover;
		} else if (!this._hover && this._active) {
			this.style = this.styleChanges.active;
		} else if (!this._hover && !this._active) {
			this.style = this.styleChanges.inactive;
		} else if (this._hover && !this._active) {
			this.style = this.styleChanges.inactiveHover;
		}
	}
	
	set style(options) {
		this._style = options;
		
		if (options['stroke']) {
			this.stroke = options['stroke'];
		}
		
		if (options['fill']) {
			this.fill = options['fill'];
		}
		
		if (options['font']) {
			this.font = options['font'];
		}
	}
	
	get style() {
		return this._style;
	}

	set active(bool) {
		this._active = bool;
		this.applyStyle();
	}

	get active() {
		return this._active;
	}

	set hover(bool) {
		this._hover = bool;
		this.applyStyle();
	}

	get hover() {
		return this._hover;
	}
}

class magDOMinput extends magDOMmouseInteract {
	
	/** Get a input field for the user to enter a value
	*   additional options are:
	*   - type   {string}   - what kind of input, 'string' or 'integer' or 'float'
	*   - defaultValue   {string/number}   - value of inout before user enters a value
	*   - styleChanges   {object}   - can contain four values: active, inactive, hover, activehover
	*                                 changes can be set as: {active: {fill: {color: 'green'}}, inactive: {fill: {color: 'red'}}}
	**/
	
	constructor(parentNode, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMinput);
		super(parentNode, 'input', options);
		
		if (options['type']) {
			this.node.type = options['type'];
		} else {
			this.node.type = 'text';
		}
		
		if (options['defaultValue']) {
			this.node.value = defaultValue;
		}
		
		this.node.style.padding = '0';
	}
	
	activateEvents() {
		this.onEvent('mouseover', this, 'handleMouseEvent', 'over');
		this.onEvent('mouseout', this, 'handleMouseEvent', 'out');
		this.onEvent('focus', this, 'handleMouseEvent', 'focus');
		this.onEvent('blur', this, 'handleMouseEvent', 'blur');
	}
	
	handleMouseEvent(event, mouseAction) {
		//root.node.blur();
		if (mouseAction == 'over') {
			this.hover = true;
		} else if (mouseAction == 'out') {
			this.hover = false;
		} else if (event.type == 'focus') {
			this.active = true;
		} else if (event.type == 'blur') {
			this.active = false;
		}
	}
	
	set value(val) {
		this.node.value = val;
	}
	
	get value() {
		return this.node.value;
	}
	
	_scaleFont() {
		let fontSizeList = mag.getFontSize(this.fontFamily, this.absoluteFontSize);
		this.fontSize = fontSizeList[0];
		this.fontSizePixel = fontSizeList[1];
		this.node.style['font-size'] = this.fontSize + 'px';
	
		// set other font/text attributes that are affected by scaling or require span
		if (this._font.shadow) {
			let list = this._font.shadow;
			let str;
			if (list.length == 2) {
				str = `${this._scaleWithFontSize(list[0])} ${this._scaleWithFontSize(list[1])}`;
			} else if (list.length == 3) {
				let color = mag.getColor(list[2]);
				str = `${this._scaleWithFontSize(list[0])} ${this._scaleWithFontSize(list[1])} ${color}`;
			} else if (list.length == 4) {
				let color = mag.getColor(list[3]);
				let def = list.slice(0,3).map(value => this._scaleWithFontSize(value));
				str = `${def[0]} ${def[1]} ${def[2]} ${color}`;
			} else if (list.length == 8) {
				let color1 = mag.getColor(list[3]);
				let def1 = list.slice(0,3).map(value => this._scaleWithFontSize(value));
				let color2 = mag.getColor(list[7]);
				let def2 = list.slice(4,7).map(value => this._scaleWithFontSize(value));
				str = `${def1[0]} ${def1[1]} ${def1[2]} ${color1}, ${def2[0]} ${def2[1]} ${def2[2]} ${color2}`;
			}
			this.node.style['text-shadow'] = str;
		}
		
		if (this._font.wordSpacing) {
			this.node.style['word-spacing'] = `${this._scaleWithFontSize(this._font.wordSpacing)}`;
		}
		
		if (this._font.letterSpacing) {
			this.node.style['letter-spacing'] = `${this._scaleWithFontSize(this._font.letterSpacing)}`;
		}
		
		if (this._font.overflow) {
			switch (this._font.overflow) {
				case 'clip':
				case 'hidden':
					this.node.style['overflow'] = 'hidden';
					this.node.style['text-overflow'] = 'clip';
					break;
				case 'ellipsis':
				case '...':
					this.node.style['overflow'] = 'hidden';
					this.node.style['text-overflow'] = 'ellipsis';
					break;
				case 'visible':
				case 'show':
					this.node.style['overflow'] = 'visible';
					this.node.style['text-overflow'] = '';
			}	
		}
	}
}

class magDOMinputEquation extends magDOMinput {
	
	constructor(parentNode, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMinput);
		super(parentNode, options);
		
		this.infoBox = new magDOMelement(parentNode, 'div', {scaling: 0, id: 'infoBox',
			stroke: {style: 'none', width: 0}, fill: {color: [50, 50, 50, 0.8]}});
		
		if (options['spreadsheet']) {
			this.spreadsheet = options['spreadsheet'];
		}
		if (options['variableList']) {
			this.variableList = options['variableList'];
		}
		this.parentCells = [];
		this.valid = false;
	}
	
	set active(bool) {
		this._active = bool;
		this.applyStyle();
		if (bool) {
			// focus
			if (this.valid) {
				this.node.value = this.equation;
			}
		} else {
			// blur
			this.equation = this.node.value;
			if (this.valid) {
				this.node.value = `${this.result}`;
			}
		}
	}

	get active() {
		return this._active;
	}
	
	set equation(val) {
		this._equation = val;
		this.tokens = mag.getTokens(val);
		if (typeof this.tokens == 'string') {
			// error occured calculating tokens
			this.result = NaN;
			this.error = this.tokens;
			this.valid = false;
		} else {
			// tokens created successfully
			// -> check tokens for depencies on spreadsheet cells and variables
			if (this.spreadsheet) {
				this.checkCellDependencies();
			}
			if (this.variableList) {
				this.checkVariableDependencies();
			}
			// -> calculate reverse polish notation
			this.RPN = mag.getRPN(this.tokens);
			if (typeof this.RPN == 'string') {
				// error occured calculating reversed polish notation
				this.result = NaN;
				this.error = this.RPN;
				this.valid = false;
			} else {
				let result = mag.getValue(this.RPN);
				if (typeof result == 'string') {
					// error in value calculation
					this.result = NaN;
					this.error = result;
					this.valid = false;
				} else if (isNaN(result)) {
					// unknonw error in value calculation
					this.result = NaN;
					this.error = 'equation result not defined';
					this.valid = false;
				} else {
					// the equation was successfully evaluated
					this.result = result;
					this.error = 'none';
					this.valid = true;
				}
			}
		}
	}
	
	get equation() {
		return this._equation;
	}
	
	showInfoBox() {
		
		pos = [pos[0] - 0.45 * this.cellSize[0], pos[1] + 0.75 * this.cellSize[1]];
		this.infoBoxText.position = pos;
		let text = this.getInfoText(cell);
		if (text == '') {
			//this.infoBox.node.setAttribute('d', '');
			this.infoBoxText.hidden = true;
		} else {
			this.infoBoxText.span.innerHTML = text;
			this.infoBoxText.hidden = false;
			let bbox = this.infoBoxText.span.getBoundingClientRect();
			let minX = this.cellSize[0] * cell[0];
			let maxX = minX + this.infoBoxText.span.scrollWidth + 0.1 * this.cellSize[0];
			let minY = this.cellSize[1] * (cell[1] + 1);
			let maxY = minY + this.infoBoxText.span.scrollHeight + 0.5 * this.cellSize[1];
			let path = `M ${maxX} ${maxY} L ${minX} ${maxY} L ${minX} ${minY} L ${maxX} ${minY} L ${maxX} ${maxY}`;
			//this.infoBox.node.setAttribute('d', path);
		}
	}
	
	getInfoText() {
		let element = this.getCellFromTable(cell);
		let str;
		if (element == undefined) {
			return '';
		} else if (element.input == undefined) {
			return '';
		} else if (element.magEquation.RPN.length == 1 &&  element.magEquation.RPN[0][0] == 'number') {
			return '';
		} else {
			if (element.type == 'equation') {
				str = `= ${mag.numberToString(element.result)}`;
			} else if (element.type == 'string') {
				str = `= NaN<Br>(${element.result})`;
			}
			let len = element.parentCells.length;
			if (len > 0) {
				str = `${str}<Br>_______________<Br>linked cells:`
				for (let i = 0; i < len; i++) {
					let parentCell = element.parentCells[i];
					if (typeof parentCell == 'string') {
						let value = mag.variables[parentCell];
						if (value == undefined) {
							value = 'NaN';
						} else {
							value = mag.numberToString(value);
						}
						str = `${str}<Br>- ${parentCell} = ${value}`;
					} else {
						// cell range
						let value = mag.cellRangeToArray(parentCell[0], parentCell[1]);
						value = mag.numberToString(value);
						str = `${str}<Br>- ${parentCell[0]}:${parentCell[1]} = ${value}`;
					}
				}
			}
		}
		return str;
	}
	
	checkCellDependencies() {
		let oldParentCells = this.parentCells.slice();
		this.parentCells = [];
		let singleCellList = [];
		let len = this.tokens.length;
		for (let i = 0; i < len; i++) {
			if (this.tokens[i][0] == 'cell') {
				// single cells are directly added to the parent list
				this.parentCells.push(this.tokens[i][1]);
				singleCellList.push(this.tokens[i][1]);
				this.spreadsheet.addChildToCell(this.tokens[i][1], this);
			} else if (this.tokens[i][0] == 'cellRange') {
				// cell ranges are added as an array [cell1, cell2]
				this.parentCells.push([tokens[i][1], tokens[i][2]]);
				let stringList = mag.cellRangeToCellStrings(tokens[i][1], tokens[i][2]);
				singleCellList.push(...stringList);
				let len2 = stringList.length;
				for (let n = 0; n < len2; n++) {
					this.spreadsheet.addChildToCell(stringList[n], this);
				}
			}
		}
		
		// check if any former parent cells have been removed
		len = oldParentCells.length;
		for (let i = 0; i < len; i++) {
			let oldParent = oldParentCells[i];
			if (typeof oldParent == 'string') {
				// sigle cell string
				if (singleCellList.indexOf(oldParent) == -1) {
					this.spreadsheet.removeChildFromCell(oldParent, this);
				}
			} else {
				// cell range
				let stringList = mag.cellRangeToCellStrings(oldParent[0], oldParent[1]);
				let len2 = stringList.length;
				for (let n = 0; n < len2; n++) {
					if (singleCellList.indexOf(stringList[n]) == -1) {
						this.spreadsheet.removeChildFromCell(stringList[n], this);
					}
				}
			}
		}
	}
}

class magDOMbutton extends magDOMmouseInteract {
	
	constructor(parentNode, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMbutton);
		super(parentNode, 'div', options);
	}
	
	get value() {
		return this._active;
	}
	
	set value(bool) {
		this.active = bool;
	}
}

class magDOMinputSingle extends magDOMinput {
	
	constructor(parentNode, position = [0, 0], size = [100, 100], options = {}) {
		
		super(parentNode, position, size, options);
		
		this._active = false;
		this._hover = false;
		
		this.defaultWidth = this.node.scrollWidth;
		
		if (options['styleChanges']) {
			this.styleChanges = options['styleChanges'];
		}
		
		this.onEventSet('mouseover', this, 'hover', true);
		this.onEventSet('mouseout', this, 'hover', false);
		this.onEventSet('focus', this, 'active', true);
		this.onEventSet('blur', this, 'active', false);
		this.onEvent('input', this, 'checkOverflow');
		this.keydown('Enter', this.node, 'blur');
	}
	
	
	set active(bool) {
		this._active = bool;
		this.changeStyle();
	}
	
	get active() {
		return this._active;
	}
	
	set hover(bool) {
		this._hover = bool;
		this.changeStyle();
	}
	
	get hover() {
		return this._hover;
	}
	
	changeStyle() {
		// set element style (font, border and fill)
		if (this.styleChanges) {
			if (this._hover && this._active) {
				this.applyStyle('activehover');
				this.node.style.zIndex = 4;
			} else if (!this._hover && this._active) {
				this.applyStyle('active');
				this.node.style.zIndex = 2;
			} else if (!this._hover && !this._active) {
				this.applyStyle('inactive');
				this.node.style.zIndex = 1;
			} else if (this._hover && !this._active) {
				this.applyStyle('hover');
				this.node.style.zIndex = 3;
			}
		}
		// check for overflow and possibly show it
		this.checkOverflow()
	}
	
	checkOverflow() {
		if (this.node.scrollWidth > this.defaultWidth) {
			this.overflow = true;
		} else {
			this.overflow = false;
		}
	}
	
	set overflow(bool) {
		this._overflow = bool;
		if ((this._hover || this._active) && bool) {
			if (this.widthAbs < this.node.scrollWidth) {
				this.font = {overflow: 'visible'};
				this.widthAbs = this.node.scrollWidth + 10;
				this.overflowShown = true;
			}
		} else if (!this.active && this.overflowShown) {
			this.font = {overflow: '...'};
			this.widthAbs = this.defaultWidth;
			this.overflowShown = false;
		}
	}
	
	get overflow() {
		return this._overflow;
	}
	
	applyStyle(type) {
		if (this.styleChanges[type]) {
			if (this.styleChanges[type].stroke) {
				this.stroke = this.styleChanges[type].stroke;
			}
			if (this.styleChanges[type].fill) {
				this.fill = this.styleChanges[type].fill;
			}
			if (this.styleChanges[type].font) {
				this.font = this.styleChanges[type].font;
			}
		}
	}
}

class magDOMinputList {
	
	/** List of inputs (kind of an input form)
	*   attributes are:
	*   - positionList   {array}   - list of input positions [[x1,y1], [x2,y2],...]
	*   - inputSize   {array}   - either one size for all [dx,dy] or list of sizes
	*                             [[dx1,dy1], [dx2,dy2],...]
	*   possible options:
	*   - labels   {array}   - define names for all inputs (can be used to get/set values)
	*   - type   {string}   - what kind of inputs, 'string' or 'integer' or 'float'
	*   - defaultValue   {string/number}   - value of inout before user enters a value
	*   - styleChanges   {object}   - can contain four values: active, inactive, hover, activehover
	*                                 changes can be set as: {active: {fill: {color: 'green'}}, inactive: {fill: {color: 'red'}}}
	*   
	**/
	constructor(parentNode, positionList, inputSize, options = {}) {
		
		this.activeInput = false;
		this.activeIndex = -1;
		this.inputMatrix = [];
		
		this.length = positionList.length;
		for (let i = 0; i < this.length; i++) {
			let newInput;
			if (Array.isArray(inputSize[0])) {
				newInput = new magDOMinputBasic(parentNode, positionList[i], inputSize[i], options);
			} else {
				newInput = new magDOMinputBasic(parentNode, positionList[i], inputSize, options);
			}
			if (options['label']) {
				newInput.node.dataset.label = options['label'][i];
			} else {
				newInput.node.dataset.label = 'none';
			}
			newInput.onEvent('focus', this, 'active');
			newInput.onEvent('blur', this, 'active');
			newInput.node.dataset.id = magVars.inputCounter;
			newInput.node.dataset.index = i;
			this.inputMatrix.push(newInput);
		}
		parentNode.onEvent('mouseover', this, 'hover');
		parentNode.onEvent('mouseout', this, 'hover');
		parentNode.keydown('Enter', this, 'enter');
		parentNode.keydown('Tab', this, 'tab');
		parentNode.onEvent('input', this, 'change');
		
		this.identifier = magVars.inputCounter;
		magVars.inputCounter++;
	}
	
	hover(event) {
		if (event.target.dataset.id == this.identifier) {
			let index = parseInt(event.target.dataset.index);
			if (event.type === 'mouseover') {
				this.inputMatrix[index].hover = true;
			} else if (event.type === 'mouseout') {
				this.inputMatrix[index].hover = false;
			}
		}
	}
	
	active(event) {
		if (event.target.dataset.id == this.identifier) {
			let index = parseInt(event.target.dataset.index);
			if (event.type === 'focus') {
				this.activeIndex = index;
				this.activeInput = this.inputMatrix[index];
				this.activeInput.active = true;
			} else if (event.type === 'blur') {
				this.inputMatrix[index].active = false;
				this.activeIndex = -1;
				this.activeInput = false;
			}
		}
	}
	
	change(event) {
		if (event.target.dataset.id == this.identifier) {
			let index = parseInt(event.target.dataset.index);
			this.inputMatrix[index].checkOverflow();
		}
	}
	
	enter() {
		if (this.activeInput) {
			this.activeInput.node.blur();
		}
	}
	
	tab() {
		if (this.activeInput) {
			event.preventDefault();
			let index = this.activeIndex;
			console.log(typeof index);
			this.activeInput.node.blur();
			if (index < this.length - 1) {
				this.inputMatrix[index + 1].node.focus();
			} else {
				this.inputMatrix[0].node.focus();
			}
			
		}
	}
}

class magEquation {
	
	constructor(equationString) {
		this.equationString = equationString;
	}
	
	set equationString(value) {
		this._equationString = value;
		this.RPN = mag.stringToRPN(value);
	}
	
	get equationString() {
		return this._equationString;
	}
	
	getValue() {
		let result = mag.getValue(this.RPN);
		if (typeof result == 'string' && typeof this.RPN != 'string') {
			console.log(`ERROR calculating value: ${result}`);
		}
		return result;
	}
}

class magDOMspreadsheet extends magDOMelement {
	
	constructor(parentNode, options = {}) {
		
		options = mag.mergeObjects(options, magDefaults.magDOMspreadsheet);
		super(parentNode, 'div', {style: {overflow: 'hidden'}});
		
		this.valueMatrix = {};
		this.status = 'idle';
		
		// set up table
		this.font = options['font'];
		this.colors = options['cellColors'];
		this.lineWidth = this.xNumberAbs(options['lineWidth']);
		this.cellSize = this.pointAbs(options['cellSize']);
		this.initTable(100, 26);
		
		// set up mouse and keyboard interaction
		let fullSize = [this.columns * this.cellSize[0] + 2 * this.labelSize[0], this.rows * this.cellSize[1] + this.labelSize[0] + this.labelSize[1]];
		this.scrollOuterDiv = new magDOMelement(this, 'div', {id: 'scrollOuterDiv', position: [0, 0], size: [100, 100], alignment: 0, scaling: 1, style: {overflow: 'scroll'}});
		this.scrollInnerDiv = new magDOMelement(this.scrollOuterDiv, 'div', {id: 'scrollInnerDiv', position: [0, 0], size: fullSize, alignment: 0, scaling: 0});
		this.scrollOuterDiv.onEvent('scroll', this, 'scroll');
		this.onEvent('mousedown', this, 'handleMouseEvent', 'down');
		this.onEvent('mousemove', this, 'handleMouseEvent', 'move');
		this.onEvent('mouseup', this, 'handleMouseEvent', 'up');
		this.onEvent('mouseleave', this, 'handleMouseEvent', 'up');
		//this.input.onEvent('focus', this, 'focus');
		//this.input.onEvent('blur', this, 'blur');
		this.table.keyEvent = this.keydown('all', this, 'keypressed');
	}
	
	initTable(rows, columns) {
		let tableWidth = this.cellSize[0] * columns;
		let tableHeight = this.cellSize[1] * rows;
		this.rows = rows;
		this.columns = columns;
		
		let colorCell = mag.getColor(this.colors.cell);
		let colorSelect = mag.getColor(this.colors.selected);
		let colorLabel = mag.getColor(this.colors.label);
		let colorLine = mag.getColor(this.colors.line);
		this.labelSize = [3 * this.cellSize[1], this.cellSize[1]];
		this.cellSizeSmall = [this.cellSize[0] - 2 * this.lineWidth, this.cellSize[1] - 2 * this.lineWidth];
		this.cellSizeLarge = [this.cellSize[0] + 2 * this.lineWidth, this.cellSize[1] + 2 * this.lineWidth];
		
		// background fill for cell color
		this.fill = {color: colorCell};
		
		// add lines for table cells via repeating gradient background
		this.table = new magDOMelement(this, 'div', {id: 'spreadsheet', position: this.labelSize, size: [tableWidth, tableHeight], alignment: 0, scaling: 0});
		let bgdImage1 = `linear-gradient(to right, transparent ${this.cellSize[0] - this.lineWidth}px, ${colorLine} ${this.cellSize[0] - this.lineWidth}px)`;
		let bgdImage2 = `linear-gradient(to bottom, transparent ${this.cellSize[1] - this.lineWidth}px, ${colorLine} ${this.cellSize[1] - this.lineWidth}px)`;
		let bgdSize = `${this.cellSize[0]}px ${this.cellSize[1]}px`;
		this.table.fill = {image: `${bgdImage1}, ${bgdImage2}`, size: bgdSize};
		
		// set up input field which is used to record the user input
		this.input = new magDOMinput(this.table, {position: [-this.cellSizeLarge[0], 0], size: this.cellSizeLarge, scaling: 0, alignment: 11, stroke: {width: this.lineWidth * 2, color: colorLine},
									  fill: {color: [0,0,0,0.4]}, font: this.font});
		this.input.activateEvents();
		
		// set up svg canvas for showing dependencies
		this.canvas = new magSVGcanvas(this.table, [0, 0], [100, 100], {alignment: 0, scaling: 1, style: {pointerEvents: 'none', zIndex: 2}});
		this.highlightParents = new magSVGelement(this.canvas, 'path', {scaling: 0, id: 'parentIndicator',
			stroke: {color: mag.getColor(this.colors.parents), width: this.lineWidth * 1.5}, fill: {color: 'none'}});
		this.highlightChildren = new magSVGelement(this.canvas, 'path', {scaling: 0, id: 'childrenIndicator',
			stroke: {color: mag.getColor(this.colors.children), width: this.lineWidth * 1.5}, fill: {color: 'none'}});
		/*
		this.infoBox = new magSVGelement(this.canvas, 'path', {scaling: 0, id: 'selectionIndicator',
			stroke: {color: 'none', width: 0}, fill: {color: [50, 50, 50, 0.8]}});
		this.cellSelection = new magSVGelement(this.canvas, 'path', {scaling: 0, id: 'selectionIndicator',
			stroke: {color: colorLine, width: this.lineWidth * 2}, fill: {color: colorSelect}});
		*/
		this.cellSelection2 = new magSVGelement(this.canvas, 'path', {scaling: 0, id: 'selectionIndicator2',
			stroke: {color: mag.getColor(this.colors.parents), width: this.lineWidth * 2}, fill: {color: 'none'}});
		this.extendCellButton = new magSVGelement(this.canvas, 'path', {scaling: 0, id: 'bob', 
			stroke: {color: colorCell, width: this.lineWidth}, fill: {color: colorLine}});
		this.extendCellButtonSize = Math.min(...this.cellSize) / 6;
		
		// set up the info box which shows additional information of the selected cell (dependencies, errors, result, ...)
		let fontSize = `${this.input.fontSizePixel}px`;
		let font2 = mag.mergeObjects({size: fontSize, alignHor: 'left', alignVert: 'top', color: [255, 255, 255, 0.9], lineHeight: 1.2, overflow: 'initial'}, this.font);
		this.infoBoxText = new magDOMelement(this.table, 'div', {position: [0,0], size: [0, 0], scaling: 0, alignment: 0, font: font2, text: '  '});
		
		// set up the extend cell menu which is used to define cell blocks 
		this.extendCellMenu = new magDOMelement(this.table, 'div', {position: [0,0], size: [0, 0], scaling: 0, alignment: 0, font: font2, text: '  '});
		
		// insert row and column labels
		let columnLabel = new magDOMelement(this, 'div', {id: 'columnLabel', position: [this.labelSize[0], 0], size: [tableWidth, this.labelSize[1]], alignment: 0, scaling: 0, style: {backgroundColor: colorLabel, zIndex: 1}});
		let rowLabel = new magDOMelement(this, 'div', {id: 'rowLabel', position: [0, this.labelSize[1]], size: [this.labelSize[0], tableHeight], alignment: 0, scaling: 0, style: {backgroundColor: colorLabel, zIndex: 1}});
		let corner = new magDOMelement(this, 'div', {id: 'upperLeftCorner', position: [0, 0], size: this.labelSize, alignment: 0, scaling: 0, style: {backgroundColor: colorLine, zIndex: 1}});	
		
		let bgdImage3 = `linear-gradient(to bottom, transparent ${this.labelSize[1] - this.lineWidth}px, ${colorLine} ${this.labelSize[1] - this.lineWidth}px)`;
		columnLabel.fill = {image: `${bgdImage1}, ${bgdImage3}`, size: `${this.cellSize[0]}px ${this.labelSize[1]}px`};
		let bgdImage4 = `linear-gradient(to right, transparent ${this.labelSize[0] - this.lineWidth}px, ${colorLine} ${this.labelSize[0] - this.lineWidth}px)`;
		rowLabel.fill = {image: `${bgdImage4}, ${bgdImage2}`, size: `${this.labelSize[0]}px ${this.cellSize[1]}px`};
		
		let rowLabelList = [];
		let rowLabelSize = [this.labelSize[0], this.cellSize[1]];
		for (let r = 0; r < rows; r++) {
			let pos = [this.labelSize[0] / 2, (r + 0.5) * this.cellSize[1]];
			rowLabelList.push(new magDOMelement(rowLabel, 'div', {position: pos, size: rowLabelSize, alignment: 11, scaling: 0, font: this.font, text: mag.getRowLabel(r)}));
		}
		let columnLabelList = [];
		let columnLabelSize = [this.cellSize[0], this.labelSize[1]];
		for (let c = 0; c < columns; c++) {
			let pos = [(c + 0.5) * this.cellSize[0], this.labelSize[1] / 2];
			columnLabelList.push(new magDOMelement(columnLabel, 'div', {position: pos, size: columnLabelSize, alignment: 11, scaling: 0, font: this.font, text: mag.getColumnLabel(c)}));
		}
		this.labels = {columnDiv: columnLabel, columnLabels: columnLabelList, rowDiv: rowLabel, rowLabels: rowLabelList};
		
		// insert field to add additional rows and columns
		let font = mag.mergeObjects({size: `${this.labelSize[0] * 0.8}px`}, this.font);
		let pos = [this.columns * this.cellSize[0] + this.labelSize[0], 0];
		let size = [this.labelSize[0], this.sizeAbs[1]];
		this.addColumnsButton = new magDOMelement(this, 'div', {id: 'addColumnsButton', position: pos, size: size, alignment: 0, scaling: 0, font: font, text: '+', style: {backgroundColor: colorLabel, zIndex: 1}});
		pos = [0, this.rows * this.cellSize[1] + this.labelSize[1]];
		size = [this.sizeAbs[0], this.labelSize[0]];
		this.addRowButton = new magDOMelement(this, 'div', {id: 'addRowButton', position: pos, size: size, alignment: 0, scaling: 0, font: font, text: '+', style: {backgroundColor: colorLabel, zIndex: 1}});
	}
	
	//font: {color: [255, 255, 255], family: 'Montserrat', overflow: '...', size: 80, alignHor: 'center', wrap: 'nowrap'}
	
	//------------- HANDLE CELL DEPENDENCIES -------------------------------//
	// update all cells that are affected by a change of the current cell
	// this is done by collecting all children and children's children and so on
	// of the changed cell. For all of these cells also a list of parent cells
	// (at least the ones affected by the change itself) is compiled.
	// Now step by step, all cells which have no unupdated parents left are updated
	// until either all cells were updated or a cyclic dependence is detected!
	
	handleCellChange(cellString) {
		let changedCell = this.valueMatrix[cellString];
		let affectedCells = {};
		this.collectChildren(cellString, affectedCells);
		if (affectedCells[cellString] == undefined) {
			// no cyclic dependence back to orignally changed cell
			let counter;
			let removeCell;
			let nextCell = cellString;
			while (removeCell != nextCell) {
				removeCell = nextCell;
				if (affectedCells[removeCell]) {
					delete affectedCells[removeCell];
				}
				counter = 0;
				for (let cell in affectedCells) {
					counter++;
					let index = affectedCells[cell].parents.indexOf(removeCell);
					if (index != -1) {
						affectedCells[cell].parents.splice(index, 1);
					}
					if (affectedCells[cell].parents.length == 0) {
						nextCell = cell;
						this.calculateCellResult(cell);
					}
				}
				if (counter > 0) {
					console.log('ERROR: cyclic dependence detected!!!');
					//mag.print(affectedCells);
				}
			}
		} else {
			console.log('ERROR: cyclic dependence detected!!!');
			//mag.print(affectedCells);
		}
	}
	
	collectChildren(cellString, list) {
		let children = this.valueMatrix[cellString].childCells;
		let len = children.length;
		for (let i = 0; i < len; i++) {
			if (list[children[i]] == undefined) {
				list[children[i]] = {parents: [cellString]};
				this.collectChildren(children[i], list);
			} else {
				list[children[i]].parents.push(cellString);
			}
		}
	}
	
	checkDependencies(element, cellString) {
		let oldParentCells = element.parentCells.slice();
		let tokens = element.magEquation.RPN;
		element.parentCells = [];
		let len = tokens.length;
		let singleCellList = [];
		for (let i = 0; i < len; i++) {
			if (tokens[i][0] == 'cell') {
				// single cells are directly added to the parent list
				element.parentCells.push(tokens[i][1]);
				singleCellList.push(tokens[i][1]);
				this.addChildToCell(tokens[i][1], cellString);
			} else if (tokens[i][0] == 'cellRange') {
				// cell ranges are added as an array [cell1, cell2]
				element.parentCells.push([tokens[i][1], tokens[i][2]]);
				let stringList = mag.cellRangeToCellStrings(tokens[i][1], tokens[i][2]);
				singleCellList.push(...stringList);
				let len2 = stringList.length;
				for (let n = 0; n < len2; n++) {
					this.addChildToCell(stringList[n], cellString);
				}
			}
		}
		
		// check if any former parents have been removed
		len = oldParentCells.length;
		for (let i = 0; i < len; i++) {
			let oldParent = oldParentCells[i];
			if (typeof oldParent == 'string') {
				// sigle cell string
				if (singleCellList.indexOf(oldParent) == -1) {
					this.removeChildFromCell(oldParent, cellString);
				}
			} else {
				// cell range
				let stringList = mag.cellRangeToCellStrings(oldParent[0], oldParent[1]);
				let len2 = stringList.length;
				for (let n = 0; n < len2; n++) {
					if (singleCellList.indexOf(stringList[n]) == -1) {
						this.removeChildFromCell(stringList[n], cellString);
					}
				}
			}
		}
	}
	
	addChildToCell(parentString, childString) {
		let parentCell = this.valueMatrix[parentString];
		if (parentCell == undefined) {
			this.valueMatrix[parentString] = {childCells: [childString], parentCells: []}
		} else if (parentCell.childCells.indexOf(childString) == -1) {
			parentCell.childCells.push(childString);
		}
	}
	
	removeChildFromCell(parentString, childString) {
		let parentCell = this.valueMatrix[parentString];
		let index = parentCell.childCells.indexOf(childString);
		if (index === -1) {
			console.log(`ERROR: child ${childString} not found in ${parentString}...`);
		} else {
			parentCell.childCells.splice(index, 1);
		}	
	}
	
	//-------------- HELPER FUNCTIONS ---------------------------------------------------------//
	
	getCellFromTable(cell) {
		let str = mag.cellToString(cell);
		return this.valueMatrix[str];
	}
	
	addCellToString(cell1, cell2 = undefined) {
		let str = mag.cellToString(cell1);
		if (cell2 != undefined) {
			if (cell1[0] != cell2[0] || cell1[1] != cell2[1]) {
				str = `${str}:${mag.cellToString(cell2)}`;
			}
		}
		let start = this.input.node.selectionStart;
		let end = this.input.node.selectionEnd;
		
		this.input.node.setRangeText(str, start, end, 'end');
	}
	
	getCellCenter(tablePos) {
		return [this.cellSize[0] * (tablePos[0] + 0.5) - 0.5 * this.lineWidth, this.cellSize[1] * (tablePos[1] + 0.5) - 0.5 * this.lineWidth];
	}
	
	getTablePosition(event) {
		let mousePos = this.table.getMousePosition(event, this.table);
		let cellX = Math.floor(mousePos[0] / this.cellSize[0]);
		let cellY = Math.floor(mousePos[1] / this.cellSize[1]);
		return [cellX, cellY];
	}
	
	//------------- USER EVENTS ---------------------------------------------------------------//
	
	scroll() {
		let scrollTop = -this.scrollOuterDiv.node.scrollTop;
		let scrollLeft = -this.scrollOuterDiv.node.scrollLeft;
		this.table.position = [scrollLeft + this.labelSize[0], scrollTop + this.labelSize[1]];
		this.labels.columnDiv.left = scrollLeft + this.labelSize[0];
		this.labels.rowDiv.top = scrollTop + this.labelSize[1];
		this.addColumnsButton.left = scrollLeft + this.columns * this.cellSize[0] + this.labelSize[0];
		this.addRowButton.top = scrollTop + this.rows * this.cellSize[1] + this.labelSize[1];
	}
	
	setScroll(x, y) {
		this.scrollOuterDiv.node.scrollTop = y;
		this.scrollOuterDiv.node.scrollLeft = x;
	}
	
	handleMouseEvent(event, mouseAction) {
		// in case of mouse down -> initialize a new mouse event
		if (mouseAction == 'down') {
			let mouseEvent = this.detectMouseElement(event);
			this.MEactive = true;
			this.MEtype = mouseEvent[0];
			this.MEelement0 = mouseEvent[1];
			this.MEelement1 = mouseEvent[1];
			this.MEselectionChange = false;
			this.keys = {alt: event.altKey, shift: event.shiftKey};
			//console.log(mouseEvent);
		}
		
		// handle the event based on the type of event
		if (this.MEactive) {
			let element = this.getTablePosition(event);
			if (this.keys.shift) {
				// HANDLE EVENTS WITH THE SHIFT KEY PRESSED
				if (this.MEtype == 'newCell' && mouseAction == 'down') {
					// multiple cells selected
					if (this.status == 'selectedMulti') {
						this.selectMultipleCells(this.currentSelection[0], element);
					} else {
						this.selectMultipleCells(this.currentSelection, element);
						this.status = 'selectedMulti';
					}
					if (this.inputActive) {
						// deactivate input
						this.blur();
					}
					event.preventDefault();
				}	
			} else if (this.keys.alt) {
				// HANDLE EVENTS WITH THE ALT KEY PRESSED
				switch (this.MEtype) {
					case 'newCell':
						if (mouseAction == 'move') {
							if (this.MEelement1[0] != element[0] || this.MEelement1[1] != element[1]) {
								this.showSelection2(this.MEelement0, element);
								this.MEelement1 = element;
							}
						} else if (mouseAction == 'down') {
							this.showSelection2(element);
						} else if (mouseAction == 'up') {
							if (this.status == 'typing') {
								this.addCellToString(this.MEelement0, element);
							} else if (this.status == 'selected') {
								this.input.node.value = '';
								this.addCellToString(this.MEelement0, element);
								this.status = 'typing';
								this.focus();
							}
							this.cellSelection2.node.setAttribute('d', '');
						}
						event.preventDefault();
						break;
					case 'tableRow':
					case 'tableColumn':
						let cell1, cell2;
						if (this.MEtype == 'tableRow') {
							cell1 = [0, this.MEelement0];
							cell2 = [this.columns - 1, element[1]];
							element = element[1];
						} else {
							cell1 = [this.MEelement1, 0];
							cell2 = [element[0], this.rows - 1];
							element = element[0];
						}
						if (element != this.MEelement1 || mouseAction == 'down') {
							// in case row selection changed: update selection indicator
							this.showSelection2(cell1, cell2);
							this.MEelement1 = element;
						} else if (mouseAction == 'up') {
							if (this.status == 'typing') {
								this.addCellToString(cell1, cell2);
							} else if (this.status == 'selected') {
								this.input.node.value = '';
								this.addCellToString(cell1, cell2);
								this.status = 'typing';
								this.focus();
							}
							this.cellSelection2.node.setAttribute('d', '');
						}
						event.preventDefault();
						break;
				}
			} else {
				// HANDLE EVENTS WITH NO SPECIAL KEY PRESSED
				switch (this.MEtype) {
					case 'newCell':
					case 'currentCell':
						if (mouseAction == 'move') {
							// check if mouse was moved over a different cell, if so: update selection indicator
							event.preventDefault();
							if (this.MEelement1[0] != element[0] || this.MEelement1[1] != element[1]) {
								this.showSelection(this.MEelement0, element);
								this.MEelement1 = element;
							}
						} else if (mouseAction == 'down') {
							// in case the mouse down happened on a new cell: update selection indicator
							if (this.MEtype == 'newCell') {
								this.showSelection(element);
							}
						} else if (mouseAction == 'up') {
							// mouse action ended: select the relevant cells
							event.preventDefault();
							if (this.MEelement0[0] == element[0] && this.MEelement0[1] == element[1]) {
								// single cell selected
								if (this.MEtype == 'newCell') {
									this.selectNewCell(element);
									this.status = 'selected';
								} else if (!this.inputActive) {
									// current cell was clicked -> activate cell
									this.focus();
									this.status = 'typing';
								}
							} else {
								// multiple cells selected
								this.selectMultipleCells(this.MEelement0, element);
								this.status = 'selectedMulti';
								if (this.inputActive) {
									// deactivate input
									this.blur();
								}
							}
						}
						break;
					case 'extendCell':
						if (mouseAction == 'up') {
							// the user clicked on the extend cell button
							let mouseEvent = this.detectMouseElement(event);
							if (mouseEvent[0] == 'extendCell') {
								this.extendCell(this.MEelement0);
							}
						}
						break;
					case 'tableRow':
						if (this.inputActive) {
							// deactivate input
							this.blur();
						}
						if (element[1] != this.MEelement1 || mouseAction == 'down') {
							// in case row selection changed: update selection indicator
							this.selectRows(this.MEelement0, element[1]);
							this.MEelement1 = element[1];
							this.status = 'selectedMulti';
							event.preventDefault();
						}
						break;
					case 'tableColumn':
						if (this.inputActive) {
							// deactivate input
							this.blur();
						}
						if (element[0] != this.MEelement1 || mouseAction == 'down') {
							// in case row selection changed: update selection indicator
							this.selectColumns(this.MEelement0, element[0]);
							this.MEelement1 = element[0];
							this.status = 'selectedMulti';
							event.preventDefault();
						}
						break;
				}
			}
		}
		
		// check if the mouse action has ended
		if (mouseAction == 'up') {
			this.MEactive = false;
		}
	}
	
	detectMouseElement(event) {
		// detect which item the mouse is over
		// -> currentCell, newCell, extendCell, tableRow, tableColumn, corner, outside
		
		// first check if mouse is inside table!
		let mousePos = this.getMousePosition(event);
		let cell = this.getTablePosition(event);
		let lx = this.labelSize[0];
		let ly = this.labelSize[1];
		let x = mousePos[0];
		let y = mousePos[1];
		if (x > 0 && x < lx && y > ly) {
			return ['tableRow', cell[1]];
		} else if (x > lx && y > 0 && y < ly) {
			return ['tableColumn', cell[0]];
		} else if (x > 0 && x < lx && y > 0 && y < ly) {
			return ['corner', 0];
		} else if (x < 0 || y < 0 || x > this.sizeAbs[0] || y > this.sizeAbs[1]) {
			// the mouse is outside the spreadsheet
			// -> the return array indicates in which direction of the table the mouse is located
			let outX = 0;
			let outY = 0;
			if (x < 0) {
				outX = -1;
			} else if (x > this.sizeAbs[0]) {
				outX = 1;
			}
			if (y < 0) {
				outY = -1;
			} else if (y > this.sizeAbs[1]) {
				outY = 1;
			}
			return ['outside', [outX, outY]];
		}
		
		// next we have to compare the mouse position to the position of the currently selected cell
		if (this.status != 'selected' && this.status != 'typing') {
			// no cell is selected -> return new cell at mouse position
			return ['newCell', this.getTablePosition(event)];
		} else {
			mousePos = this.table.getMousePosition(event, this.table);
			let currentCell = this.getCellCenter(this.currentSelection)
			let dx = mousePos[0] - currentCell[0];
			let dy = mousePos[1] - currentCell[1];
			let sx = this.cellSize[0] / 2;
			let sy = this.cellSize[1] / 2;
			let s1 = this.extendCellButtonSize;
			let lw = this.lineWidth;
			if (Math.abs(dx - sx) < s1 && Math.abs(dy - sy) < s1) {
				return ['extendCell', this.currentSelection];
			} else if (Math.abs(dx) < sx && Math.abs(dy) < sy) {
				return ['currentCell', this.currentSelection];
			} else {
				return ['newCell', this.getTablePosition(event)];
			}
		}
	}
	
	focus() {
		this.inputActive = true;
		this.input.node.focus();
		this.input.node.style.zIndex = 1;
	}
	
	blur() {
		this.inputActive = false;
		this.input.node.blur();
		this.input.node.style.zIndex = 0;
	}
	
	keypressed(event) {
		let preventDefault = false;
		if (this.status == 'selected') {
			if (event.key == 'ArrowDown') {
				this.changeSelection([0,1]);
				preventDefault = true;
			} else if (event.key == 'ArrowUp') {
				this.changeSelection([0,-1]);
				preventDefault = true;
			} else if (event.key == 'ArrowLeft') {
				this.changeSelection([-1,0]);
				preventDefault = true;
			} else if (event.key == 'ArrowRight') {
				this.changeSelection([1,0]);
				preventDefault = true;
			} else if (event.key == 'Enter') {
				this.status = 'typing';
				this.focus();
				preventDefault = true;
			} else if (event.key == 'Tab') {
				this.changeSelection([1,0]);
				preventDefault = true;
			} else if (event.key.length == 1) {
				this.input.node.value = '';
				this.status = 'typing';
				this.focus();
			}
		} else if (this.status == 'typing') {
			if (event.key == 'ArrowDown') {
				this.changeSelection([0,1]);
				preventDefault = true;
			} else if (event.key == 'ArrowUp') {
				this.changeSelection([0,-1]);
				preventDefault = true;
			} else if (event.key == 'ArrowRight') {
				// check if cursor position is at the end of input
				// if so -> select field to the right
				if (this.input.node.selectionStart == this.input.node.value.length) {
					this.changeSelection([1,0]);
					preventDefault = true;
				}
			} else if (event.key == 'ArrowLeft') {
				// check if cursor position is at the beginning of input
				// if so -> select field to the left
				if (this.input.node.selectionEnd == 0) {
					this.changeSelection([-1,0]);
					preventDefault = true;
				}
			} else if (event.key == 'Enter') {
				this.blur();
				this.status = 'selected';
				this.changeSelection([0,1]);
				preventDefault = true;
			} else if (event.key == 'Tab') {
				this.changeSelection([1,0]);
				preventDefault = true;
			} 
		}
		
		if (preventDefault) {
			event.preventDefault();
		}
	}
	
	// ------------- SELECT CELLS (SINGLE, MULTIPLE, ROWS, COLUMNS) -------------------//
	
	changeSelection(offset) {
		let cell = mag.vectorMath(this.currentSelection, offset, '+');
		if (cell[0] < 0) {
			cell[0] = 0;
		} else if (cell[0] > this.columns - 1) {
			cell[0] = this.columns - 1;
		}
		if (cell[1] < 0) {
			cell[1] = 0;
		} else if (cell[1] > this.rows - 1) {
			cell[1] = this.rows - 1;
		}
		this.selectNewCell(cell);
	}
	
	selectNewCell(cell) {
		this.saveOldResult();
		let element = this.getCellFromTable(cell);
		if (element == undefined) {
			// cell was not yet defined -> start with empty input
			this.input.value = '';
		} else if (element.div == undefined && Array.isArray(element.childCells)) {
			// cell was only defined as a parent of another cell but has no value yet
			this.input.value = '';
		} else {
			// the cell already has a value
			this.input.value = element.input;
			if (element.div) {element.div.hidden = true;}
		}
		
		this.currentSelection = cell;
		this.showSelection(cell);
		this.ensureCellVisibility(cell);
		this.showDependencies(cell);
	}
	
	selectMultipleCells(cell1, cell2) {
		this.saveOldResult();
		this.currentSelection = [cell1, cell2];
		this.showSelection(cell1, cell2);
	}
	
	selectRows(row1, row2) {
		let cell1 = [0, row1];
		let cell2 = [this.columns - 1, row2];
		this.selectMultipleCells(cell1, cell2);
	}
	
	selectColumns(column1, column2) {
		let cell1 = [column1, 0];
		let cell2 = [column2, this.rows - 1];
		this.selectMultipleCells(cell1, cell2);
	}
	
	extendCell(event) {
		console.log('TO DO: implement extend cell');
	}
	
	//------------- EXTEND CELL -> EQUATION FOR MULTIPLE CELLS ------------------------//
	
	extendCell(cell) {
		
	}
	
	//--------- MANAGE GRAPHICS ELEMENTS -----------------------------------------------//
	
	showSelection(cellStart, cellStop = undefined) {
		if (cellStop == undefined) {
			let [path1, path2] = this.cellBorderPath(cellStart);
			//this.cellSelection.node.setAttribute('d', path1);
			this.extendCellButton.node.setAttribute('d', path2);
			let pos = this.getCellCenter(cellStart);
			this.input.position = pos;
			this.showInfoBox(cellStart);
		} else {
			let [path1, path2] = this.multiCellBorderPath(cellStart, cellStop);
			//this.cellSelection.node.setAttribute('d', path1);
			if (cellStart[0] == cellStop[0] || cellStart[1] == cellStop[1]) {
				this.extendCellButton.node.setAttribute('d', path2);
			} else {
				this.extendCellButton.node.setAttribute('d', '');
			}
			this.blur();
			this.highlightParents.node.setAttribute('d', '');
			this.highlightChildren.node.setAttribute('d', '');
			//this.infoBox.node.setAttribute('d', '');
			this.infoBoxText.hidden = true;
		}
	}
	
	showSelection2(cellStart, cellStop = undefined) {
		if (cellStop == undefined) {
			let [path1, path2] = this.cellBorderPath(cellStart);
			let pos = this.getCellCenter(cellStart);
			this.cellSelection2.node.setAttribute('d', path1);
		} else {
			let [path1, path2] = this.multiCellBorderPath(cellStart, cellStop);
			this.cellSelection2.node.setAttribute('d', path1);
		}
	}
	
	showInfoBox(cell) {
		let pos = this.getCellCenter(cell);
		pos = [pos[0] - 0.45 * this.cellSize[0], pos[1] + 0.75 * this.cellSize[1]];
		this.infoBoxText.position = pos;
		let text = this.getInfoText(cell);
		if (text == '') {
			//this.infoBox.node.setAttribute('d', '');
			this.infoBoxText.hidden = true;
		} else {
			this.infoBoxText.span.innerHTML = text;
			this.infoBoxText.hidden = false;
			let bbox = this.infoBoxText.span.getBoundingClientRect();
			let minX = this.cellSize[0] * cell[0];
			let maxX = minX + this.infoBoxText.span.scrollWidth + 0.1 * this.cellSize[0];
			let minY = this.cellSize[1] * (cell[1] + 1);
			let maxY = minY + this.infoBoxText.span.scrollHeight + 0.5 * this.cellSize[1];
			let path = `M ${maxX} ${maxY} L ${minX} ${maxY} L ${minX} ${minY} L ${maxX} ${minY} L ${maxX} ${maxY}`;
			//this.infoBox.node.setAttribute('d', path);
		}
	}
	
	getInfoText(cell) {
		let element = this.getCellFromTable(cell);
		let str;
		if (element == undefined) {
			return '';
		} else if (element.input == undefined) {
			return '';
		} else if (element.magEquation.RPN.length == 1 &&  element.magEquation.RPN[0][0] == 'number') {
			return '';
		} else {
			if (element.type == 'equation') {
				str = `= ${mag.numberToString(element.result)}`;
			} else if (element.type == 'string') {
				str = `= NaN<Br>(${element.result})`;
			}
			let len = element.parentCells.length;
			if (len > 0) {
				str = `${str}<Br>_______________<Br>linked cells:`
				for (let i = 0; i < len; i++) {
					let parentCell = element.parentCells[i];
					if (typeof parentCell == 'string') {
						let value = mag.variables[parentCell];
						if (value == undefined) {
							value = 'NaN';
						} else {
							value = mag.numberToString(value);
						}
						str = `${str}<Br>- ${parentCell} = ${value}`;
					} else {
						// cell range
						let value = mag.cellRangeToArray(parentCell[0], parentCell[1]);
						value = mag.numberToString(value);
						str = `${str}<Br>- ${parentCell[0]}:${parentCell[1]} = ${value}`;
					}
				}
			}
		}
		return str;
	}
	
	cellBorderPath(cell) {
		let center = this.getCellCenter(cell);
		let minX = center[0] - this.cellSize[0] / 2;
		let maxX = center[0] + this.cellSize[0] / 2;
		let minY = center[1] - this.cellSize[1] / 2;
		let maxY = center[1] + this.cellSize[1] / 2;
		let d = this.extendCellButtonSize;
		let path1 = `M ${maxX} ${maxY} L ${minX} ${maxY} L ${minX} ${minY} L ${maxX} ${minY} L ${maxX} ${maxY}`;
		let path2 = `M ${maxX+d} ${maxY+d} L ${maxX+d} ${maxY-d} L ${maxX-d} ${maxY-d} L ${maxX-d} ${maxY+d} L ${maxX+d} ${maxY+d}`;
		return [path1, path2];
	}
	
	multiCellBorderPath(cellStart, cellStop) {
		let center1 = this.getCellCenter(cellStart);
		let center2 = this.getCellCenter(cellStop);
		let minMax = mag.listMinMax([center1, center2]);
		let minX = minMax[0][0] - this.cellSize[0] / 2;
		let maxX = minMax[1][0] + this.cellSize[0] / 2;
		let minY = minMax[0][1] - this.cellSize[1] / 2;
		let maxY = minMax[1][1] + this.cellSize[1] / 2;
		let d = this.extendCellButtonSize;
		let path1 = `M ${minX} ${minY} L ${minX} ${maxY} L ${maxX} ${maxY} L ${maxX} ${minY} L ${minX} ${minY}`;
		let path2 = `M ${maxX+d} ${maxY+d} L ${maxX+d} ${maxY-d} L ${maxX-d} ${maxY-d} L ${maxX-d} ${maxY+d} L ${maxX+d} ${maxY+d}`;
		return [path1, path2];
	}
	
	showDependencies(cell) {
		let element = this.getCellFromTable(cell);
		
		if (element != undefined) {
			// set path for parent cells
			let path = '';
			let len = element.parentCells.length;
			for (let i = 0; i < len; i++) {
				let parentCell = element.parentCells[i];
				if (typeof parentCell == 'string') {
					// single cells
					path += this.cellBorderPath(mag.stringToCell(parentCell))[0];
				} else {
					// cell range
					let cell1 = mag.stringToCell(parentCell[0]);
					let cell2 = mag.stringToCell(parentCell[1]);
					path += this.multiCellBorderPath(cell1, cell2)[0];
				}
			}
			this.highlightParents.node.setAttribute('d', path);
		
			// set path for children cells
			path = '';
			len = element.childCells.length;
			for (let i = 0; i < len; i++) {
				path += this.cellBorderPath(mag.stringToCell(element.childCells[i]))[0];
			}
			this.highlightChildren.node.setAttribute('d', path);
		} else {
			this.highlightParents.node.setAttribute('d', '');
			this.highlightChildren.node.setAttribute('d', '');
		}
	}
	
	ensureCellVisibility(cell) {
		let pos = this.getCellCenter(cell);
		let performScroll = false;
		
		// check x position
		let minCell = pos[0] - this.cellSize[0] / 2;
		let maxCell = pos[0] + this.cellSize[0] / 2;
		let minTable = this.labelSize[0] - this.table.position[0];
		let maxTable = this.sizeAbs[0] - this.table.position[0];
		if (minCell < minTable) {
			this.scrollOuterDiv.node.scrollLeft = minCell;
			performScroll = true;
		} else if (maxCell > maxTable) {
			this.scrollOuterDiv.node.scrollLeft = maxCell - this.sizeAbs[0] + this.labelSize[0];
			performScroll = true;
		}
		
		// check y position
		minCell = pos[1] - this.cellSize[1] / 2;
		maxCell = pos[1] + this.cellSize[1] / 2;
		minTable = this.labelSize[1] - this.table.position[1];
		maxTable = this.sizeAbs[1] - this.table.position[1];
		if (minCell < minTable) {
			this.scrollOuterDiv.node.scrollTop = minCell;
			performScroll = true;
		} else if (maxCell > maxTable) {
			this.scrollOuterDiv.node.scrollTop = maxCell - this.sizeAbs[1] + this.labelSize[1];
			performScroll = true;
		}
		
		if (performScroll) {
			this.scroll();
		}
	}
	
	//------------- ADD VALUES INTO TABLE -------------------------------//
	
	saveOldResult() {
		if (this.status == 'typing' || this.status == 'selected') {
			// save value of the previously selected cell
			let cell = this.getCellFromTable(this.currentSelection);
			let value = this.input.value;
			if (cell == undefined) {
				// cell was not yet defined
				if (value != '') {
					// if user has entered a value, initialize the cell
					this.addCellToTable(this.currentSelection, value);
				}
			} else if (cell.div == undefined && Array.isArray(cell.childCells)) {
				// cell was only defined as a parent of another cell but has no value yet
				if (value != '') {
					// if user has entered a value, initialize the cell
					this.addCellToTable(this.currentSelection, value, cell.childCells);
				}
			} else {
				// the cell has previously been initialized and has to be updated
				this.updateCell(this.currentSelection, this.input.value);
				if (cell.div) {cell.div.hidden = false;}
			}
		}
	}
	
	addCellToTable(cell, value, children = []) {
		let type;
		let div;
		let str = mag.cellToString(cell);
		//console.log(`add cell: ${str}`);
		let center = this.getCellCenter(cell);
		let eq = new magEquation(value);
		let result = eq.getValue();
		// if value can be treated as an equation, the result is shown, otherwise the input string
		if (typeof result == 'string') {
			type = 'string';
			div = new magDOMelement(this.table, 'div', {position: center, size: this.cellSizeSmall,
				alignment: 11, scaling: 0, font: this.font, stroke: {style: 'none'}, text: value, layer: 'bottom'});
		} else {
			type = 'equation';
			div = new magDOMelement(this.table, 'div', {position: center, size: this.cellSizeSmall, layer: 'bottom',
				alignment: 11, scaling: 0, font: this.font, stroke: {style: 'none'}, text: mag.numberToString(result)});
			mag.variables[str] = result;
		}
		let newElement = {div: div, input: value, magEquation: eq, result: result, type: type, childCells: children, parentCells: []};
		// add the element to the valueMatrix
		this.valueMatrix[str] = newElement;
		
		// check for depencies on other cells
		this.checkDependencies(newElement, str);
		
		// update potential children
		this.handleCellChange(str);
	}
	
	updateCell(cell, value) {
		let str = mag.cellToString(cell);
		let element = this.valueMatrix[str];
		if (element.input != value) {
			// input of cell has changed -> calculate new values
			element.input = value;
			element.magEquation.equationString = value;
			this.calculateCellResult(str);
			this.checkDependencies(element, str);
			this.handleCellChange(str);
		}
	}
	
	calculateCellResult(cellString) {
		let element = this.valueMatrix[cellString];
		let result = element.magEquation.getValue();
		element.result = result;
		if (typeof result == 'string') {
			// if element was previously an equation, remove it from variable list
			if (element.type == 'equation') {
				delete mag.variables[cellString];
			}
			element.type = 'string';
			element.div.text = element.input;
		} else {
			element.type = 'equation';
			element.div.text = mag.numberToString(result);
			// add result to variable list
			mag.variables[cellString] = result;
		}
	}
}

class magDOMinputSpreadsheet1 {
	constructor(parentNode, size = [10, 10], options = {}) {
		
		
		let colorCell = mag.getColor([50, 50, 50]);
		let colorLine = mag.getColor([255, 255, 255]);
		let bgdImage1 = `linear-gradient(to bottom, transparent 90%, ${colorLine} 90%)`;
		let bgdImage2 = `linear-gradient(to right, ${colorCell} 98%, ${colorLine} 98%)`;
		let bgdSize = '100px 20px';
		
		this.div = new magDOMelement(parentNode, 'div', {position: [0, 0], size: [100, 100], alignment: 0, st});
		this.div.fill = {image: `${bgdImage1}, ${bgdImage2}`, size: bgdSize};
		//parentNode.stroke = {color: 'black', width: '2px'}
		/*
		this.matrixSize = matrixSize;
		this.activeInput = false;
		this.activePos = [0, 0];
		this.inputMatrix = [];
		this.status = 'idle';
		
		for (let column = 0; column < matrixSize[0]; column++) {
			let inputRow = [];
			for (let row = 0; row < matrixSize[1]; row++) {
				let pos = mag.vectorMath(offset, [column, row], '*');
				pos = mag.vectorMath(position, pos, '+');
				let newInput = new magDOMinputBasic(parentNode, pos, size, options);
				newInput.onEvent('focus', this, 'active');
				newInput.onEvent('blur', this, 'active');
				newInput.node.dataset.column = column;
				newInput.node.dataset.row = row;
				newInput.node.dataset.id = magVars.inputCounter;
				inputRow.push(newInput);
			}
			this.inputMatrix.push(inputRow);
		}
		
		parentNode.onEvent('mouseover', this, 'hover');
		parentNode.onEvent('mouseout', this, 'hover');
		parentNode.keyup('Enter', this, 'key');
		parentNode.keyup('Tab', this, 'key');
		parentNode.onEvent('input', this, 'change');
		
		this.identifier = magVars.inputCounter;
		magVars.inputCounter++;
		
		*/
	}
	
	hover(event) {
		if (event.target.dataset.id == this.identifier) {
			let row = event.target.dataset.row;
			let column = event.target.dataset.column;
			if (event.type === 'mouseover') {
				this.inputMatrix[column][row].hover = true;
			} else if (event.type === 'mouseout') {
				this.inputMatrix[column][row].hover = false;
			}
			this.inputMatrix[column][row].checkOverflow();
		}
	}
	
	active(event) {
		if (event.target.dataset.id == this.identifier) {
			let row = event.target.dataset.row;
			let column = event.target.dataset.column;
			if (event.type === 'focus') {
				this._activeRow = row;
				this.activeCol = column;
			} else if (event.type === 'blur') {
				this.activeField = false;
			}
		}
	}
	
	change(event) {
		if (event.target.dataset.id == this.identifier) {
			let row = event.target.dataset.row;
			let column = event.target.dataset.column;
			this.inputMatrix[column][row].checkOverflow();
		}
	}
	
	key(event) {
		console.log(event.key);
		if (this.activeField) {
			let oldColumn = 0;
			switch (event.key) {
				case 'Enter':
					this.activeField = false;
					break;
				case 'Tab':
					this.activeCol++;
					if (this.activeCol == 0) {
						this.activeRow++;
					}
					break;
				case 'ArrowLeft':
					this.activeCol++;
					break;
				case 'ArrowRight':
					this.activeCol--;
					break;
				case 'ArrowUp':
					this.activeRow--;
					break;
				case 'ArrowDown':
					this.activeRow++;
			}
		}
	}
	
	set activeField(field) {
		// deactivate previous field
		if (this._activeField) {
			this._activeField.active = false;
		}
		// activate new field
		if (field instanceof magDOMinputBasic) {
			this._activeField = field;
			this._activeField.active = true;
		} else {
			this._activeField = false;
		}
	}
	
	get activeField() {
		return this._activeField;
	}
}

class magDOMparagraph extends magDOMelement  {
	
	constructor(parentNode, text = '', position = [0, 0], size = [100, 100], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMparagraph);
		options.size = size;
		options.position = position;
		super(parentNode, 'p', options);
		
		this.insertText(text, options['textStyle'])
	}
}

class magSVGcanvas extends magDOMelement {
	
	/*
		The arguments should be used as follows:
		- parentNode (magNode object / string) -> defines the parent in the DOM tree by the node or the id string
		- options (object) -> defines all settings of the element such as:
			- size ([number, number]) -> size of element (depending on this.scaling in absolute or relative units)
			- position ([number, number]) -> position of element (depending on this.scaling in absolute or relative units)
			- id (string) -> element id [see magElement]
			- alignment (number) -> defines which part of the element the position refers to (see above for definition) [see magElement]
			- scaling (number) -> defines how size and position are interpreted (absolute in pixels or relative as % of parent-width/height) [see magElement]
			- style (object) -> an object containing all style options, e.g. {backgroundColor: 'blue', width: '50%',...} [see magNode]
			- layer (string) -> position in DOM tree; allowed options are 'top', 'bottom', 'before', 'after' (last 2 require reference) [see magNode]
			- reference (magNode object / string) -> defines the reference for the layer options 'before' and 'after' [see magNode]
	
		For details concerning methods and properties see magDOMelement
	*/
	
	constructor(parentNode, position = [0, 0], size = [100, 100], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magSVGcanvas);
		options.size = size;
		options.position = position;
		super(parentNode, 'svg', options);
		this.namespace = options['namespaceURI'];
		
		this.defs = document.createElementNS(this.namespace, 'defs');
		this.node.appendChild(this.defs);
	}
	
	/** ADDING DEFINITIONS TO THE SVG:
	*
	* For example in order to add a linear gradient such as
	*
	* <linearGradient id = "g1" x1 = "50%" y1 = "50%" x2 = "60%" y2 = "60%">
   * 	  <stop stop-color = "green" offset = "0%"/>
   * 	  <stop stop-color = "pink" offset = "100%"/>
   * </linearGradient>
	*
	* the parameters are as follows:
	* -> mainTag = 'linearGradient'
	* -> mainAttributes = {id: 'g1', x1: '50%', y1: '50%', x2: '60%', y2: '60%'}
	* -> secondaryTags = ['stop', 'stop']
	* -> secondaryAttributes = [{stop-color: 'green', offset: '0%'}, {stop-color: 'pink', offset: '100%'}]
	*/
	
	addDef(mainTag, mainAttributes, secondaryTags = [], secondaryAttributes = []) {
		let mainElement = this.addTag(mainTag, mainAttributes, this.defs, this.namespace);
		
		let len = secondaryTags.length;
		let secondaryElements = [];
		for (let i = 0; i < len; i++) {
			let second = this.addTag(secondaryTags[i], secondaryAttributes[i], mainElement, this.namespace);
			secondaryElements.push(second);
		}
		
		return {mainElement: mainElement, secondaryElements: secondaryElements};
	}
	
	// colors are defined by [offset, R, G, B, opacity] (opacity is optional)
	// offset is between 0 and 100
	// R, G and B are between 0 and 255
	// opacity between 0 and 1
	defineGradient(id, colorList, direction = [0, 0, 0, 1]) {
		let mainAttributes = {id: id, x1: `${direction[0]}`, y1: `${direction[1]}`, x2: `${direction[2]}`, y2: `${direction[3]}`};
		let secondaryTags = [];
		let secondaryAttributes = [];
		let len = colorList.length;
		for (let i = 0; i < len; i++) {
			secondaryTags.push('stop');
			let opacity = 1;
			if (colorList[i].length == 5) {
				opacity = colorList[i][4]
			}
			let style = `stop-color:rgb(${colorList[i][1]},${colorList[i][2]},${colorList[i][3]});stop-opacity:${opacity}`;
			secondaryAttributes.push({offset: `${colorList[i][0]}%`, style: style});
		}
		return this.addDef('linearGradient', mainAttributes, secondaryTags, secondaryAttributes);
	}
}

class magSVGelement extends magElement {
	
	/*
		For details about properties and methods check magElements.
	*/
	
	constructor(canvas, tag, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magSVGelement);
		if (canvas instanceof magSVGcanvas || canvas instanceof magSVGelement) {
			super(canvas, tag, options);
		} else {
			let svgCanvas = new magSVGcanvas(canvas, options);
			super(svgCanvas, tag, options);
		}
		this.canvas = canvas;
		
		if (options['stroke']) {
			this.stroke = options['stroke'];
		} else {
			this._stroke = {};
		}
		
		if (options['fill']) {
			this.fill = options['fill'];
		} else {
			this._fill = {};
		}
	}
	
	/**
	* The stroke is defined by the following settings:
	* {width: 0.5, color: [100, 50, 70], linecap: 'butt', ...}
	*
	* Attributes are:
	* width (string or number) -> numbers are scaled according to scaling, strings are fixed (e.g. '2px')
	* scaling (number) -> define the scaling if width is defined as a number (if undefined, this.scaling is used)
	* color (string or array) -> see mag.getColor() for details
	* opacity (number) -> value between 0 and 1
	* linecap (string) -> defines the line ending (only for paths/lines), possible values: 'butt', 'round', 'square'
	* dasharray (array) -> defines dashed lines (usually an even number: [dash, gap, dash, gap,...])
	* dashoffset (number) -> offset of the first dash
	* linejoin (string) -> for multiple line-segments - defines how the line joints look like, values: 'arcs', 'bevel', 'miter', 'miter-clip', 'round'
	* miterlimit (number) -> if linejoin = 'miter' it defines the str.width/miterlength ratio at which the 'miter' is converted to a 'bevel'
	*/
	set stroke(settings) {
		// merge settings with previous settings
		if (this._stroke) {
			this._stroke = mag.mergeObjects(settings, this._stroke);
		} else {
			this._stroke = settings;
		}
		
		if (settings.width) {
			this.scaleStroke();
		}
		
		if (settings.color) {
			this.node.style['stroke'] = mag.getColor(settings.color);
		}
		
		if (settings.opacity) {
			this.node.style['stroke-opacity'] = `${settings.opacity}`;
		}
		
		if (settings.linecap) {
			this.node.style['stroke-linecap'] = settings.linecap;
		}
		
		if (settings.dasharray) {
			let str = `${settings.dasharray[0]}`;
			let len = settings.dasharray.length;
			for (let i = 1; i < len; i++) {
				str = `${str} ${settings.dasharray[i]}`;
			}
			this.node.style['stroke-dasharray'] = str;
		}
		
		if (settings.dashoffset) {
			this.node.style['stroke-dashoffset'] = `${settings.dashoffset}`;
		}
		
		if (settings.linejoin) {
			this.node.style['stroke-linejoin'] = settings.linejoin;
		}
		
		if (settings.miterlimit) {
			this.node.style['stroke-miterlimit'] = `${settings.miterlimit}`;
		}
	}
	
	get stroke() {
		return this._stroke;
	}
	
	set strokeWidth(width) {
		this.stroke.width = width;
		this.scaleStroke();
	}
	
	get strokeWidth() {
		return this.stroke.widthAbs;
	}
	
	scaleStroke() {
		if (this._stroke.width) {
			// calculate absolute stroke width
			if (typeof this._stroke.width == 'string') {
				this._stroke.widthAbs = parseFloat(this._stroke.width);
				this.node.style['stroke-width'] = this._stroke.width;
			} else if (typeof this._stroke.width == 'number' && this._stroke.scaling) {
				this._stroke.widthAbs = this.xNumberAbs(this._stroke.width, this._stroke.scaling);
				this.node.style['stroke-width'] = `${this._stroke.widthAbs}px`;
			} else if (typeof this._stroke.width == 'number') {
				this._stroke.widthAbs = this.xNumberAbs(this._stroke.width);
				this.node.style['stroke-width'] = `${this._stroke.widthAbs}px`;
			}
		}
	}
	
	/**
	* The fill is defined by the following settings:
	* {color: [100, 50, 70], opacity: 0.2, ...}
	*
	* Attributes are:
	* color (string or array) -> see mag.getColor() for details
	* opacity (number) -> value between 0 and 1
	* rule (string) -> which part of a shape (e.g. polygon) is filled, possible values: 'nonzero' or 'evenodd'
	*/
	set fill(settings) {
		// merge settings with previous settings
		if (this._fill) {
			this._fill = mag.mergeObjects(settings, this._fill);
		} else {
			this._fill = settings;
		}
		
		if (settings.color) {
			this.node.style['fill'] = mag.getColor(settings.color);
		}
		
		if (settings.opacity) {
			this.node.style['fill-opacity'] = `${settings.opacity}`;
		}
		
		if (settings.rule) {
			this.node.style['fill-rule'] = settings.rule;
		}
	}
	
	get fill() {
		return this._fill;
	}
}

class magSVGpath extends magSVGelement {
	
	/** The SVG defines a path element based on the array definition.
	*   The definition array contains entries of the type:
	*   [['M', 10, 10], ['L', 20, 20], ['C', 30, 30, 45, 40, 35, 50],...]
	*
	*   There are a few different item types:
	*   M, x, y -> move to position (x,y) - always the first element!!!
	*   L, x, y -> line to position (x,y)
	*   C, x1, y1, x2, y2, x, y -> cubic Bezier curve (CBC) to (x,y) with control points (x1,y1) and (x2,y2)
	*   S, x2, y2, x, y -> CBC following another CBC (the shared points get's 'symmetric' control points)
	*   Q, x1, y1, x, y -> quadratic Bezier curve (QBC) to (x,y) with control point (x1,y1)
	*   T, x, y -> QBC following another QBC (the shared points get's 'symmetric' control points)
	*   A, rx, ry, rot, f1, f2, x, y -> arc to (x,y), radii (rx, ry), ratation angle rot and
	*                                   flags f1 and f2 to select the correct arc
	*                                   (if there are multiple possibilities)
	*   Z -> to close the path
	*
	*   Additionally some transformations can be specified in options:
	*   - rotation: {angle: 90, center: [x, y], scaling: 0}
	*   - translation: {distance: [x, y], scaling: 0}
	*   - stretch: {factor: [x, y], center: [x, y], scaling: 0}
	*   The three transformations are performed in the above order!
	*
	*   The details of the path (points and control-points) can also be highlighted by setting the option
	*   highlight: {points: {size: 2, fill: 'red',...}, stroke: {width: 1, dasharray: [1,1],...}}
	*/
	
	constructor(canvas, commandList, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magSVGpath);
		super(canvas, 'path', options);
		
		this._commandListAbs = this._getCommandListAbs(commandList);
		this._calculatePathSegments();
		this.calculateRect();
		this._setPathDefinition();
	}
	
	replaceCommand(index, newCommand) {
		this._commandListAbs[index] = this._getCommandAbs(newCommand);
		this.setElement();
	}
	
	setElement() {
		this._updatePathSegments();
		this._setPathDefinition();
		this.calculateRect();
	}
	
	set positionAbs(value) {
		let distance = mag.vectorMath(value, this._positionAbs, '-');
		if (distance[0] > 1 || distance[0] < -1 || distance[1] > 1 || distance[1] < -1) {
			this.applyTranslation(distance);
		}
	}
	
	get positionAbs() {
		return this._positionAbs;
	}
	
	// ------------------- SETTING SIZE AND POSITION ------------------- //
	
	calculateRect() {
		let len = this.path.length;
		let allExtrema = [];
		for (let n = 0; n < len; n++) {
			allExtrema.push(...this.path[n].rect);
		}
		let rect = mag.boundingBox(allExtrema);
		this._positionAbs = rect[0];
		this._sizeAbs = rect[1];
	}
	
	// ------------------- PATH TRANSFORMATIONS ----------------------- //
	
	applyRotation(rotation) {
		let center = this.pointAbs(this.rotation.center);
		pointAbs = mag.rotatePoint(pointAbs, this.rotation.angle, center);
	}
	
	applyTranslation(distance) {
		this._positionAbs = mag.vectorMath(this._positionAbs, distance, '+');
		
		// shift the path segments
		let len = this.path.length;
		for (let n = 0; n < len; n++) {
			this.path[n].applyTranslation(distance);
		}
		
		this._setPathDefinition();
	}
	
	applyStretch(stretch) {
		
		pointAbs = mag.stretchPoint(pointAbs, this.stretch.factor, this.stretch.center);
	}
	
	// ------------------- SETTING COMMAND LIST ----------------------- //
	
	set commandList(list) {
		this.commandListAbs = this._getCommandListAbs(list);
	}
	
	get commandList() {
		return this._getCommandListRel(this._commandListAbs);
	}
	
	set commandListAbs(list) {
		this._commandListAbs = list;
		this.setElement();
	}
	
	get commandListAbs() {
		return this._commandListAbs;
	}
	
	// transform a relative command list into an absolute command list
	_getCommandListAbs(list) {
		let len = list.length;
		let listAbs = [];
		for (let n = 0; n < len; n++) {
			listAbs.push(this._getCommandAbs(list[n]));
		}
		return listAbs;
	}
	
	// transform a relative command into an absolute one
	_getCommandAbs(command) {
		switch (command[0]) {
			case 'M':
			case 'L':
			case 'T':
				// commands with syntax ['X', x, y]
				return [command[0], ...this.pointAbs([command[1], command[2]])];
			case 'S':
			case 'Q':
				// commands with syntax ['X', x1, y1, x, y]
				return [command[0], ...this.pointAbs([command[1], command[2]]),
				                    ...this.pointAbs([command[3], command[4]])];
			case 'C':
				// commands with syntax ['X', x1, y1, x2, y2, x, y]
				return [command[0], ...this.pointAbs([command[1], command[2]]),
					                 ...this.pointAbs([command[3], command[4]]),
				                    ...this.pointAbs([command[5], command[6]])];
			case 'A':
				// arc with syntax ['A', rx, ry, rot, f1, f2, x, y]
				return [command[0], ...this.pointAbs([command[1], command[2]]),
					                 command[3], command[4], command[5],
				                    ...this.pointAbs([command[6], command[7]])];
			case 'Z': 
				// close path
				return ['Z'];
			default:
				console.log(`ERROR: unknown <path> command: ${command}`);
				return [];
		}
	}
	
	// transform an absolute command list into a relative command list
	_getCommandListRel(list) {
		let len = list.length;
		let listRel = [];
		for (let n = 0; n < len; n++) {
			listRel.push(this._getCommandRel(list[n]));
		}
		return listRel;
	}
	
	// transform an absolute command into a relative one
	_getCommandRel(command) {
		switch (command[0]) {
			case 'M':
			case 'L':
			case 'T':
				// commands with syntax ['X', x, y]
				return [command[0], ...this.pointRel([command[1], command[2]])];
			case 'S':
			case 'Q':
				// commands with syntax ['X', x1, y1, x, y]
				return [command[0], ...this.pointRel([command[1], command[2]]),
				                    ...this.pointRel([command[3], command[4]])];
			case 'C':
				// commands with syntax ['X', x1, y1, x2, y2, x, y]
				return [command[0], ...this.pointRel([command[1], command[2]]),
					                 ...this.pointRel([command[3], command[4]]),
				                    ...this.pointRel([command[5], command[6]])];
			case 'A':
				// arc with syntax ['A', rx, ry, rot, f1, f2, x, y]
				return [command[0], ...this.pointRel([command[1], command[2]]),
					                 command[3], command[4], command[5],
				                    ...this.pointRel([command[6], command[7]])];
			case 'Z': 
				// close path
				return ['Z'];
			default:
				console.log(`ERROR: unknown <path> command: ${command}`);
				return '';
		}
	}
	
	// ------------------- SETTING PATH STRING ------------------------ //
	
	// compile the path string from this.commandListAbs
	_setPathDefinition() {
		let len = this.commandListAbs.length;
		let str = '';
		for (let n = 0; n < len; n++) {
			str = str + this._command2string(this.commandListAbs[n]);
		}
		this.node.setAttribute('d', str);
	}
	
	// transform a command into the according string
	_command2string(command) {
		let str = `${command[0]}`;
		let len = command.length;
		for (let n = 1; n < len; n++) {
			str = `${str} ${command[n]}`;
		}
		return str;
	}
	
	// ------------------- HANDLING PATH SEGMENTS --------------------- //
	
	// calculate a list of path-objects which contain the essentian information for every path-segment:
	// -> pathObj = {type: 'Q', start: [x,y], end: [x,y], cp: [x,y], rect = [[xmin,ymin],[xmax,ymax]]}
	_calculatePathSegments() {
		let len = this.commandListAbs.length;
		this.path = [];
		for (let n = 0; n < len; n++) {
			switch (this.commandListAbs[n][0]) {
				case 'M':
				case 'L':
				case 'Z':
					this.path.push(new _magSVGpathLine(this, n));
					break;
				case 'A':
					this.path.push(new _magSVGpathArc(this, n));
					break;
				case 'T':
				case 'Q':
					this.path.push(new _magSVGpathQBC(this, n));
					break;
				case 'S':
				case 'C':
					this.path.push(new _magSVGpathCBC(this, n));
			}
		}
	}
	
	_updatePathSegments() {
		let len = this.path.length;
		for (let n = 0; n < len; n++) {
			this.path[n].update();
		}
		if (this.outerCorner) {
			this.outerCorner.update();
		}
	}
	
	// ------------------- HIGHLIGHT ---------------------------------- //
	
	enableHighlight() {
		let len = this.path.length;
		for (let n = 0; n < len; n++) {
			this.path[n].enableHighlight(this.canvas);
		}
		//this.outerCorner = new _magSVGpathRect(this, this.canvas);
	}
}

class magSVGline extends magSVGpath {
	
	constructor(canvas, points = [[0, 0], [0, 0]], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magSVGLine);
		
		// create the commant list from the point information
		let commandList = points.map(value => ['L', value[0], value[1]]);
		commandList[0][0] = 'M';
		
		super(canvas, commandList, options);
	}
	
	set points(list) {
		let commandList = list.map(value => ['L', value[0], value[1]]);
		commandList[0][0] = 'M';
		this.commandList = commandList;
	}
	
	get points() {
		return this.commandList.map(value => value.slice(-2));
	}
}

class magSVGpolygon extends magSVGpath {
	
	constructor(canvas, points = [[0, 0], [0, 0]], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magSVGpolygon);
		
		// create the commant list from the point information
		let commandList = points.map(value => ['L', value[0], value[1]]);
		commandList[0][0] = 'M';
		commandList.push(['Z']);
		
		super(canvas, commandList, options);
	}
	
	set points(list) {
		let commandList = list.map(value => ['L', value[0], value[1]]);
		commandList[0][0] = 'M';
		commandList.push(['Z'])
		this.commandList = commandList;
	}
	
	get points() {
		return this.commandList.map(value => value.slice(-2));
	}
}

class magSVGrect extends magSVGpolygon {
	
	constructor(canvas, rect = [[0, 0], [10, 10]], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magSVGpolygon);
		
		let points = [ rect[0], 
		              [rect[0][0] + rect[1][0], rect[0][1]],
		              [rect[0][0] + rect[1][0], rect[0][1] + rect[1][1]],
		              [rect[0][0], rect[0][1] + rect[1][1]]];
		
		super(canvas, points, options);
	}
	
	set points(list) {
		let commandList = list.map(value => ['L', value[0], value[1]]);
		commandList[0][0] = 'M';
		commandList.push(['Z'])
		this.commandList = commandList;
	}
	
	get points() {
		return this.commandList.map(value => value.slice(-2));
	}
}

class magSVGcircle extends magSVGpath {
	
	constructor(canvas, center = [0, 0], radius = 5, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magSVGcircle);
		let commandList = [];
		if (radius.length) {
			commandList.push(['M', center[0] - radius[0], center[1]]);
			commandList.push(['A', radius[0], radius[1], 0, 0, 0, center[0] + radius[0], center[1]]);
			commandList.push(['A', radius[0], radius[1], 0, 1, 0, center[0] - radius[0], center[1]]);
			commandList.push(['Z']);
		} else {
			commandList.push(['M', center[0] - radius, center[1]]);
			commandList.push(['A', radius, radius, 0, 0, 0, center[0] + radius, center[1]]);
			commandList.push(['A', radius, radius, 0, 1, 0, center[0] - radius, center[1]]);
			commandList.push(['Z']);
		}
		super(canvas, commandList, options);
		
		this._radius = radius;
		this._center = center;
	}
	
	set radius(value) {
		this._radius = value;
		this.updateCommands();
	}
	
	get radius() {
		return this._radius;
	}
	
	set center(value) {
		this._center = value;
		this.updateCommands();
	}
	
	get center() {
		let center = mag.vectorMath(this.path[1].start, this.path[1].end, '+');
		return mag.vectorMath(center, 2, '/');;
	}
	
	updateCommands() {
		let radius = this._radius;
		let center = this._center;
		let commandList = [];
		if (radius.length) {
			commandList.push(['M', center[0] - radius[0], center[1]]);
			commandList.push(['A', radius[0], radius[1], 0, 0, 0, center[0] + radius[0], center[1]]);
			commandList.push(['A', radius[0], radius[1], 0, 1, 0, center[0] - radius[0], center[1]]);
			commandList.push(['Z']);
		} else {
			commandList.push(['M', center[0] - radius, center[1]]);
			commandList.push(['A', radius, radius, 0, 0, 0, center[0] + radius, center[1]]);
			commandList.push(['A', radius, radius, 0, 1, 0, center[0] - radius, center[1]]);
			commandList.push(['Z']);
		}
		
		this.commandList = commandList;
	}
}

class _magSVGpathSegment {
	
	constructor(path, n) {
		this.path = path;
		this.n = n;
		this.type = path.commandListAbs[n][0];
		this.setVars();
	}
	
	update() {
		this.setVars();
		this.updateHighlight();
	}
	
	enableHighlight() {}
	updateHighlight() {}
	applyTranslation() {}
}

class _magSVGpathLine extends _magSVGpathSegment {
	
	/** Control elements of the type 'L', 'M' and 'Z'
	*/
	
	constructor(path, n) {
		super(path, n);
	}
	
	// --------------------- CALCULATE PARAMETERS ---------------------- //
	
	setVars() {
		if (this.n == 0) {
			// this is the first move command for which this.start = this.end
			this.start = this.path.commandListAbs[this.n].slice(-2);
		} else {
			// the start of all other segments is gievn by the end of the preceding segment
			this.start = this.path.path[this.n - 1].end;
		}
		
		if (this.type == 'L' || this.type == 'M') {
			this.end = this.path.commandListAbs[this.n].slice(-2);
		} else if (this.type == 'Z') {
			this.end = this.path.path[0].start;
		} else {
			console.log(`ERROR: path type does not match: type '${this.type}' is not a line!`);
		}
		
		this.calculateRect();
	}
	
	calculateRect() {
		let xMin = Math.min(this.start[0], this.end[0]);
		let xMax = Math.max(this.start[0], this.end[0]);
		let yMin = Math.min(this.start[1], this.end[1]);
		let yMax = Math.max(this.start[1], this.end[1]);
		
		this.rect = [[xMin, yMin], [xMax, yMax]];
	}
	
	// --------------------- TRANSFORMATIONS --------------------------- //
	
	/** 
	*/
	
	applyTranslation(distance) {
		this.start = mag.vectorMath(this.start, distance, '+');
		this.end = mag.vectorMath(this.end, distance, '+');
		this.rect[0] = mag.vectorMath(this.rect[0], distance, '+');
		this.rect[1] = mag.vectorMath(this.rect[1], distance, '+');
		if (this.type != 'Z') {
			this.path.commandListAbs[this.n][1] = this.end[0];
			this.path.commandListAbs[this.n][2] = this.end[1];
		}
		this.updateHighlight();
	}
	
	// --------------------- HIGHLIGHT --------------------------------- //
	
	/** Highlight is used to show all relevant path parameters to the user.
	*   For a line the only parameter is the end point, as the start point
	*   is controlled by the preceding segment!
	*   This only applies for type 'L', type 'Z' has no parameters itself.
	*/
	
	enableHighlight(canvas) {
		if (this.type != 'Z') {
			
			// define graphics elements
			this.canvas = canvas;
			this.dimension = this.path.strokeWidth;
			let pointOp = magDefaults.magSVGpathElements.pointOp;
			this.graphics = {endPoint: new magSVGcircle(this.canvas, this.end, this.dimension, pointOp)};
			
			// enable user interaction
			this.graphics.endPoint.enableMouseDrag();
			this.graphics.endPoint.onDrag(this, 'endChange', 'drag');
		}
	}
	
	updateHighlight() {
		if (this.graphics) {
			this.graphics.endPoint.center = this.end;
			if (this.dimension != this.path.strokeWidth) {
				this.dimension = this.path.strokeWidth;
				this.graphics.endPoint.radius = this.dimension;
			}
		}
	}
	
	// --------------------- USER EVENTS -------------------------- //
	
	/** Two properties can be influenced by the user: start and end.
	*   The start point is controled by the preceding segment,
	*   the change is therefore envoked by passing the new value.
	*   In contrast, the end point change is directly triggered
	*   by a user event (mouse drag). It's value is therefore set to
	*   the position of the drag element (graphics.endPoint).
	*/
	
	startChange(value) {
		this.start = value;
		this.calculateRect();
	}
	
	endChange() {
		// this function can only be called for type 'L' and 'M'
		
		// set parameters
		this.end = this.graphics.endPoint.center;
		if (this.n == 0) {
			this.start = this.end;
		}
		this.calculateRect();
		
		// update the path commands
		this.path.commandListAbs[this.n][1] = this.end[0];
		this.path.commandListAbs[this.n][2] = this.end[1];
		
		// update subsequent segment
		this.path.path[this.n + 1].startChange(this.end);
		
		// redraw the path
		this.path._setPathDefinition();
	}
}

class _magSVGpathQBC extends _magSVGpathSegment {
	
	// Quadratic Bezier Curve: Either ['Q', x1, y1, x, y] or ['T', x, y]
	
	constructor(path, n) {
		super(path, n);
	}
	
	// --------------------- CALCULATE PARAMETERS ---------------------- //
	
	setVars() {
		this.end = this.path.commandListAbs[this.n].slice(-2);
		this.start = this.path.path[this.n - 1].end;
		if (this.type == 'Q') {
			// type Q has the control point inside the command
			this.cp1 = this.path.commandListAbs[this.n].slice(1, 3);
		} else if (this.type == 'T') {
			// type T takes the control point from the previous segment
			// and mirrors it with respect to the common point (start)
			let cp = this.path.path[this.n - 1].cp1;
			this.cp1 = [2 * this.start[0] - cp[0], 2 * this.start[1] - cp[1]];
		} else {
			console.log(`ERROR: path type does not match: type '${this.type}' is not a QBC!`);
		}
		this.calculateRect();
	}
	
	calculateRect() {
		/** The bounding box of a quadratic Bezier curve can be calculated mathematically:
		*
		*   The idea is that the curve is always confined within it's defining points
		*   start, end and cp. But since it never reaches cp, this condition would lead
		*   to a larger than necessary bounding box.
		*   Instead we use the three points start, end and extreme, with the last one being
		*   the extremum of the Bezier curve itself:
		*
		*   -> the curve is defined by the function:
		*      B(t) = cp + (1-t)^2 (start-cp) + t^2 (end-cp)   (with 0 < t < 1)
		*
		*   -> now to find the extremum of the curve we set dB/dt = 0
		*      => t0 = (start - cp) / (start - 2*cp + end)
		*
		*   -> there are two possibilities here:
		*      1) t0 != [0,1]  (which occurs if start < cp < end || start > cp > end)
		*            -> the extremum lies between start and end and can therefore be neglected
		*      2) 0 < t0 < 1
		*            -> the extremum is given by: 
		*               extreme = (start*end - cp^2) / (start - 2*cp + end)
		*/
		
		let xMin = Math.min(this.start[0], this.end[0]);
		let xMax = Math.max(this.start[0], this.end[0]);
		let yMin = Math.min(this.start[1], this.end[1]);
		let yMax = Math.max(this.start[1], this.end[1]);
		
		if (this.cp1[0] < xMin) {
			xMin = (xMin * xMax - this.cp1[0] * this.cp1[0]) / (xMin + xMax - 2 * this.cp1[0]);
		} else if (this.cp1[0] > xMax) {
			xMax = (xMin * xMax - this.cp1[0] * this.cp1[0]) / (xMin + xMax - 2 * this.cp1[0]);
		}
		
		if (this.cp1[1] < yMin) {
			yMin = (yMin * yMax - this.cp1[1] * this.cp1[1]) / (yMin + yMax - 2 * this.cp1[1]);
		} else if (this.cp1[0] > yMax) {
			yMax = (yMin * yMax - this.cp1[1] * this.cp1[1]) / (yMin + yMax - 2 * this.cp1[1]);
		}
		
		this.rect = [[xMin, yMin], [xMax, yMax]];
	}
	
	// --------------------- TRANSFORMATIONS --------------------------- //
	
	/** 
	*/
	
	applyTranslation(distance) {
		this.start = mag.vectorMath(this.start, distance, '+');
		this.end = mag.vectorMath(this.end, distance, '+');
		this.cp1 = mag.vectorMath(this.cp1, distance, '+');
		this.rect[0] = mag.vectorMath(this.rect[0], distance, '+');
		this.rect[1] = mag.vectorMath(this.rect[1], distance, '+');
		if (this.type == 'Q') {
			this.path.commandListAbs[this.n][1] = this.cp1[0];
			this.path.commandListAbs[this.n][2] = this.cp1[1];
			this.path.commandListAbs[this.n][3] = this.end[0];
			this.path.commandListAbs[this.n][4] = this.end[1];
		} else if (this.type == 'T') {
			this.path.commandListAbs[this.n][1] = this.end[0];
			this.path.commandListAbs[this.n][2] = this.end[1];
		}
		this.updateHighlight();
	}
	
	// --------------------- HIGHLIGHT --------------------------------- //
	
	/** Highlight is used to show all relevant path parameters to the user.
	*   For the quadratic Bezier curve there are two defining parameters:
	*   - the end point
	*   - the control point
	*   The start point is controlled by the preceding segment.
	*   For better illustration, the control point is connected to start
	*   and end by two lines (graphics.controlLine).
	*/
	
	enableHighlight(canvas) {
		
		// define graphics elements
		this.canvas = canvas;
		this.dimension = this.path.stroke.widthAbs;
		let lineOp = magDefaults.magSVGpathElements.lineOp;
		let pointOp = magDefaults.magSVGpathElements.pointOp;
		this.graphics = {
			controlLine: new magSVGpath(this.canvas, [['M', ...this.start], ['L', ...this.cp1], ['L', ...this.end]], lineOp),
			endPoint: new magSVGcircle(this.canvas, this.end, this.dimension, pointOp),
			controlPoint: new magSVGcircle(this.canvas, this.cp1, 0.7 * this.dimension, pointOp)
		}
		
		// enable user interaction
		this.graphics.endPoint.enableMouseDrag();
		this.graphics.endPoint.onDrag(this, 'endChange', 'drag');
		this.graphics.controlPoint.enableMouseDrag();
		this.graphics.controlPoint.onDrag(this, 'cp1Change', 'drag');
	}
	
	updateHighlight() {
		if (this.graphics) {
			let controlLine = [['M', ...this.start], ['L', ...this.cp1], ['L', ...this.end]];
			this.graphics.controlLine.commandList = controlLine;
			this.graphics.endPoint.center = this.end;
			this.graphics.controlPoint.center = this.cp1;
		
			if (this.dimension != this.path.stroke.widthAbs) {
				this.dimension = this.path.stroke.widthAbs
				this.graphics.controlLine.strokeWidth = this.dimension / 3;
				this.graphics.endPoint.radius = this.dimension;
				this.graphics.controlPoint.radius = 0.7 * this.dimension;
			}
		}
	}
	
	// --------------------- USER EVENTS -------------------------- //
	
	/** Three properties can be influenced by the user: start, cp1 and end.
	*   The start point is controled by the preceding segment.
	*   The end point can only be changed by the user.
	*   The control point can be either changed by the user or
	*   by one of the neighboring segments.
	*   The origin of the change is indicated to by origin:
	*   'drag' (user), 'top' (subsequent seg.), 'bottom' (preceding seg.).
	*/
	
	startChange(value) {
		this.start = value;
		
		if (this.type == 'T') {
			// for 'T' a change of the start value also leads to a change of
			// the control point!
			let cp = this.path.path[this.n - 1].cp1;
			cp = [2 * this.start[0] - cp[0], 2 * this.start[1] - cp[1]];
			this.cp1Change('bottom', cp);
		}
		
		this.calculateRect();
		
		// update all graphics elements
		this.updateHighlight();
	}
	
	cp1Change(origin, value = 0) {
		let informBelow, informAbove;
		
		if (this.type == 'Q') {
			// set cp1 and check which other segments need to be informed
			informBelow = false;
			switch (origin) {
				// for type 'Q' the change cannot be triggered from below!
				case 'drag':
					this.cp1 = this.graphics.controlPoint.center;
					informAbove = true;
					break;
				case 'top':
					this.cp1 = value;
					informAbove = false;
					break;
			}
			this.path.commandListAbs[this.n][1] = this.cp1[0];
			this.path.commandListAbs[this.n][2] = this.cp1[1];
		} else if (this.type == 'T') {
			// set cp1 and check which other segments need to be informed
			switch (origin) {
				case 'drag':
					this.cp1 = this.graphics.controlPoint.center;
					informBelow = true;
					informAbove = true;
					break;
				case 'bottom':
					this.cp1 = value;
					informBelow = false;
					informAbove = true;
					break;
				case 'top':
					this.cp1 = value;
					informBelow = true;
					informAbove = false;
					break;
			}
		}
		
		// pass value change to neighboring segments
		if (informBelow) {
			let newCP = [2 * this.start[0] - this.cp1[0], 2 * this.start[1] - this.cp1[1]];
			this.path.path[this.n - 1].cp1Change('top', newCP);
		}
		
		if (informAbove && this.path.path.length > this.n + 1) {
			if (this.path.path[this.n + 1].type == 'T') {
				let newCP = [2 * this.end[0] - this.cp1[0], 2 * this.end[1] - this.cp1[1]];
				this.path.path[this.n + 1].cp1Change('bottom', newCP);
			}
		}
		
		// update all graphics elements
		this.updateHighlight();
		
		// if this is the segment that triggered the change
		// all segments are updated now and the path can be redrawn
		if (origin == 'drag') {
			this.path._setPathDefinition();
		}
	}
	
	endChange() {
		// set parameters
		this.end = this.graphics.endPoint.center;
		this.calculateRect();
		
		// update the path commands
		if (this.type == 'T') {
			this.path.commandListAbs[this.n][1] = this.end[0];
			this.path.commandListAbs[this.n][2] = this.end[1];
		} else if (this.type == 'Q') {
			this.path.commandListAbs[this.n][3] = this.end[0];
			this.path.commandListAbs[this.n][4] = this.end[1];
		}
		
		// update subsequent segment
		if (this.path.path.length > this.n + 1) {
			this.path.path[this.n + 1].startChange(this.end);
		}
		
		// update all graphics elements
		this.updateHighlight();
		
		// redraw the path
		this.path._setPathDefinition();
	}
}

class _magSVGpathCBC extends _magSVGpathSegment {
	
	// Cubic Bezier Curve: either ['C', x1, y1, x2, y2, x, y] or ['S', x2, y2, x, y]
	
	constructor(path, n) {
		super(path, n);
	}
	
	// --------------------- CALCULATE PARAMETERS ---------------------- //
	
	setVars() {
		this.end = this.path.commandListAbs[this.n].slice(-2);
		this.start = this.path.path[this.n - 1].end;
		if (this.type == 'C') {
			// type Q has both control points inside the command
			this.cp1 = this.path.commandListAbs[this.n].slice(1, 3);
			this.cp2 = this.path.commandListAbs[this.n].slice(3, 5);
		} else if (this.type == 'S') {
			// type S takes the 2nd control point of the previous segment
			// and mirrors it with respect to the common point
			let cp = this.path.path[this.n - 1].cp2;
			this.cp1 = [2 * this.start[0] - cp[0], 2 * this.start[1] - cp[1]];
			this.cp2 = this.path.commandListAbs[this.n].slice(1, 3);
		} else {
			console.log(`ERROR: path type does not match: type '${this.type}' is not a CBC!`);
		}
		this.calculateRect();
	}
	
	calculateRect() {
		/** The bounding box of a cubic Bezier curve can be calculated mathematically:
		*
		*   The idea is that the curve is always confined within it's defining points
		*   start, end, cp1 and cp2. But since it never reaches the control points,
		*   this condition would lead to a larger than necessary bounding box.
		*   Instead we use the three points start, end and extreme, with the last one being
		*   the extremum of the Bezier curve itself:
		*
		*   -> the curve is defined by the function:
		*      B(t) = start (1 - t)^3 + 3 cp1 (1 - t)^2 t + 3 cp2 (1 - t) t^2 + end t^3
		*                           (with 0 < t < 1)
		*
		*   -> now to find the extremum of the curve we set dB/dt = 0
		*      => t0/t1 = (a +- Sqrt[b]) / c
		*                 with a = 2*cp1 - cp2 - start
		*                      b = (cp1-cp2)^2 + (end-cp2) (start-cp1)
		*                      c = 3*(cp1-cp2) + end - start
		*
		*   -> there are three possibilities here:
		*      1) both t0 and t1 fulfill the condition 0 < t < 1
		*            -> there might be two extrema (minimum and maximum) at B(t0) and B(t1)
		*      2) one t fulfills the condition
		*            -> there might be either a minimum or a maximum
		*      3) no extremum fulfills the condition
		*            -> both cp1 and cp2 are between start and end
		*/
		
		let xMin = Math.min(this.start[0], this.end[0]);
		let xMax = Math.max(this.start[0], this.end[0]);
		let yMin = Math.min(this.start[1], this.end[1]);
		let yMax = Math.max(this.start[1], this.end[1]);
		
		let dif = this.cp1[0] - this.cp2[0];
		let a = this.cp1[0] + dif - this.start[0];
		let b = dif * dif + (this.end[0] - this.cp2[0]) * (this.start[0] - this.cp1[0]);
		let c = 3 * dif + this.end[0] - this.start[0];
		
		if (b > 0 && c != 0) {
			b = Math.sqrt(b);
			let t0 = (a + b) / c;
			let t1 = (a - b) / c;
			
			let extrema = [];
			if (t0 > 0 && t0 < 1) {
				extrema.push(mag.mathFunctions.bezier(t0, this.start[0], this.cp1[0], this.cp2[0], this.end[0]));
			}
			if (t1 > 0 && t1 < 1) {
				extrema.push(mag.mathFunctions.bezier(t1, this.start[0], this.cp1[0], this.cp2[0], this.end[0]));
			}
			if (extrema.length > 0) {
				xMin = Math.min(xMin, ...extrema);
				xMax = Math.max(xMax, ...extrema);
			}
		}
		
		dif = this.cp1[1] - this.cp2[1];
		a = this.cp1[1] + dif - this.start[1];
		b = dif * dif + (this.end[1] - this.cp2[1]) * (this.start[1] - this.cp1[1]);
		c = 3 * dif + this.end[1] - this.start[1];
		
		if (b > 0 && c != 0) {
			b = Math.sqrt(b);
			let t0 = (a + b) / c;
			let t1 = (a - b) / c;
			
			let extrema = [];
			if (t0 > 0 && t0 < 1) {
				extrema.push(mag.mathFunctions.bezier(t0, this.start[1], this.cp1[1], this.cp2[1], this.end[1]));
			}
			if (t1 > 0 && t1 < 1) {
				extrema.push(mag.mathFunctions.bezier(t1, this.start[1], this.cp1[1], this.cp2[1], this.end[1]));
			}
			if (extrema.length > 0) {
				yMin = Math.min(yMin, ...extrema);
				yMax = Math.max(yMax, ...extrema);
			}
		}
		
		this.rect = [[xMin, yMin], [xMax, yMax]];
	}
	
	// --------------------- TRANSFORMATIONS --------------------------- //
	
	/** 
	*/
	
	applyTranslation(distance) {
		this.start = mag.vectorMath(this.start, distance, '+');
		this.end = mag.vectorMath(this.end, distance, '+');
		this.cp1 = mag.vectorMath(this.cp1, distance, '+');
		this.cp2 = mag.vectorMath(this.cp2, distance, '+');
		this.rect[0] = mag.vectorMath(this.rect[0], distance, '+');
		this.rect[1] = mag.vectorMath(this.rect[1], distance, '+');
		if (this.type == 'C') {
			this.path.commandListAbs[this.n][1] = this.cp1[0];
			this.path.commandListAbs[this.n][2] = this.cp1[1];
			this.path.commandListAbs[this.n][3] = this.cp2[0];
			this.path.commandListAbs[this.n][4] = this.cp2[1];
			this.path.commandListAbs[this.n][5] = this.end[0];
			this.path.commandListAbs[this.n][6] = this.end[1];
		} else if (this.type == 'S') {
			this.path.commandListAbs[this.n][1] = this.cp2[0];
			this.path.commandListAbs[this.n][2] = this.cp2[1];
			this.path.commandListAbs[this.n][3] = this.end[0];
			this.path.commandListAbs[this.n][4] = this.end[1];
		}
		this.updateHighlight();
	}
	
	// --------------------- HIGHLIGHT --------------------------------- //
	
	/** Highlight is used to show all relevant path parameters to the user.
	*   For the cubic Bezier curve there are three defining parameters:
	*   - the end point
	*   - the first control point
	*   - the second control point
	*   The start point is controlled by the preceding segment.
	*   For better illustration, the two control points are connected
	*   to start and end by two lines (graphics.controlLine).
	*/
	
	enableHighlight(canvas) {
		this.canvas = canvas;
		this.dimension = this.path.strokeWidth;
		let lineOp = magDefaults.magSVGpathElements.lineOp;
		let pointOp = magDefaults.magSVGpathElements.pointOp;
		this.graphics = {
			controlLine: new magSVGpath(this.canvas, [['M', ...this.start], ['L', ...this.cp1], ['M', ...this.cp2], ['L', ...this.end]], lineOp),
			endPoint: new magSVGcircle(this.canvas, this.end, this.dimension, pointOp),
			controlPoint1: new magSVGcircle(this.canvas, this.cp1, 0.7 * this.dimension, pointOp),
			controlPoint2: new magSVGcircle(this.canvas, this.cp2, 0.7 * this.dimension, pointOp)
		}
		
		// enable user interaction
		this.graphics.endPoint.enableMouseDrag();
		this.graphics.endPoint.onDrag(this, 'endChange', 'drag');
		this.graphics.controlPoint1.enableMouseDrag();
		this.graphics.controlPoint1.onDrag(this, 'cp1Change', 'drag');
		this.graphics.controlPoint2.enableMouseDrag();
		this.graphics.controlPoint2.onDrag(this, 'cp2Change', 'drag');
	}
	
	updateHighlight() {
		if (this.graphics) {
			let controlLine = [['M', ...this.start], ['L', ...this.cp1], ['M', ...this.cp2], ['L', ...this.end]];
			this.graphics.controlLine.commandList = controlLine;
			this.graphics.endPoint.center = this.end;
			this.graphics.controlPoint1.center = this.cp1;
			this.graphics.controlPoint2.center = this.cp2;
		
			if (this.dimension != this.path.strokeWidth) {
				this.dimension = this.path.strokeWidth;
				this.graphics.controlLine.strokeWidth = this.dimension / 3;
				this.graphics.endPoint.radius = this.dimension;
				this.graphics.controlPoint1.radius = 0.7 * this.dimension;
				this.graphics.controlPoint2.radius = 0.7 * this.dimension;
			}
		}
	}
	
	// --------------------- USER EVENTS -------------------------- //
	
	/** Four properties can be influenced by the user: start, cp1, cp2 and end.
	*   The start point is controled by the preceding segment.
	*   The end point can only be changed by the user.
	*   The control points can be either changed by the user or
	*   by one of the neighboring segments.
	*   The origin of the change is indicated to by origin:
	*   'drag' (user), 'top' (subsequent seg.), 'bottom' (preceding seg.).
	*/
	
	startChange(value) {
		// the distance between start and cp1 is kept constant
		this.cp1 = [this.cp1[0] + value[0] - this.start[0], this.cp1[1] + value[1] - this.start[1]];
		this.start = value;
		this.calculateRect();
		
		if (this.type == 'C') {
			this.path.commandListAbs[this.n][1] = this.cp1[0];
			this.path.commandListAbs[this.n][2] = this.cp1[1];
		}
		
		// update all graphics elements
		this.updateHighlight();
	}
	
	cp1Change(origin, value = 0) {
		if (this.type == 'C') {
			// cp1 of type 'C' can only be controlled by the user,
			// it also  doesn't influence any other points.
			this.cp1 = this.graphics.controlPoint1.center;
			this.path.commandListAbs[this.n][1] = this.cp1[0];
			this.path.commandListAbs[this.n][2] = this.cp1[1];
		} else if (this.type == 'S') {
			// cp1 of type 'S' can be changed by the user ('drag')
			// or by the preceding segment ('bottom').
			switch (origin) {
				case 'drag':
					this.cp1 = this.graphics.controlPoint1.center;
					// inform the preceding segment of the change
					let newCP = [2 * this.start[0] - this.cp1[0], 2 * this.start[1] - this.cp1[1]];
					this.path.path[this.n - 1].cp2Change('top', newCP);
					break;
				case 'bottom':
					this.cp1 = value;	
			}
		}
		
		// update all graphics elements
		this.updateHighlight();
		
		// if this is the segment that triggered the change
		// all segments are updated now and the path can be redrawn
		if (origin == 'drag') {
			this.path._setPathDefinition();
		}
	}
	
	cp2Change(origin, value = 0) {
		// cp2 can be changed by the user ('drag') or by a subsequent
		// segment of type 'S' ('top')
		switch (origin) {
			case 'drag':
				this.cp2 = this.graphics.controlPoint2.center;
				// check if the subsequent segment is of type 'S'
				// if so, inform about the change
				if (this.path.path.length > this.n + 1) {
					if (this.path.path[this.n + 1].type == 'S') {
						let newCP = [2 * this.end[0] - this.cp2[0], 2 * this.end[1] - this.cp2[1]];
						this.path.path[this.n + 1].cp1Change('bottom', newCP);
					}
				}
				break;
			case 'top':
				this.cp2 = value;
		}
		
		// update the path commands
		if (this.type == 'C') {
			this.path.commandListAbs[this.n][3] = this.cp2[0];
			this.path.commandListAbs[this.n][4] = this.cp2[1];
		} else if (this.type == 'S') {
			this.path.commandListAbs[this.n][1] = this.cp2[0];
			this.path.commandListAbs[this.n][2] = this.cp2[1];
		}
		
		// update all graphics elements
		this.updateHighlight();
		
		// if this is the segment that triggered the change
		// all segments are updated now and the path can be redrawn
		if (origin == 'drag') {
			this.path._setPathDefinition();
		}
	}
	
	endChange() {
		// the end point can only be changes by the user
		// the distance between end and cp2 is kept constant
		let newEnd = this.graphics.endPoint.center;
		this.cp2 = [this.cp2[0] + newEnd[0] - this.end[0], this.cp2[1] + newEnd[1] - this.end[1]];
		this.end = newEnd;
		this.calculateRect();
		
		// update the path commands
		if (this.type == 'C') {
			this.path.commandListAbs[this.n][5] = this.end[0];
			this.path.commandListAbs[this.n][6] = this.end[1];
		} else if (this.type == 'S') {
			this.path.commandListAbs[this.n][3] = this.end[0];
			this.path.commandListAbs[this.n][4] = this.end[1];
		}
		
		// update subsequent segment
		if (this.path.path.length > this.n + 1) {
			this.path.path[this.n + 1].startChange(this.end);
		}
		
		// update all graphics elements
		this.updateHighlight();
		
		// redraw the path
		this.path._setPathDefinition();
	}
}

class _magSVGpathArc extends _magSVGpathSegment {
	
	// Arc: ['A', rx, ry, rot, f1, f2, x, y]
	
	constructor(path, n) {
		super(path, n);
	}
	
	// --------------------- CALCULATE PARAMETERS ---------------------- //
	
	setVars() {
		this.start = this.path.path[this.n - 1].end;
		this.end = this.path.commandListAbs[this.n].slice(-2);
		this.rx = this.path.commandListAbs[this.n][1];
		this.ry = this.path.commandListAbs[this.n][2];
		this.rot = this.path.commandListAbs[this.n][3];
		this.largeArc = this.path.commandListAbs[this.n][4];
		this.sweep = this.path.commandListAbs[this.n][5];
		
		this.calculateCenter();
		this.calculateRect();
	}
	
	calculateCenter() {
		// for details check:
		// https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
		
		// STEP 1 (eq 5.1)
		let x = (this.start[0] - this.end[0]) / 2;
		let y = (this.start[1] - this.end[1]) / 2;
		let sin = Math.sin(this.rot / 180 * Math.PI);
		let cos = Math.cos(this.rot / 180 * Math.PI);
		[x, y] = [cos * x + sin * y, cos * y - sin * x];
		
		// check if radii are sufficient to bridge from start to end
		let rx2 = this.rx * this.rx;
		let ry2 = this.ry * this.ry;
	   let x2 = x * x;
		let y2 = y * y;
      let check = x2 / rx2 + y2 / ry2;
      if (check > 1) {
			this.rx *= Math.sqrt(check);
			this.ry *= Math.sqrt(check);
         rx2 *= check;
			ry2 *= check;
      }
		
		// STEP 2 (eq 5.2)
		let factor = Math.sqrt((rx2 * ry2 - rx2 * y2 - ry2 * x2) / (rx2 * y2 + ry2 * x2));
		let cx = factor * this.rx * y / this.ry;
		let cy = - factor * this.ry * x / this.rx;
		
		if (this.largeArc == this.sweep) {
			cx = -cx;
			cy = -cy;
		}
		
		// STEP 3 (eq. 5.3)
		this.centerX = (cos * cx - sin * cy) + (this.start[0] + this.end[0]) / 2;
		this.centerY = (sin * cx + cos * cy) + (this.start[1] + this.end[1]) / 2;
	}
	
	calculateRect() {
		let sin = Math.sin(this.rot/ 180 * Math.PI);
		let cos = Math.cos(this.rot/ 180 * Math.PI);
		sin = sin * sin;
		cos = cos * cos;
		let rx2 = this.rx * this.rx;
		let ry2 = this.ry * this.ry;
		let dx = Math.sqrt(rx2 * cos + ry2 * sin);
		let dy = Math.sqrt(rx2 * sin + ry2 * cos);
		
		this.rect = [[this.centerX - dx, this.centerY - dy], [this.centerX + dx, this.centerY + dy]];
	}
	
	get center() {
		return [this.centerX, this.centerY];
	}
	
	set center(value) {
		this.centerX = value[0];
		this.centerY = value[1];
	}
	
	// --------------------- TRANSFORMATIONS --------------------------- //
	
	/** 
	*/
	
	applyTranslation(distance) {
		this.start = mag.vectorMath(this.start, distance, '+');
		this.end = mag.vectorMath(this.end, distance, '+');
		this.rect[0] = mag.vectorMath(this.rect[0], distance, '+');
		this.rect[1] = mag.vectorMath(this.rect[1], distance, '+');
		this.centerX += distance[0];
		this.centerY += distance[1];
		if (this.type == 'A') {
			this.path.commandListAbs[this.n][6] = this.end[0];
			this.path.commandListAbs[this.n][7] = this.end[1];
		}
		
		this.updateHighlight();
	}
	
	
	// --------------------- HIGHLIGHT --------------------------------- //
	
	/** Highlight is used to show all relevant path parameters to the user.
	*   For a line the only parameter is the end point, as the start point
	*   is controlled by the preceding segment!
	*   This only applies for type 'L', type 'Z' has no parameters itself.
	*/
	
	enableHighlight(canvas) {
		this.canvas = canvas;
		this.dimension = this.path.strokeWidth;
		let pointOp = magDefaults.magSVGpathElements.pointOp;
		let lineOp = magDefaults.magSVGpathElements.lineOp;
		let sweep = (this.sweep == 1) ? 0 : 1;
		let largeArc = (this.largeArc == 1) ? 0 : 1;
		let oppositeArc = [['M', ...this.start], ['A', this.rx, this.ry, this.rot, largeArc, sweep, ...this.end]];
		this.graphics = {endPoint: new magSVGcircle(this.canvas, this.end, this.dimension, pointOp),
							  center: new magSVGcircle(this.canvas, this.center, this.dimension, pointOp),
							  oppositeArc: new magSVGpath(this.canvas, oppositeArc, lineOp)};
		
	}
	
	updateHighlight() {
		if (this.graphics) {
			this.graphics.endPoint.center = this.end;
		
			if (this.dimension != this.path.strokeWidth) {
				this.dimension = this.path.strokeWidth;
				this.graphics.endPoint.radius = this.dimension;
			}
		}
	}
	
	// --------------------- USER EVENTS -------------------------- //
	
	/** Two properties can be influenced by the user: start and end.
	*   The start point is controled by the preceding segment,
	*   the change is therefore envoked by passing the new value.
	*   In contrast, the end point change is directly triggered
	*   by a user event (mouse drag). It's value is therefore set to
	*   the position of the drag element (graphics.endPoint).
	*/
	
	startChange(value) {
		
	}
	
	cp1Change(value) {
		
	}
	
	cp2Change(value) {
		
	}
	
	endChange(value) {
		
	}
}

class _magSVGpathRect extends magSVGrect {
	
	constructor(path, canvas) {
		let options = magDefaults.magSVGpathElements.corner;
		super(canvas, path.rectAbs, options);
		this.path = path;
	}
	
	update() {
		this.rect = this.path.rectAbs;
	}
}

class magLine extends magSVGelement {
	
	constructor(canvas, position = [0, 0], size = [0, 0], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magLine);
		options.position = position;
		options.size = size;
		super(canvas, 'path', options);
		
		this.strokeWidth = options.style.strokeWidth;
		this.rescale();
	}
	
	scaleElement() {
		this.node.setAttribute('d', `M ${this.positionAbs[0]} ${this.positionAbs[1]} l ${this.sizeAbs[0]} ${this.sizeAbs[1]}`);
	}
}

class magLine2 extends magSVGelement {
	
	constructor(canvas, points = [[0, 0], [0, 0]], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magLine);
		super(canvas, 'path', options);
		
		this.strokeWidth = options.style.strokeWidth;
		this.points = points;
	}
	
	scaleElement() {
		let str = `M ${this.pointsAbs[0][0]} ${this.pointsAbs[0][1]}`;
		let len = this.pointsAbs.length;
		for (let i=1; i<len; i++) {
			str = `${str} L ${this.pointsAbs[i][0]} ${this.pointsAbs[i][1]}`;
		}
				
		this.node.setAttribute('d', str);
	}
	
	set points(list) {
		this.pointsAbs = list.map(point => this.pointAbs(point));
	}
	
	get points() {
		return this._pointsAbs.map(point => this.pointRel(point));
	}
	
	set pointsAbs(list) {
		this._pointsAbs = list;
		let rect = mag.boundingBox(this._pointsAbs);
		this._sizeAbs = rect[1];
		this.positionAbs = rect[0];
	}
	
	get pointsAbs() {
		return this._pointsAbs;
	}
	
	// TO DO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
	// settings a new position shifts all the points by the same distance
	/*
	set positionAbs(value) {
		
	}
	
	set sizeAbs(value) {
		
	}
	*/
}

class magRect extends magSVGelement {
	
	constructor(canvas, position = [0, 0], size = [1, 1], options = {}) {
		options.size = size;
		options.position = position;
		options = mag.mergeObjects(options, magDefaults.magRect);
		super(canvas, 'rect', options);
		
		this.cornerRadius = options.cornerRadius;
	}
	
	scaleElement() {
		this.node.setAttribute('x', `${this.positionAbs[0]}`);
		this.node.setAttribute('y', `${this.positionAbs[1]}`);
		this.node.setAttribute('width', `${this.sizeAbs[0]}`);
		this.node.setAttribute('height', `${this.sizeAbs[1]}`);
		
		if (this.cornerRadius != 0) {
			let radius = this.scaleNumber(this.cornerRadius);
			this.node.setAttribute('rx', `${radius}`);
			this.node.setAttribute('ry', `${radius}`);
		}
		
		if (Array.isArray(this.alignments)) {
			this.updateSelection();
		}
	}
}

class magCircle extends magSVGelement {
	
	constructor(canvas, position = [0, 0], radius = 0, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magCircle);
		options.position = position;
		options.size = mag.vectorMath(radius, 2, '*')
		super(canvas, 'ellipse', options);
		
		this.strokeWidth = options.style.strokeWidth;
		this._position = position;
		this.radius = radius;
	}
	
	scaleElement() {
		let center = this.getPositionAbs(11);
		this.node.setAttribute('cx', `${center[0]}`);
		this.node.setAttribute('cy', `${center[1]}`);
		this.node.setAttribute('rx', `${this.radiusAbs[0]} `);
		this.node.setAttribute('ry', `${this.radiusAbs[1]}`);
	}
	
	set radius(value) {
		if (typeof this._radius == 'number') {
			this.circle = true;
			this.size = [value, value];
		} else if (Array.isArray(this._radius)) {
			this.circle = false;
			this.size = value;
		}
	}
	
	get radius() {
		return this._radius;
	}
}

class magBezierCurve extends magSVGelement {
	
	constructor(canvas, points = [[0, 0], [0, 0], [0, 0], [0, 0]], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magBezierCurve);
		super(canvas, 'path', options);
		
		this.strokeWidth = options.style.strokeWidth;
		this.points = points;
	}
	
	rescale() {
		// calculate absolute positions
		this.pointsAbs = this.points.map(value => this.scalePoint(value));
		
		let str = `M ${this.pointsAbs[0][0]} ${this.pointsAbs[0][1]} C ${this.pointsAbs[1][0]} ${this.pointsAbs[1][1]}, ${this.pointsAbs[2][0]} ${this.pointsAbs[2][1]}, ${this.pointsAbs[3][0]} ${this.pointsAbs[3][1]}`;
		this.node.setAttribute('d', str);
		this.node.style.strokeWidth = this.scaleNumber(this.strokeWidth);
	}
	
	set points(value) {
		this._points = value;
		this.rescale();
	}
	
	get points() {
		return this._points;
	}
}

class magInterpolation extends magSVGelement {
	
	constructor(canvas, points = [[0, 0], [0, 0], [0, 0]], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magBezierCurve);
		super(canvas, 'path', options);
		
		this.strokeWidth = options.style.strokeWidth;
		this.points = points;
	}
	
	rescale() {
		let p1 = this.scalePoint(this.points[0]);
		let str = `M ${p1[0]} ${p1[1]}`;
		let len = this.points.length;
		for (let i=0; i<len - 1; i++) {
			let p2 = this.scalePoint(this.controlPoints[0][i]);
			let p3 = this.scalePoint(this.controlPoints[1][i]);
			let p4 = this.scalePoint(this.points[i+1]);
			str = `${str} C ${p2[0]} ${p2[1]}, ${p3[0]} ${p3[1]}, ${p4[0]} ${p4[1]}`;
		}
		this.node.setAttribute('d', str);
		this.node.style.strokeWidth = this.scaleNumber(this.strokeWidth);
	}
	
	set points(value) {
		this._points = value;
		this.controlPoints = mag.getBspline(value);
		this.rescale();
	}
	
	get points() {
		return this._points;
	}
}

class magText extends magSVGelement {
	/*
		The arguments should be used as follows:
		- canvas (magSVGcanvas object or other object / string) -> defines the parent in the DOM tree by the node or the id string
		- position ([number, number]) -> top-left corner of line (or other position if alignment is not 0)
		- size ([number, number]) -> size of rect
		- options (object) -> defines all settings of the element such as:
			- style (object) -> style options: fontStyle ('italic', 'bold',...), fontFamily
			- id (string) -> element id [see magElement]
			- alignment (number) -> defines which part of the element the position refers to (see above for definition) [see magElement]
			- scaling (number) -> defines how size and position are interpreted (absolute in pixels or relative as % of parent-width/height) [see magElement]
			- layer (string) -> position in DOM tree; allowed options are 'top', 'bottom', 'before', 'after' (last 2 require reference) [see magNode]
			- reference (magNode object / string) -> defines the reference for the layer options 'before' and 'after' [see magNode]

		Relevant methods are:
		- remove() -> deletes the node from the DOM tree [from magNode]
		- onclick(func) -> define function that handles the event: user clicks on element [from magElement]
		- onmouseover(func) -> define function that handles the event: user moves mouse over element [from magElement]
		- onmouseout(func) -> define function that handles the event: user moves mouse out of element [from magElement]
		- onmousemove(func) -> define function that tracks the mouse movement over the element [from magElement]
		
		The difficult part is to adjust the font size that the text height matches the defined size.
		In this class this is accomplished iterative by trial and error.
		1.) the fontSize is set to 0.75 times the chosen height in pixels (this should roughly correspond to pt)
		2.) the height and width of the bounding box is read out
		3.) the actual text height (bounding box height) and width is compared to the desired height and width
		4.) the font size is adjusted accordingly and we return to point 2.) -> this is repeated a few times until the font size converges
	*/
	
	constructor(canvas, position = [0,0], size = [0,0], text = '', options = {}) {
		options = mag.mergeObjects(options, magDefaults.magText);
		super(canvas, 'text', options);
		
		this._position = position;
		this._size = size;
		this.text = text;
	}
	
	set text(value) {
		this._text = value;
		this.node.innerHTML = this._text;
		this.rescale();
	}
	
	get text() {
		return this._text;
	}
	
	setFontSize() {
		this.node.style.fontSize = this.fontSize;
		let rect = this.node.getBBox();
		this.textHeight = rect.height;
		this.textWidth = rect.width;
		this.textOffsetY = rect.y;
	}
	
	setFactor() {
		let factorX = 1;
		let factorY = 1;
		if (this.textWidth != 0) {
			factorX = this.sizeAbs[0] / this.textWidth;
			factorY = this.sizeAbs[1] / this.textHeight;
		}
		
		if (factorX < factorY) {
			this.factor = factorX;  // using chosen height, the text is too wide
		} else {
			this.factor = factorY;
		}
	}
	
	estimateFontSize() {
		this.node.setAttribute('x', `0`);
		this.node.setAttribute('y', `0`);
		this.fontSize = this.sizeAbs[1] * 0.75;
		for (let i=0; i<3; i++) {
			this.setFontSize();
			this.setFactor();
			this.fontSize *= this.factor;
		}
		this.setFontSize();
	}
	
	rescale() {
		this.sizeAbs = this.scalePoint(this.size);
		this.estimateFontSize();
		
		this.positionAbs = this.scalePoint(this.position);
		this.positionAbs = this.alignTopLeft(this.positionAbs, [this.textWidth, this.textHeight]);
		
		this.centerAbs = [this.positionAbs[0] + this.textWidth / 2, this.positionAbs[1] + this.textHeight / 2];
		
		this.node.setAttribute('x', `${this.positionAbs[0]}`);
		this.node.setAttribute('y', `${this.positionAbs[1] - this.textOffsetY}`);
	}
	
	moveAbsolute(distance) {
		let distanceRelative = this.scalePointInverse(distance);
		this.position = mag.vectorMath(this.position, distanceRelative, '+');
	}
	
	moveRelative(distance) {
		this.position = mag.vectorMath(this.position, distance, '+');
	}
	
	set size(value) {
		this._size = value;
		this.rescale();
	}
	
	get size() {
		return this._size;
	}
	
	set position(value) {
		this._position = value;
		this.rescale();
	}
	
	get position() {
		return this._position;
	}
}

class magClipPath extends magSVGelement {
	
	constructor(canvas, element, id) {
		super(canvas, 'defs', {layer: 'top'});
		this.clipPathObj = new magSVGelement(this, 'clipPath', {id: id});
		this.element = element;
		this.clipPathObj.addChild(element);
	}
	
	applyClipPath(element) {
		
	}
}

class selectionRect {
	constructor(canvas, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magSelection);
		this.canvas = canvas;
		this.rect = new magRect(canvas, [100, 100], [100, 100], {alignment: 0, scaling: 0, style: options['rectStyle']});
		this.cornerPositions = options['cornerPositions'];
		this.cursorStyles = options['cursorStyles'];
		this.cornerElements = [];
		let len = this.cornerPositions.length;
		let root = this;
		for (let i=0; i<len; i++) {
			let style = mag.mergeObjects()
			let cornerElement = new magCircle(canvas, [0, 0], 3, {scaling: 0, alignment: 11, id: `${this.cornerPositions[i]}`, style: options['cornerStyle']});
			cornerElement.node.style.cursor = this.cursorStyles[i];
			cornerElement.node.style.pointerEvents = 'auto';
			cornerElement.hidden = true;
			//cornerElement.enableMouseDrag(canvas);
			//cornerElement.onmousedrag(this.cornerDrag.bind(this), cornerElement);
			this.cornerElements.push(cornerElement);
		}
		this.hidden = true;
	}
	
	set hidden(bool) {
		this.rect.hidden = bool;
		let len = this.cornerPositions.length;
		for (let i=0; i<len; i++) {
			this.cornerElements[i].hidden = bool;
		}
	}
	
	selectElement(element) {
		this.selectedElement = element;
		if (this.selectedElement instanceof magElement) {
			// selection defined by SVG element
			this.mode = 'single element';
		} else if (Array.isArray(this.selectedElement)) {
			// selection defined by bounding box
			this.mode = 'bounding box';
		}
		this.update();
		this.hidden = false;
	}
	
	update(element = this.selectedElement) {
		if (this.mode == 'single element') {
			// selection defined by SVG element
			this.rect.setBoundingRect(element.getBoundingRect(0));
		} else if (this.mode == 'bounding box') {
			// selection defined by bounding box
			this.rect.setBoundingRect(element);
		}
		let len = this.cornerPositions.length;
		for (let i=0; i<len; i++) {
			let cornerPos = this.rect.getPosition(0, this.cornerPositions[i]);
			this.cornerElements[i].position = cornerPos;
		}
	}
	
	cornerDrag(event, caller) {
		if (this.mode == 'single element') {
			// selection defined by SVG element
			this.selectedElement.resizeByCorner(caller.position, `${caller.id}`);
			this.update();
		} else if (this.mode == 'bounding box') {
			// selection defined by bounding box
			this.rect.resizeByCorner(caller.position, `${caller.id}`);
			this.selectedElement = this.rect.getBoundingRect();
		}
	}
}

class magPlot {
	
	/*
		The arguments should be used as follows:
		- canvas (magNode / magSVGcanvas / string) -> parent element in DOM tree
		- options (object):
			- padding -> define the padding of the plot, possible options:
		 		= 'automatic' -> automatically fit frame label into canvas
		 		= 'none' -> plot fills the entire canvas, no frame label
		 		= [left, right, bottom, top]
			- frameStyle -> same options as magRect: {strokeWidth: x, style: {...}}
			- labelStyle -> same options as magText (plus size): {size: [x,y], scaling: 2, style:{fill: 'color', fontFamily: ...}}
			- frameTickLabelStyle -> if not defined same as labelStyle
			- label -> labelText ['x-label', 'y-label']
			- plotRange -> set fixed plot range [[xmin, xmax],[ymin, ymax]] that does not change when input is added
	*/
	
	constructor(canvas, options = {}) {
		
		this.frameTicks = {xTickLabel: [], xTicksMain: [], xTicksMain2: [], xTicksSub: [], xTicksSub2: [], yTickLabel: [], yTicksMain: [], yTicksMain2: [], yTicksSub: [], yTicksSub2: []};
		this.plotList = [];
		
		if (canvas instanceof magSVGcanvas) {
			this.canvas = canvas;
		} else {
			let optionsCanvas = {scaling: 1, alignment: 0, style: {position: [0,0], size: [100,100]}};
			this.canvas = new magSVGcanvas(canvas, optionsCanvas);
		}
		
		if (typeof options['settings'] == 'object') {
			this.settings = options['settings'];
		} else {
			this.settings = magDefaults.plotOptions['settings'];
		}
		
		if (Array.isArray(this.settings['spacings'])) {
			this.xSpacings = this.settings['spacings'];
			this.ySpacings = 'fixed';
		} else {
			this.xSpacings = this.settings['xSpacings'];
			this.ySpacings = this.settings['ySpacings'];
		}
		
		if (options['padding'] != undefined) {
			this.padding = options['padding'];
		} else {
			this.padding = magDefaults.plotOptions['padding'];
		}
		
		if (Array.isArray(options['label'])) {
			this.label = options['label'];
		} else {
			this.label = magDefaults.plotOptions['label'];
		}
		
		if (typeof options['labelStyle'] == 'object') {
			this.labelStyle = options['labelStyle'];
		} else {
			this.labelStyle = magDefaults.plotOptions['labelStyle'];
		}
		this.addLabel();
		
		if (typeof options['frameTickLabelStyle'] == 'object') {
			this.frameTickLabelStyle = options['frameTickLabelStyle'];
		} else {
			this.frameTickLabelStyle = magDefaults.plotOptions['labelStyle'];
		}
		
		if (typeof options['frameStyle'] == 'object') {
			this.frameStyle = options['frameStyle'];
		} else {
			this.frameStyle = magDefaults.plotOptions['frameStyle'];
		}
		
		if (Array.isArray(options['plotRange'])) {
			this.plotRange = options['plotRange'];
			this.updatePlotRange = false;
		} else {
			this.plotRange = [[0, 1], [0, 1]];
			this.updatePlotRange = true;
			this.plotRangeSet = false;
		}
	}
	
	addLabel() {
		let size = this.labelStyle['size'];
		this.labelSize = size[1];
		this.xLabel = new magText(this.canvas, [0, 0], size, this.label[0], {alignment: 11, scaling: 1, style: this.labelStyle['style']});
		this.yLabel = new magText(this.canvas, [0, 0], size, this.label[1], {rotate: 270, alignment: 11, scaling: 1, style: this.labelStyle['style']});
	}
	
	set plotRange(pr) {
		this._plotRange = pr;
		this.xMin = pr[0][0];
		this.xMax = pr[0][1];
		this.yMin = pr[1][0];
		this.yMax = pr[1][1];
		this.xRange = this.xMax - this.xMin;
		this.yRange = this.yMax - this.yMin;
		this.addFrameTicks();
	}
	
	get plotRange() {
		return this._plotRange;
	}
	
	addFrameTicks() {
		// calculate tick psoitions and labels
		this.Xticks = mag.getTicks(this._plotRange[0][0], this._plotRange[0][1]);
		this.Yticks = mag.getTicks(this._plotRange[1][0], this._plotRange[1][1]);
		
		// create all magText elements for the frameTickLabels
		let size = this.frameTickLabelStyle['size'];
		let argsX = [this.canvas, [0, 0], size, 'bob', {alignment: 10, scaling: 1, style: this.frameTickLabelStyle['style']}];
		let argsY = [this.canvas, [0, 0], size, 'bob', {alignment: 21, scaling: 1, style: this.frameTickLabelStyle['style']}];
		this.frameTicks.xTickLabel = mag.matchObjListLength(this.frameTicks.xTickLabel, this.Xticks.mainTickNames.length, magText, argsX);
		this.frameTicks.yTickLabel = mag.matchObjListLength(this.frameTicks.yTickLabel, this.Yticks.mainTickNames.length, magText, argsY);
		
		// set text
		mag.setObjListProperty(this.frameTicks.xTickLabel, 'text', this.Xticks.mainTickNames);
		mag.setObjListProperty(this.frameTicks.yTickLabel, 'text', this.Yticks.mainTickNames);
		
		// find maximum text width of frame-tick labels
		this.tickLabelSizeX = mag.maxObjProperty(this.frameTicks.xTickLabel, 'textHeight');
		this.tickLabelSizeY = mag.maxObjProperty(this.frameTicks.yTickLabel, 'textWidth');
		
		// scale the spacings, the four spacings [s0, s1, s2, s3] are used as follows:
		// <--s0--> label <--s1--> tickLabel <--s2--> frame plot frame <--s3-->
		let xSpacings = this.xSpacings;
		let ySpacings = this.ySpacings;
		let xSpacingsAbs = xSpacings.map(value => value / 100 * this.canvas.parentWidth);
		let ySpacingsAbs;
		if (Array.isArray(ySpacings)) {
			ySpacingsAbs = ySpacings.map(value => value / 100 * this.canvas.parentHeight);
		} else {
			ySpacingsAbs = xSpacingsAbs;
			ySpacings = ySpacingsAbs.map(value => value * 100 / this.canvas.parentHeight)
		}
		
		// calculate frame position
		this.FrameBottom = 100 - this.tickLabelSizeX / this.canvas.parentHeight * 100 - this.labelSize - ySpacings[0] - ySpacings[1] - ySpacings[2];
		this.FrameLeft = this.tickLabelSizeY / this.canvas.parentWidth * 100 + this.labelSize + xSpacings[0] + xSpacings[1] + xSpacings[2];
		this.FrameTop = ySpacings[3];
		this.FrameRight = 100 - xSpacings[3];
		this.FrameWidth = this.FrameRight - this.FrameLeft;
		this.FrameHeight = this.FrameBottom - this.FrameTop;
		
		// position tick-labels
		let xTickPos = this.Xticks.mainTickPositions.map(value => [this.xCoordToPos(value), this.FrameBottom + ySpacings[2]]);  // position of x-tick-labels (bottom)
		let yTickPos = this.Yticks.mainTickPositions.map(value => [this.FrameLeft - xSpacings[2], this.yCoordToPos(value)]);  // position of y-tick-labels (left)
		// check if first and last tick label stick outside the graph or overlap
		let last = xTickPos.length - 1;
		let xMaxTicks = xTickPos[last][0] + this.frameTicks.xTickLabel[last].textWidth / this.canvas.parentWidth * 100 / 2;
		if (xMaxTicks > 100) {
			xTickPos[last][0] -= xMaxTicks - 100;  // shift most right x-label if it's position is outside canvas
		}
		last = yTickPos.length - 1;
		let yMaxTicks = yTickPos[last][1] - this.frameTicks.yTickLabel[last].textHeight / this.canvas.parentHeight * 100 / 2;
		if (yMaxTicks < 0) {
			yTickPos[last][1] -= yMaxTicks;  // shift top y-label if it's position is outside canvas
		}
		let yTickBottom = yTickPos[0][1] + this.frameTicks.yTickLabel[0].textHeight / this.canvas.parentHeight * 100 / 2;
		let yTickRight = yTickPos[0][0];
		let xTickTop = xTickPos[0][1];
		let xTickLeft = xTickPos[0][0] - this.frameTicks.xTickLabel[0].textWidth / this.canvas.parentWidth * 100 / 2;
		
		if (yTickBottom > xTickTop && yTickRight > xTickLeft) {
			yTickPos[0][1] -= yTickBottom - xTickTop;  // shift bottom y-label if it overlaps with most left x-label
		}
		mag.setObjListProperty(this.frameTicks.xTickLabel, 'position', xTickPos);
		mag.setObjListProperty(this.frameTicks.yTickLabel, 'position', yTickPos);
		
		// add main frame ticks
		let tickLengthX = this.settings['frameTickLength'][0];
		let tickLengthY = tickLengthX / this.canvas.parentWidth * this.canvas.parentHeight;
		argsX = [this.canvas, [0, 0], [0, tickLengthY], {alignment: 12, scaling: 1, strokeWidth: this.frameStyle['strokeWidth'], style: this.frameStyle['style']}];
		argsY = [this.canvas, [0, 0], [tickLengthX, 0], {alignment: 1, scaling: 1, strokeWidth: this.frameStyle['strokeWidth'], style: this.frameStyle['style']}];
		this.frameTicks.xTicksMain = mag.matchObjListLength(this.frameTicks.xTicksMain, this.Xticks.mainTickPositions.length, magLine, argsX);  // main ticks bottom
		this.frameTicks.yTicksMain = mag.matchObjListLength(this.frameTicks.yTicksMain, this.Yticks.mainTickPositions.length, magLine, argsY);  // main ticks left
		argsX = [this.canvas, [0, 0], [0, tickLengthY], {alignment: 10, scaling: 1, strokeWidth: this.frameStyle['strokeWidth'], style: this.frameStyle['style']}];
		argsY = [this.canvas, [0, 0], [tickLengthX, 0], {alignment: 21, scaling: 1, strokeWidth: this.frameStyle['strokeWidth'], style: this.frameStyle['style']}];
		this.frameTicks.xTicksMain2 = mag.matchObjListLength(this.frameTicks.xTicksMain2, this.Xticks.mainTickPositions.length, magLine, argsX);  // main ticks top
		this.frameTicks.yTicksMain2 = mag.matchObjListLength(this.frameTicks.yTicksMain2, this.Yticks.mainTickPositions.length, magLine, argsY);  // main ticks right
		
		// position main frame ticks
		xTickPos = this.Xticks.mainTickPositions.map(value => [this.xCoordToPos(value), this.FrameBottom]);  // position of main x-ticks (bottom)
		yTickPos = this.Yticks.mainTickPositions.map(value => [this.FrameLeft, this.yCoordToPos(value)]);  // position of main y-ticks (left)
		mag.setObjListProperty(this.frameTicks.xTicksMain, 'position', xTickPos);
		mag.setObjListProperty(this.frameTicks.yTicksMain, 'position', yTickPos);
		xTickPos = this.Xticks.mainTickPositions.map(value => [this.xCoordToPos(value), this.FrameTop]);  // position of main x-ticks (top)
		yTickPos = this.Yticks.mainTickPositions.map(value => [this.FrameRight, this.yCoordToPos(value)]);  // position of main y-ticks (right)
		mag.setObjListProperty(this.frameTicks.xTicksMain2, 'position', xTickPos);
		mag.setObjListProperty(this.frameTicks.yTicksMain2, 'position', yTickPos);
		
		// add sub frame ticks
		tickLengthX = this.settings['frameTickLength'][1];
		tickLengthY = tickLengthX / this.canvas.parentWidth * this.canvas.parentHeight;
		argsX = [this.canvas, [0, 0], [0, tickLengthY], {alignment: 12, scaling: 1, strokeWidth: this.frameStyle['strokeWidth'] * 0.7, style: this.frameStyle['style']}];
		argsY = [this.canvas, [0, 0], [tickLengthX, 0], {alignment: 1, scaling: 1, strokeWidth: this.frameStyle['strokeWidth'] * 0.7, style: this.frameStyle['style']}];
		this.frameTicks.xTicksSub = mag.matchObjListLength(this.frameTicks.xTicksSub, this.Xticks.subTickPositions.length, magLine, argsX);  // main ticks bottom
		this.frameTicks.yTicksSub = mag.matchObjListLength(this.frameTicks.yTicksSub, this.Yticks.subTickPositions.length, magLine, argsY);  // main ticks left
		argsX = [this.canvas, [0, 0], [0, tickLengthY], {alignment: 10, scaling: 1, strokeWidth: this.frameStyle['strokeWidth'] * 0.7, style: this.frameStyle['style']}];
		argsY = [this.canvas, [0, 0], [tickLengthX, 0], {alignment: 21, scaling: 1, strokeWidth: this.frameStyle['strokeWidth'] * 0.7, style: this.frameStyle['style']}];
		this.frameTicks.xTicksSub2 = mag.matchObjListLength(this.frameTicks.xTicksSub2, this.Xticks.subTickPositions.length, magLine, argsX);  // main ticks top
		this.frameTicks.yTicksSub2 = mag.matchObjListLength(this.frameTicks.yTicksSub2, this.Yticks.subTickPositions.length, magLine, argsY);  // main ticks right
		
		// position sub frame ticks
		xTickPos = this.Xticks.subTickPositions.map(value => [this.xCoordToPos(value), this.FrameBottom]);  // position of main x-ticks (bottom)
		yTickPos = this.Yticks.subTickPositions.map(value => [this.FrameLeft, this.yCoordToPos(value)]);  // position of main y-ticks (left)
		mag.setObjListProperty(this.frameTicks.xTicksSub, 'position', xTickPos);
		mag.setObjListProperty(this.frameTicks.yTicksSub, 'position', yTickPos);
		xTickPos = this.Xticks.subTickPositions.map(value => [this.xCoordToPos(value), this.FrameTop]);  // position of main x-ticks (top)
		yTickPos = this.Yticks.subTickPositions.map(value => [this.FrameRight, this.yCoordToPos(value)]);  // position of main y-ticks (right)
		mag.setObjListProperty(this.frameTicks.xTicksSub2, 'position', xTickPos);
		mag.setObjListProperty(this.frameTicks.yTicksSub2, 'position', yTickPos);
		
		// position x- and y-label
		this.xLabel.position = [this.FrameLeft + this.FrameWidth / 2, 100 - ySpacings[0] - this.labelSize / 2];
		this.yLabel.position = [xSpacings[0] + this.labelSize / 2, this.FrameTop + this.FrameHeight / 2];
		
		// draw frame rectangle
		this.frameCorners = [[this.FrameLeft, this.FrameTop], [this.FrameLeft, this.FrameBottom], [this.FrameRight, this.FrameBottom], [this.FrameRight, this.FrameTop], [this.FrameLeft, this.FrameTop]];
		if (typeof this.frame == 'object') {
			this.frame.points = this.frameCorners;
		} else {
			this.frame = new magLine2(this.canvas, this.frameCorners, {scaling: 1, strokeWidth: this.frameStyle['strokeWidth'], style: this.frameStyle['style']});
		}
		
		this.setClipPath();
		this.notifyPlots('rescale');
	}
	
	setClipPath() {
		if (typeof this.clipElement == 'object') {
			this.clipElement.points = this.frameCorners;
		} else {
			this.clipElement = new magLine2(this.canvas, this.frameCorners, {scaling: 1, style: {strokeWidth: 0}});
			this.clipPathDef = new magClipPath(this.canvas, this.clipElement, 'frameClip');
			this.clipPath = 'url(#frameClip)';
		}
	}
	
	addPlot(plot) {
		this.plotList.push(plot);
	}
	
	removePlot(plot) {
		let index = this.plotList.indexOf(plot);
		if (index > -1) {
		  this.plotList.splice(index, 1);
		}
	}
	
	notifyPlots(funcName, ...args) {
		let len = this.plotList.length;
		for (let i=0; i<len; ++i) {
			if (typeof this.plotList[i][funcName] == 'function') {
				this.plotList[i][funcName](...args);
			}
		}
	}
	
	extendPlotRange(xMin, xMax, yMin, yMax) {
		if (this.updatePlotRange) {  // if user has pre-set a plot range, the plot range is not changed
			if (this.plotRangeSet) {  // check if plot range has been set or is still on default values -> if default: replace them, if set before: extend plot range
				xMin = Math.min(xMin, this.xMin);
				yMin = Math.min(yMin, this.yMin);
				xMax = Math.max(xMax, this.xMax);
				yMax = Math.max(yMax, this.yMax);
			}
			this.plotRange = [[xMin, xMax],[yMin, yMax]];
		}
	}
	
	xCoordToPos(xCoord) {
		xCoord = (xCoord - this.xMin) / this.xRange;
		return xCoord * this.FrameWidth + this.FrameLeft;
	}
	
	yCoordToPos(yCoord) {
		yCoord = (yCoord - this.yMin) / this.yRange;
		return this.FrameBottom - yCoord * this.FrameHeight;
	}
	
	xyCoordToPos(xyCoord) {
		return [this.xCoordToPos(xyCoord[0]), this.yCoordToPos(xyCoord[1])];
	}
}

class magListPlot {
	
	constructor(plot, points, options = {}) {
		if (plot instanceof magPlot) {
			this.plot = plot;
		} else {
			this.plot = new magPlot(plot);
		}
		this.plot.addPlot(this);
		
		if (typeof options['elements'] == 'object') {
			this.elements = options['elements'];
		} else {
			this.elements = magDefaults.listplotOptions['elements'];
		}
		
		if (typeof options['lineStyle'] == 'object') {
			this.lineStyle = options['lineStyle'];
		} else {
			this.lineStyle = magDefaults.listplotOptions['lineStyle'];
		}
		this.lineStyle.style.clipPath = this.plot.clipPath;
		
		if (typeof options['pointStyle'] == 'object') {
			this.pointStyle = options['pointStyle'];
		} else {
			this.pointStyle = magDefaults.listplotOptions['pointStyle'];
		}
		this.pointStyle.style.clipPath = this.plot.clipPath;
		this.points = points;
	}
	
	set points(list) {
		this._points = list;
		
		this.positions = this._points.map(point => this.plot.xyCoordToPos(point));
		let radius = this.pointStyle['radius'];
		let min = mag.listMin(this._points);
		let max = mag.listMax(this._points);
		this.plot.extendPlotRange(min[0] - radius, max[0] + radius, min[1] - radius, max[1] + radius);
		
		this.rescale();
	}
	
	get points() {
		return this._points;
	}
	
	rescale() {
		this.positions = this._points.map(point => this.plot.xyCoordToPos(point));
		
		if (this.elements[0]) {
			this.showPoints();
		}
		
		if (this.elements[1]) {
			this.showLine();
		}
		
		if (this.elements[2]) {
			this.showInterpolation();
		}
	}
	
	showPoints() {
		let args = [this.plot.canvas, [0, 0], this.pointStyle['radius'], {alignment: 11, scaling: 1, layer: 'bottom', style: this.pointStyle['style']}];
		this.pointObjs = mag.matchObjListLength(this.pointObjs, this._points.length, magCircle, args);
		mag.setObjListProperty(this.pointObjs, 'position', this.positions);
	}
	
	showInterpolation() {
		// sort points by x-values
		let points = mag.sortMatrix(this.positions);
		this.interpolation = new magInterpolation(this.plot.canvas, points, {scaling: 1, strokeWidth: this.lineStyle['strokeWidth'], layer: 'bottom', style: this.lineStyle['style']});
	}
	
	showLine() {
		// sort points by x-values
		let points = mag.sortMatrix(this.positions);
		this.interpolation = new magLine2(this.plot.canvas, points, {scaling: 1, strokeWidth: this.lineStyle['strokeWidth'], layer: 'bottom', style: this.lineStyle['style']});
	}
	
	enableMouseDrag() {
		let len = this.pointObjs.length;
		let root = this;
		for (let i=0; i<len; i++) {
			this.pointObjs[i].enableMouseDrag();
			this.pointObjs[i].onmousedrag(root.getDragPositions, root);
		}
	}
	
	getDragPositions(event, root) {
		let len = root.pointObjs.length;
		for (let i=0; i<len; i++) {
			 root.positions[i] = root.pointObjs[i].position;
		}
		if (typeof root.interpolation == 'object') {
			root.showInterpolation();
		}
		if (typeof root.line == 'object') {
			root.showLine();
		}
	}
}

class magFunctionPlot extends magEquation {
	
	/*
		options:
		- variable (string) -> name of the scanning variable (if not defined it is assumed to be 'x')
		- plotPoints (number) -> at how many positions should the function be evaluated
	*/
	
	constructor(plot, equationString, options = {}) {
		super(equationString);
		
		if (plot instanceof magPlot) {
			this.plot = plot;
		} else {
			this.plot = new magPlot(plot);
		}
		this.plot.addPlot(this);
		
		if (typeof options['lineStyle'] == 'object') {
			this.lineStyle = options['lineStyle'];
		} else {
			this.lineStyle = magDefaults.listplotOptions['lineStyle'];
		}
		this.lineStyle.style.clipPath = this.plot.clipPath;
		
		if (typeof options['plotPoints'] == 'number') {
			this.plotPoints = options['plotPoints'];
		} else {
			this.plotPoints = magDefaults.listplotOptions['plotPoints'];
		}
		
		if (typeof options['variable'] == 'string') {
			this.variable = options['variable'];
		} else {
			this.variable = 'x';
		}
		
		this.curve = new magInterpolation(this.plot.canvas, [[0,0], [0,0], [0,0]], {scaling: 1, strokeWidth: this.lineStyle['strokeWidth'], layer: 'bottom', style: this.lineStyle['style']});
		
		this.rescale();
	}
	
	rescale() {
		this.calculatePoints();
		this.curve.points = this.points;
	}
	
	calculatePoints() {
		this.xValues = mag.getRange(this.plotPoints, this.plot.xMin, this.plot.xMax);
		this.points = this.xValues.map(x => [x, this.getValue(this.variable, x)]);
		this.points = this.points.map(point => this.plot.xyCoordToPos(point));
	}
	
	setVariables(variables) {
		for (let key in variables) {
			this.variables[key] = variables[key];
		}
		this.rescale();
	}
	
	setVariable(varName, value) {
		this.variables[varName] = value;
		this.rescale();
	}
}

class magAnimationLoop {
	
	constructor(loopTime) {
		this.loopTime = loopTime;
		this.loopActive = false;
		this.animationList = [];
		this.functionList = [];
	}
	
	add(element) {
		if (typeof element == 'function') {
			this.functionList.push(element);
		} else {
			this.animationList.push(element);
		}
	}
	
	remove(element) {
		if (typeof element == 'function') {
			let index = this.functionList.indexOf(element);
			if (index > -1) {
			  this.functionList.splice(index, 1);
			}
		} else {
			let index = this.animationList.indexOf(element);
			if (index > -1) {
			  this.animationList.splice(index, 1);
			}
		}
		
	}
	
	startAnimation() {
		this.loopActive = true;
		this.loop(this.loopTime);
	}
	
	stopAnimation() {
		this.loopActive = false;
	}
	
	loop(lastLoopTime) {
		let startTime = Date.now();
		
		// animate all subscribed elements
		let len = this.animationList.length;
		for (let i=0; i<len; ++i) {
			if (typeof this.animationList[i].animate != undefined) {
				this.animationList[i].animate(lastLoopTime);
			}
		}
		
		// run all associated functions
		len = this.functionList.length;
		for (let i=0; i<len; ++i) {
			this.functionList[i](lastLoopTime);
		}
		
		// check how much time passed and set up next loop cycle accordingly
		let timePassed = Date.now() - startTime;
		if (timePassed >= this.loopTime && this.loopActive) {
			this.loop(timePassed);
		} else if (this.loopActive) {
			let root = this;
			setTimeout(function() {root.loop(root.loopTime);}, this.loopTime - timePassed);
		}
	}
}

class magFunctionPlotAni extends magFunctionPlot {
	
	constructor(animationLoop, plot, equationString, options = {}) {
		super(plot, equationString, options)
		this.animationLoop = animationLoop;
		this.animationLoop.add(this);
		this.time = 0;
		this.animatedVariable = 't';
	}
	
	animate(timePassed) {
		this.time += timePassed;
		this.setVariable(this.animatedVariable, this.time);
	}
	
}
/*
class magDOMinput extends magDOMelement {
	
	constructor(parentNode, type, defaultValue, position = [0, 0], size = [100, 100], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMinput);
		options['position'] = position;
		options['size'] = size;
		super(parentNode, 'input', options);
		this.node.value = defaultValue;
		this.node.type = type;
		
		this.textStyle = options['textStyle'];
		this.setFontStyle();
		
		this.styleChanges = options['styleChanges'];
		this.style = mag.mergeObjects(this.style, this.styleChanges.inactive);
		this._active = false;
		this._hover = false;
		
		this.onEvent('mouseover', this.hoverChange);
		this.onEvent('mouseout', this.hoverChange);
		let root = this;
		this.node.addEventListener('keyup', function(event) {
		    if (event.key === 'Enter') {root.node.blur();}
		});
		
		this.onEventSet('blur', this, 'active', false);
		this.onEventSet('focus', this, 'active', true);
	}
	
	setFontStyle() {
		this.node.style.textAlign = this.textStyle['horizontalAlign'];
		this.node.style.padding = '0px';
		this.scaleFont();
		this.span = true; // setting span will trigger scaleFont in window rescale (see magDOMelement.rescale)
	}
	
	scaleFont() {
		let targetHeight;
		if (this.textStyle['fontScaling'] == 'relative') {
			targetHeight = this.sizeAbs[1] / 100 * this.textStyle['fontSize'];
		} else {
			targetHeight = this.textStyle['fontSize'];
		}
		this.fontSize = mag.getFontSize(this.textStyle['fontFamily'], targetHeight);
		this.node.style.fontSize = this.fontSize[0] + 'px';
	}
	
	hoverChange(event) {
		//root.node.blur();
		if (event.type == 'mouseover') {
			this._hover = true;
		} else if (event.type == 'mouseout') {
			this._hover = false;
		}
		this.applyStyle();
	}
	
	applyStyle() {
		if (this._hover && this._active) {
			this.style = mag.mergeObjects(this.styleChanges.activeHover, this.style);
		} else if (!this._hover && this._active) {
			this.style = mag.mergeObjects(this.styleChanges.active, this.style);
		} else if (!this._hover && !this._active) {
			this.style = mag.mergeObjects(this.styleChanges.inactive, this.style);
		} else if (this._hover && !this._active) {
			this.style = mag.mergeObjects(this.styleChanges.inactiveHover, this.style);
		}
	}
	
	set active(bool) {
		this._active = bool;
		this.applyStyle();
	}
	
	get active() {
		return this._active;
	}
	
	set hover(bool) {
		this._hover = bool;
		this.applyStyle();
	}
	
	get hover() {
		return this._hover;
	}
}
*/
class magDOMbutton2 extends magDOMelement {
	
	constructor(parentNode, title, position = [0, 0], size = [100, 100], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMinput);
		options['position'] = position;
		options['size'] = size;
		super(parentNode, 'p', options);
		
		this.insertText(title, options['textStyle']);
		
		this.styleChanges = options['styleChanges'];
		this.style = mag.mergeObjects(this.style, this.styleChanges.inactive);
		this._active = false;
		this._hover = false;
		
		this.onEvent('mouseover', this.mouseEvent);
		this.onEvent('mouseout', this.mouseEvent);
		this.onEvent('click', this.mouseEvent);
	}
	
	bob(event, a) {
		console.log(a);
	}
	
	mouseEvent(event) {
		//root.node.blur();
		if (event.type == 'mouseover') {
			this._hover = true;
		} else if (event.type == 'mouseout') {
			this._hover = false;
		} else if (event.type == 'click') {
			this._active = !this.active;
		}
		this.applyStyle();
	}
	
	setFontStyle() {
		this.node.style.textAlign = this.textStyle['horizontalAlign'];
		this.node.style.padding = '0px';
		this.scaleFont();
		this.span = true; // setting span will trigger scaleFont in window rescale (see magDOMelement.rescale)
	}
	
	applyStyle() {
		if (this._hover && this._active) {
			this.style = mag.mergeObjects(this.styleChanges.activeHover, this.style);
		} else if (!this._hover && this._active) {
			this.style = mag.mergeObjects(this.styleChanges.active, this.style);
		} else if (!this._hover && !this._active) {
			this.style = mag.mergeObjects(this.styleChanges.inactive, this.style);
		} else if (this._hover && !this._active) {
			this.style = mag.mergeObjects(this.styleChanges.inactiveHover, this.style);
		}
	}
	
	set active(bool) {
		this._active = bool;
		this.applyStyle();
	}
	
	get active() {
		return this._active;
	}
	
	set hover(bool) {
		this._hover = bool;
		this.applyStyle();
	}
	
	get hover() {
		return this._hover;
	}
}

class magDOMsubmenu extends magDOMbutton2 {
	
	constructor(parentNode, title, magDOMmenu, position = [0, 0], size = [100, 100], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMsubmenu);
		super(parentNode, title, position, size, options);
		
		this.menu = magDOMmenu;
		this.mode = options['mode'];
		let len = itemList.length;
		for (let i=0; i<len; i++) {
			this.itemList.push(new magDOMelement)
		}
	}
	
	set active(bool) {
		this._active = bool;
		this.applyStyle();
		// if the submenu mode is set to 'click' it is shown/hidden here
		if (this.mode == 'click') {
			this.menu.hidden = this._active;
		}
	}
	
	get active() {
		return this._active;
	}
}

class magDOMslider extends magRect {
	
	constructor(canvas, position = [0, 0], size = [100, 100], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMslider);
		super(canvas, position, size, options['main']);
		this.slider = new magRect(canvas, position, [1.5, size[1]], options['slider']);
		
		// set up mouse events
		if (options.eventSettings.mouseHandler) {
			this.slider.enableMouseDrag(canvas, 'x');
			//this.slider.restrictDrag(this, 'x');
			//this.onEvent('mousedown', this.mouseDown);
		}
	}
	
	set value(number) {
		this._value = number;
	}
	
}

class magDOMcolor extends magSVGcanvas {
	
	constructor(parentNode, position = [0, 0], size = [100, 100], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMcolor);
		super(parentNode, position, size, options['main']);
		
		this.red = new magDOMslider(this, [0, 10], [40, 25], options);
		this.redGradient = this.defineGradient('redSlider', [[0, 0, 0, 0], [100, 255, 0, 0]], [0, 0, 1, 0]);
		this.red.node.style.fill = `url(#redSlider)`
		
		this.green = new magDOMslider(this, [0, 40], [40, 25], options);
		this.greenGradient = this.defineGradient('greenSlider', [[0, 0, 0, 0], [100, 0, 255, 0]], [0, 0, 1, 0]);
		this.green.node.style.fill = `url(#greenSlider)`;
		
		this.blue = new magDOMslider(this, [0, 70], [40, 25], options);
		this.blueGradient = this.defineGradient('blueSlider', [[0, 0, 0, 0], [100, 0, 0, 255]], [0, 0, 1, 0]);
		this.blue.node.style.fill = `url(#blueSlider)`;
	}
}

class magDOMmenu extends magDOMelement {
	
	/* The form inputs are defined in a list:
	** [input1, input2, input3, ...]
	**
	** possible types and their definitions are:
	** 'label'    -> ['label', 'text', pos, size, options]
	** 'number'   -> ['number', default, pos, size, options]
	** 'string'   -> ['string', default, pos, size, options]
	** 'button'   -> ['button', 'text', pos, size, options]
	** 'select'   -> ['select', itemList, pos, size, options]
	** 'textarea' -> ['textarea', pos, size, options]
	** 'checkbox' -> ['check', pos, size, options]
	** 'color'    -> ['color', pos, size, options]
	**
	** common options for all elements are: {id: identifier, alignment: 0, scaling: 0, style: {}}
	*/
	
	constructor(parentNode, inputs, options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMform);
		super(parentNode, 'div', options);
		
		this.inputList = [];
		let len = inputs.length;
		for (let i=0; i<len; i++) {
			switch (inputs[i][0]) {
				case 'label':
					this.inputList.push(new magDOMparagraph(this, ...inputs[i].slice(1)));
					break;
				case 'number':
					this.inputList.push(new magDOMinput(this, 'number', ...inputs[i].slice(1)));
					break;
				case 'string':
					this.inputList.push(new magDOMinput(this, 'text', ...inputs[i].slice(1)));
					break;
				case 'button':
					this.inputList.push(new magDOMbutton2(this, ...inputs[i].slice(1)));
					break;
				case 'color':
					this.inputList.push(new magDOMcolor(this, ...inputs[i].slice(1)));
					break;
				case 'select':
					this.inputList.push(new magDOMselect(this, ...inputs[i].slice(1)));
					break;
				case 'textarea':
					this.inputList.push(new magDOMtextarea(this, ...inputs[i].slice(1)));
					break;
				case 'radio':
					this.inputList.push(new magDOMradio(this, ...inputs[i].slice(1)));
					break;
				default:
					console.log(`UNKNOWN FORM ELEMENT: ${inputs[i][0]}`)
			}
		}
	}
}

class magDOMbuttonGroup {
	
	constructor(parentNode, positions = [[50, 50]], sizes = [10, 4], texts = [''], options = {id: 'button'}) {
		this.buttonList = [];
		this._chosen = -1;
		this._hidden = false;
		this._positions = positions;
		this._size = sizes;
		this.id = options.id;
		let len = positions.length;
		let root = this;
		for (let i=0; i<len; i++) {
			if (typeof texts[i] == 'string') {
				options.text = texts[i];
				options.id = `${this.id}_${i}`;
			}
			if (Array.isArray(sizes[0])) {
				this.buttonList.push(new magDOMbutton(parentNode, positions[i], sizes[i], options))
			} else {
				this.buttonList.push(new magDOMbutton(parentNode, positions[i], sizes, options))
			}
		}
		
		for (let i=0; i<len; i++) {
			this.buttonList[i].onclick(root.activateButton, root)
		}
	}
	
	activateButton(event, root, button) {
		root._chosen = -1;
		let len = root.buttonList.length;
		for (let i=0; i<len; i++) {
			if (button == root.buttonList[i]) {
				root.buttonList[i].active = true;
				root._chosen = i;
			} else {
				root.buttonList[i].active = false;
			}
		}
	}
	
	set positions(list) {
		this._positions = list;
		let len = this.buttonList.length;
		for (let i=0; i<len; i++) {
			this.buttonList[i].position = list[i];
		}
	}
	
	get positions() {
		return this._positions;
	}
	
	set texts(list) {
		this._texts = list;
		let len = this.buttonList.length;
		for (let i=0; i<len; i++) {
			this.buttonList[i].text = list[i];
		}
	}
	
	get texts() {
		return this._texts;
	}
	
	get chosenText() {
		if (this._chosen == -1) {
			return 'none';
		} else {
			return this.buttonList[this._chosen].text;
		}
		return this._texts;
	}
	
	set size(value) {
		this._size = value;
		let len = this.buttonList.length;
		for (let i=0; i<len; i++) {
			if (Array.isArray(value[0])) {
				this.buttonList[i].size = value[i];
			} else {
				this.buttonList[i].size = value;
			}
		}
	}
	
	get size() {
		return this._size;
	}
	
	set chosen(value) {
		this._chosen = value;
		let len = this.buttonList.length;
		for (let i=0; i<len; i++) {
			if (i == value) {
				this.buttonList[i].active = true;
			} else {
				this.buttonList[i].active = false;
			}
		}
	}
	
	get chosen() {
		return this._chosen;
	}
	
	set hidden(bool) {
		this._hidden = bool;
		let len = this.buttonList.length;
		for (let i=0; i<len; i++) {
			if (bool) {
				this.buttonList[i].node.style.visibility = 'hidden';
			} else {
				this.buttonList[i].node.style.visibility = 'visible';
			}
		}
	}
	
	get hidden() {
		return this._hidden;
	}
}

class magDOMcanvas extends magDOMelement {
	
	constructor(parentNode, position = [0, 0], size = [100, 100], options = {}) {
		options = mag.mergeObjects(options, magDefaults.magDOMcanvas);
		options.size = size;
		options.position = position;
		super(parentNode, 'canvas', options);
		this.draw = this.node.getContext("2d");
	}
	
	line(...args) {
		this.draw.moveTo(0, 0);
		this.draw.lineTo(100, 100);
		this.draw.lineWidth = 5;
		this.draw.stroke();
	}
}