import { h, Component } from 'preact'
import './app.css'

export default class ###_page-name_### extends Component {
  state = {
    name: 'wenjun'
  }
  render () {
    return (
      <div>
        ###_page-name_###
        <div className='test'>{this.state.name}</div>
      </div>
    )
  }
}
