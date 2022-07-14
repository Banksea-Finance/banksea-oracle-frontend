export interface Oracle {
  'version': '0.1.0'
  'name': 'oracle_program'
  'instructions': [
    {
      'name': 'init'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'authority'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'systemProgram'
          'isMut': false
          'isSigner': false
        }
      ]
      'args': [
        {
          'name': 'kseMint'
          'type': 'publicKey'
        },
        {
          'name': 'kseFee'
          'type': 'u64'
        },
        {
          'name': 'solFee'
          'type': 'u64'
        },
        {
          'name': 'minStakingAmount'
          'type': 'u64'
        },
        {
          'name': 'minFeedInterval'
          'type': 'u64'
        },
        {
          'name': 'minFeedNodeCount'
          'type': 'u64'
        },
        {
          'name': 'minAggregateNodeCount'
          'type': 'u64'
        },
        {
          'name': 'maxSubscribeTime'
          'type': 'u64'
        },
        {
          'name': 'maxFeedTime'
          'type': 'u64'
        }
      ]
    },
    {
      'name': 'updateAuthority'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'authority'
          'isMut': false
          'isSigner': true
        }
      ]
      'args': []
    },
    {
      'name': 'update'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'authority'
          'isMut': false
          'isSigner': true
        }
      ]
      'args': [
        {
          'name': 'kseFee'
          'type': 'u64'
        },
        {
          'name': 'solFee'
          'type': 'u64'
        },
        {
          'name': 'minStakingAmount'
          'type': 'u64'
        },
        {
          'name': 'minFeedInterval'
          'type': 'u64'
        },
        {
          'name': 'minFeedNodeCount'
          'type': 'u64'
        },
        {
          'name': 'minAggregateNodeCount'
          'type': 'u64'
        },
        {
          'name': 'maxSubscribeTime'
          'type': 'u64'
        },
        {
          'name': 'maxFeedTime'
          'type': 'u64'
        }
      ]
    },
    {
      'name': 'registerNode'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'node'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeStakingAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeStakingSigner'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeSigner'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'authority'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'systemProgram'
          'isMut': false
          'isSigner': false
        }
      ]
      'args': [
        {
          'name': 'needStaking'
          'type': 'bool'
        }
      ]
    },
    {
      'name': 'unregisterNode'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'node'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'authority'
          'isMut': false
          'isSigner': true
        }
      ]
      'args': []
    },
    {
      'name': 'activateNode'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'node'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'depositAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeStakingAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeStakingSigner'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeSigner'
          'isMut': false
          'isSigner': true
        },
        {
          'name': 'tokenProgram'
          'isMut': false
          'isSigner': false
        }
      ]
      'args': [
        {
          'name': 'stakingAmount'
          'type': 'u64'
        }
      ]
    },
    {
      'name': 'deactivateNode'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'node'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'withdrawAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeStakingAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeStakingSigner'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'nodeSigner'
          'isMut': false
          'isSigner': true
        },
        {
          'name': 'tokenProgram'
          'isMut': false
          'isSigner': false
        }
      ]
      'args': []
    },
    {
      'name': 'addWhitelist'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'whitelist'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'authority'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'systemProgram'
          'isMut': false
          'isSigner': false
        }
      ]
      'args': [
        {
          'name': 'code'
          'type': 'string'
        },
        {
          'name': 'unit'
          'type': 'string'
        },
        {
          'name': 'decimals'
          'type': 'u64'
        }
      ]
    },
    {
      'name': 'addService'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'service'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'whitelist'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'node'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'nodeSigner'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'systemProgram'
          'isMut': false
          'isSigner': false
        }
      ]
      'args': []
    },
    {
      'name': 'removeService'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'service'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'node'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'whitelist'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeSigner'
          'isMut': true
          'isSigner': true
        }
      ]
      'args': []
    },
    {
      'name': 'subscribeCollectionTask'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'whitelist'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'collectionTask'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'collectionTaskConfig'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'collectionTaskSigner'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'subscriberAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'kseAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'subscriber'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'tokenProgram'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'systemProgram'
          'isMut': false
          'isSigner': false
        }
      ]
      'args': [
        {
          'name': 'feedInterval'
          'type': 'u64'
        },
        {
          'name': 'feedCount'
          'type': 'u64'
        },
        {
          'name': 'feedNodeCount'
          'type': 'u64'
        }
      ]
    },
    {
      'name': 'updateCollectionTask'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'collectionTask'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'collectionTaskConfig'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'collectionTaskSigner'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'subscriberAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'kseAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'subscriber'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'tokenProgram'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'systemProgram'
          'isMut': false
          'isSigner': false
        }
      ]
      'args': [
        {
          'name': 'feedInterval'
          'type': 'u64'
        },
        {
          'name': 'feedCount'
          'type': 'u64'
        },
        {
          'name': 'feedNodeCount'
          'type': 'u64'
        }
      ]
    },
    {
      'name': 'feedCollectionTask'
      'accounts': [
        {
          'name': 'oracle'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'collectionTask'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'collectionTaskConfig'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'node'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'service'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'collectionTaskSigner'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'kseAccount'
          'isMut': true
          'isSigner': false
        },
        {
          'name': 'nodeSigner'
          'isMut': true
          'isSigner': true
        },
        {
          'name': 'tokenProgram'
          'isMut': false
          'isSigner': false
        },
        {
          'name': 'systemProgram'
          'isMut': false
          'isSigner': false
        }
      ]
      'args': [
        {
          'name': 'floorPrice'
          'type': 'u64'
        },
        {
          'name': 'aiFloorPrice'
          'type': 'u64'
        },
        {
          'name': 'avgPrice'
          'type': 'u64'
        }
      ]
    }
  ]
  'accounts': [
    {
      'name': 'collectionTaskConfig'
      'type': {
        'kind': 'struct'
        'fields': [
          {
            'name': 'collectionTask'
            'type': 'publicKey'
          },
          {
            'name': 'whitelist'
            'type': 'publicKey'
          },
          {
            'name': 'feedData'
            'type': {
              'vec': {
                'defined': 'CollectionTaskData'
              }
            }
          },
          {
            'name': 'feedInterval'
            'type': 'u64'
          },
          {
            'name': 'feedNodeCount'
            'type': 'u64'
          },
          {
            'name': 'collectionTaskSigner'
            'type': 'publicKey'
          },
          {
            'name': 'kseAccount'
            'type': 'publicKey'
          },
          {
            'name': 'subscriber'
            'type': 'publicKey'
          },
          {
            'name': 'subscribeStartTime'
            'type': 'u64'
          },
          {
            'name': 'collectionTaskSignerBump'
            'type': 'u8'
          },
          {
            'name': 'bump'
            'type': 'u8'
          },
          {
            'name': 'reserve'
            'type': {
              'array': [
                'u8',
                128
              ]
            }
          }
        ]
      }
    },
    {
      'name': 'collectionTask'
      'type': {
        'kind': 'struct'
        'fields': [
          {
            'name': 'oracle'
            'type': 'publicKey'
          },
          {
            'name': 'code'
            'type': 'string'
          },
          {
            'name': 'unit'
            'type': 'string'
          },
          {
            'name': 'decimals'
            'type': 'u64'
          },
          {
            'name': 'aggregateTime'
            'type': 'u64'
          },
          {
            'name': 'aggregateNodeCount'
            'type': 'u64'
          },
          {
            'name': 'floorPrice'
            'type': 'u64'
          },
          {
            'name': 'aiFloorPrice'
            'type': 'u64'
          },
          {
            'name': 'avgPrice'
            'type': 'u64'
          },
          {
            'name': 'reserve'
            'type': {
              'array': [
                'u64',
                16
              ]
            }
          }
        ]
      }
    },
    {
      'name': 'node'
      'type': {
        'kind': 'struct'
        'fields': [
          {
            'name': 'oracle'
            'type': 'publicKey'
          },
          {
            'name': 'nodeSigner'
            'type': 'publicKey'
          },
          {
            'name': 'nodeStakingAccount'
            'type': 'publicKey'
          },
          {
            'name': 'nodeStakingSigner'
            'type': 'publicKey'
          },
          {
            'name': 'stakingAmount'
            'type': 'u64'
          },
          {
            'name': 'auth'
            'type': 'bool'
          },
          {
            'name': 'needStaking'
            'type': 'bool'
          },
          {
            'name': 'nodeStakingSignerBump'
            'type': 'u8'
          },
          {
            'name': 'bump'
            'type': 'u8'
          },
          {
            'name': 'reserve'
            'type': {
              'array': [
                'u8',
                128
              ]
            }
          }
        ]
      }
    },
    {
      'name': 'oracle'
      'type': {
        'kind': 'struct'
        'fields': [
          {
            'name': 'authority'
            'type': 'publicKey'
          },
          {
            'name': 'kseMint'
            'type': 'publicKey'
          },
          {
            'name': 'kseFee'
            'type': 'u64'
          },
          {
            'name': 'solFee'
            'type': 'u64'
          },
          {
            'name': 'minStakingAmount'
            'type': 'u64'
          },
          {
            'name': 'minFeedInterval'
            'type': 'u64'
          },
          {
            'name': 'minFeedNodeCount'
            'type': 'u64'
          },
          {
            'name': 'minAggregateNodeCount'
            'type': 'u64'
          },
          {
            'name': 'maxSubscribeTime'
            'type': 'u64'
          },
          {
            'name': 'maxFeedOffsetTime'
            'type': 'u64'
          },
          {
            'name': 'reserve'
            'type': {
              'array': [
                'u8',
                128
              ]
            }
          }
        ]
      }
    },
    {
      'name': 'service'
      'type': {
        'kind': 'struct'
        'fields': [
          {
            'name': 'whitelist'
            'type': 'publicKey'
          },
          {
            'name': 'node'
            'type': 'publicKey'
          },
          {
            'name': 'bump'
            'type': 'u8'
          }
        ]
      }
    },
    {
      'name': 'whitelist'
      'type': {
        'kind': 'struct'
        'fields': [
          {
            'name': 'oracle'
            'type': 'publicKey'
          },
          {
            'name': 'code'
            'type': 'string'
          },
          {
            'name': 'unit'
            'type': 'string'
          },
          {
            'name': 'decimals'
            'type': 'u64'
          },
          {
            'name': 'nodeCount'
            'type': 'u64'
          }
        ]
      }
    }
  ]
  'types': [
    {
      'name': 'CollectionTaskData'
      'type': {
        'kind': 'struct'
        'fields': [
          {
            'name': 'node'
            'type': 'publicKey'
          },
          {
            'name': 'time'
            'type': 'u64'
          },
          {
            'name': 'floorPrice'
            'type': 'u64'
          },
          {
            'name': 'aiFloorPrice'
            'type': 'u64'
          },
          {
            'name': 'avgPrice'
            'type': 'u64'
          },
          {
            'name': 'reserve'
            'type': {
              'array': [
                'u64',
                16
              ]
            }
          }
        ]
      }
    }
  ]
  'events': [
    {
      'name': 'WhitelistEvent'
      'fields': [
        {
          'name': 'oracle'
          'type': 'publicKey'
          'index': true
        },
        {
          'name': 'whitelist'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'code'
          'type': 'string'
          'index': false
        },
        {
          'name': 'unit'
          'type': 'string'
          'index': false
        },
        {
          'name': 'decimals'
          'type': 'u64'
          'index': false
        }
      ]
    },
    {
      'name': 'NodeEvent'
      'fields': [
        {
          'name': 'oracle'
          'type': 'publicKey'
          'index': true
        },
        {
          'name': 'node'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'nodeSigner'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'alive'
          'type': 'bool'
          'index': false
        },
        {
          'name': 'stakingAmount'
          'type': 'u64'
          'index': false
        }
      ]
    },
    {
      'name': 'ServiceEvent'
      'fields': [
        {
          'name': 'oracle'
          'type': 'publicKey'
          'index': true
        },
        {
          'name': 'node'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'nodeSigner'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'whitelist'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'code'
          'type': 'string'
          'index': false
        },
        {
          'name': 'unit'
          'type': 'string'
          'index': false
        },
        {
          'name': 'decimals'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'enable'
          'type': 'bool'
          'index': false
        }
      ]
    },
    {
      'name': 'CollectionSubscribeEvent'
      'fields': [
        {
          'name': 'oracle'
          'type': 'publicKey'
          'index': true
        },
        {
          'name': 'whitelist'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'collectionTask'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'code'
          'type': 'string'
          'index': false
        },
        {
          'name': 'subscribeStartTime'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'feedInterval'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'feedCount'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'feedNodeCount'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'subscriber'
          'type': 'publicKey'
          'index': false
        }
      ]
    },
    {
      'name': 'CollectionFeedEvent'
      'fields': [
        {
          'name': 'oracle'
          'type': 'publicKey'
          'index': true
        },
        {
          'name': 'collectionTask'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'node'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'nodeSigner'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'time'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'code'
          'type': 'string'
          'index': false
        },
        {
          'name': 'floorPrice'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'aiFloorPrice'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'avgPrice'
          'type': 'u64'
          'index': false
        }
      ]
    },
    {
      'name': 'CollectionAggregateEvent'
      'fields': [
        {
          'name': 'oracle'
          'type': 'publicKey'
          'index': true
        },
        {
          'name': 'collectionTask'
          'type': 'publicKey'
          'index': false
        },
        {
          'name': 'aggregateNodeCount'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'time'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'code'
          'type': 'string'
          'index': false
        },
        {
          'name': 'floorPrice'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'aiFloorPrice'
          'type': 'u64'
          'index': false
        },
        {
          'name': 'avgPrice'
          'type': 'u64'
          'index': false
        }
      ]
    }
  ]
  'errors': [
    {
      'code': 6000
      'name': 'InvalidFeedCount'
      'msg': 'invalid feed count'
    },
    {
      'code': 6001
      'name': 'InvalidSubscribeTime'
      'msg': 'invalid subscribe time'
    },
    {
      'code': 6002
      'name': 'EnoughFeedCount'
      'msg': 'feed count is enough'
    },
    {
      'code': 6003
      'name': 'FeedIsFinished'
      'msg': 'feed is finished'
    },
    {
      'code': 6004
      'name': 'NodeHasFed'
      'msg': 'the node has fed in this cycle'
    },
    {
      'code': 6005
      'name': 'LackOfNode'
      'msg': 'lack of feed node'
    },
    {
      'code': 6006
      'name': 'InvalidFeedNodeCount'
      'msg': 'invalid feed node count'
    },
    {
      'code': 6007
      'name': 'LackOfStaking'
      'msg': 'lack of staking'
    },
    {
      'code': 6008
      'name': 'LackOfSolana'
      'msg': 'lack of solana'
    }
  ]
}

