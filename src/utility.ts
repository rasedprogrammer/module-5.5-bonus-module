// Pick Method
interface Person {
	name: string;
	email: string;
	contactNo: string;
}
// Use Pick Method
type Contact = Pick<Person, "contactNo" | "email">;

// Omit Type Method
type NumberTypeRemove = Omit<Person, "contactNo" | "email">;

// Partial Type Method
type MakeOptionType = Partial<Person>;

// Required Type Method
type MakeRequiredType = Required<Person>;

// Readonly Type Method
const personReadOnlyType: Readonly<Person> = {
	name: "Person Name",
	email: "abc@gmail.com",
	contactNo: "123",
};
// personReadOnlyType.name = "Person Name2";

// Record Type Method
type myObj = Record<"a" | "b" | "c", string>;

// Declare Record Type Method
const myRecordType: myObj = {
	a: "1",
	b: "2",
	c: "3",
	// d: "4",
};
