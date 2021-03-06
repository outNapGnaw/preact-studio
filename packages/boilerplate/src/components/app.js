import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Home from '../routes/home'
import Profile from '../routes/profile'
import ScrollerDemo from '../routes/scrollerDemo'
import AutoListDemo from '../routes/autolistDemo'
import SwiperDemo from '../routes/swiperDemo'
import TabsDemo from '../routes/tabsDemo'
import TabsAndAutoListDemo from '../routes/tabsAndAutoListDemo'
import ModalDemo from '../routes/modalDemo'
import DialogDemo from '../routes/dialogDemo'
import ToastDemo from '../routes/toastDemo'
import ActionSheetDemo from '../routes/actionsheetDemo'
import PickerDemo from '../routes/pickerDemo'
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render () {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
          <ScrollerDemo path="/scroller/" />
          <AutoListDemo path="/autolist/" />
          <SwiperDemo path="/swiper/" />
          <TabsDemo path="/tabs/" />
          <TabsAndAutoListDemo path="/tabsAndAutoList/" />
          <ModalDemo path="/modal/" />
          <DialogDemo path="/dialog/" />
          <ToastDemo path="/toast/" />
          <ActionSheetDemo path="/actionsheet/" />
          <PickerDemo path="/picker/" />
        </Router>
      </div>
    )
  }
}
