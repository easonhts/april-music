import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react'
import BScroll from 'better-scroll';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState();
  const scrollContainerRef = useRef();
  const { direction, click, refresh, bounceTop, bounceBottom } = props;
  const { onScroll, pullUp, pullDown } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
      mouseWheel: true
    })
    setBScroll(scroll);
    return () => {
      setBScroll(null)
    }
    //eslint-disable-next-line
  }, [])

  // 页面刷新刷新实例
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  })

  // 监听页面滚动事件
  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll', (scroll) => {
      onScroll(scroll)
    })
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

  // 上拉加载
  useEffect(() => {
    if (!bScroll || !pullUp) return;
    bScroll.on('scrollEnd', () => {
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    })
    return () => {
      bScroll.off('scrollEnd')
    }
  }, [pullUp, bScroll])

  // 下拉
  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on('touchEnd', (pos) => {
      if (pos.y > 50) {
        pullDown()
      }
    })
    return () => {
      bScroll.off('touchEnd')
    }
  }, [pullDown, bScroll])

  // 给父级组件传实例
  useImperativeHandle(ref, () => ({
    refresh: () => {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0)
      }
    },
    getBScroll: () => {
      if (bScroll) {
        return bScroll;
      }
    }
  }))

  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
    </ScrollContainer>
  )
})

Scroll.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']), // 滚动方向
  click: PropTypes.bool, // 是否支持点击
  refresh: PropTypes.bool, // 是否支持刷新
  onScroll: PropTypes.func, // 滚动回调函数
  pullUp: PropTypes.func, // 上拉加载
  pullDown: PropTypes.func, //下拉加载
  pullUpLoading: PropTypes.bool, //是否展示上拉loading
  pullDownLoading: PropTypes.bool, //是否展示下拉loading
  bounceTop: PropTypes.bool, // 是否支持向上吸吸顶
  bounceBottom: PropTypes.bool, // 是否支持向下吸顶
}

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUp: null,
  pullDown: null,
  pullUpLoading: false,
  pullDownLoading: false,
  bounceTop: true,
  bounceBottom: true,
}

export default Scroll