
declare namespace Bible{
	interface Notice{
		id:          number;
		book:        string;
		chapter:     number;
		startVerse:  number;
		endVerse:    number;
		content:     string;
		createAt:    string;
		updateAt:    string;
		data:        string;
		userId:      string;
		userName:    string;
		showData:    string;
	}

	interface Create{

	}
}

export default Bible;