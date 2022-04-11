/* eslint-disable */
export default function getListStudentIds(array) {
    const reducer = (accumulator, array) => accumulator + array.id;
    return array.reduce(reducer, 0);
}
