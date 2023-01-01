import Header from "./Header";
import SectionBody from "./SectionBody";

export default function Body(_props) {
	return(
	<div className="w-100">
		<Header
			name="Федор"
			patronymic="Игнатьевич"
			surname="Васильев"
			bornDate="17.12.2002"
			isMale={true}
			phone="+7(960)815-54-00"
			SNILS="123-456-789 01"
		/>
		<SectionBody />
	</div>
	)
}
