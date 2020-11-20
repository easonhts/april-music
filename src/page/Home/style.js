import styled from 'styled-components';
import global from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${global["theme-color"]};
  padding: 5px 10px;
  &>span {
    line-height: 40px;
    font-size: 20px;
    color: #f1f1f1;
    &.iconfont {
      font-size: 25px;
    }
  }
`

export const Tab = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${global["theme-color"]};
  a {
    flex: 1;
    color: #e4e4e4;
    font-size: 14px;
    padding: 2px 0;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`