import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { Top, Tab, TabItem } from "./style";
import { NavLink } from 'react-router-dom';

function Home(props) {
  const { route } = props;
  console.log(route);
  return (
    <>
      <Top>
        <span className="menu">-</span>
        <span className="">April</span>
        <span className="search">-</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected"><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to="/singers" activeClassName="selected"><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to="/rank" activeClassName="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </>
  );
}

export default memo(Home);
