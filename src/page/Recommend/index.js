import React from 'react'
import Scroll from '../../baseUI/scroll';
import Slider from '../../components/slider/index';
import RecommendList from '../../components/list/index';
import { Content } from './style';

function Recommend (props) {
  const bannerList = [1, 2, 3, 4].map(item => {
    return { url: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg' }
  })
  const recommendList = (new Array(10).fill('')).map((item, index) => ({
    id: index,
    url: 'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
    playCount: 17171122,
    name: '朴树、许巍、李健、郑钧、老狼、赵雷',
  }))
  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList} />
          <RecommendList recommendList={recommendList} />
        </div>
      </Scroll>
    </Content>
  )
}

export default React.memo(Recommend)