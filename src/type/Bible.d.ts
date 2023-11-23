declare namespace Bible{

	interface User {
		userId: string;
		userName: string;
		userAuth: string;
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
		showData: string
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