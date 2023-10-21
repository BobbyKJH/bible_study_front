import { UseFormRegister } from 'react-hook-form'

declare namespace Bible{

	interface Notice{
		id:          number;
		book:        string;
		chapter:     number;
		startVerse:  number;
		endVerse:    number;
		content:     string;
		createAt:    string;
		userId:      string;
		userName:    string;
		showData:    string;
	}

	interface Create{
		book:       string,
		chapter:    string | null,
		startVerse: string | null,
		endVerse:   string | null,
		content:    string,
		showData:   string
	}

	interface Read {
		value: string | number;
		verse?: string;
		books?: {
			id: number;
			book: string;
		}
	}

	interface Text {
		register: UseFormRegister<any>;
		name:     string;
		verse?:   string;
		label?:   string;
	}

	interface User{
		userId: string;
		userName: string;
		userBirth: string;
	}

}

export default Bible;