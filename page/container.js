/**
 * Created by rong.chen on 2018/9/4.
 */
import React, { Component } from 'react';
import TDChart from '../src/index'
import '../page/dark'

const option = {
  color: ['#0a66b7'],
  title: {
    text: 'TD ECharts示例'
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }]
};

const option2 = {
  color: ['#0a66b7'],
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
};

class Container extends Component {
  constructor(props) {
    super(props)
    this.state={
      option: option,
      option2: option2,
      theme: 'default',
      event: {}
    };
    this.update = this.update.bind(this);
    this.themeChange = this.themeChange.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  update(){
    this.state.option.series[0].data = [parseInt(Math.random()*100), parseInt(Math.random()*100), parseInt(Math.random()*100), parseInt(Math.random()*100), parseInt(Math.random()*100), parseInt(Math.random()*100)];
    this.state.option2.series[0].data = [parseInt(Math.random()*1000), parseInt(Math.random()*1000), parseInt(Math.random()*1000), parseInt(Math.random()*1000), parseInt(Math.random()*1000), parseInt(Math.random()*1000), parseInt(Math.random()*1000)];
    console.log('update');
    this.setState({
      option: this.state.option
    });
  };

  addEvent(){
    this.state.event['click'] = function (params) {
      console.log(params);
    };
    this.setState({
      event: this.state.event
    });
  }

  themeChange(){
    this.state.theme = 'dark';
    console.log(this.state.theme);
    this.setState({
      theme: this.state.theme
    });
  };

  render() {
    const { option,option2,theme,event } = this.state
    return (
      <div>
        <button onClick={this.update} style={{cursor: 'pointer'}}>数据更新</button>
        <button onClick={this.addEvent} style={{cursor: 'pointer'}}>事件绑定</button>
        {/*<button onClick={this.themeChange}>主题变化</button>*/}
        <div style={{height:400}}>
          <TDChart option={option} theme={theme} event={event}/>
        </div>
        <div style={{height:400}}>
          <TDChart option={option2}/>
        </div>
      </div>
    );
  }
}

export default Container