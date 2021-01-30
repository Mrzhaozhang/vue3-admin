/*
 * @Author: shen
 * @Date: 2021-01-29 13:06:06
 * @LastEditors: shen
 * @LastEditTime: 2021-01-30 16:03:17
 * @Description:
 */

import { defineComponent, PropType } from 'vue'
import ChartFactory, { ChartOption } from '../ChartFactory'
import { BarChart, BarSeriesOption, LineChart, LineSeriesOption } from 'echarts/charts'
import Chart from './Chart'
import ChartProps from '../props'

export type BarLineChartOption = ChartOption<BarSeriesOption | LineSeriesOption>

ChartFactory.use(BarChart, LineChart)

const option: BarLineChartOption = {
  series: [{ type: 'bar' }, { type: 'line' }],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
    },
  },
}

const BarLineChartProps = {
  ...ChartProps,
  options: {
    type: Object as PropType<BarLineChartOption>,
  },
}

export default defineComponent({
  name: 'BarLineChart',
  props: BarLineChartProps,
  setup(props, { attrs }) {
    const $attrs = {
      ...attrs,
      option,
    }
    return () => <Chart {...props} {...$attrs} />
  },
})