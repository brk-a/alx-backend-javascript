/* eslint-disable */
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
    const room_sizes = [19, 20, 34];
    const classArr = [];

    for (const size of room_sizes) {
	classArr.push(new ClassRoom(size));
    }
    return classArr;
}
