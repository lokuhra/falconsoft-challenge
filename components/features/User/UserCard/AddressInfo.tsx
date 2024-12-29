import { MapPin } from "lucide-react"

interface AddressInfoProps {
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
}

const AddressInfo = ({ address }: AddressInfoProps) => (
  <div className="space-y-2">
    <h3 className="font-semibold flex items-center gap-2">
      <MapPin className="h-4 w-4" />
      Address
    </h3>
    <div className="pl-6 space-y-1">
      <p>
        {address.street}, {address.suite}
      </p>
      <p>
        {address.city}, {address.zipcode}
      </p>
    </div>
  </div>
)

export default AddressInfo
