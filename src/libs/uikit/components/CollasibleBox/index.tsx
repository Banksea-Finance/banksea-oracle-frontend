import styled from 'styled-components'
import React, { CSSProperties, useState } from 'react'
import { Property } from 'csstype'
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import { Collapse, Tooltip } from 'antd'

interface ThemeCollapseProps  {
  contentBackground?: Property.Background
  overflow?: Property.Overflow
}

interface CollapsibleBoxProps extends ThemeCollapseProps {
  title: string
  collapsible?: boolean
  contentPadding?: Property.Padding
  titleIcon?: JSX.Element
  style?: CSSProperties,
  coding?: boolean
  description?: string
}

interface CollapsibleBoxHeaderProps {
  title: string
  icon?: JSX.Element
  collapsed?: boolean
  collapsible?: boolean
  description?: string
}


const ThemeCollapse = styled(Collapse)<ThemeCollapseProps>`
  width: 100%;
  position: relative;
  border: 1px solid #E6E6E6;
  border-radius: 10px !important;
  background-color: white;

  &, .ant-collapse-item {
    overflow: visible !important;
  }

  .ant-collapse-header {
    height: 60px;
    border: none;
    border-top-right-radius: 10px !important;
    border-top-left-radius: 10px !important;
    display: flex;
    
    .title {
      font-family: orbitron;
    }
  }

  .ant-collapse-content {
    border: none;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    background: rgba(250, 250, 255, 0.8);
    border: 1px solid #E6E6E6;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0;
  }

  .ant-collapse-item:last-child > .ant-collapse-content {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .collapse-custom-panel {
    overflow: hidden;
    border: none;
    border-radius: 10px !important;
  }

  .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: auto;
  }
`

const CollapseHeaderContainer = styled.div<{collapsed?: boolean, collapsible?: boolean}>`
  display: flex;
  align-items: center;
  color: #333333;
  user-select: none;
  background: rgba(250, 250, 255, 0.39);

  .icon {
    margin-right: 8px;
    margin-left: 8px;

    img {
      height: 22px;
    }
  }

  .title {
    font-size: 20px;
    font-weight: 500;
  }

  .arrow {
    transition: all .25s;
    transform: ${props => props.collapsed ? 'rotate(180deg)' : ''};
    position: absolute;
    right: 25px;
  }
`

const CollapsibleBoxHeader: React.FC<CollapsibleBoxHeaderProps> = ({
  title,
  icon,
  collapsed,
  collapsible,
  description
}) => {
  return (
    <CollapseHeaderContainer collapsed={collapsed}>
      <div className="icon">
        {icon}
      </div>
      <div className="title">
        {title}
      </div>
      {
        description && (
          <Tooltip title={description}>
            <QuestionCircleOutlined className="icon" />
          </Tooltip>
        )
      }
      <div className="arrow">
        { collapsible && <DownOutlined />}
      </div>
    </CollapseHeaderContainer>
  )
}

const CollapsibleBox: React.FC<CollapsibleBoxProps> = ({
  collapsible,
  contentPadding,
  titleIcon,
  title,
  children,
  style,
  contentBackground,
  overflow,
  description
}) => {
  const [collapsed, setCollapsed] = useState(false)

  const handleCollapse = (e: any) => {
    if (!collapsible) {
      return
    }
    setCollapsed(e.length === 0)
  }

  return (
    <ThemeCollapse
      style={style}
      onChange={handleCollapse}
      defaultActiveKey={1}
      contentBackground={contentBackground}
      overflow={overflow}
    >
      <Collapse.Panel
        showArrow={false}
        header={
          <CollapsibleBoxHeader
            title={title}
            icon={titleIcon}
            collapsed={collapsed}
            collapsible={collapsible}
            description={description}
          />
        }
        key="1"
        className="collapse-custom-panel"
        collapsible={!collapsible ? 'disabled' : 'header'}
      >
        <div className="content" style={{ padding: contentPadding }}>
          {children}
        </div>
      </Collapse.Panel>

    </ThemeCollapse>
  )
}

export default CollapsibleBox
