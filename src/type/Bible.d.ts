import { UseFormRegister } from 'react-hook-form'

declare namespace Bible{
	interface Create {
		book: string;
		chapter: number | null;
		startVerse: number | null;
		endVerse: number | null;
		content: string;
		showData: string;
	}
}

export default Bible;