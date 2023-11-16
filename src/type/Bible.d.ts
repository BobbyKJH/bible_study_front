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

}

export default Bible;