import React from 'react'
import { NavLink } from 'react-router-dom'

const MusicList = ()=> {
  return (
    <ul className="m-cvrlst">
      <li>
        <div className="u-cover">
          <img alt="音乐" src="http://p1.music.126.net/FnJPqo6IjQPLdPBmAlDRVA==/18823639069381202.jpg?param=140y140"/>
          <NavLink title="〖民谣〗一个字的心情" to="/Music/1" className="msk"></NavLink>
          <div className="bottom">
            <NavLink className="icon-play" title="播放" to="/Music/1"></NavLink>
            <span className="icon-headset"/>
            <span className="nb">45万</span>
          </div>
        </div>
        <p className="dec">
          <NavLink title="〖民谣〗一个字的心情" className="tit s-fc0" to="/Music/1">
            〖民谣〗一个字的心情
          </NavLink>
        </p>
      </li>
      <li>
        <div className="u-cover">
          <img alt="音乐" src="http://p1.music.126.net/sMghA527zlusVXO6WKQJXg==/18777459581036895.jpg?param=140y140"/>
          <NavLink title="Trip-Hop | 致迷致幻 神游天外 ✈︎" to="/Music/1" className="msk"/>
          <div className="bottom">
            <NavLink className="icon-play" title="播放" to="/Music/1"/>
            <span className="icon-headset"/>
            <span className="nb">21万</span>
          </div>
        </div>
        <p className="dec">
          <NavLink title="Trip-Hop | 致迷致幻 神游天外 ✈︎" className="tit s-fc0" to="/Music/1">
            Trip-Hop | 致迷致幻 神游天外 ✈︎
          </NavLink>
        </p>
      </li>
      <li>
        <div className="u-cover">
          <img alt="音乐" src="http://p1.music.126.net/ffjwjBt6vyWRUtSeKqpvDQ==/18552059697196685.jpg?param=140y140"/>
          <NavLink title="2016年度欧美单曲播放排行榜" to="/Music/1" className="msk"/>
          <div className="bottom">
            <NavLink className="icon-play" title="播放" to="/Music/1" />
            <span className="icon-headset"/>
            <span className="nb">279万</span>
          </div>
        </div>
        <p className="dec">
          <NavLink title="2016年度欧美单曲播放排行榜" className="tit s-fc0" to="/Music/1">
            2016年度欧美单曲播放排行榜
          </NavLink>
        </p>
      </li>
      <li>
        <div className="u-cover">
          <img alt="音乐" src="http://p1.music.126.net/N0IrEA6V1RrS_W0brRn8OQ==/19182079858269301.jpg?param=140y140"/>
          <NavLink title="【星缘星语】No.162-以人民的名义选择望远镜" to="/Music/1" className="msk"/>
          <div className="bottom">
            <NavLink className="icon-play" title="播放" to="/Music/1" />
            <span className="icon-headset"/>
            <span className="nb">1380</span>
          </div>
        </div>
        <p className="dec">
          <NavLink title="【星缘星语】No.162-以人民的名义选择望远镜" className="tit s-fc0" to="/Music/1">
           NavLink<i className="u-icn u-icn-53"/>
            【星缘星语】No.162-以人民的名义选择望远镜
          </NavLink>
        </p>
      </li>
      <li>
        <div className="u-cover">
          <img alt="音乐" src="http://p1.music.126.net/WVJ-w_orhIBawXWj8DwZDw==/2945591651012211.jpg?param=140y140"/>
          <i className="u-jp u-icn2 u-icn2-jp3"/>
          <NavLink title="浓情欧洲，清新小语种" to="/Music/1" className="msk"/>
          <div className="bottom">
            <NavLink className="icon-play" title="播放" to="/Music/1"/>
            <span className="icon-headset"/>
            <span className="nb">110万</span>
          </div>
        </div>
        <p className="dec">
          <NavLink title="浓情欧洲，清新小语种" className="tit s-fc0" to="/Music/1">
            浓情欧洲，清新小语种
          </NavLink>
        </p>
      </li>
      <li>
        <div className="u-cover">
          <img alt="音乐" src="http://p1.music.126.net/cXpnOBoApRI_wmjIHN2L2g==/19008357021081982.jpg?param=140y140"/>
          <NavLink title="那些以玩笑说出口的话，往往是最真的表达" to="/Music/1" className="msk"/>
          <div className="bottom">
            <NavLink className="icon-play" title="播放" to="/Music/1"/>
            <span className="icon-headset"/>
            <span className="nb">6668</span>
          </div>
        </div>
        <p className="dec">
          <NavLink title="那些以玩笑说出口的话，往往是最真的表达" className="tit s-fc0" to="/Music/1">
           NavLink<i className="u-icn u-icn-53"/>
            那些以玩笑说出口的话，往往是最真的表达
          </NavLink>
        </p>
      </li>
      <li>
        <div className="u-cover">
          <img alt="音乐" src="http://p1.music.126.net/HuZsFzvhKIlxLoV4MuLvrw==/109951162892180012.jpg?param=140y140"/>
          <NavLink title="那些惊艳嗨翻天的华语现场（LIVE）" to="/Music/1" className="msk"/>
          <div className="bottom">
            <NavLink className="icon-play" title="播放" to="/Music/1"/>
            <span className="icon-headset"/>
            <span className="nb">350万</span>
          </div>
        </div>
        <p className="dec">
          <NavLink title="那些惊艳嗨翻天的华语现场（LIVE）" className="tit s-fc0" to="/Music/1">
            那些惊艳嗨翻天的华语现场（LIVE）
          </NavLink>
        </p>
      </li>
      <li>
        <div className="u-cover">
          <img alt="音乐" src="http://p1.music.126.net/xQT5ZDdXydxSHmisgzJsVQ==/19241453486166701.jpg?param=140y140"/>
          <NavLink title="(翻）旅行的意义-2011录音" to="/Music/1" className="msk" />
          <div className="bottom">
            <NavLink className="icon-play" title="播放" to="/Music/1"/>
            <span className="icon-headset"/>
            <span className="nb">55万</span>
          </div>
        </div>
        <p className="dec">
          <NavLink title="(翻）旅行的意义-2011录音" className="tit s-fc0" to="/Music/1">
           NavLink<i className="u-icn u-icn-53"/>
            (翻）旅行的意义-2011录音
          </NavLink>
        </p>
      </li>
    </ul>
  );
}

export default MusicList