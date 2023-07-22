import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PackageItem from './components/PackageItem'
import './App.css'

class App extends Component {
  state = {packageList: [], isLoading: true}

  componentDidMount() {
    this.getPackageData()
  }

  getPackageData = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const {packages} = data
    const formattedData = packages.map(eachPackage => ({
      id: eachPackage.id,
      name: eachPackage.name,
      imageUrl: eachPackage.image_url,
      description: eachPackage.description,
    }))
    this.setState({packageList: formattedData, isLoading: false})
  }

  render() {
    const {packageList, isLoading} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="main-heading">Travel Guide</h1>
          {isLoading ? (
            <div data-testid="loader" className="spinner">
              <Loader height={50} width={50} type="TailSpin" color="#00BFFF" />
            </div>
          ) : (
            <ul className="package-list-container">
              {packageList.map(eachPackage => (
                <PackageItem
                  key={eachPackage.id}
                  packageDetails={eachPackage}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
