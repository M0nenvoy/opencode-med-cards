import SectionBlock from "../SectionBlock"

export default function MedAttachment(props) {
	const areaType = props.areaType
	const social   = props.social
	const LPU      = props.LPU
	const area     = props.area

	return (
	<SectionBlock
		title = "Прикрепление к медучереждению"
		fields = {[
			{
				k: "Тип участка",
				v: (
					<>
						<span className="text-blue">1. </span>
						<span>{areaType}</span>
					</>
				),
			},
			{
				k: "Соц. статус",
				v: social
			},
			{
				k: "ЛПУ прикреп.",
				v: LPU
			},
			{
				k: "Участок",
				v: area
			}
		]}
	/>
	)
}
