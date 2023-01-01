export default function SectionBlock(props) {
	const title  = props.title
	const fields = props.fields

	const fieldsRender = fields.map((kv, i) => {
		console.log("Value: ")
		console.log(kv.v)
		return (
		<div className="sb__row flex" key={i} >
			<div className="sb__key text-lgray">{kv.k}</div>
			<div className="sb__value">{kv.v}</div>
		</div>
		)
	})

	return (
	<div className="sb__block">
		<div className="sb__title text-blue">{title}</div>
		{fieldsRender}
	</div>
	)
}
