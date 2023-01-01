import Body from "./Body/Body"
import Sidebar from "./Sidebar/Sidebar"

export default function Card(_props) {
	const height = 700;

	const sections = [
		"Пациент",
		"Дополнительно",
		"Детство",
		"Доп. Документы",
		"Сведения ЛПУ",
		"Льготы",
		"Инвалидность",
		"Онкоосмотры",
		"Флюoрография",
		"Маммография",
		"Рентген грудной клетки",
		"Прививки",
		"Личный кабинет",
	]

	return (
	<div className="flex" style={{minHeight: `${height}px`}}>
		<div className="col-5">
			<Sidebar
				patientId={518}
				title="Карточка пациента"
				sections={sections}
				selectedId={0}
			/>
		</div>
		<div className="w-100">
			<Body />
		</div>
	</div>
	)
}
