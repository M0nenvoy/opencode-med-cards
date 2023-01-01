import SectionBlock from "../SectionBlock";

function or(v, orval) {
	if (v) return v
	return orval
}

export default function WorkStudy(props) {
	const org     = props.org
	const sub     = props.sub
	const post    = props.post
	const socprof = props.socprof

	return (
	<SectionBlock
		title = "Работа и учеба"
		fields = {[
			{
				k: "Организация",
				v: or(org, "-")
			},
			{
				k: "Подразделение",
				v: or(sub, "-")
			},
			{
				k: "Должность",
				v: or(post, "-")
			},
			{
				k: "Соц.-проф. группа",
				v: or(socprof, "-")
			},
		]}
	/>
	)
}
