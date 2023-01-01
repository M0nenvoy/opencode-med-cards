import SectionBlock from "../SectionBlock"

export default function Address(props) {
	const regAddr  = props.regAddr
	const liveAddr = props.liveAddr
	const bornAddr = props.bornAddr

	return (
	<SectionBlock
		title = "Адрес регистрации и проживания"
		fields = {[
			{
				k: "Регистрация",
				v: regAddr,
			},
			{
				k: "Проживает",
				v: liveAddr
			},
			{
				k: "Родился",
				v: bornAddr
			},
		]}
	/>
	)
}
