import { h, Component } from 'preact'
import { XCenterView } from '@ruiyun/preact-layout-suite'
import Text from '@ruiyun/preact-text'
import { WithModal } from '@ruiyun/preact-modal'
import { WithToast } from '@ruiyun/preact-m-toast'
import { WithLoading } from '@ruiyun/preact-m-loading'

const renderModalContent = () => (
  <XCenterView height={300} bgColor="#fff" width={600}>
    <Text>modal</Text>
  </XCenterView>
)

const renderLeftModalContent = () => (
  <XCenterView height='100vh' bgColor="#fff" width={600}>
    <Text>left-modal</Text>
  </XCenterView>
)

const renderRightModalContent = () => (
  <XCenterView height='100vh' bgColor="#fff" width={600}>
    <Text>right-modal</Text>
  </XCenterView>
)

const renderTopModalContent = () => (
  <XCenterView width='100vw' bgColor="#fff" height={400}>
    <Text>top-modal</Text>
  </XCenterView>
)

const renderBottomModalContent = () => (
  <XCenterView width='100vw' height='80vh' bgColor="#fff">
    <Text>bottom-modal</Text>
  </XCenterView>
)

@WithLoading
@WithToast
@WithModal
export default class TabsDemo extends Component {
  constructor(props) {
    super(props)
    this.openCenterModal = this.openCenterModal.bind(this)
    this.openLeftModal = this.openLeftModal.bind(this)
    this.openRightModal = this.openRightModal.bind(this)
    this.openTopModal = this.openTopModal.bind(this)
    this.openBottomModal = this.openBottomModal.bind(this)
  }
  openCenterModal() {
    this.props.$modal.show({ renderContent: renderModalContent, mask: 0.5 })
  }
  openLeftModal() {
    this.props.$modal.show({
      renderContent: renderLeftModalContent,
      position: 'left'
    })
  }
  openRightModal() {
    this.props.$modal.show({
      renderContent: renderRightModalContent,
      position: 'right'
    })
    this.props.$loading.show('请填写姓名')
  }
  openTopModal() {
    this.props.$modal.show({
      renderContent: renderTopModalContent,
      position: 'top'
    })
  }
  openBottomModal () {
    this.props.$modal.show({
      renderContent: renderBottomModalContent,
      position: 'bottom'
    })
  }
  render() {
    return (
      <div>
        <div onClick={this.openCenterModal}>打开modal(中间)</div>
        <div onClick={this.openLeftModal}>打开modal(左边)</div>
        <div onClick={this.openRightModal}>打开modal(右边)</div>
        <div onClick={this.openTopModal}>打开modal(上边)</div>
        <div onClick={this.openBottomModal}>打开modal(下边)</div>
      </div>
    )
  }
}
