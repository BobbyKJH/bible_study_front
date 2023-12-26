declare namespace Bible{

	interface User {
		id: string;
		userId: string;
		userName: string;
		auth: string;
	}

	interface Notice {
		id: number,
		book: string,
		chapter: number,
		startVerse: number,
		endVerse: number,
		content: string,
		userName: string,
		userId: string,
		createAt: string,
		showData: string,
		view: number
	}

	interface Create {
		book: string | null;
		startVerse: number | null;
		endVerse: number | null;
		chapter: number | null;
		content: string;
		userName: string | null;
		userId: string;
		showData: string;
	}

	interface  Edit {
		userName: string | null;
		userId: string;
	}

}

export default Bible;