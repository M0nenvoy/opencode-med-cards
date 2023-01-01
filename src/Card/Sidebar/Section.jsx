export default function Section(props) {
	const selected = props.selected
	const title    = props.title

	let className = "sidebar__item flex"
	className += selected ? " selected" : ""

	return (
	<div className={className}>
		<div className="w-75">{title}</div>
		<div className="my-auto">OK</div>
	</div>
	)
}
