import React, { useMemo } from 'react'
import useTokenPriceHistoryQuery from '@/hooks/queries/useTokenPriceHistoryQuery'
import moment from 'moment'
import * as echarts from 'echarts'
import historyPrice from '@/images/icon/tokenDetail/historyPrice.svg'
import EChartsReact from 'echarts-for-react'
import { DefaultTimeFormat } from '@/utils/constant'

const PriceHistory: React.FC = () => {
  const { data } = useTokenPriceHistoryQuery()

  const options = useMemo(() => {
    if (!data) {
      return {}
    }

    return {
      darkMode: true,
      grid: { top: 50, right: 48, bottom: 24, left: 80 },
      tooltip: {
        trigger: 'axis',
        formatter: ([item]: any) => {
          const marker = item.marker
          const price = item.data.price
          const time = moment(item.data.time).format(DefaultTimeFormat)

          return `
            <div>
                <p>${marker}Time: ${time}</p>
                <p>${marker}Price: ${price}</p>
            </div>
          `
        },
        axisPointer: {
          animation: false
        }
      },
      dataset: [{ source: data }],
      color: ['#8200FF'],
      xAxis: {
        type: 'time',
        axisLabel: {
          color: '#808080'
        }
      },
      yAxis: [
        {
          type: 'value',
          show: true,
          nameTextStyle: {
            color: '#808080'
          },
          axisLabel: {
            formatter: 'Ξ{value}',
            color: '#808080'
          },
          splitLine: {
            show: false,
          }
        }
      ],
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
      }],
      series: [
        {
          name: 'Valuation',
          type: 'line',
          smooth: true,
          datasetIndex: 0,
          encode: {
            x: 'time',
            y: 'price'
          },
          showSymbol: false,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#8200FF'
              },
              {
                offset: 1,
                color: 'rgb(251,251,255)'
              },
            ])
          },
        },
      ],
    }
  }, [data])

  return (
    <div>
      <EChartsReact option={options} />
    </div>
  )
}

export default PriceHistory