export const IDL: Oracle = {
  version: '0.1.0',
  name: 'oracle_program',
  instructions: [
    {
      name: 'init',
      accounts: [
        {
          name: 'oracle',
          isMut: true,
          isSigner: true
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'kseMint',
          type: 'publicKey'
        },
        {
          name: 'kseFee',
          type: 'u64'
        },
        {
          name: 'solFee',
          type: 'u64'
        },
        {
          name: 'minStakingAmount',
          type: 'u64'
        },
        {
          name: 'minFeedInterval',
          type: 'u64'
        },
        {
          name: 'minFeedNodeCount',
          type: 'u64'
        },
        {
          name: 'minAggregateNodeCount',
          type: 'u64'
        },
        {
          name: 'maxSubscribeTime',
          type: 'u64'
        },
        {
          name: 'maxFeedTime',
          type: 'u64'
        }
      ]
    },
    {
      name: 'updateAuthority',
      accounts: [
        {
          name: 'oracle',
          isMut: true,
          isSigner: false
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true
        }
      ],
      args: []
    },
    {
      name: 'update',
      accounts: [
        {
          name: 'oracle',
          isMut: true,
          isSigner: false
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true
        }
      ],
      args: [
        {
          name: 'kseFee',
          type: 'u64'
        },
        {
          name: 'solFee',
          type: 'u64'
        },
        {
          name: 'minStakingAmount',
          type: 'u64'
        },
        {
          name: 'minFeedInterval',
          type: 'u64'
        },
        {
          name: 'minFeedNodeCount',
          type: 'u64'
        },
        {
          name: 'minAggregateNodeCount',
          type: 'u64'
        },
        {
          name: 'maxSubscribeTime',
          type: 'u64'
        },
        {
          name: 'maxFeedTime',
          type: 'u64'
        }
      ]
    },
    {
      name: 'registerNode',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'node',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeStakingAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeStakingSigner',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeSigner',
          isMut: false,
          isSigner: false
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'needStaking',
          type: 'bool'
        }
      ]
    },
    {
      name: 'unregisterNode',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'node',
          isMut: true,
          isSigner: false
        },
        {
          name: 'authority',
          isMut: false,
          isSigner: true
        }
      ],
      args: []
    },
    {
      name: 'activateNode',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'node',
          isMut: true,
          isSigner: false
        },
        {
          name: 'depositAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeStakingAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeStakingSigner',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeSigner',
          isMut: false,
          isSigner: true
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'stakingAmount',
          type: 'u64'
        }
      ]
    },
    {
      name: 'deactivateNode',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'node',
          isMut: true,
          isSigner: false
        },
        {
          name: 'withdrawAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeStakingAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeStakingSigner',
          isMut: false,
          isSigner: false
        },
        {
          name: 'nodeSigner',
          isMut: false,
          isSigner: true
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: []
    },
    {
      name: 'addWhitelist',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'whitelist',
          isMut: true,
          isSigner: true
        },
        {
          name: 'authority',
          isMut: true,
          isSigner: true
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'code',
          type: 'string'
        },
        {
          name: 'unit',
          type: 'string'
        },
        {
          name: 'decimals',
          type: 'u64'
        }
      ]
    },
    {
      name: 'addService',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'service',
          isMut: true,
          isSigner: false
        },
        {
          name: 'whitelist',
          isMut: true,
          isSigner: false
        },
        {
          name: 'node',
          isMut: false,
          isSigner: false
        },
        {
          name: 'nodeSigner',
          isMut: true,
          isSigner: true
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: []
    },
    {
      name: 'removeService',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'service',
          isMut: true,
          isSigner: false
        },
        {
          name: 'node',
          isMut: false,
          isSigner: false
        },
        {
          name: 'whitelist',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeSigner',
          isMut: true,
          isSigner: true
        }
      ],
      args: []
    },
    {
      name: 'subscribeCollectionTask',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'whitelist',
          isMut: false,
          isSigner: false
        },
        {
          name: 'collectionTask',
          isMut: true,
          isSigner: true
        },
        {
          name: 'collectionTaskConfig',
          isMut: true,
          isSigner: false
        },
        {
          name: 'collectionTaskSigner',
          isMut: true,
          isSigner: false
        },
        {
          name: 'subscriberAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'kseAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'subscriber',
          isMut: true,
          isSigner: true
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'feedInterval',
          type: 'u64'
        },
        {
          name: 'feedCount',
          type: 'u64'
        },
        {
          name: 'feedNodeCount',
          type: 'u64'
        }
      ]
    },
    {
      name: 'updateCollectionTask',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'collectionTask',
          isMut: false,
          isSigner: false
        },
        {
          name: 'collectionTaskConfig',
          isMut: true,
          isSigner: false
        },
        {
          name: 'collectionTaskSigner',
          isMut: true,
          isSigner: false
        },
        {
          name: 'subscriberAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'kseAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'subscriber',
          isMut: true,
          isSigner: true
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'feedInterval',
          type: 'u64'
        },
        {
          name: 'feedCount',
          type: 'u64'
        },
        {
          name: 'feedNodeCount',
          type: 'u64'
        }
      ]
    },
    {
      name: 'feedCollectionTask',
      accounts: [
        {
          name: 'oracle',
          isMut: false,
          isSigner: false
        },
        {
          name: 'collectionTask',
          isMut: true,
          isSigner: false
        },
        {
          name: 'collectionTaskConfig',
          isMut: true,
          isSigner: false
        },
        {
          name: 'node',
          isMut: false,
          isSigner: false
        },
        {
          name: 'service',
          isMut: true,
          isSigner: false
        },
        {
          name: 'collectionTaskSigner',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'kseAccount',
          isMut: true,
          isSigner: false
        },
        {
          name: 'nodeSigner',
          isMut: true,
          isSigner: true
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false
        }
      ],
      args: [
        {
          name: 'floorPrice',
          type: 'u64'
        },
        {
          name: 'aiFloorPrice',
          type: 'u64'
        },
        {
          name: 'avgPrice',
          type: 'u64'
        }
      ]
    }
  ],
  accounts: [
    {
      name: 'collectionTaskConfig',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'collectionTask',
            type: 'publicKey'
          },
          {
            name: 'whitelist',
            type: 'publicKey'
          },
          {
            name: 'feedData',
            type: {
              vec: {
                defined: 'CollectionTaskData'
              }
            }
          },
          {
            name: 'feedInterval',
            type: 'u64'
          },
          {
            name: 'feedNodeCount',
            type: 'u64'
          },
          {
            name: 'collectionTaskSigner',
            type: 'publicKey'
          },
          {
            name: 'kseAccount',
            type: 'publicKey'
          },
          {
            name: 'subscriber',
            type: 'publicKey'
          },
          {
            name: 'subscribeStartTime',
            type: 'u64'
          },
          {
            name: 'collectionTaskSignerBump',
            type: 'u8'
          },
          {
            name: 'bump',
            type: 'u8'
          },
          {
            name: 'reserve',
            type: {
              array: [
                'u8',
                128
              ]
            }
          }
        ]
      }
    },
    {
      name: 'collectionTask',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'oracle',
            type: 'publicKey'
          },
          {
            name: 'code',
            type: 'string'
          },
          {
            name: 'unit',
            type: 'string'
          },
          {
            name: 'decimals',
            type: 'u64'
          },
          {
            name: 'aggregateTime',
            type: 'u64'
          },
          {
            name: 'aggregateNodeCount',
            type: 'u64'
          },
          {
            name: 'floorPrice',
            type: 'u64'
          },
          {
            name: 'aiFloorPrice',
            type: 'u64'
          },
          {
            name: 'avgPrice',
            type: 'u64'
          },
          {
            name: 'reserve',
            type: {
              array: [
                'u64',
                16
              ]
            }
          }
        ]
      }
    },
    {
      name: 'node',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'oracle',
            type: 'publicKey'
          },
          {
            name: 'nodeSigner',
            type: 'publicKey'
          },
          {
            name: 'nodeStakingAccount',
            type: 'publicKey'
          },
          {
            name: 'nodeStakingSigner',
            type: 'publicKey'
          },
          {
            name: 'stakingAmount',
            type: 'u64'
          },
          {
            name: 'auth',
            type: 'bool'
          },
          {
            name: 'needStaking',
            type: 'bool'
          },
          {
            name: 'nodeStakingSignerBump',
            type: 'u8'
          },
          {
            name: 'bump',
            type: 'u8'
          },
          {
            name: 'reserve',
            type: {
              array: [
                'u8',
                128
              ]
            }
          }
        ]
      }
    },
    {
      name: 'oracle',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'authority',
            type: 'publicKey'
          },
          {
            name: 'kseMint',
            type: 'publicKey'
          },
          {
            name: 'kseFee',
            type: 'u64'
          },
          {
            name: 'solFee',
            type: 'u64'
          },
          {
            name: 'minStakingAmount',
            type: 'u64'
          },
          {
            name: 'minFeedInterval',
            type: 'u64'
          },
          {
            name: 'minFeedNodeCount',
            type: 'u64'
          },
          {
            name: 'minAggregateNodeCount',
            type: 'u64'
          },
          {
            name: 'maxSubscribeTime',
            type: 'u64'
          },
          {
            name: 'maxFeedOffsetTime',
            type: 'u64'
          },
          {
            name: 'reserve',
            type: {
              array: [
                'u8',
                128
              ]
            }
          }
        ]
      }
    },
    {
      name: 'service',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'whitelist',
            type: 'publicKey'
          },
          {
            name: 'node',
            type: 'publicKey'
          },
          {
            name: 'bump',
            type: 'u8'
          }
        ]
      }
    },
    {
      name: 'whitelist',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'oracle',
            type: 'publicKey'
          },
          {
            name: 'code',
            type: 'string'
          },
          {
            name: 'unit',
            type: 'string'
          },
          {
            name: 'decimals',
            type: 'u64'
          },
          {
            name: 'nodeCount',
            type: 'u64'
          }
        ]
      }
    }
  ],
  types: [
    {
      name: 'CollectionTaskData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'node',
            type: 'publicKey'
          },
          {
            name: 'time',
            type: 'u64'
          },
          {
            name: 'floorPrice',
            type: 'u64'
          },
          {
            name: 'aiFloorPrice',
            type: 'u64'
          },
          {
            name: 'avgPrice',
            type: 'u64'
          },
          {
            name: 'reserve',
            type: {
              array: [
                'u64',
                16
              ]
            }
          }
        ]
      }
    }
  ],
  events: [
    {
      name: 'WhitelistEvent',
      fields: [
        {
          name: 'oracle',
          type: 'publicKey',
          index: true
        },
        {
          name: 'whitelist',
          type: 'publicKey',
          index: false
        },
        {
          name: 'code',
          type: 'string',
          index: false
        },
        {
          name: 'unit',
          type: 'string',
          index: false
        },
        {
          name: 'decimals',
          type: 'u64',
          index: false
        }
      ]
    },
    {
      name: 'NodeEvent',
      fields: [
        {
          name: 'oracle',
          type: 'publicKey',
          index: true
        },
        {
          name: 'node',
          type: 'publicKey',
          index: false
        },
        {
          name: 'nodeSigner',
          type: 'publicKey',
          index: false
        },
        {
          name: 'alive',
          type: 'bool',
          index: false
        },
        {
          name: 'stakingAmount',
          type: 'u64',
          index: false
        }
      ]
    },
    {
      name: 'ServiceEvent',
      fields: [
        {
          name: 'oracle',
          type: 'publicKey',
          index: true
        },
        {
          name: 'node',
          type: 'publicKey',
          index: false
        },
        {
          name: 'nodeSigner',
          type: 'publicKey',
          index: false
        },
        {
          name: 'whitelist',
          type: 'publicKey',
          index: false
        },
        {
          name: 'code',
          type: 'string',
          index: false
        },
        {
          name: 'unit',
          type: 'string',
          index: false
        },
        {
          name: 'decimals',
          type: 'u64',
          index: false
        },
        {
          name: 'enable',
          type: 'bool',
          index: false
        }
      ]
    },
    {
      name: 'CollectionSubscribeEvent',
      fields: [
        {
          name: 'oracle',
          type: 'publicKey',
          index: true
        },
        {
          name: 'whitelist',
          type: 'publicKey',
          index: false
        },
        {
          name: 'collectionTask',
          type: 'publicKey',
          index: false
        },
        {
          name: 'code',
          type: 'string',
          index: false
        },
        {
          name: 'subscribeStartTime',
          type: 'u64',
          index: false
        },
        {
          name: 'feedInterval',
          type: 'u64',
          index: false
        },
        {
          name: 'feedCount',
          type: 'u64',
          index: false
        },
        {
          name: 'feedNodeCount',
          type: 'u64',
          index: false
        },
        {
          name: 'subscriber',
          type: 'publicKey',
          index: false
        }
      ]
    },
    {
      name: 'CollectionFeedEvent',
      fields: [
        {
          name: 'oracle',
          type: 'publicKey',
          index: true
        },
        {
          name: 'collectionTask',
          type: 'publicKey',
          index: false
        },
        {
          name: 'node',
          type: 'publicKey',
          index: false
        },
        {
          name: 'nodeSigner',
          type: 'publicKey',
          index: false
        },
        {
          name: 'time',
          type: 'u64',
          index: false
        },
        {
          name: 'code',
          type: 'string',
          index: false
        },
        {
          name: 'floorPrice',
          type: 'u64',
          index: false
        },
        {
          name: 'aiFloorPrice',
          type: 'u64',
          index: false
        },
        {
          name: 'avgPrice',
          type: 'u64',
          index: false
        }
      ]
    },
    {
      name: 'CollectionAggregateEvent',
      fields: [
        {
          name: 'oracle',
          type: 'publicKey',
          index: true
        },
        {
          name: 'collectionTask',
          type: 'publicKey',
          index: false
        },
        {
          name: 'aggregateNodeCount',
          type: 'u64',
          index: false
        },
        {
          name: 'time',
          type: 'u64',
          index: false
        },
        {
          name: 'code',
          type: 'string',
          index: false
        },
        {
          name: 'floorPrice',
          type: 'u64',
          index: false
        },
        {
          name: 'aiFloorPrice',
          type: 'u64',
          index: false
        },
        {
          name: 'avgPrice',
          type: 'u64',
          index: false
        }
      ]
    }
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidFeedCount',
      msg: 'invalid feed count'
    },
    {
      code: 6001,
      name: 'InvalidSubscribeTime',
      msg: 'invalid subscribe time'
    },
    {
      code: 6002,
      name: 'EnoughFeedCount',
      msg: 'feed count is enough'
    },
    {
      code: 6003,
      name: 'FeedIsFinished',
      msg: 'feed is finished'
    },
    {
      code: 6004,
      name: 'NodeHasFed',
      msg: 'the node has fed in this cycle'
    },
    {
      code: 6005,
      name: 'LackOfNode',
      msg: 'lack of feed node'
    },
    {
      code: 6006,
      name: 'InvalidFeedNodeCount',
      msg: 'invalid feed node count'
    },
    {
      code: 6007,
      name: 'LackOfStaking',
      msg: 'lack of staking'
    },
    {
      code: 6008,
      name: 'LackOfSolana',
      msg: 'lack of solana'
    }
  ]
}
