import React, { Component } from 'react'
import { Pagination } from 'antd'
import styles from './index.module.less'
// console.log(styles)
// import './index.less'
export default class Layout extends Component {
  render() {
    return (
      <div className={styles.aa}>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    )
  }
}
