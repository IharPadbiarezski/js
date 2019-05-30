// function getBrickVolume(width, length, height) {
// 	return width * length * height;
// }

// let brickVolumeWithWidth = getBrickVolume.bind(null, 10);

// let brickVolumeWithWidthAndLength = brickVolumeWithWidth.bind(null, 20);

// let volume1 = brickVolumeWithWidthAndLength(0);
// let volume2 = brickVolumeWithWidthAndLength(10);
// let volume3 = brickVolumeWithWidthAndLength(5);

// console.log(volume1, volume2, volume3);

function getBrickVolume(width) {
	function getBrickVolumeWithWidth(length) {
		function getBrickVolumeWithWidthAndLength(height) {
			return width * length * height;
		}

		return getBrickVolumeWithWidthAndLength;
	}

	return getBrickVolumeWithWidth;
}

// let brickVolumeWithWidth = getBrickVolume(10);

// let brickVolumeWithWidthAndLength = brickVolumeWithWidth(20);

let brickVolumeWithWidthAndLength = getBrickVolume(10)(20);

let volume1 = brickVolumeWithWidthAndLength(0);
let volume2 = brickVolumeWithWidthAndLength(10);
let volume3 = brickVolumeWithWidthAndLength(5);

console.log(volume1, volume2, volume3);
