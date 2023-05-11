// Propertise Interface
interface IUser {
	firstName: string;
	lastName: string;
}
// Method Interface
interface IMethod {
	fullName(): string;
}
// ModelType Interface
interface IModel<TData, TMethods> {
	data: TData;
	methods: TMethods;
}
type ModelType = IModel<IUser, IMethod>;

class User implements ModelType {
	data: IUser;
	methods: IMethod;

	constructor(firstName: string, lastName: string) {
		this.data = { firstName, lastName };
		this.methods = {
			fullName: () => {
				return `${firstName} ${lastName}`;
			},
		};
	}
}
// Instance
const user1 = new User("Md.", "Rased");
//console.log(user1.data.firstName); // Md.
//console.log(user1.methods.fullName()); // Md. Rased
