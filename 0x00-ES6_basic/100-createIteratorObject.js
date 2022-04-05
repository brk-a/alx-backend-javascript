export default function createIteratorObject(report) {
    const array1 = [];
  /* eslint-disable */
    for (const [department, employees] of Object.entries(report.allEmployees)) {
	for (const emp of employees) {
	    array1.push(emp);
	}
    }

    return array1;
}
