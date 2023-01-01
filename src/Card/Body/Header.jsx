export default function Header(props) {
	const name       = props.name
	const surname    = props.surname
	const patronymic = props.patronymic
	const bornDate   = props.bornDate
	const isMale     = props.isMale
	const phone      = props.phone
	const SNILS      = props.SNILS

	return (
	<div className="body__header bg-light-gray text-gray">
		<div className="body__name">
			{surname} {name} {patronymic}
		</div>
		<div className="body__header-container flex">
			<div className="col-3">
				<div>{bornDate} г.р.</div>
				<div>{isMale ? "Мужской" : "Женский"}</div>
			</div>
			<div className="col-3">
				<div>Жив</div>
				<div>{phone}</div>
			</div>
			<div className="col-3">
				<div>СНИЛС <span className="nowrap">{SNILS}</span></div>
			</div>
		</div>
	</div>
	)
}
