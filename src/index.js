/**
 * Created by rong.chen on 2018/9/4.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import echarts from 'echarts'
import elementResizeEvent from 'element-resize-event'

class TDChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      init: false
    }
  }

  getChartInit(){
    let dom = this.chart,
        option = this.props.option,
        theme = this.props.theme,
        event = this.props.event;
    let chart = echarts.getInstanceByDom(dom);
    if (!chart || this.state.init){
      chart = echarts.init(dom,theme);
      elementResizeEvent(dom, ()=>{
        chart.resize();
      })
    }
    if (Object.keys(event).length) {
      for(let e in event){
        chart.off(e);
        chart.on(e, event[e]);
      }
    }

    chart.setOption(option,false,false);
  };

  componentDidMount() {
    this.getChartInit();
  }

  componentDidUpdate() {
    this.getChartInit();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.setState({ init: true })
    }
  }

  componentWillUnmount() {
    echarts.dispose(this.chart)
  }

  render() {
    return (
      <div ref={chart => this.chart = chart} className={this.props.className} style={this.props.style}></div>
    );
  }
}

TDChart.propTypes = {
  option: PropTypes.object.isRequired,
  style: PropTypes.object,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  event: PropTypes.array,
  className: PropTypes.string
};

TDChart.defaultProps = {
  style: {
    width: '100%',
    height: '100%',
  },
  theme: 'default',
  event: {}
};

export default TDChart