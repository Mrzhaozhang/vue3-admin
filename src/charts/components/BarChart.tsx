/*
 * @Author: shen
 * @Date: 2021-01-29 13:06:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 17:01:27
 * @Description: 柱形图
 */

import { defineComponent, PropType } from 'vue'
import ChartFactory, { ChartOption } from '../ChartFactory'
import { BarChart, BarSeriesOption } from 'echarts/charts'
import Chart from './Chart'
import ChartProps from '../props'

export type BarChartOption = ChartOption<BarSeriesOption>

ChartFactory.use(BarChart)

const option: BarChartOption = {
  series: [{ type: 'bar' }],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
    },
  },
  xAxis: { type: 'category' },
  yAxis: {},
}

const BarChartProps = {
  ...ChartProps,
  options: {
    type: Object as PropType<BarChartOption>,
  },
}

export default defineComponent({
  name: 'BarChart',
  props: BarChartProps,
  setup(props, { attrs }) {
    const $attrs = {
      ...attrs,
      option,
    }
    return () => <Chart {...props} {...$attrs} />
  },
})
