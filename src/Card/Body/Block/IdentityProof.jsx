import SectionBlock from "../SectionBlock";

export default function IdentityProof(props) {
	const type   = props.type
	/*
	 * Нижеизложенные параметры зависят от типа.
	 * Будет необходимо создать полиморфную логику (мб лучше просто switch/case?), как только
	 * будет известно об остальных типах.
	 */
	const series    = props.series
	const number    = props.number
	const givenBy   = props.givenBy
	const givenDate = props.givenDate

	return (
	<SectionBlock
		title = "Удостоверение личности"
		fields = {[
			{
				k: "Тип",
				v: type
			},
			{
				k: "Серия/номер",
				v: `${series} ${number}`
			},
			{
				k: "Выдан",
				v: <span className="uppercase">{givenBy}</span>
			},
			{
				k: "Дата выдачи",
				v: givenDate
			},
		]}
	/>
	)
}
