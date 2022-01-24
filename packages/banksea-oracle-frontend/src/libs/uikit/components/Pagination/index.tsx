import { Pagination } from 'antd'
import styled from 'styled-components'

const StyledPagination = styled(Pagination)`
  .ant-pagination-item a {
    color: #808080;
  }
  
  .ant-pagination-item-active {
    background-color: #19F096;
    
    a {
      color: white;
    }
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid #707070;
    border-radius: 5px;
    color: #8200FF;
  }

  .ant-pagination-disabled .ant-pagination-item-link {
    border-color: #19F096;
  }

  .ant-pagination-item {
    border: 1px solid #19F096;
  }
`

export { StyledPagination as Pagination }
