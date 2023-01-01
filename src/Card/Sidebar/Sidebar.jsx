import Help from "./Help"
import Section from "./Section"

export default function Sidebar(props) {
	const patientId = props.patientId
	const title     = props.title
	const sections  = props.sections

	/* Номер выбранной секции */
	const selectedId = props.selectedId

	return (
	<div className="bg-cyan h-100 sidebar flex dir-col">
		<div className="sidebar__header">
			<div className="text-blue sidebar__title">{title}</div>
			<div className="text-blue sidebar__id">№ {patientId}</div>
		</div>

		<div className="sidebar__sections">
			{sections.map((section, i) => {
				return <Section selected={i == selectedId} title={section} key={i} />
			})}
		</div>

		<Help />
	</div>
	)
}
