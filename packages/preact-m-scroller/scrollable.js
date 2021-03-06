import { h, Component, cloneElement } from 'preact'

class ScrollerContent extends Component {
  shouldComponentUpdate (nextProps) {
    return (
      nextProps.action === 'none' &&
      this.props.action === 'none' &&
      nextProps.position === this.props.position
    )
  }
  // 这里的div还少不了，少了div，如果children是个数组，在只有loadmore时会导致loadmore组件渲染错位
  // 这个应该是preact的diff算法问题
  render = () => <div>{this.props.children}</div>
}

// eslint-disable-next-line
export default class Scrollable extends Component {
  render ({
    children,
    distance,
    action,
    position,
    header,
    footer,
    onRefresh, // 过滤
    onLoadMore, // 过滤
    resetLoadMore, // 过滤
    ...otherProps
  }) {
    let _style = { transition: action === 'none' ? '330ms' : 'none' }
    if (distance !== 0) {
      // 不能过早的加transform，因为在safari上，加了transform后动态内容高度会导致不能滚动
      _style.transform = `translate3d(0px, ${distance / 2}px, 0px)`
      _style['-webkit-transform'] = `translate3d(0px, ${distance / 2}px, 0px)`
    }
    return (
      <div style={_style}>
        {header && header()}
        <ScrollerContent action={action} position={position}>
          {children &&
            (children.length
              ? children
              : cloneElement(children, {
                ...otherProps
              }))}
        </ScrollerContent>
        {footer && footer()}
      </div>
    )
  }
}
