import MedAttachment from "./Block/MedAttachment";
import Address from "./Block/Address"
import IdentityProof from "./Block/IdentityProof";
import Insurance from "./Block/Insurance";
import WorkStudy from "./Block/WorkStudy";

export default function SectionBody(_props) {
	return (
	<div className="flex body__main">
		<div className="flex dir-col col-2">
			<MedAttachment
				areaType = "Терапевтический"
				social   = "Дошкольник неоргазированный"
				LPU      = "ЧУЗ РЖД МЕДИЦИНА ПГТ. ФЕВРАЛЬСК"
				area     = "Типовый участок №1"
			/>
			<Address
				regAddr  = "Россия, Самарская обл, безенукский р-н, самарского НИИСХ СНТ"
				liveAddr = "Россия, Самарская обл, безенукский р-н, самарского НИИСХ СНТ"
				bornAddr = "Россия, Самарская обл, безенукский р-н, самарского НИИСХ СНТ"
			/>
			<IdentityProof
				type      = "Паспорт гражданина РФ"
				series    = "3412"
				number    = "631435"
				givenBy   = "Самарским ОВД г. Самары"
				givenDate = "20.05.2022"
			/>
		</div>
		<div className="flex dir-col col-2">
			<Insurance
				type      = "ОМС (единого образца)"
				location  = "Самарская область"
				number    = "6314355487880346"
				givenBy   = "Самарским ОВД г. Самары"
				givenDate = "27.05.2021"
			/>
			<div className="mt-auto">
				<WorkStudy />
			</div>
		</div>
	</div>
	)
}
