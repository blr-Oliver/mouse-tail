const MAX_SEGMENTS = 20;
const MAX_LIFESPAN = 1300;
var segments = [];

function createSegment(x, y){
	var segment = document.createElement('div');
	segment.className = 'segment';
	segment.style.left = x + 'px';
	segment.style.top = y + 'px';
	document.body.appendChild(segment);
	segment.offsetWidth;
	segment.style.opacity = '0';
	return segment;
}

function removeSegment(segment){
	segment.remove();
}

function onMousemove(event){
	var segment = createSegment(event.clientX, event.clientY);
	segments.unshift( segment );
	setTimeout(removeSegment, MAX_LIFESPAN, segment);
	if(segments.length > MAX_SEGMENTS)
		removeSegment( segments.pop() );
}

document.addEventListener('mousemove', onMousemove);
