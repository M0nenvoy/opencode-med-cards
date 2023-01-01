import SectionBlock from "../SectionBlock";

function or(value, orval) {
	if (value) return value
	return orval
}

export default function Insurance(props) {
	const location  = props.location
	const type      = props.type
	const series    = props.series
	const number    = props.number
	const givenBy   = props.givenBy
	const givenDate = props.givenDate
	const category  = props.category

	return (
	<SectionBlock
		title = "Страховой полис"
		fields = {[
			{
				k: "Территория",
				v: location
			},
			{
				k: "Тип",
				v: type
			},
			{
				k: "Серия/номер",
				v: `${or(series, "-")} ${number}`
			},
			{
				k: "Выдан",
				v: <span className="uppercase">{givenBy}</span>
			},
			{
				k: "Дата выдачи",
				v: givenDate
			},
			{
				k: "Страх. катег.",
				v: or(category, "-")
			},
		]}
	/>
	)
}
