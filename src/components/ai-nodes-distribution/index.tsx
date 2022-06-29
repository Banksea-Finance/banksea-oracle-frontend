import React, { useEffect, useMemo, useState } from 'react'
import useFeedNodesQuery, { FeedNode } from '@/hooks/queries/useFeedNodesQuery'
import ReactECharts from 'echarts-for-react'
import useExecutingNodeQuery from '@/hooks/queries/useExecutingNodeQuery'
import { Flex, Grid, Text, useTheme } from '@banksea-finance/ui-kit'
import { ExecutingNodesContainer, MapContainer, MapMain } from './index.style'
import { ModuleTitle } from '@/components/module-title'
import * as echarts from 'echarts'

import world from '@/assets/world.json'

echarts.registerMap('world', world as any)

const ExecutingNodes: React.FC = () => {
  const { data: executingNode } = useExecutingNodeQuery()

  const nodeInfo = executingNode?.nodeInfoList?.[0]

  return (
    <ExecutingNodesContainer>
      <Text bold fontSize={'24px'} mb={'10px'}>
        Running node:
      </Text>
      <Flex ai={'center'}>
        <img src={nodeInfo?.nodeImageUrl} style={{ marginRight: '10px', width: '60px', borderRadius: '30px' }} />
        <Text ml={'10px'} bold fontSize={'20px'}>{nodeInfo?.nodeName}</Text>
      </Flex>

      {
        nodeInfo && (
          <div>
            <Text bold fontSize={'20px'} mb={'10px'} mt={'15px'}>
              Supported collections:
            </Text>
            <Grid gridTemplateColumns={'repeat(auto-fill, 32px)'} gridGap={'5px 10px'}>
              {
                nodeInfo?.nftCollectionImageUrl.map((src, index) => (
                  <img src={src} key={index} style={{ marginRight: '10px', width: '32px', borderRadius: '16px' }} />
                ))
              }
            </Grid>
          </div>
        )
      }
    </ExecutingNodesContainer>
  )
}

const NodesMap: React.FC = () => {
  const { data: allNodes } = useFeedNodesQuery()
  const { data: executingNode } = useExecutingNodeQuery()
  const { theme } = useTheme()

  const [scale, setScale] = useState(100)

  const option = useMemo(() => ({
    progressive: 20000,
    geo: {
      center: [0, 0],
      zoom: 1,
      scaleLimit: {
        min: 1,
        max: 1
      },
      map: 'world',
      roam: false,
      silent: true,
      itemStyle: {
        color: 'transparent',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 1
      }
    },
    dataset: [
      { source: executingNode ? [executingNode] : [], },
      { source: allNodes ?? [], }
    ],
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        datasetIndex: 1,
        encode: {
          x: (v: FeedNode) => v.mapX,
          y: (v: FeedNode) => v.mapY,
        },
        symbolSize: '15',
        itemStyle: {
          color: '#19F096'
        }
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
          brushType: 'stroke'
        },
        showEffectOn: 'render',
        datasetIndex: 0,
        encode: {
          x: (v: FeedNode) => v.mapX,
          y: (v: FeedNode) => v.mapY,
        },
        itemStyle: {
          color: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: .98,
            colorStops: [
              { offset: 0, color: '#FFB4FF' },
              { offset: 1, color: '#19F096' }
            ],
            global: false
          }
        },
        symbolSize: '30',
      },
    ],
  }), [executingNode, theme])

  useEffect(() => {
    const handler = () => {
      const width = document.body.clientWidth

      if (width > 1400) {
        setScale(100)
      }

      setScale(width / 1400 * 100)
    }

    window.addEventListener('resize', handler)
    handler()

    return () => {
      window.removeEventListener('resize', () => {
      })
    }
  }, [])

  return (
    <MapMain scale={scale}>
      <ReactECharts option={option} style={{ width: '100%', height: '100%' }} />
    </MapMain>
  )
}

export const AINodesDistribution: React.FC = () => {
  return (
    <MapContainer>
      <ModuleTitle mb={'50px'}>
        AI nodes distribution
      </ModuleTitle>
      <NodesMap />
      <ExecutingNodes />
    </MapContainer>
  )
}
