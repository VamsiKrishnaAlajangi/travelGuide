import './index.css'

const PackageItem = props => {
  const {packageDetails} = props
  const {name, description, imageUrl} = packageDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="package-name">{name}</h1>
      <p className="package-description">{description}</p>
    </li>
  )
}

export default PackageItem
