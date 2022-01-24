import styled from 'styled-components'
import { Table } from 'antd'
import { Property } from 'csstype'

export type ThemeTableProps = {
  headerTextColor?: Property.Color

  rowBackgroundColor?: Property.Color
  rowTextColor?: Property.Color

  rowCursor?: Property.Cursor
}

const DefaultStyle = {
  background: '#FAFAFF',
  text: '#8200FF',
  headText: '#b3b3b3',
  textSecondary: '#808080',
  horizonPadding: '16px',
  headFontSize: '16px',
  contentFontSize: '16px',
  spaceHeightBetweenRow: '0px',
  rowBorderRadius: '0px',
  headVerticalPadding: '24px'
}

const ThemeTable = styled(Table)<ThemeTableProps>`
  width: 100%;
  padding: 0 ${DefaultStyle.horizonPadding};

  .ant-table {
    background-color: transparent;

    table {
      border-collapse: separate;
      
      border-spacing: 0 ${DefaultStyle.spaceHeightBetweenRow}; 
    }
  }

  .ant-table-thead {
    th {
      background-color: transparent;
      border-bottom-width: 0;
    }

    .ant-table-cell {
      font-size: ${DefaultStyle.headFontSize};
      font-weight: 500;

      padding: ${DefaultStyle.headVerticalPadding} ${DefaultStyle.horizonPadding};
      line-height: 0;
      color: ${props => props.headerTextColor ?? DefaultStyle.headText}
    }

    .ant-table-column-sorters {
      padding-bottom: 0;
    }

    .ant-tooltip-open {
      background-color: transparent;
    }

    .ant-table-column-sort {
      background-color: ${props => props.rowBackgroundColor ?? DefaultStyle.background};
      filter: brightness(85%);
    }

    .ant-table-column-has-sorters:hover {
      background: ${props => props.rowBackgroundColor ?? DefaultStyle.background};
      filter: brightness(100%);
    }
  }

  .ant-table-tbody {
    .ant-table-row {
      background-color: ${props => props.rowBackgroundColor ?? DefaultStyle.background};
      cursor: ${props => props.rowCursor} !important;
      margin-bottom: 0 !important;
      transition: all 0.38s;

      .ant-table-cell {
        font-size: ${DefaultStyle.contentFontSize};
        font-weight: 600;
        color: ${props => (props.rowTextColor ?? DefaultStyle.text)};
        line-height: 20px;

        border-top: 1px #e6e6e6 solid;
      }

      td {
        border-width: 0;
      }

      &:hover {
        filter: brightness(92.5%);
        //transform: scale(1.006);

        td {
          background-color: ${props => props.rowBackgroundColor ?? DefaultStyle.background};
        }
      }

      .ant-table-cell:nth-of-type(1) {
        border-top-left-radius: ${DefaultStyle.rowBorderRadius};
        border-bottom-left-radius: ${DefaultStyle.rowBorderRadius};
      }

      .ant-table-cell:nth-last-of-type(1) {
        border-top-right-radius: ${DefaultStyle.rowBorderRadius};
        border-bottom-right-radius: ${DefaultStyle.rowBorderRadius};
      }

      .ant-table-column-sort {
        background: ${props => props.rowBackgroundColor ?? DefaultStyle.background};
      }
    }

    & > tr:nth-last-of-type(1) > td {
      border-bottom: none;
    }
  }

  .ant-table-empty {
    background-color: transparent;

    .ant-empty-description {
      color: ${props => (props.rowTextColor ?? 'rgb(244, 244, 244)') + '!important;'}
    }
  }

  .ant-table-placeholder:hover > td {
    background-color: transparent !important;
  }

  @media screen and (max-width: 1000px) {
    width: 100vw !important;
    overflow-x: scroll;
    position: relative;
  }
`

export default ThemeTable
